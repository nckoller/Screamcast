DROP IS DATABASE EXISTS screamcast_db;
CREATE DATABASE screamcast_db;
USE screamcast_db;

CREATE TABLE Movies (
    id INT NOT NULL AUTO_INCREMENT,
    Title VARCHAR(50) NULL,
    Year INT NULL,
    MovieDB_API_id VARCHAR(30) NULL,
    PRIMARY KEY (id),
    PRIMARY KEY (title),
    FOREIGN KEY (MovieGenres_id)
);

CREATE TABLE Genres (
    id INT NOT NULL AUTO_INCREMENT,
    GenreName VARCHAR(30) NULL,
    PRIMARY KEY (GenreName)
);

CREATE TABLE MovieGenres (
    FOREIGN KEY (Title),
    FOREIGN KEY (GenreName)
);

SELECT * FROM Movies;