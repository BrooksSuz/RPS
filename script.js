//variables
const playerSelection = "Rock";
const computerSelection = computerPlay();

function computerPlay() {
  let rockPaperScissors = ['Rock', 'Paper', 'Scissors']; 
  return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]; 
}; 

const playRound = (playerSelection, computerSelection) => {
  //losing scenarios
  if (playerSelection.toLowerCase === 'rock' && computerSelection.toLowerCase === 'paper') {
    return 'You lose! Paper beats Rock!'; 
  }
  else if (playerSelection.toLowerCase === 'paper' && computerSelection.toLowerCase === 'scissors') {
    return 'You lose! Scissors beat Paper!'; 
  }
  else if (playerSelection.toLowerCase === 'scissors' && computerSelection.toLowerCase === 'rock') {
    return 'You lose! Rock beats scissors!'; 
  }

  //winning scenarios
  else if (playerSelection.toLowerCase === 'rock' && computerSelection.toLowerCase === 'scissors') {
    return 'You win! Rock beats Scissors!'; 
  }
  else if (playerSelection.toLowerCase === 'paper' && computerSelection.toLowerCase === 'rock') {
    return 'You win! Paper beats Rock!'; 
  }
  else if (playerSelection.toLowerCase === 'scissors' && computerSelection.toLowerCase === 'paper') {
    return 'You win! Scissors beat Paper!'; 
  }
  else if (playerSelection.toLowerCase() === computerSelection.toLowerCase) {
    return `It's a tie!`; 
  }
}

//console.log(playRound(playerSelection, computerSelection));