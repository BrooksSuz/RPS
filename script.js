//variables
let computerSelection = computerPlay();
let playerSelection = '';

function computerPlay() {
  const rockPaperScissors = ['rock', 'paper', 'scissors']; 
  return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]; 
}

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

  //error message on incorrect input
    else if (playerSelection !== 'rock' || 'paper' || 'scissors') {
    return 'Incorrect input. Type \'Rock\', \'Paper\', or \'Scissors\'.'; 
  } 

  //tieing scenario
    else {
    return `It's a tie!`; 
  } 
}

function game() {
  //variables  
  let compScore = ''; 
  let playerScore = ''; 

  //set playerSelection for beginning of game
  playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase().replace(/\s/g, '');
  
  for (let i = 0; i < 5; i++) {
    //play a round
    console.log(playRound(playerSelection, computerSelection)); 

    //update our score
    if (playRound().includes('lose')) {
      compScore += 'I'; 
    } else if (playRound().includes('win')) {
      playerScore += 'I'; 
    } else {
      i -= 1; 
    }

    //display score
    console.log(`
    Player Score: ${playerScore} 
    Computer Score: ${compScore}
    `); 

    //reset variables for new game 
    computerSelection = computerPlay(); 
    playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase().replace(/\s/g, ''); 
  }
}