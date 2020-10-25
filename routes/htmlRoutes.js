// Requiring path to use relative routes to our HTML files
const path = require('path');

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
  app.get('/moviedetailspage', function (req, res) {
    res.render('moviedetailspage');
  });

  // Load spooky move list
  app.get('/spookymovies', function (req, res) {
    // res.json({spooky: true})
    res.render('movie-list', { spooky: true });
  });

  // Load halloween movie list
  app.get('/halloweenmovies', function (req, res) {
    // res.json({spooky: true})
    res.render('movie-list', { halloween: true });
  });
};
