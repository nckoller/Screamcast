DROP DATABASE IF EXISTS screamcast_db;
CREATE DATABASE screamcast_db;
USE screamcast_db;

CREATE TABLE Movie_Data (
    id INT NOT NULL AUTO_INCREMENT,
    Title VARCHAR(50) NOT NULL,
    Year INT NOT NULL,
    Genre1 VARCHAR(30) NOT NULL,
    Genre2 VARCHAR(30) NULL,
    Halloween BOOLEAN NOT NULL,
    MovieDB_API_id VARCHAR(30) NOT NULL,
    Poster_IMG VARCHAR(2083) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE User_Info (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE User_Reviews (
    id INT NOT NULL AUTO_INCREMENT,
    text_review VARCHAR(140) NULL,
    spooky_rating DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id),
    Movie_id INT,
    FOREIGN KEY (Movie_id) REFERENCES Movie_Data(id),
    User_id INT,
    FOREIGN KEY (User_id) REFERENCES User_Info(id)
)