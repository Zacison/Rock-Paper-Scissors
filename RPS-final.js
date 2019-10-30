//Scores
let userScore = 0;
let compScore = 0;

//DOM variables

const playerScoreH3 = document.getElementById('playerScore'); //adjustable user score
const computerScoreH3 = document.getElementById('comScore'); // adjusts com score text
const result_text = document.getElementById('instructions'); // adjusts the instruction text with the results of each play
const five_result = document.getElementById('five-result')
const rock_img = document.getElementById('rock-img'); //rock image listener
const paper_img = document.getElementById('paper-img'); //paper image listener
const scissors_img = document.getElementById('scissors-img'); //scissors image listener
const btn = document.getElementById('btn'); //reset game button
const btn_active = document.querySelector('.active'); 



//Step #1, starts the game. Triggers everything else
//Takes user input in the form of a click, and sends the choice to the game function. 
//The event listener listens for the click, then executes a function, as described in the line above
//it doesnt run the "game" function by itself, it waits for the click, then only on the click does something. 
function main() {
	
	rock_img.addEventListener('click', function() {
		game("rock")//passes the "rock" argument into the game(userchoice) field to use to do stuff
	});
	paper_img.addEventListener('click', function() {
		game("paper")
	});
	scissors_img.addEventListener('click', function() {
		game("scissors")
	});
}

//Call function to start the game
main();

//Step #2, runs the game
function game(userChoice) {
	//assigns the computer choice variable to the getCompChoice funciton, and calls it. 
	//can use the computerChoice variable in using comparisons for the win/lose/tie stuff.
	const computerChoice = getComputerChoice();

	//double == is comparison, single = assigns it to a variable. 
	if ((userChoice == "rock" && computerChoice =="scissors") 
	|| (userChoice == "paper" && computerChoice == "rock")
	|| (userChoice == "scissors" && computerChoice == "paper")) {
		win(userChoice, computerChoice);
		console.log("win");
	}
	else if ((userChoice == "rock" && computerChoice == "paper") 
	|| (userChoice == "paper" && computerChoice == "scissors")
	|| (userChoice == "scissors" && computerChoice == "rock")) {
		lose(userChoice, computerChoice);
	console.log("lose");
	}
	else if ((userChoice == "rock" && computerChoice == "rock") 
	|| (userChoice == "paper" && computerChoice == "paper")
	|| (userChoice == "scissors" && computerChoice == "scissors")) {
		tie(userChoice, computerChoice);
	console.log("tie");
	}
}


//gets computer choice by returning a random array number and selecting the corresponding choice
function getComputerChoice() {
	var choices = ['rock', 'paper', 'scissors'];
	var randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber]; //returns result to the higher function that calls it
}



function win(userChoice, computerChoice) {
	userScore++;
	playerScoreH3.innerHTML = userScore;
	computerScoreH3.innerHTML = compScore;
	result_text.innerHTML = "Your choice " + userChoice + " beats " + computerChoice + ". You win!";
	fiveGames(userScore, compScore);
}

function lose(userChoice, computerChoice) {
	compScore++;
	playerScoreH3.innerHTML = userScore;
	computerScoreH3.innerHTML = compScore;
	result_text.innerHTML = "Your choice " + userChoice + " loses to " + computerChoice + ".";
	fiveGames(userScore, compScore);
}

function tie(userChoice, computerChoice) {
	playerScoreH3.innerHTML = userScore;
	computerScoreH3.innerHTML = compScore;
	result_text.innerHTML = "Your choice " + userChoice + " ties with " + computerChoice + ".";
	fiveGames(userScore, compScore);
}



function fiveGames(userScore, compScore) {
	

	if (userScore == 5 && compScore == 5) {
		five_result.innerHTML = "The game is a tie!";
		btn_active.classList.remove('active');
		btn.addEventListener("click", gameReset )

	} else if (userScore==5 && compScore<5) {
		five_result.innerHTML = "Awesome, you win the game!";
		btn_active.classList.remove('active');
		btn.addEventListener("click", gameReset )

	} else if (userScore<5 && compScore==5) {
		five_result.innerHTML = "You lose the game, better luck next time!";
		btn_active.classList.remove('active');
		btn.addEventListener("click", gameReset )

	}
}



function gameReset() {
	compScore = 0;
	userScore = 0;
	playerScoreH3.innerHTML = userScore;
	computerScoreH3.innerHTML = compScore;
	result_text.innerHTML = "Your results will go here"
	five_result.innerHTML = ""
	btn_active.classList.add('active');
}

//fiveGames();






















