
$(function(){
  console.log('Javascript has loaded and ready')
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

  $("#addButton").on("click", function(event) {
    console.log(event)

    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log(event)
    var addSong = {
      artistName: $("#artistName").val(),
        trackName: $("#trackName").val(),
        // collectionName:$("#collectionName").val(),
        artworkUrl:$("#artworkUrl").val(),
        // primaryGenreName:$("#primaryGenreName").val(),
    };

    $.ajax("/api/results", {
      type: "POST",
      data: addSong
    }).then(
      function() {
        console.log("add song", addSong);
        // Reload the page to get the updated list
        // location.reload();
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
    // if not on /results
   
    if(window.location.pathname.indexOf("results") < 1) {
      console.log("I'm not on the right page")
      window.location.replace(`${window.location}results`)
      if(window.location.pathname.indexOf("results")>1){
        handleRedirect()
      }
    }
    // grab text from the search-input box
    var artist = $("#search-input").val().trim();

     function handleRedirect()  {
    
      $.ajax({
        url: queryURL,
        dataType: 'JSONP'
    })
    .done(function(data) { 
  
      let results = data.results;
      console.log(results)
      results.map((result, index) => {
      //   $(".results-body").prepend("<br><br> <img src='" + result.artworkUrl100 + "'> <b>Artist: </b>" + result.artistName + " | <b>Song : </b> <a target='_blank' href='" + result.previewUrl + "'>" + result.trackName + "</a>" + " | <b>Album: </b>" + result.collectionName + " | <b>Genre: </b>" + result.primaryGenreName + "<button id='addButton' class='warning button'>Add</button>");
      // })
  
  
      $(".results-body").prepend(
      `<div>
        <div class="column">
          <img id="artworkUrl" src='${result.artworkUrl100}'>
        </div>
        <div class="column">
          <h2 id="artistName">${result.artistName}</h2>
          
            <div id="trackName">${result.trackName}</div>
                <div id="collectionName">${result.collectionName}</div>
                  <div id="primaryGenreName">${result.primaryGenreName}</div>
        </div>
        <div class="column">
        <button id="addButton-${index}" onClick="event.preventDefault()" class="warning button" >Add</button>
        </div>
      </div>
      `)
  
      })
    })
    .fail(function(data) { console.log(data); })
  
  

    } 
    

    // hit the queryURL with $ajax, response will return an array with artist matching searched artist name
    var queryURL = "https://itunes.apple.com/search?term=" + artist + "&entity"


   

    // ajax get request
    // $.ajax({
    //     url: queryURL,
    //     // type: 'post',
    //     // method: "GET",
    //     dataType: 'JSONP',
    // }).then(function (data) {

    //     

    //         $.each(results, function(index, results){
    //             $(".results-body").prepend("<br><br> <img src='" + results.artworkUrl100 + "'> <b>Artist: </b>" + results.artistName + " | <b>Song : </b> <a target='_blank' href='" + results.previewUrl + "'>" + results.trackName + "</a>" + " | <b>Album: </b>" + results.collectionName + " | <b>Genre: </b>" + results.primaryGenreName + "<br><br><hr><br><br>");
    //         });
        // });
    });
})