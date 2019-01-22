// INITIAL STATE

state = {
 	questions: [
		{ question: "What bass player played an unconventional rendition\
	 				 of 'Donna Lee' on his first album?",
	 	  choice1: "Alphonso Johnson", choice2: "Miroslav Vitous", choice3: "Jaco Pastorius", choice4: "Stanley Clarke",
	 	  correctAnswer: "Jaco Pastorius",
	 	  correctAnswerText: "Great start!",
	 	  wrongAnswerText: "Nope... Jaco, the one and only."},

	 	{ question: "What pianist, part of a famous jazz-fusion band, wrote the\
	 				 opening theme for the TV show 'Miami Vice'?" ,
	 	 choice1: "George Duke", choice2: "Jan Hammer", choice3: "Joe Zawinul", choice4: "Chick Corea",
	 	 correctAnswer: "Jan Hammer",
	 	 correctAnswerText: "There you go!",
	 	 wrongAnswerText: "It's Jan Hammer! Mahavishnu Orchestra, remember that band?" },

	 	{ question: "Who was nicknamed \"Sassy\" ?",
	 	  choice1: "Diana Washington", choice2:  "Ella Fitzgerald", choice3: "Betty Carter", 
	 	  	choice4: "Sarah Vaughan",
	 	  correctAnswer: "Sarah Vaughan",
	 	  correctAnswerText: "Yup, that's her...",
	 	  wrongAnswerText: "Sarah Vaughan. Come on..." },

	 	{ question: "He is the first guitar player to join Return To Forever?",
	 	  choice1: "Bill Connors", choice2: "'BlackByrd' McKnight", choice3: "Frank Gambale", 
	 	  	choice4: "Al Di Meola",
	 	  correctAnswer: "Bill Connors",
	 	  correctAnswerText: "Impressive! That was a hard one.",
	 	  wrongAnswerText: "Bill Connors. You should check 'The Game Maker'..."},

	 	{ question: "This classically trained pianist/composer and poet, deeply influenced by dancers\
	 	  			  is one of the pioneer of free jazz...",
	 	  choice1: "Muhal Richard Abrams", choice2: "Cecil Taylor", choice3: "Keith Jarrett", choice4: "Andrew Hill",
	 	  correctAnswer: "Cecil Taylor",
	 	  correctAnswerText: "Good job!",
	 	  wrongAnswerText: "That was tricky. It's Cecil Taylor."},

	 	{ question: "Following John Coltrane's legacy, this avant-garde tenor player blended African chants\
	 				and polyrythm with improvisation?",
	 	  choice1: "Roscoe Mitchell", choice2: "David Murray", choice3: "Eric Dolphy", choice4: "Pharoah Sanders",
	 	  correctAnswer: "Pharoah Sanders",
	 	  correctAnswerText: "Nicely done!",
	 	  wrongAnswerText: "Pharoah Sanders...pleeease..."},

	 	{ question: "What flautist was heavily featured on Gil Scott-Heron album\
	 				 'Pieces of a Man'?",
	 	  choice1: "Bobbi Humphrey", choice2: "Hubert Laws", choice3: "Herbie Mann", choice4: "Frank Wess",
	 	  correctAnswer: "Hubert Laws",
	 	  correctAnswerText: "Yeaah!",
	 	  wrongAnswerText: "Nooo... Hubert Laws!"},

	 	{ question: "She's a pianist/vocalist of Trinidadian descent, child prodigy, featured\
	 				 in films playing two pianos at once...",
	 	  choice1: "Rhoda Scott", choice2: "Hazel Scott", choice3: "Geri Allen", choice4: "Lil Hardin Armstrong",
	 	  correctAnswer: "Hazel Scott",
	 	  correctAnswerText: "Wow! Impressive",
	 	  wrongAnswerText: "Hazel Scott. You gotta look her up! She's incredible"},

	 	{ question: "What pianist played electric piano -though reluctantly- on Miles Davis recording\
	 				 'Live at the Fillmore East?",
	 	  choice1: "Keith Jarrett", choice2: "Joe Zawinul", choice3: "Herbie Hanccock", choice4: "Bill Evans",
 		  correctAnswer: "Keith Jarrett",
 		  correctAnswerText: "Yup, that's right!",
	 	  wrongAnswerText: "Nooo, Keith Jarrett. Check that recording. Stunning tracks"},

	 	{ question: "Who composed the soundtrack for the French movie 'Ascenseur pour l'Echaffaud'?",
	 	  choice1: "Miles Davis", choice2: "Duke Ellington", choice3: "Dizzie Gillespie", choice4: "Charles Mingus",
	 	  correctAnswer: "Miles Davis",
	 	  correctAnswerText: "Great job...",
	 	  wrongAnswerText:"Bummer... It's Miles Davis."}],	

	score: 0,
	progress: 0,
	page: 1

}

