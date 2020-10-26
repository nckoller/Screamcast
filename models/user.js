// Requiring package for password hashing
const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    //    The username cannot be null, and must be a unique username to the db
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  //   User hasMany reviews
  User.associate = function (models) {
    User.hasMany(models.UserReview);
  };

  // Check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Before the user is created, automatically hash their password.
  User.addHook('beforeCreate', function (user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
