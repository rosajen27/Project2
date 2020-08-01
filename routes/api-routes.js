// Dependencies
const db = require("../models");
const express = require('express');
const app = express();

// Routes
module.exports = function(app) {

  // GET route for getting user search request
  app.get("/api/search", function(req, res) {
    db.songster_db.findAll({}).then(function(songster_db) {
      res.json(songster_db);
    });
  });

  // POST route provides user option to select songs
  app.post("/api/results", function(req, res) {
    db.songster_db.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(songster_db) {
      res.json(songster_db);
    });
  });

  // DELETE route for deleting songs.
  app.delete("/api/myPlaylist/:id", function(req, res) {
    db.songster_db.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(songster_db) {
      res.json(songster_db);
    });

  });

};
