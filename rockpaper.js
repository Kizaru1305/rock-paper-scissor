const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorsButton = document.getElementById("scissors-btn");
const resultDiv = document.getElementById('result');
const playerScoreDiv = document.getElementById('playerScore');
const computerScoreDiv = document.getElementById('computerScore');


const totalRounds = 5;
let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', function() {
  playRound('rock', getComputerChoice());
});

paperButton.addEventListener('click', function() {
  playRound('paper', getComputerChoice());
});

scissorsButton.addEventListener('click', function() {
  playRound('scissors', getComputerChoice());
});


function getComputerChoice() {
  const compChoice = Math.floor(Math.random() * 3) + 1;

  if (compChoice == 1) {
    return "rock";
  } else if (compChoice == 2) {
    return "paper";
  } else if (compChoice == 3) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = getResult(playerSelection, computerSelection);
  resultDiv.textContent = result;
  
  roundsPlayed++;
  if (roundsPlayed === totalRounds) {
    if (playerScore > computerScore) {
      alert("You win the game!");
    } else if (playerScore < computerScore) {
      alert("Computer wins the game!");
    } else {
      alert("It's a tie!");
    }
    alert("game has ended");
  }



  if (result === "You win!") {
    playerScore++;
    playerScoreDiv.textContent = playerScore;
  } else if (result === "Computer wins!") {
    computerScore++;
    computerScoreDiv.textContent = computerScore;
  }


  
  
}

function getResult(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}