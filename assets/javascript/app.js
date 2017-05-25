$(document).ready(function() {

var correctTotal = 0;
var incorrectTotal = 0;
var unAnswered = 0;
var time;
var timeInterval;
var currentQuestion = 0;
var objKeys;

var triviaGame = {
	questionsToAsk: {
		"Fill in the blanks! _____ _____  on the wall, who's the fairest of them all?": {
			options: ["Great mirror", "Mirror mirror", "Fancy mirror", "Magic mirror"],
			correctAnswer: "Magic mirror",
			picture: '<iframe src="https://giphy.com/embed/UWCP8oDjYplT2" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/snow-white-UWCP8oDjYplT2">via GIPHY</a></p>'
		},
		"What does Dr. Frankenstein yell when he sees his experiment was successful?": {
			options: ["I did it!", "He's alive!", "It's alive!", "Eureka!"],
			correctAnswer: "It's alive!",
			picture: '<iframe src="https://giphy.com/embed/iSBKHcm0qEmZ2" width="420" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/frankenstein-iSBKHcm0qEmZ2">via GIPHY</a></p>'
		},
		"What does Dorothy say when she arrives in Oz?": {
			options: ["Toto, I've a feeling we're not in Kansas anymore", "Toto, we're not in Kansas anymore", "Toto, I don't think we're in Kansas anymore", "Toto, I think we're lost"],
			correctAnswer: "Toto, I've a feeling we're not in Kansas anymore",
			picture: '<iframe src="https://giphy.com/embed/cjDoRld4xH83K" width="480" height="335" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/suprised-wizard-of-oz-cjDoRld4xH83K">via GIPHY</a></p>'
		},
		"Fill in the blanks! _____ gonna need a bigger boat!": {
			options: ["You are", "You're", "We are", "We're"],
			correctAnswer: "You're",
			picture: '<iframe src="https://giphy.com/embed/GNc2n90LyVFyE" width="480" height="254" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/jaws-gifs-GNc2n90LyVFyE">via GIPHY</a></p>'
		},
		"Fill in the blanks! _____ I am your father.": {
			options: ["Lake", "Yes", "No", "Luke"],
			correctAnswer: "No",
			picture: '<iframe src="https://giphy.com/embed/26FL0ydLDEcARWY0g" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/starwars-darthvader-26FL0ydLDEcARWY0g">via GIPHY</a></p>'
		},
		"How does Hannibal Lecter greet Clarice Starling?": {
			options: ["Hello, Clarice", "Good morning, Clarice", "Good to see you, Clarice", "Good evening, Clarice"],
			correctAnswer: "Good evening, Clarice",
			picture: '<iframe src="https://giphy.com/embed/CSIzl30ynrub6" width="480" height="258" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/horror-hannibal-lecter-CSIzl30ynrub6">via GIPHY</a></p>'
		}
	},
	startPage: function() {
		$("#questions-page").hide();
		$("#totals-page").hide();
	},
	startQuiz: function() {
		objKeys = Object.keys(triviaGame.questionsToAsk);
		time = 20;
		timeInterval = setInterval(triviaGame.countDown, 1000);

		$("#answer-gif").hide();
		$(".answer-btn").show();
		$("#timer").html(time);
		$(".quiz-question").html(objKeys[currentQuestion]);
		$("#option-a-btn").html(triviaGame.questionsToAsk[objKeys[currentQuestion]].options[0]);
		$("#option-b-btn").html(triviaGame.questionsToAsk[objKeys[currentQuestion]].options[1]);
		$("#option-c-btn").html(triviaGame.questionsToAsk[objKeys[currentQuestion]].options[2]);
		$("#option-d-btn").html(triviaGame.questionsToAsk[objKeys[currentQuestion]].options[3]);
		$("#answer-gif").html(triviaGame.questionsToAsk[objKeys[currentQuestion]].picture);
		$("#answer-gif").hide();
	},
	countDown: function() {
		time--;
		$("#timer").html(time);

		if ( time === 0) {
			triviaGame.stopTime();
			$(".answer-btn").hide();
			$("#answer-gif").html(triviaGame.questionsToAsk[objKeys[currentQuestion]].picture);
			$(".correct-incorrect").html("Time's Up! The correct answer was: " + triviaGame.questionsToAsk[objKeys[currentQuestion]].correctAnswer);
			unAnswered++;
			triviaGame.enjoyGif();
		};
	},
	stopTime: function() {
		clearInterval(timeInterval);
	},
	enjoyGif: function() {
		setTimeout(function() {
			currentQuestion++;
			if( currentQuestion === objKeys.length) {
				$("#questions-page").hide();
				$("#totals-page").show();
				$("#total-correct").html(correctTotal);
				$("#total-incorrect").html(incorrectTotal);
				$("#total-unanswered").html(unAnswered);
			}
			else {
				triviaGame.startQuiz();
			}
		}, 5000);
	},
	startOver: function() {
		correctTotal = 0;
		incorrectTotal = 0;
		unAnswered = 0;
		currentQuestion = 0;
		$("#totals-page").hide();
		$("#questions-page").show();
		triviaGame.startQuiz();
	}
};

	triviaGame.startPage();
	$("#start-btn").on("click", function() {
		currentQuestion = 0;
		$("#start-page").hide();
		$("#questions-page").show();
		triviaGame.startQuiz();
	});
	$("#start-over-btn").on("click", triviaGame.startOver);

	$(".answer-btn").on("click", function() {
		$("#answer-gif").show();
		if( $(this).text() === triviaGame.questionsToAsk[objKeys[currentQuestion]].correctAnswer) {
			triviaGame.stopTime();
			$(".answer-btn").hide();
			$(".correct-incorrect").html("Correct!");
			correctTotal++;
			triviaGame.enjoyGif();
		}
		else {
			triviaGame.stopTime();
			$(".answer-btn").hide();
			$(".correct-incorrect").html("Sorry! The correct answer was: " + triviaGame.questionsToAsk[objKeys[currentQuestion]].correctAnswer);
			incorrectTotal++;
			triviaGame.enjoyGif();
		};
	});

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