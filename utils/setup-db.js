/**
 * This file runs with npm setup:db to create
 * the songster_db locally for the first time
 * and seed the initial schema.
 */

const mysql = require("mysql");

let connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "root",
});

connection.connect(function (err) {
	if (err) {
		throw err;
	}
	console.log("Connected to MySql Successfully");

	// Creates songster_db locally for the first time.
	connection.query("CREATE DATABASE IF NOT EXISTS songster_db", function (err, result) {
		if (err) {
			throw err;
		}
		console.log("songster_db Database Successfully Created");
	});

	// Tells MySql to use newly created DB songster_db in the upcoming query
	connection.query("USE songster_db;", function (err, result) {
		if (err) {
			throw err;
		}
		console.log("Using songster_db Database");
	});

	// Creates setups SQL query to create table playlist and schema
	let createPlaylistTable = `create table if not exists playlist(
        id int(11) unsigned NOT NULL AUTO_INCREMENT,
        artist_name varchar(255) DEFAULT NULL,
        track_name varchar(255) DEFAULT NULL,
        album_name varchar(255) DEFAULT NULL,
        artwork_url varchar(255) DEFAULT NULL,
        genre_name varchar(255) DEFAULT NULL,
        PRIMARY KEY (id)
    )`;
	connection.query(createPlaylistTable, function (err, results, fields) {
		if (err) {
			console.log(err.message);
		}
		console.log("songster_db Setup Successfully", results);
	});

	connection.end(function (err) {
		if (err) {
			return console.log(err.message);
		}
	});
});
