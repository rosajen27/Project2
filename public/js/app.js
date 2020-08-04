$(function(){
    $(".create-form").on("search", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newSong = {
            name: $("#select").val().trim(),
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
})
