
$(function(){
  $(".create-form").on("search", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      var newSong = {
          artist_name: $("#select").val().trim(),
          song_name: $("#select").val().trim(),
      };

  // Send the POST request.
  $.ajax("/api/results", {
      type: "POST",
      data: newSong
    }).then(
      function() {
        console.log("created new song", newSong);
        // Reload the page to get the updated list
        location.reload();
      })
  });

  $(".create-form").on("add", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var addSong = {
        artist_name: $("#artist_name").val().trim(),
        song_name: $("#song_name").val().trim(),
    };

    $.ajax("/api/results", {
      type: "POST",
      data: addSong
    }).then(
      function() {
        console.log("add song", addSong);
        // Reload the page to get the updated list
        location.reload();
      })
  });

  $(".create-form").on("delete", function() {

    var deleteSong = {
        artist_name: $("#delete_artist").val().trim(),
        song_name: $("#delete_song").val().trim(),
    };

    $.ajax("/api/playlist/" +id, {
      type: "DELETE",
      data: deleteSong
    }).then(
      function() {
        console.log("delete song", deleteSong, id);
        // Reload the page to get the updated list
        location.reload();
      })
  });

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

            $.each(results, function(index, results){
                $(".results-body").prepend("<br><br> <img src='" + results.artworkUrl100 + "'> <b>Artist: </b>" + results.artistName + " | <b>Song : </b> <a target='_blank' href='" + results.previewUrl + "'>" + results.trackName + "</a>" + " | <b>Album: </b>" + results.collectionName + " | <b>Genre: </b>" + results.primaryGenreName + "<br><br><hr><br><br>");
            });
        });
    });
})
