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
            const props = { foundJobs, user };
            res.render('JobListings', props);
        });
});

// GET       /private/job-listing


privateRouter.get("/charity-profile/:charityid", isCharityAdmin, (req, res, next) => {

    const charityId = req.params.charityid;

    User.findById(charityId).populate("jobsCreated")            ///.populate('jobsCreated.charity')
        .then((charity) => {
            console.log("Charity: ", charity)
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


module.exports = privateRouter;

