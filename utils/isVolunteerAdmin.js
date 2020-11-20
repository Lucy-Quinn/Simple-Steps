
const isVolunteerAdmin = (req, res, next) => {
    const volunteerId = req.params.volunteerid;
    const isAdmin = req.session.currentUser._id === volunteerId;

    req.isAdmin = isAdmin;

    next();
};

module.exports = isVolunteerAdmin;