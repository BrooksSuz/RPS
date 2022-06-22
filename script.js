//variables
const playerSelection = "rock";
const computerSelection = computerPlay();
const rules = {
  "Rock": "Paper", 
  "Paper": "Scissors", 
  "Scissors": "Rock"
};

const computerPlay = () => {
  let rockPaperScissors = ['Rock', 'Paper', 'Scissors']; 
  return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]; 
}; 

const playRound = (playerSelection, computerSelection) => {
  
}
console.log(playRound(playerSelection, computerSelection));