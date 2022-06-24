//'console.log(playGame());' for RPS gameplay

//variables
let computerSelection = computerPlay();
let playerSelection = '';

//function that determines computer option
function computerPlay() {
  const rockPaperScissors = ['rock', 'paper', 'scissors']; 
  return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]; 
}

//function that plays a round of RPS
function playRound() { 
  //losing scenarios
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You lose! Paper beats Rock!'; 
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You lose! Scissors beat Paper!'; 
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You lose! Rock beats scissors!'; 
  } 

    //winning scenarios
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You win! Rock beats Scissors!'; 
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You win! Paper beats Rock!'; 
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You win! Scissors beat Paper!'; 
  }
  
    //tieing scenario
    else if (playerSelection === computerSelection) {
    return `It's a tie!`; 
  } 

    //error message on incorrect input
    else {
    return 'Incorrect input. Type \'Rock\', \'Paper\', or \'Scissors\'.'; 
  } 
}

//function that plays a five round game of RPS
function playGame() {
  //variables  
  let compScore = ''; 
  let playerScore = ''; 

  //set playerSelection for beginning of game
  playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase().replace(/\s/g, '');

  for (let i = 0; i < 5; i++) {
    //play a round
    console.log(playRound(playerSelection, computerSelection)); 

    //update score
    if (playRound().includes('win')) {
      playerScore += 'I'; 

      //display score
      console.log(`
      Player Score: ${playerScore} 
      Computer Score: ${compScore}
      `); 
    } else if (playRound().includes('lose')) {
      compScore += 'I'; 

      //display score
      console.log(`
      Player Score: ${playerScore} 
      Computer Score: ${compScore}
      `); 
    }
    
    //if user error, reset round
      else if (playRound().includes('Incorrect')) {
      i -= 1; 
    }
    
    //reset variables for new game 
    computerSelection = computerPlay(); 
    playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase().replace(/\s/g, ''); 
  }

  //pronounce winner of five round game
  if (playerScore.length > compScore.length) {
    return 'You won the game!'; 
  } else if (playerScore.length < compScore.length) {
    return 'You lost the game!'; 
  } else {
    return 'It\'s a tie!'; 
  }
}