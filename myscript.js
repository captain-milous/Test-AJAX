$(document).ready(function() {
	$("#loading").hide();
	$.getJSON("https://v2.jokeapi.dev/joke/Any?type=single", function(data) {

	    $("#joke").text(data.joke);
	});


	$('#btn-addToLiked').on('click', function(e) {
		// kód
	});

	$('#btn-addToDisliked').on('click', function(e) {
		// kód
	});

	$('#btn-newAPI').on('click', function(e) {
		// kód
	});

	$('#"btn-liked').on('click', function(e) {
		// kód
	});

	$('#"btn-disliked').on('click', function(e) {
		// kód
	});

});

