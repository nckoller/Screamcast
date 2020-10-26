// Requiring our models
const db = require('../models');
const passport = require('../middleware/passport');
// const { Op } = require('sequelize');

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
  app.post('/api/login', passport.authenticate('local'), function (req, res) {
    res.json(req.user);
  });

  app.post('/api/signup', function (req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password,
    })
      .then(function () {
        res.redirect(307, '/api/login');
      })
      .catch(function (err) {
        res.status(401).json(err);
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
      spookyRating: 3, //TODO - after moviedetailspage.handlebars is updated, replace this with req.body.spookyRating
      MovieId: req.params.id,
      userId: null, //TODO - add a user ID if we feel like it
    }).then(function () {
      db.Movie.findOne({
        where: {
          id: req.params.id,
        },
      }).then(function (result) {
        numReviews = parseFloat(result.dataValues.numReviews);
        let newSpookyRating =
          (parseFloat(result.dataValues.spookyRating) *
            parseFloat(result.dataValues.numReviews) +
            3) /
          (parseFloat(result.dataValues.numReviews) + 1); //TODO - fix the spooky rating here - it should'nt be 3
        let newNumReviews = result.numReviews + 1;
        result
          .update(
            {
              spookyRating: newSpookyRating,
              numReviews: newNumReviews,
            },
            {
              where: {
                id: result.id,
              },
            }
          )
          .then(function (result) {
            console.log('movie updated with new review');
          })
          .catch(function (err) {
            console.log(err);
          });
      });
    });
  });
};

// When the user wants to view a list of Spooky Movies
//   app.get('/api/spooky', function (req, res) {
//     db.Movie.findAll({
//       where: {
//         spookyRating: {
//           [Op.between]: [3, 5],
//         },
//       },
//     }).then(function (results) {
//       console.log(results);
//       res.json(results);
//     });
//   });

// When the user requests to view Halloween Movies
//   app.get('/api/halloween', function (req, res) {
//     db.Movie.findAll({
//       where: {
//         halloween: 1,
//       },
//     }).then(function (results) {
//       res.json(results);
//     });
//   });
