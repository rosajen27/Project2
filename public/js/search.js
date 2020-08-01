// API: https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/

// artistName
// trackName 
// previewUrl (audio snippet of song)
// collectionName (title of album)
// artworkUrl100 (100x100 thumbnail of album cover)
// primaryGenreName

// This .on("click") function will trigger the AJAX Call
$(document).ready(function () {
    $("#search-btn").on("click", function (event) {
        event.preventDefault();

        // grab text from the search-input box
        var artist = $("#search-input").val().trim();

        // hit the queryURL with $ajax, response will return an array with artist matching searched artist name
        var queryURL = "https://itunes.apple.com/search?term=" + artist + "&entity"

        // ajax get request
        $.ajax({
            url: queryURL,
            type: 'post',
            method: "GET",
            dataType: 'json',
        }).then(function (data) {


            let results = data.results;
            console.log("DATA.RESULTS: " + results);

                $.each(results, function(index, results){
                    $("#well-section").append("<br><br> <img src='" + results.artworkUrl100 + "'> <b>Artist: </b>" + results.artistName + " | <b>Song : </b> <a target='_blank' href='" + results.previewUrl + "'>" + results.trackName + "</a>" + " | <b>Album: </b>" + results.collectionName + " | <b>Genre: </b>" + results.primaryGenreName + "<br><br><hr><br><br>");
                });
            });
        });
    });