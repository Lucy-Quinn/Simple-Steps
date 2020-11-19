const express = require("express");
const authRouter = express.Router();

const bcrypt = require('bcrypt');
const User = require('./../models/User.model');

// const isLoggedIn = require('./../utils/isLoggedIn')
const saltRounds = 10;

// GET       /auth/signup/charity
authRouter.get('/signup/charity', (req, res, next) => {
    res.render('CharitySignUp');
});


// GET       /auth/signup/charity






// authRouter.get('/signup/volunteer', (req, res, next) => {
//     res.render('VolunteerSignUp');
// })



// Your routes

module.exports = authRouter;
