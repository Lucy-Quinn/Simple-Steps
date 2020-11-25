const express = require("express");
const User = require("../models/User.model");
const isLoggedIn = require("../utils/isLoggedIn");
const privateRouter = express.Router();
const Job = require('./../models/Job.model');
const isCharityAdmin = require("../utils/isCharityAdmin");
const isVolunteerAdmin = require("../utils/isVolunteerAdmin");
const { findByIdAndDelete } = require("../models/User.model");



// GET       /private/job-listing

privateRouter.get('/job-listings', isLoggedIn, (req, res, next) => {

    const userLoggedIn = req.session.currentUser;

    Job.find().populate('charity').populate('volunteers.volunteer')
        .then((foundJobs) => {
            //console.log("Job Object When On Job Listing Page",foundJobs[0] )
            const props = { foundJobs: foundJobs, userLoggedIn: userLoggedIn };
            res.render('JobListings', props);
        });
});

// GET       /private/charity-profile/:charityid


// privateRouter.get("/charity-profile/:charityid", isCharityAdmin, (req, res, next) => {

//     const charityId = req.params.charityid;
//     const userLoggedIn = req.session.currentUser;

//     User.findById(charityId).populate("jobsCreated")            ///.populate('jobsCreated.charity')
//         .then((charity) => {
//             // console.log("Charity Object When on Charity Profile Page", charity)
//             if (req.isAdmin) {
//                 const props = { charity: charity, admin: true, userLoggedIn: userLoggedIn }
//                 res.render("CharityProfile", props)
//             } else {
//                 const props = { charity: charity, admin: false, userLoggedIn: userLoggedIn }
//                 res.render("CharityProfile", props)
//             }
//         })
//         .catch((error) => {
//             console.log('Error retrieving charity', error);
//         })
// })




privateRouter.get("/charity-profile/:charityid", isCharityAdmin, (req, res, next) => {
    const charityId = req.params.charityid;
    const userLoggedIn = req.session.currentUser;

    User.findById(charityId)
        .populate({
            path: 'jobsCreated',
            model: 'Job',
            populate: {
                path: 'volunteers.volunteer',
                model: 'User'
            }
        })
        .then((charity) => {
            if (req.isAdmin) {
                const props = { charity: charity, admin: true, userLoggedIn: userLoggedIn }
                res.render("CharityProfile", props)
            } else {
                const props = { charity: charity, admin: false, userLoggedIn: userLoggedIn }
                res.render("CharityProfile", props)
            }
        })
        .catch((error) => {
            console.log('Error retrieving edit charity profile', error);

        })

})




// GET       /private/charity-profile/edit/:charityid

privateRouter.get("/charity-profile/edit/:charityid", isCharityAdmin, (req, res, next) => {
    const charityId = req.params.charityid;
    User.findById(charityId)
        .then((foundCharity) => {
            const props = { foundCharity };
            res.render('CharityProfileEdit', props);


        })
        .catch((error) => {
            console.log('Error retrieving edit charity profile', error);

        })

})

// POST       /private/charity-profile/edit/:charityid


privateRouter.post("/charity-profile/edit", isCharityAdmin, (req, res, next) => {

    const { charityid } = req.query;
    const { name, email, description } = req.body

    User.findByIdAndUpdate(charityid, {
        name, email, description
    }, { new: true })
        .then(() => {
            res.redirect(`/private/charity-profile/${charityid}`);

        }).catch((error) => {
            console.log('Error retrieving updated charity', error);
        })

})

// POST       /private/charity-profile/edit/add-job

privateRouter.post("/charity-profile/edit/add-job", isCharityAdmin, (req, res, next) => {
    const { charityid } = req.query;

    const { title, date, description, street, city, country, postcode, skillsRequired } = req.body;

    const address = {
        street,
        city,
        country,
        postcode
    }

    Job.create({ title, date, description, address, skillsRequired, charity: charityid })
        .then((createdJob) => {
            const pr = User.findByIdAndUpdate(charityid, { $push: { jobsCreated: createdJob._id } });
            return pr;

        }).then(() => {
            res.redirect(`/private/charity-profile/${charityid}`)
        })
        .catch((err) => {

            console.log("Job was not created", err)
        })

})