// MODIFYING STATE

var score = state.score;
var progress = state.progress;
var currentQuestion = state.questions[0];
var page = state.page;

// RENDERING

function addContent(state) {
	$(".question").text(currentQuestion.question);
	$(".choice_1").text(currentQuestion.choice1);
	$(".choice_2").text(currentQuestion.choice2);
	$(".choice_3").text(currentQuestion.choice3);
	$(".choice_4").text(currentQuestion.choice4);
	$(".choice_1, .choice_2, .choice_3, .choice_4").removeClass("selected");
	$(".progress").text("Question " + page + "/10").show();
}

// EVENT LISTENER

function userOptions(state) {
	$(".choice_1, .choice_2, .choice_3, .choice_4").on("click", function(event) {
		$(this).addClass("selected").siblings().removeClass("selected");
		$(".submit").removeClass("disabled")
	}); 
}

function submitChoice() {
	$(".submit").on("click", function(event) {
			if ($(".selected").text() === "") {
				alert("pick one first ;-)");
				
			}
			
			else if ($(".selected").text() === state.questions[progress].correctAnswer) {
				$(".submit").hide();		  
				updateScore();
				$(".verdict").removeClass("incorrect");
				$(".verdict").addClass("correct");
				$(".verdict").text(state.questions[progress].correctAnswerText);
				$(".selected").siblings().addClass("wrong_options");
				$(".next").show();
				if(page === 10) {
					$(".next").text("Check your score")
				}
			}

			else {
				$(".submit").hide();
				$(".verdict").removeClass("correct");
				$(".verdict").addClass("incorrect");
				$(".verdict").text(state.questions[progress].wrongAnswerText);
				$(".selected").addClass("wrong_answer")
				$(".selected").siblings().addClass("wrong_options");
				$(".next").show();
				if(page === 10) {
					$(".next").text("Check your score")
				}
			}
		}); 
}


function updateContent() {
	$(".next").on("click", function() {
		if(page === 10) {
			$(".question_panel").fadeOut(250);
			$(".result_page").fadeIn(1500);
			switch(score) {
				case 0: 	
					$(".final-results").text("O correcrt answer!\nOuch! Wanna give it a another shot?")
					break;
				case 1:
					$(".final-results").text("You got " + score + " point!\n Wanna try again?")
					break;
				case 2:
				case 3:
				case 4:
					$(".final-results").text("You got " + score + " points!\n Wanna try again?")
					break;
				case 5:
				case 6:
					$(".final-results").text("You got " + score + " poinst! Not bad!")
					break;
				case 7:
				 	$(".final-results").text("You got " + score + " poinst! Pretty good!")
				 	break;
				case 8:
				case 9: 
					$(".final-results").text("You got " + score + " points! That's really good!")
					break;
				case 10:
					$(".final-results").text("10! Amazing,that's a perfect score!!!")
			}
		}

		else {
		$(".verdict").text("");
		$(".selected").show();
		$(".selected").siblings().removeClass("wrong_options");
		$(".selected").removeClass("wrong_answer")
		updateProgress();
		$(".submit").show().addClass("disabled");
		progress++;
		currentQuestion = state.questions[progress];
		$(".next").hide();
		addContent();
	   }
	 });
}

$(".reset").on("click", function() {
	location.reload();
})

// UPDATE NAV
function updateProgress() {
	page++;
	$(".progress").text("Question " + page + "/10");
	console.log(page)
}

function updateScore() {
	if ($(".selected").text() === state.questions[progress].correctAnswer && score >= 1) {
		score++;
		$(".score").text(score + " points");
	}

	else if ($(".selected").text() === state.questions[progress].correctAnswer) {
		score++;
		$(".score").text(score + " point");
	};
}

function start() {
	$(".question_panel").hide();
	$(".result_page").hide();
	$(".progress").hide();
	$(".start").on("click", function() {
		$(".front_page").fadeOut(300);
		$(".question_panel").fadeIn(1500);
		$(".next").hide();
		$(".result_page").hide();
	});

	addContent();
	userOptions();
	submitChoice();
	updateContent();
}

$(function () {
	start();
})

