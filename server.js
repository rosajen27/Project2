const express = require('express');
const axios = require('axios');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
// const methodOverride = require('method-override');
const mysql = require('mysql');
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Create `ExpressHandlebars` instance with a default layout.
const hbs = exphbs.create({
    partialsDir: ['views/partials/'],
});

app.use(express.static('public'));

app.engine(
    'hbs',
    exphbs({
        defaultLayout: 'main',
        extname: '.hbs',
    }),
);
app.get('/', (req, res) => {
  res.render('home', {
                page: {
                    title: 'SONGSTER',
                },
            });
    // axios
    //     .get('http://localhost:8080/api/playlist', {})
    //     .then(function (response) {
    //         console.log(response.data);
    //         
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     });
});

app.set('view engine', 'hbs');

app.get('/results', function (req, res) {
    const itunesAPI = `https://itunes.apple.com/search`;
    axios
        .get(itunesAPI, {
            params: {
                term: req.query.term, //Automatically catches the value in the url ?term=
            },
        })
        .then(function (response) {
            res.render('results', {
                searchTerm: req.query.term,
                data: response.data.results,
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
});

app.use('/api', require('./api'));

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log('Server listening on: http://localhost:' + PORT);
});
