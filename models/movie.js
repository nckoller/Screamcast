const { Sequelize } = require('.');

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
    plot: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    numReviews: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Movie_DB_API_ID: {
      type: DataTypes.STRING,
    },
    posterImg: {
      type: DataTypes.STRING,
    },
    spookyRating: {
      type: DataTypes.DECIMAL(10, 1),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Date.now,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Date.now,
    },
  });

  Movie.associate = function (models) {
    Movie.hasMany(models.UserReview);
  };
  return Movie;
};