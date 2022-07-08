//'console.log(playGame());' for RPS gameplay

//variables
let computerSelection = '';
let playerSelection = '';
const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper'); 
const btnScissors = document.getElementById('scissors');  
const divResults = document.getElementById('results'); 
const divPlayerScore = document.getElementById('player-score'); 
const divCompScore = document.getElementById('comp-score');

//function that determines computer option
function computerPlay() {
  const rockPaperScissors = ['rock', 'paper', 'scissors']; 
  return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]; 
}

btnRock.addEventListener('click', function selectRock() {
  playerSelection = 'rock'; 
  computerSelection = computerPlay(); 

  //call playGame if there isn't a game currently playing
  if (divPlayerScore.textContent === 'Player Score: ' && 
  divCompScore.textContent === 'Computer Score: ') {
    playGame(); 
  }
}); 

btnPaper.addEventListener('click', function selectPaper() {
  playerSelection = 'paper'; 
  computerSelection = computerPlay();

  //call playGame if there isn't a game currently playing
  if (divPlayerScore.textContent === 'Player Score: ' && 
  divCompScore.textContent === 'Computer Score: ') {
    playGame(); 
  }
}); 

btnScissors.addEventListener('click', function selectScissors() {
  playerSelection = 'scissors';  
  computerSelection = computerPlay();

  //call playGame if there isn't a game currently playing
  if (divPlayerScore.textContent === 'Player Score: ' && 
  divCompScore.textContent === 'Computer Score: ') {
    playGame(); 
  }
}); 

//function that plays a round of RPS
function playRound() { 
  //losing scenarios
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    divResults.textContent = 'Results: You lose! Paper beats Rock!'; 
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    divResults.textContent = 'Results: You lose! Scissors beat Paper!'; 
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    divResults.textContent = 'Results: You lose! Rock beats scissors!'; 
  } 

    //winning scenarios
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    divResults.textContent = 'Results: You win! Rock beats Scissors!'; 
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    divResults.textContent = 'Results: You win! Paper beats Rock!'; 
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    divResults.textContent = 'Results: You win! Scissors beat Paper!'; 
  }
  
    //tieing scenario
    else if (playerSelection === computerSelection) {
    divResults.textContent = 'Results: It\'s a tie!'; 
  } 

    //error message on incorrect input
    else {
    divResults.textContent = 'Results: Incorrect input. Click \'Rock\', \'Paper\', or \'Scissors\'.'; 
  } 
}

//function that plays a five round game of RPS
 function playGame() {
  //play a round
  playRound(playerSelection, computerSelection); 

  //update score
  if (playRound().includes('win')) {
    divPlayerScore.textContent += 'I'; 
  } else if (playRound().includes('lose')) {
    divCompScore.textContent += 'I'; 
  }

  //pronounce winner of five round game
  if (divPlayerScore.textContent.includes('IIIII')) {
    divResults.textContent = 'Results: You won the game!'; 
  } else if (divCompScore.textContent.includes('IIIII')) {
    divResults.textContent = 'You lost the game!'; 
  }
} 