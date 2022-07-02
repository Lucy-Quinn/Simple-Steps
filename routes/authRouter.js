const express = require("express");
const authRouter = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const zxcvbn = require('zxcvbn');
const parser = require('./../config/cloudinary');
const axios = require("axios")
const isLoggedIn = require('./../utils/isLoggedIn')
const User = require('./../models/User.model');

/********************* Signup **********************/

// GET       /auth/signup/charity
authRouter.get('/signup/charity', (req, res, next) => {
    res.render('CharitySignup');
});

//function to format street name for the axios call to the mapbox
function formatStreet(street) {
    const streetSplit = street.split(" ");
    const formatedStreet = streetSplit.reduce((result, word) => {
        return result += `%20${word}`
    }, '')
    return formatedStreet
}

// POST       /auth/signup/charity
authRouter.post('/signup/charity', parser.single('profilepic'), (req, res, next) => {
    const imageUrl = req.file.secure_url;
    const { name, username, email, description, password, building, street, city, postcode } = req.body;
    if (username === '' || password === '') {
        const props = { errorMessage: 'Enter your username and password' };
        res.render('CharitySignup', props);
        return;
    }
    const formattedStreetName = formatStreet(street)

    //Password strength test
    // if (zxcvbn(password).score < 3) {
    //     const suggestions = zxcvbn(password).feedback.suggestions;
    //     const props = { errorMessage: suggestions[0] };
    //     res.render('CharitySignup', props);
    //     return;
    // }

    User
        .findOne({ username })
        .then((user) => {
            if (user) {
                const props = { errorMessage: 'The username already exists' };
                res.render('CharitySignup', props);
                return;
            };
            const pr = axios
                .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${building}${formattedStreetName}%20${postcode}%20${city}.json?&access_token=pk.eyJ1IjoibHVjeWFxIiwiYSI6ImNraHRnY2MwNzA4a2wycHBobWc3NjA5d2gifQ.0e6yWmXZXeKEhKQ0fo76fg`)
            return pr;
        })
        .then((result) => {
            const foundCoordinates = result.data.features[0].geometry.coordinates;
            const location = {
                type: 'Point',
                coordinates: foundCoordinates.reverse(),
            }
            const address = {
                building: building,
                street: street,
                postcode: postcode,
                city: city
            }

            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(password, salt);

            const newUser = {
                name: name,
                username: username,
                email: email,
                description: description,
                password: hashedPassword,
                photo: imageUrl,
                userType: 'charity',
                location: location,
                address: address
            }
            User
                .create(newUser)
                .then((createdUser) => {
                    createdUser.password = "******";
                    req.session.currentUser = createdUser;
                    res.redirect(`/private/charity-profile/${createdUser._id}`); //change route to charity profile
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
authRouter.post('/signup/volunteer', parser.single('profilepic'), (req, res, next) => {
    const imageUrl = req.file.secure_url;
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
    User
        .find({ $or: [{ username }, { email }] })
        .then((user) => {
            if (user.length !== 0) {
                const props = { errorMessage: 'Try with another username or email' };
                res.render('VolunteerSignUp', props);
                return;
            };

            const salt = bcrypt.genSaltSync(saltRounds);
            const hashedPassword = bcrypt.hashSync(password, salt);

            const newUser = {
                name: name,
                username: username,
                email: email,
                description: description,
                age: age,
                skills: skills,
                password: hashedPassword,
                photo: imageUrl,
                userType: 'volunteer'
            }

            User.create(newUser)
                .then((createdUser) => {
                    createdUser.password = "******";
                    req.session.currentUser = createdUser;
                    res.redirect('/private/job-listings'); //change route to job-listings
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
    User
        .findOne({ username })
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
                    res.redirect('/private/job-listings')
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

module.exports = authRouter;
