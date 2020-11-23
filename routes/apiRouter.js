const express = require('express');
const apiRouter = express.Router();

const User = require('./../models/User.model');

// GET  /api/restaurants     -  Get restaurants listings.
apiRouter.get('/charities', (req, res, next) => {
    User.find({ userType: 'charity' })
        .then(charities => {
            res.json(charities)
        })
        .catch((err) => console.log(err));
});

module.exports = apiRouter;
