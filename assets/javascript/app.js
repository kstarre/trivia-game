$(document).ready(function() {

var correctTotal = 0;
var incorrectTotal = 0;
var unAnswered = 0;
var time;
var timeInterval;
var currentQuestion = 0;

var triviaGame = {
	questionsToAsk: {
		"What is one of Cleveland's nicknames?": {
			options: ["Forest City", "Crazy Town", "Land of Milk and Honey", "Cleveland? Where's that?"],
			correctAnswer: "Forest City",
			picture: '<iframe src="https://giphy.com/embed/IzU4wcD554uGc" width="480" height="288" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/studio-ghibli-spirited-away-IzU4wcD554uGc">via GIPHY</a></p>'
		}
	},
	startPage: function() {
		$("#questions-page").hide();
		$("#totals-page").hide();
	},
	startQuiz: function() {
		var objKeys = Object.keys(triviaGame.questionsToAsk);
		time = 10;
		timeInterval = setInterval(triviaGame.countDown, 1000);

		$("#start-page").hide();
		$("#questions-page").show();
		$("#timer").html(time);
		$(".quiz-question").html(objKeys[currentQuestion]);
		$("#option-a-btn").html("<button>" + triviaGame.questionsToAsk[objKeys[currentQuestion]].options[0]);
		$("#option-b-btn").html("<button>" + triviaGame.questionsToAsk[objKeys[currentQuestion]].options[1]);
		$("#option-c-btn").html("<button>" + triviaGame.questionsToAsk[objKeys[currentQuestion]].options[2]);
		$("#option-d-btn").html("<button>" + triviaGame.questionsToAsk[objKeys[currentQuestion]].options[3]);
		$(".answer-btn").on("click", function() {
			triviaGame.stopTime();
			$(".answer-btn").hide();
			$("#answer-gif").html(triviaGame.questionsToAsk[objKeys[currentQuestion]].picture);
			if( $(this).text() === triviaGame.questionsToAsk[objKeys[currentQuestion]].correctAnswer) {
				$(".correct-incorrect").html("Correct!");
			}
			else {
				$(".correct-incorrect").html("Sorry! The correct answer was: " + triviaGame.questionsToAsk[objKeys[currentQuestion]].correctAnswer);
			}
		});
	},
	countDown: function() {
		time--;
		$("#timer").html(time);
	},
	stopTime: function() {
		clearInterval(timeInterval);
	}
};

triviaGame.startPage();
$("#start-btn").on("click", triviaGame.startQuiz);

});

// if user clicks on button, stop time, compare answers, show result and picture

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