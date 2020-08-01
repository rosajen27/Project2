// Dependencies
var express = require("express");
var http = require("http");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
require("./routes/api-routes.js")(app);
// HTML routing to serve different HTML files
require("./routes/html-routes.js")(app);


// Start our server so that it can begin listening to client requests.

db.sequelize.sync().then(function () {
  // Log (server-side) when our server has started
  app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
  });

});