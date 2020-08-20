DROP DATABASE IF EXISTS songster_db;
CREATE DATABASE songster_db;
USE songster_db;

CREATE TABLE playlist
(
    id int(11) unsigned NOT NULL AUTO_INCREMENT,
    artist_name varchar(255) DEFAULT NULL,
    track_name varchar(255) DEFAULT NULL,
    album_name varchar(255) DEFAULT NULL,
    artwork_url varchar(255) DEFAULT NULL,
    genre_name varchar(255) DEFAULT NULL,
    PRIMARY KEY (id)
);
