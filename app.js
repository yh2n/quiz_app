state = {
 	questions: [

 		{ question: "What bass player played an unconventional rendition\
	 				 of Donna Lee on his first album?",
	 	  choice1: "Alphonso Johnson", choice2: "Miroslav Vitous", choice3: "Jaco Pastorius", choice4: "Stanley Clarke",
	 	  correctAnswer: "Jaco Pastorius",
	 	  userAnswer: " "},

	 	{ question: "What pianist, part of a famous jazz-fusion band, wrote the\
	 				 opening theme for the TV show Miami Vice?" ,
	 	 choice1: "George Duke", choice2: "Jan Hammer", choice3: "Joe Zawinul", choice4: "Chick Corea",
	 	 correctAnswer: "Jan Hammer",
	 	 userAnswer: " " },

	 	{ question: "Who was nicknamed \"Sassy\" ?",
	 	  choice1: "Diana Washington", choice2:  "Ella Fitzgerald", choice3: "Betty Carter", 
	 	  	choice4: "Sarah Vaughan",
	 	  correctAnswer: "Sarah Vaughan",
	 	  userAnswer: " "},

	 	{ question: "Who was the first guitar player to join Return To Forever?",
	 	  choice1: "Bill Connors", choice2: "'BlackByrd' McKnight", choice3: "Frank Gambale", 
	 	  	choice4: "Al Di Meola",
	 	  correctAnswer: "Bill Connors",
	 	  userAnswer: " "},

	 	{ question: "This classically trained pianist/composer and poet, deeply influenced by dancers\
	 	  			  is one of the pioneer of free jazz...",
	 	  choice1: "Muhal Richard Abrams", choice2: "Cecil Taylor", choice3: "Keith Jarrett", choice4: "Andrew Hill",
	 	  correctAnswer: "Cecil Taylor",
	 	  userAnswer: " "},

	 	{ question: "Following John Coltrane's legacy, this avant-garde tenor player blended African chants\
	 				and polyrythm with improvisation?",
	 	  choice1: "Roscoe Mitchell", choice2: "David Murray", choice3: "Eric Dolphy", choice4: "Pharoah Sanders",
	 	  correctAnswer: "Pharoah Sanders",
	 	  userAnswer: " " },

	 	{ question: "What flautist was heavily featured on Gil Scott-Heron album\
	 				 'Pieces of a Man'?",
	 	  choice1: "Bobbi Humphrey", choice2: "Hubert Laws", choice3: "Herbie Mann", choice4: "Frank Wess",
	 	  correctAnswer: "Hubert Laws",
	 	  userAnswer: " "},

	 	{ question: "What pianist/vocalist of Trinidadian descent, child prodigy has been featured\
	 				 in films, showcasing her virtuosity?",
	 	  choice1: "Rhoda Scott", choice2: "Hazel Scott", choice3: "Geri Allen", choice4: "Lil Hardin Armstrong",
	 	  correctAnswer: "Hazel Scott",
	 	  userAnswer: " "},

	 	{ question: "What pianist played electric piano -though reluctantly- on Miles Davis recording\
	 				 'Live at the Fillmore East?",
	 	  choice1: "Keith Jarrett", choice2: "Joe Zawinul", choice3: "Herbie Hanccock", choice4: "Bill Evans",
 		  correctAnswer: "Keith Jarrett",
 		  userAnswer: " " },

	 	{ question: "Who composed the soundtrack for the French movie 'Ascenseur pour l'Echaffaud'?",
	 	  choice1: "Miles Davis", choice2: "Duke Ellington", choice3: "Dizzie Gillespie", choice4: "Charles Mingus",
	 	  correctAnswer: "Miles Davis",
	 	  userAnswer: " "}],	

	score: 0,
	progress: 0,
	page: 1

}

//2. Modifying state

var score = state.score;
var progress = state.progress;
var currentQuestion = state.questions[0];
var page = state.page;

//3. Rendering

function addContent(state) {
	$(".question").text(currentQuestion.question);
	$(".choice_1").text(currentQuestion.choice1);
	$(".choice_2").text(currentQuestion.choice2);
	$(".choice_3").text(currentQuestion.choice3);
	$(".choice_4").text(currentQuestion.choice4);
	$(".choice_1, .choice_2, .choice_3, .choice_4").removeClass("selected");
	$(".progress").text("Question " + page + "/10").fadeIn(2000);
	
}

//.4 Event listener

function userOptions(state) {
	$(".choice_1, .choice_2, .choice_3, .choice_4").on("click", function(event) {
		$(this).addClass("selected").siblings().removeClass("selected");
	}); 
}

function submitChoice() {
			$("#submit").on("click", function(event) {
			if ($(".selected").text() === "") {
				alert("pick one first ;)");
				
			}

			
			else if ($(".selected").text() === state.questions[progress].correctAnswer) {
				$("#submit").hide();		  
				updateScore();
				$(".verdict").text("Well done!");
				$(".selected").siblings().addClass("wrong_answers");
				$(".next").show();
			 }

			else {
				$("#submit").hide();
				$(".verdict").text("Incorrect... it's " + state.questions[progress].correctAnswer);
				$(".selected").siblings().addClass("wrong_answers");
				$(".next").show();
				}
			}); 
}

function updateContent() {
	$(".next").on("click", function() {
		if(page === 10) {
			if (score >= 1) {
				$(".question_panel").hide();
				$(".final-results").text("You got " + score + " points!");
			   }
			 else {
			 	$(".question_panel").hide();
			   	$(".final-results").text("You got " + score + " point!");
			   }
		}

		else {
		$(".verdict").text("");
		$(".selected").show();
		$(".selected").siblings().removeClass("wrong_answers");
		updatePage();
		$("#submit").show();
		progress++;
		currentQuestion = state.questions[progress];
		$(".next").hide();
		addContent();
	   }
	 });
}

// Nav
function updatePage() {
		page++;
		$(".progress").text("Question " + page + "/10");
}

function updateScore() {

	if ($(".selected").text() === state.questions[progress].correctAnswer && score >= 1) {
		score++;
		$(".score").text(score + " points");
	}

	else if ($(".selected").text() === state.questions[progress].correctAnswer) {
		score++;
		$(".score").text(score + " point");
	}
}



function start() {
	$(".question_panel").hide();
	$(".progress").hide();
	$(".start").on("click", function() {
		$("#front_page").fadeOut(500);
		$(".question_panel").fadeIn(1000);
		$(".next").hide();
		
	});

	addContent();
	userOptions();
	submitChoice();
	updateContent();
	//addContent();
}

$(function () {
	start();
})