// GET       /private/volunteer-profile/:volunteerid
privateRouter.get("/volunteer-profile/:volunteerid", isVolunteerAdmin, (req, res, next) => {

    const volunteerId = req.params.volunteerid;
    const userLoggedIn = req.session.currentUser;

    //populateQuery => use nested populate with an array of paths
    const populateQuery = {
        path: 'jobsApplied',
        model: 'Job',
        populate: [{
            path: 'volunteers.volunteer',
            model: 'User'
        }, {
            path: 'charity',
            model: 'User'
        }]
    }
    User.findById(volunteerId)
        .populate(populateQuery)
        .then((volunteer) => {
            if (req.isAdmin) {
                const props = { volunteer: volunteer, admin: true, userLoggedIn: userLoggedIn }
                res.render("VolunteerProfile", props)
            } else {
                const props = { volunteer: volunteer, admin: false, userLoggedIn: userLoggedIn }
                res.render("VolunteerProfile", props)
            }
        })
        .catch((error) => {
            console.log('Error retrieving charity', error);
        });

});

// GET       /private/volunteer-profile/edit/:volunteerid

privateRouter.get("/volunteer-profile/edit/:volunteerid", isVolunteerAdmin, (req, res, next) => {
    const volunteerid = req.params.volunteerid;
    User.findById(volunteerid)
        .then((foundVolunteer) => {
            const props = { foundVolunteer };
            res.render('VolunteerProfileEdit', props);


        })
        .catch((error) => {
            console.log('Error retrieving edit charity profile', error);

        })

})

// POST       /private/volunteer-profile/edit
privateRouter.post("/volunteer-profile/edit", isVolunteerAdmin, (req, res, next) => {

    const { volunteerid } = req.query;
    const { name, email, age, skills, description } = req.body;

    User.findByIdAndUpdate(volunteerid, { name, email, age, skills, description })
        .then(() => {

            res.redirect(`/private/volunteer-profile/${volunteerid}`);

        })
        .catch((error) => {
            console.log("Could not delete job", error);


        });

});


// GET       /private/charity-profile/delete/:jobid
privateRouter.get("/charity-profile/delete/:jobid", isCharityAdmin, (req, res, next) => {
    const jobId = req.params.jobid;
    const userLoggedIn = req.session.currentUser;
    let volunteers;
    Job.findByIdAndDelete({ "_id": jobId })
        .then((deletedJob) => {
            console.log('deletedJob', deletedJob)
            volunteers = deletedJob.volunteers;
            const charityId = deletedJob.charity._id;
            const pr = User.findByIdAndUpdate(charityId, { $pull: { jobsCreated: jobId } });
            return pr
        })
        .then(() => {
            const prArray = volunteers.map((volunteerObj) => {
                const volunteerId = volunteerObj.volunteer;
                const pr = User.findByIdAndUpdate(volunteerId, { $pull: { jobsApplied: jobId } }, { new: true });
                return pr
            })
            // console.log('removedJobId', removedJobId)
            const bigPr = Promise.all(prArray);
            return bigPr

        })
        .then((updatedVolunteers) => {
            console.log('updatedVolunteers', updatedVolunteers)
            res.redirect(`/private/charity-profile/${userLoggedIn._id}`)

        })
        .catch((error) => {
            console.log("Could not delete job", error);

        })

})


// GET       /private/join-job/:jobid

privateRouter.get("/join-job/:jobid", isLoggedIn, (req, res, next) => {

    const jobId = req.params.jobid;
    const userLoggedIn = req.session.currentUser;

    const volunteerAddToJob = {
        volunteer: userLoggedIn._id,
        accepted: false,
    };

    //find all volunteers that have applied for the job
    User.find({ jobsApplied: jobId })
        .then((foundVolunteers) => {

            const userAlreadyJoinedJob = false;
            //check if any of the volunteers have the same id as the current user's id
            foundVolunteers.forEach((volunteer) => {
                if (String(volunteer._id) === String(userLoggedIn._id)) {
                    res.redirect('/private/job-listings');
                    userAlreadyJoinedJob = true;
                };
            })
            //if volunteer does have same id do not continue
            if (userAlreadyJoinedJob === true) {
                return;
            }

            Job.findByIdAndUpdate(jobId, { $push: { volunteers: volunteerAddToJob } })
                .then(() => {
                    const pr = User.findByIdAndUpdate(userLoggedIn._id, { $push: { jobsApplied: jobId } });
                    return pr;
                })
                .then(() => {
                    res.redirect(`/private/volunteer-profile/${userLoggedIn._id}`);
                })
                .catch((error) => {
                    console.log("Error for volunteer joining job", error)
                })
        })
        .catch((error) => {
            console.log("Error for finding volunteer", error)
        })

})


// GET       /private/charity-locations
privateRouter.get("/charity-locations", isLoggedIn, (req, res, next) => {

    const userLoggedIn = req.session.currentUser;
    const props = { userLoggedIn: userLoggedIn }
    res.render('CharityLocations', props);

});




module.exports = privateRouter;

