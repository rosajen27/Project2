// Dependencies
const db = require("../models");
const express = require('express');
const app = express();

// Routes
module.exports = function(app) {

  // GET route for getting user search request
  app.get("/api/songster", async function(req, res) {
      res.json(await db.songster.findAll());
    });


  // POST route provides user option to select songs
  app.post("/api/songster", async function(req, res) {
      res.json(await db.songster_db.create({
        text: req.body.text,
        complete: req.body.complete
      })
    );
  });    

  // DELETE route for deleting songs.
  app.delete("/api/songster/:id", async function(req, res) {
      res.json(await db.songster_db.destroy({
        where: {
          id: req.params.id
        }
      })
    );
  });

};
