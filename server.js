// Requiring necessary npm packages
const express = require('express');

// const session = require('express-session');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require('./models');

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// If we need to use sessions to keep track of our user's login status
// app.use(
//   session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// Requiring our routes
require('./routes/htmlRoutes.js')(app);
require('./routes/apiRoutes.js')(app);

// db.User.create({
//     username: "testUser1",
//     password: "testPassword1"
// }).then(function() {
//     console.log("Check the DB");
// }).catch(function(err) {
//     console.log(err, "failure");
// });

// Set Handlebars
const expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(
      '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT
    );
  });
});
