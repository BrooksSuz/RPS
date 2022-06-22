//variables
const playerSelection = 'rock';
const computerSelection = computerPlay();

function computerPlay() {
  let rockPaperScissors = ['rock', 'paper', 'scissors']; 
  return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]; 
}; 

function playRound() {
  //losing scenarios
  if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
    return 'You lose! Paper beats Rock!'; 
  }
  else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
    return 'You lose! Scissors beat Paper!'; 
  }
  else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
    return 'You lose! Rock beats scissors!'; 
  }

  //winning scenarios
  else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
    return 'You win! Rock beats Scissors!'; 
  }
  else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
    return 'You win! Paper beats Rock!'; 
  }
  else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
    return 'You win! Scissors beat Paper!'; 
  }

  //tieing scenario
  else {
    return `It's a tie!`; 
  }
}

const game = () => {
  return playRound(playerSelection, computerSelection); 
}

console.log(game());