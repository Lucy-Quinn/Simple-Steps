const express = require("express");
const User = require("../models/User.model");
const isLoggedIn = require("../utils/isLoggedIn");
const privateRouter = express.Router();
const Job = require('./../models/Job.model');
const isCharityAdmin = require("../utils/isCharityAdmin");
const isVolunteerAdmin = require("../utils/isVolunteerAdmin");



// GET       /private/job-listing

privateRouter.get('/job-listings', isLoggedIn, (req, res, next) => {

    const user = req.session.currentUser;

    Job.find().populate('charity').populate('volunteers.volunteer')
        .then((foundJobs) => {
            //console.log("Job Object When On Job Listing Page",foundJobs[0] )
            const props = { foundJobs, user };
            res.render('JobListings', props);
        });
});

// GET       /private/charity-profile/:charityid


privateRouter.get("/charity-profile/:charityid", isCharityAdmin, (req, res, next) => {

    const charityId = req.params.charityid;

    User.findById(charityId).populate("jobsCreated")            ///.populate('jobsCreated.charity')
        .then((charity) => {
           // console.log("Charity Object When on Charity Profile Page", charity)
            if (req.isAdmin) {
                const props = { charity: charity, admin: true }
                res.render("CharityProfile", props)
            } else {
                const props = { charity: charity, admin: false }
                res.render("CharityProfile", props)
            }
        })
        .catch((error) => {
            console.log('Error retrieving charity', error);
        })
})


// GET       /private/charity-profile/edit/:charityid

privateRouter.get("/charity-profile/edit/:charityid", isCharityAdmin, (req, res, next) => {
    const charityId = req.params.charityid;
    User.findById(charityId)
    .then((foundCharity) => {
        const props = {foundCharity};
        res.render('CharityProfileEdit', props);


    })
    .catch((error) => {
        console.log('Error retrieving edit charity profile', error);

    })

})

// POST       /private/charity-profile/edit/:charityid


privateRouter.post("/charity-profile/edit", isCharityAdmin, (req, res, next) => {

    const { charityid } = req.query;
    console.log("charity document after the update", charityid);

    const {name, email, description} = req.body

    User.findByIdAndUpdate(charityid, {
        name, email, description},{new:true})
        .then(()=>{
            res.redirect(`/private/charity-profile/${charityid}`);

        }).catch((error)=>{
            console.log('Error retrieving updated charity', error);
        })

})

privateRouter.post("/charity-profile/edit/add-job",isCharityAdmin, (req, res, next) =>{
    const { charityid } = req.query;

    const {title, date, description, street, city, country, postcode, skillsRequired} = req.body;

    const address = {
        street, 
        city, 
        country, 
        postcode
    }

    Job.create({title, date, description, address, skillsRequired, charity:charityid})
    .then((createdJob) =>{
        const pr = User.findByIdAndUpdate(charityid, { $push: { jobsCreated:createdJob._id }});
        return pr;
        
    }).then((updatedCharity)=>{
        console.log("UpdatedCharity", updatedCharity)
        res.redirect(`/private/charity-profile/${charityid}`)
    })
    .catch((err)=> {

        console.log("Job was not created", err)
    })

} )
module.exports = privateRouter;

