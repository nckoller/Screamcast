// Requiring our models
const db = require('../models');

// const passport = require("../config/passport");

module.exports = function (app) {
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
  app.get('/api/spooky', function (req, res) {
    db.Movie.findAll({
      where: {
        spookyRating: {
          [Op.between]: [3, 5],
        },
      },
    }).then(function (results) {
      console.log(results);
      res.json(results);
    });
  });

  // When the user requests to view Halloween Movies
  app.get('/api/halloween', function (req, res) {
    db.Movie.findAll({
      where: {
        halloween: 1,
      },
    }).then(function (results) {
      res.json(results);
    });
  });

  //   Movie details
  app.get('/api/movie/:id', function (req, res) {
    db.Movie.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function (data) {
      res.json(data);
    });
  });

  //   Create a new user review
  app.post('/api/review/:id', function (req, res) {
    db.UserReview.create({
      textReview: req.body.reviewText,
      spookyRating: 5, //TODO - after moviedetailspage.handlebars is updated, replace this with req.body.spookyRating
      movieId: req.params.movieId,
      userId: 1, //TODO - figure this out
    }).then(function () {
      db.Movie.findOne({
        where: {
          id: req.body.id,
        },
      }).then(function (data, ) {
        res.json(data);
        console.log(results);
        res(200);
      });
    });
  });
};

// query for movie,
// multiply spookyRating by numReview = newVar
// Add +1 to numReview.
// Add incoming spookyRating to newVar,
// divide by numReview
