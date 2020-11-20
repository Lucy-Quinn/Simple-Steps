const express = require("express");
const authRouter = express.Router();

const bcrypt = require('bcrypt');
const User = require('./../models/User.model');
const zxcvbn = require('zxcvbn');

const isLoggedIn = require('./../utils/isLoggedIn')
const saltRounds = 10;


/********************* Signup **********************/

// GET       /auth/signup/charity
authRouter.get('/signup/charity', (req, res, next) => {
    res.render('CharitySignUp');
});


// POST       /auth/signup/charity
authRouter.post('/signup/charity', (req, res, next) => {

    const { name, username, email, description, password } = req.body;
    if (username === '' || password === '') {
        const props = { errorMessage: 'Enter your username and password' };
        res.render('CharitySignup', props);
        return;
    }

    //Password strength test
    // if (zxcvbn(password).score < 3) {
    //     const suggestions = zxcvbn(password).feedback.suggestions;
    //     const props = { errorMessage: suggestions[0] };
    //     res.render('CharitySignup', props);
    //     return;
    // }

    User.findOne({ username })
        .then((user) => {
            if (user) {
                const props = { errorMessage: 'The username already exists' };
                res.render('CharitySignup', props);
                return;
            };

            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(password, salt);

            User.create({ name: name, username: username, email: email, description: description, password: hashedPassword, userType: 'charity' })
                .then((createdUser) => {
                    createdUser.password = "******";
                    // req.session.currentUser = createdUser;
                    res.redirect('/'); //change route to charity profile
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
});


// GET       /auth/signup/volunteer
authRouter.get('/signup/volunteer', (req, res, next) => {
    res.render('VolunteerSignUp');
})


// POST       /auth/signup/volunteer
authRouter.post('/signup/volunteer', (req, res, next) => {

    const { name, username, email, description, age, skills, password } = req.body;
    if (username === '' || password === '') {
        const props = { errorMessage: 'Enter your username and password' };
        res.render('CharitySignup', props);
        return;
    }

    //Password strength test
    // if (zxcvbn(password).score < 3) {
    //     const suggestions = zxcvbn(password).feedback.suggestions;
    //     const props = { errorMessage: suggestions[0] };
    //     res.render('CharitySignup', props);
    //     return;
    // }

    User.findOne({ username })
        .then((user) => {
            if (user) {
                const props = { errorMessage: 'The username already exists' };
                res.render('CharitySignup', props);
                return;
            };

            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(password, salt);

            User.create({ name: name, username: username, email: email, description: description, age: age, skills: skills, password: hashedPassword, userType: 'volunteer' })
                .then((createdUser) => {
                    createdUser.password = "******";
                    // req.session.currentUser = createdUser;
                    res.redirect('/'); //change route to job-listings
                })
                .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
});



/********************* Login **********************/

// GET       /auth/login
authRouter.get('/login', (req, res, next) => {
    res.render('Login');
});


// POST       /auth/login
authRouter.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    if (username === '' || password === '') {
        const props = { errorMessage: 'Please enter username and password' };
        res.render('Login', props);
        return;
    }
    User.findOne({ username })
        .then((user) => {
            if (!user) {
                const props = { errorMessage: "The username doesn't exist" };
                res.render('Login', props);
                return;
            }
            const passwordCorrect = bcrypt.compareSync(password, user.password);

            if (passwordCorrect) {
                req.session.currentUser = user;

                if (user.userType === 'charity') {
                    res.redirect(`/private/charity-profile/${user._id}`)

                } else {

                    res.redirect('/')
                }

            } else {
                res.render('Login', { errorMessage: 'Incorrect password' });
            }
        })
})

/********************* Logout **********************/


authRouter.get("/logout", isLoggedIn, (req, res, next) => {
    req.session.destroy((err) => {
        if (err) {
            res.render("Error")
        } else {
            res.redirect('/auth/login')
        }
    })

})








// Your routes

module.exports = authRouter;
