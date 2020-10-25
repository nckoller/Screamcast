// Requiring our models
const db = require("../models");

// const passport = require("../config/passport");

module.exports = function(app) {

    // login exisiting user
    app.post("/api/login", function (req, res) {
        db.user.findOne({
            where: {
                username: req.body.username
            }
        }).then(function (dbUser) {
            if(!dbUser) {
                return
            }
        })
    })

    // When the user wants to view a list of Spooky Movies
    app.get("/api/spooky", function (req, res) {
        db.Movie.//find all movies w/ "Spooky rating" >=5.then(function())
    })

}