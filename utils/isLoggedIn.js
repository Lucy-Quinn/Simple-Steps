function isLoggedIn(req, res, next) {
    if (req.session.currentUser) {
        console.log("GOOD TO GO");
        next();
    } else {
        res.redirect("/auth/login")
    }
}
module.exports = isLoggedIn;