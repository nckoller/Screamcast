// const User = require('./user');
// const UserReview = require('./userreview');

module.exports = function (sequelize, DataTypes) {
  const Movie = sequelize.define('Movie', {
    // Movie Title cannot be null
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genre1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    halloween: {
      type: DataTypes.BOOLEAN,
    },
    Movie_DB_API_ID: {
      type: DataTypes.STRING,
    },
    posterImg: {
      type: DataTypes.STRING,
    },
  });

  Movie.associate = function (models) {
    Movie.hasMany(models.UserReview);
  };
  return Movie;
};
