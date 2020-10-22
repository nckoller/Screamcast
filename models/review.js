
module.exports = function (sequelize, DataTypes) {
    const userReview = sequelize.define('userReview', {
        // text review-num of characters/can be null
        // spooky rating
        // hasOne userId
        // hasOne movieId

    });
    return userReview;
}