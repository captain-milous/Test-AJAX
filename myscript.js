$(document).ready(function() {
	$("#loading").hide();
	$.getJSON("https://v2.jokeapi.dev/joke/Any?type=single", function(data) {
		
	    $("#joke").text(data.joke);
	});


});
//--------------------------------------