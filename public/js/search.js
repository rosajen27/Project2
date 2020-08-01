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

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (data) {
            console.log(data);

            // display list of songs
        });
    });
});