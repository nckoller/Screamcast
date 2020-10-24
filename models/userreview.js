// const User = require('./user');
// const Movie = require('./movie');

module.exports = function (sequelize, DataTypes) {
  const UserReview = sequelize.define('UserReview', {
    // text review-num of characters/can be null
    textReview: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // spooky rating
    spookyRating: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });
  // belongs to userId
  UserReview.associate = function (models) {
    UserReview.belongsTo(models.User);
  };
  // belongs to movieId
  UserReview.associate = function (models) {
    UserReview.belongsTo(models.Movie);
  };
  return UserReview;
};
