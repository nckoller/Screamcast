// Requiring our models
const db = require("../models");

// const passport = require("../config/passport");

module.exports = function(app) {

    // login exisiting user
    // app.post("/api/login", function (req, res) {
    //     db.user.findOne({
    //         where: {
    //             username: req.body.username
    //         }
    //     }).then(function (dbUser) {
    //         if(!dbUser) {
    //             return
    //         }
    //     })
    // })

    // When the user wants to view a list of Spooky Movies
    app.get("/api/spooky", function (req, res) {
        db.Movie.findAll({
            where: {
                [Op.between]: [3,5]
            }
        }).then(function (results) {
            res.json(results)
        })
    })

    // When the user requests to view Halloween Movies
    app.get("/api/halloween", function (req, res) {
        db.Movie.findAll({
            where: {
                halloween: 1
            }
        }).then(function (results) {
            res.json(results)
        })
    })

    app.get("/api/movie/:id", function (req, res) {
        db.Movie.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            res.json(data)
        })
    })

}