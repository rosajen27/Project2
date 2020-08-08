// Dependencies

const express = require("express");
const router = express.Router();

const orm = require('../config/orm');

router.get("/", function (req, res) {
    orm.selectAll(function (error, playlist) {
        if (error) {
            return res.status(501).json({
                message: "Database content not available"
            });
        }
        console.log('playlist', playlist);
        res.render('index', {playlist, style: 'index'});
    });
});

router.get("/results", function (req, res) {
    orm.selectAll(function (error, playlist) {
        if (error) {
            return res.status(501).json({
                message: "Database content not available"
            });
        }
        console.log('playlist', playlist);
        res.render('results', {playlist, style: 'results'});
    });
});

router.post("/results", function (req, res) {
    
    var newSong = {
        artist_name: req.body.artist_name,
        song_name: req.body.song_name
    };
    orm.insertOne(newSong, function (error, newSong){
        if (error) {
            return res.status(401).json({
                message: "Song request not available"
            });
        }
        console.log("newSong", playlist);
        res.render('results', {playlist, style: 'results'});
    }) 
});

router.get("/playlist", function (req, res) {
    orm.selectAll(function (error, playlist) {
        if (error) {
            return res.status(501).json({
                message: "Database content not available"
            });
        }
        console.log('playlist', playlist);
        res.render('playlist', {playlist, style: 'playlist'});
    });
});

router.delete('/results/:id', () => {
    const id = req.params.id;

    orm.deleteOne(id, function(err, playlist) {
        if (error) {
            return res. status(501).json({
                message: "Not able to delete a song"
            });
        }
        return res.json({
            id
        });
    });    
});

module.exports = router;
