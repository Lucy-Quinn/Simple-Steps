const isCharityAdmin = (req, res, next) => {
    const charityId = req.params.charityid;
    const isAdmin = req.session.currentUser._id === charityId;

    req.isAdmin = isAdmin;
    //req.isAdmin => created a property called isAdmin with the value of isAdmin (key-value) 

    next();
};
module.exports = isCharityAdmin;
