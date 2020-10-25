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

  app.get("/halloween")
};
