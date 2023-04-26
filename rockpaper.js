function computerPlay() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
    
    // Determine which selection to return based on the random number
    if (randomNumber === 0) {
      return "rock";
    } else if (randomNumber === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  
  function playRound(playerSelection, computerSelection) {
    // Compare the player's selection to the computer's selection
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
    
    // Play 5 rounds of rock, paper, scissors
    for (let i = 0; i < 5; i++) {
      // Prompt the player for their selection
      const playerSelection = prompt("Enter rock, paper, or scissors:");
      
      // Get the computer's random selection
      const computerSelection = computerPlay();
      
      // Play the round and update the scores
      const result = playRound(playerSelection, computerSelection);
      if (result === "You win!") {
        playerScore++;
      } else if (result === "Computer wins!") {
        computerScore++;
      }
      
      // Announce the result of the round
      alert(result);
    }
    
    // Announce the winner of the game
    if (playerScore > computerScore) {
      alert("You win the game!");
    } else if (playerScore < computerScore) {
      alert("Computer wins the game!");
    } else {
      alert("It's a tie!");
    }
  }
  

  game();