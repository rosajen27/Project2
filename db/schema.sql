DROP DATABASE IF EXISTS `songster_db`;
CREATE DATABASE `songster_db`;

USE songster_db;

CREATE TABLE playlist
(
	id int NOT NULL AUTO_INCREMENT,
	artist_name varchar(255) NOT NULL,
	song_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

