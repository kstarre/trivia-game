$(document).ready(function() {

var triviaGame = {
	questionsToAsk: {
		"What is one of Cleveland's nicknames?": {
			options: ["Forest City", "Crazy Town", "Land of Milk and Honey", "What?"],
			correctAnswer: "Forest City",
			picture: "https://giphy.com/gifs/MDJcGiy1WOqOc/html5"
		}
	},
	correctAnswers: 0,
	incorrectAnswers: 0,
	unAnswered:0,
	time: 0,
	startPage: function() {
		$(".start-btn").html("<button type='button'>Start</button");
	},
	startQuiz: function() {
		var objKeys = Object.keys(triviaGame.questionsToAsk);
		var timeInterval;
		time = 30;

		$(".time-countdown").html("Time Remaining: " + time);
		$(".quiz-question").html(objKeys[0]);
		$(".option-a-btn").html("<button>" + triviaGame.questionsToAsk[objKeys[0]].options[0] + "</button>");
		$(".option-b-btn").html("<button>" + triviaGame.questionsToAsk[objKeys[0]].options[1] + "</button>");
		$(".option-c-btn").html("<button>" + triviaGame.questionsToAsk[objKeys[0]].options[2] + "</button>");
		$(".option-d-btn").html("<button>" + triviaGame.questionsToAsk[objKeys[0]].options[3] + "</button>");
		timeInterval = setTimeout(triviaGame.countDown, 1000);
	},
	countDown: function() {
		time--;
		$(".time-countdown").html("Time Remaining: " + time);
	}
};

triviaGame.startPage();
$(".start-btn").click(triviaGame.startQuiz);

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