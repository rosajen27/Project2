const connection = require("./connection");

const orm = {
	selectAll: function(cb) {
		connection.query("SELECT * FROM playlist", function (err, data){
			if (err) {
				cb (err, null);
			}
			cb(null, data);
		});
	},

	insertOne: function (newSong, cb) {
		const sqlQuery = `INSERT INTO playlist(artist_name, song_name) VALUES('${newSong}')`;
		connection.query(sqlQuery, function (err, data){
			if (err) {
				cb(err, null);
			}
			cb(null, data);
		});
	},

	deleteOne: function (id, cb) {
		const sqlQuery = `DELETE FROM playlist WHERE id = ${id}`;
		connection.query(sqlQuery, function (err, data){
			if (err) {
				cb(err, null);
			}
			cb(null, data);
		});
	}

};


module.exports = orm;
