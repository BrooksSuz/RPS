//variables
const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase(); 
const computerSelection = computerPlay().toLowerCase();

function computerPlay() {
  const rockPaperScissors = ['rock', 'paper', 'scissors']; 
  return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]; 
}; 

function playRound(playerSelection, computerSelection) {
  //losing scenarios
  playerSelection === 'rock' && computerSelection === 'paper' 
  ? 'You lose! Paper beats Rock!' 
  : playerSelection === 'paper' && computerSelection === 'scissors' 
  ? 'You lose! Scissors beat Paper!' 
  : playerSelection === 'scissors' && computerSelection === 'rock' 
  ? 'You lose! Rock beats scissors!' 

  //winning scenarios
  : playerSelection === 'rock' && computerSelection === 'scissors' 
  ? 'You win! Rock beats Scissors!' 
  : playerSelection === 'paper' && computerSelection === 'rock' 
  ? 'You win! Paper beats Rock!' 
  : playerSelection === 'scissors' && computerSelection === 'paper' 
  ? 'You win! Scissors beat Paper!'

  //error message on incorrect input
  : playerSelection !== 'rock' || 'paper' || 'scissors' 
  ? 'Incorrect input. Type \'Rock\', \'Paper\', or \'Scissors\'.' 

  //tieing scenario
  : `It's a tie!`; 
}

const game = () => {
  return playRound(); 
}

console.log(game());