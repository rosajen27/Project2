// Dependencies

var db = require("../models");

// Routes
module.exports = function(app) {

  // GET route for getting user search request
  app.get("/api/search", function(req, res) {
    db.Todo.findAll({}).then(function(songster_db) {
      res.json(songster_db);
    });
  });

  // POST route provides user option to select songs
  app.post("/api/results", function(req, res) {
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(songster_db) {
      res.json(songster_db);
    });
  });

  // DELETE route for deleting songs.
  app.delete("/api/playlist/:id", function(req, res) {
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(songster_db) {
      res.json(songster_db);
    });

  });

};