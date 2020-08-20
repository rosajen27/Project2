const router = require("express").Router();
const axios = require("axios");
const connection = require("../config/connection");

/**
 * @name api/playlist
 * @function GET
 * Gets songs from playlist table
 */
router.get("/playlist", function (req, res) {
	// MYSQL QUERY
	connection.query("SELECT * FROM playlist", function (err, results, fields) {
		if (err) {
			throw err;
		}
		res.json(results);
		console.log(results);
	});
});
/**
 * @name api/playlist
 * @function POST
 * Adds song to MySql Table
 */
router.post("/playlist", function (req, res) {
	const songData = req.body.data;

	// MYSQL QUERY
	const addSongRow = `INSERT INTO playlist(artist_name, track_name, album_name, artwork_url, genre_name) VALUES('${
		songData.artist_name || null
	}', '${songData.track_name || null}', '${songData.album_name || null}','${songData.artwork_url || null}','${
		songData.genre_name || null
	}')`;

	connection.query(addSongRow, function (err, results, fields) {
		if (err) {
			console.log(err.message);
		}
		console.log("Successfully added: ", results);
		res.json(req.body);
	});
});

module.exports = router;