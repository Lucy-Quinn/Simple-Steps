const isCharityAdmin = (req, res, next) => {
    const charityId = req.params.charityid;
    const isAdmin = req.session.currentUser._id === charityId;

    req.isAdmin = isAdmin;

    next();
};
module.exports = isCharityAdmin;
