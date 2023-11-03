const CHOICES = ["rock", "paper", "scissors"];
const WINNING_SCORE = 5;

function getRandomChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function getPlayerChoice() {
    let playerSelection = window.prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();

    while (!CHOICES.includes(playerSelection)) {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        playerSelection = window.prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    }

    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie!");
        return "Tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return "Win";
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
        return "Lose";
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    while (playerScore < WINNING_SCORE && computerScore < WINNING_SCORE) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getRandomChoice();

        let result = playRound(playerSelection, computerSelection);

        if (result === "Win") {
            playerScore++;
        } else if (result === "Lose") {
            computerScore++;
        }

        console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
    }

    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);

    if (computerScore > playerScore) {
        return "Computer";
    } else if (computerScore < playerScore) {
        return "Player";
    } else {
        return "Tie";
    }
}

let winner = game();

if (winner === "Computer") {
    console.log("Computer won!");
} else if (winner === "Player") {
    console.log("Player won!");
} else {
    console.log("Tie!");
}
