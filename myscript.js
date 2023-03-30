$(document).ready(function() {
	var liked = [];
	var disliked = [];
	var current= "";

	Hide();
	NewAPI();

	$('#btn-addToLiked').click(function(e) {
		Hide();
		liked.push(current);
		NewAPI();
	});

	$('#btn-addToDisliked').click(function(e) {
		Hide();
		disliked.push(current);
		NewAPI();
	});

	$('#btn-newAPI').click(function(e) {
		Hide();
		NewAPI();
		console.log(current);
	});

	$('#btn-liked').click(function(e) {
		Hide();
		for(let i = 0; i < liked.length; i++){
			var output = "<li>" + liked[i] + "</li>";
			$("#liked-jokes").prepend(output);
		}
		$("#myLiked").show();
		console.log(liked);
	});

	$('#btn-disliked').click(function(e) {
		Hide();
		for(var i = 0; i < disliked.length; i++){
			var output = "<li>" + disliked[i] + "</li>";
			$("#disliked-jokes").prepend(output);
		}
		$("#myDisliked").show();
		console.log(disliked);
	});

	function NewAPI() {
		$("#loading").show();
		$("#joke").text("");
		$.getJSON("https://v2.jokeapi.dev/joke/Any?type=single", function(data) {
			current = data.joke;
			$("#loading").hide();
			$("#joke").text(current);
		});
	}

	function Hide() {
		$("#myLiked").hide();
		$("#myDisliked").hide();
	}
});



