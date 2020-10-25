// Requiring path to use relative routes to our HTML files
const path = require('path');
const db = require('../models');

module.exports = function (app) {
  // Load index page
  app.get('/', function (req, res) {
    res.render('index');
  });

  // Load login page
  app.get('/loginpage', function (req, res) {
    res.render('loginpage');
  });

  // Load movieDetailsPage
  app.get('/moviedetailspage/:id', function (req, res) {
    db.Movie.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function (results) {
      res.render('moviedetailspage', results);
    });
  });

  // Load spooky move list
  app.get('/spookymovies', function (req, res) {
    // res.json({spooky: true})
    res.render('movie-list', { spooky: true });
  });

  // Load halloween movie list
  //   app.get('/halloweenmovies', function (req, res) {
  //     // res.json({spooky: true})
  //     res.render('movie-list', { halloween: true });
  //   });
  // Load halloween movie list
  app.get('/halloweenmovies', function (req, res) {
    db.Movie.findAll({
      where: {
        halloween: 1,
      },
    }).then(function (results) {
      let responseData = {};
      responseData.movies = results;
      responseData.halloween = true;
      console.log(responseData.movies[1].dataValues);
      res.render('movie-list', responseData);
    });
  });
};
