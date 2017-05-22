$(document).ready(function() {

var questions = {
	"question1?": {
		answer: "",
		picture: ""
	},
	"question2?": {
		answer: "",
		picture: ""
	},
	"question3?": {
		answer: "",
		picture: ""
	},
	"question4?": {
		answer: "",
		picture: ""
	},
	"question5?": {
		answer: "",
		picture: ""
	},
	"question6?": {
		answer: "",
		picture: ""
	},
	"question7?": {
		answer: "",
		picture: ""
	},
	"question8?": {
		answer: "",
		picture: ""
	}
};

function startPage() {
	$("#start-btn").html("<button type='button'>Start</button");
};

startPage();

});

/* when window loads
	start button is shown. when user clicks...

	question screen is shown. timer starts.
	when time runs out or when user chooses a button,
	answer screen appears. 
		if correct, say correct and log. if not, say incorrect and log.
		if time out, say time's up and log.
	this is shown for a couple seconds, then
	repeat.

	after all questions finished, show final screen...
	display correct, incorrect, and unanswered log. 
	display button that will take you back to questions. */