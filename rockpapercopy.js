function getComputerChoice() {
    const compChoice = Math.floor(Math.random() * 3) + 1;
  
    if (compChoice == 1) {
      return "rock";
    } else if (compChoice == 2) {
      return "paper";
    } else if (compChoice == 3) {
      return "scissors";
    }
  
  };
  
  function playRound(playerSelection, computerSelection) {
  
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
               playerSelection === "paper" && computerSelection === "rock" ||
               playerSelection === "scissors" && computerSelection === "paper") {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
  
      
  
      console.log(playerSelection);
      const computerChoice = getComputerChoice();
      console.log(computerChoice);
  
      const result = playRound(playerSelection, computerChoice);
  
      if (result === "You win!") {
        playerScore++;
      } else if (result === "Computer wins!") {
        computerScore++;
      }
  
      alert(result);
    }
  
    if (playerScore > computerScore) {
      alert("You win the game!");
    } else if (playerScore < computerScore) {
      alert("Computer wins the game!");
    } else {
      alert("It's a tie!");
    }
  };
  
  
  const playerSelection = document.querySelectorAll(".my-button");
      playerSelection.forEach(function (button) {
        playerSelection.addEventListener("click", function () {
          const value = button.innerHTML;
          value.toLowerCase();
          console.log(value);
        });
      });
  game();