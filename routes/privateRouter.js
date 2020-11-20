const express = require("express");
const isLoggedIn = require("../utils/isLoggedIn");
const privateRouter = express.Router();
const Job = require('./../models/Job.model');

// const isLoggedIn = require('./../utils/isLoggedIn');

privateRouter.get('/job-listings', isLoggedIn, (req, res, next) => {

    Job.find().populate('charity')
        .then((foundJobs) => {
            const props = { foundJobs }
            res.render('JobListings', props);
        })
})

module.exports = privateRouter;

