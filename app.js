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
	 	  correctAnswer: "Al Di Meola",
	 	  userAnswer: " "},

	 	{ question: "What classically trained pianist/composer also poet, deeply influenced by dancers\
	 	  			  is one of the pioneer of free jazz?",
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

	 	{ question: "What pianist of Trinidadian descent, child prodigy has been heavily featured\
	 				 in films, showcasing her virtuosity?",
	 	  choice1: "Rhoda Scott", choice2: "Hazel Scott", choice3: "Geri Allen", choice4: "Lil Hardin Armstrong",
	 	  correctAnswer: "Hazel Scott",
	 	  userAnswer: " "},

	 	{ question: "What pianist played electric piano -though reluctantly- on Miles Davis recording\
	 				 'Live at the Fillmore East?",
	 	  choice1: "Keith Jarrett", choice2: "Joe Zawinul", choice3: "Herbie Hanccock", choice4: "Bill Evans",
 		  correctAnswer: "Keith Jarrett",
 		  userAnswer: " " },

	 	{ question: "Who composed the soundtrack for the French movie 'Ascenseur pour l'échaffaud' ?",
	 	  choice1: "Miles Davis", choice2: "Duke Ellington", choice3: "Dizzie Gillespie", choice4: "Charles Mingus",
	 	  correctAnswer: "Miles Davis",
	 	  userAnswer: " "}],			

	score: 0,
	progress: 0

}

//2. Modifying state

var score = state.score;
var progress = state.progress;
var currentQuestion = state.questions[0];

//3. Rendering

function addContent() {
	 $(".question").text(currentQuestion.question);
	 $(".choice_1").text(currentQuestion.choice1);
	 $(".choice_2").text(currentQuestion.choice2);
	 $(".choice_3").text(currentQuestion.choice3);
	 $(".choice_4").text(currentQuestion.choice4);
	 $(".choice_1, .choice_2, .choice_3, .choice_4").removeClass("selected");
}

function userAnswer() {
	$(".choice_1, .choice_2, .choice_3, .choice_4").on("click", function(event) {
		$(this).addClass("selected").siblings().removeClass("selected");
	}); 
}

// function submitChoice() {
//  	$(".submit").on("click", function(event) {
//  		$(".next").show();
//  	});
// }

//currently not working. Fix question validation
function submitChoice() {
	$(".submit").on("click", function(event) {
		if ($(".selected").text() === "") {
			alert ("pick an answer first!");
		}
		
		else {
			$(".next").show();
		}

	});
}

//4 Event listeners

function updateContent() {
	$(".next").on("click", function() {
		progress++;
		currentQuestion = state.questions[progress];
		$(".next").hide();
		return addContent();
 	});
}

function updateNav() {
	$(".next").on("click", function() {
	score++;

	});
}

function start() {
	$(".question_panel").hide();
	$(".start").on("click", function() {
		$("#front_page").hide();
		$(".question_panel").show();
		$(".next").hide();
	});

	addContent();
	userAnswer();
	submitChoice();
	updateContent();
	addContent();

}

$(function () {
	start();
})

