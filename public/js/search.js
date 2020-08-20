(function (window, document, undefined) {
	"use strict";
	var searchButton = document.getElementById("searchButton");
	var searchInput = document.getElementById("searchInput");
	// when user clicks on button, we want to call function start search
	searchButton.addEventListener("click", startSearch);
	function startSearch(event) {
		event.preventDefault();
		var inputValue = document.getElementById("searchInput").value;
		var urlBase = `${window.location.origin}`;
		if (inputValue === null || inputValue === "") {
			searchInput.classList.add("err");
			return;
		}
		var searchUrl = `${urlBase}/results?term=${inputValue}&media=music`;
		console.log(searchUrl);
		window.location.replace(searchUrl);
	}
})(window, document);
