const CHOICES = ["rock", "paper", "scissors"];
const WINNING_SCORE = 5;
let computerScore = 0;
let playerScore = 0;
let roundWinner = "";


function getRandomChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}





function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = "tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        roundWinner = "player";
        playerScore++;
    } else {
        roundWinner = "computer";
        computerScore++;
    }

    if (isGameOver()) {
        endGame();
        updateScore();
        return;
    }

    updateChoices(playerSelection, computerSelection);
    updateScore();
    updateRoundMessage(roundWinner, playerSelection, computerSelection);
}




function isGameOver() {
    return playerScore === WINNING_SCORE || computerScore === WINNING_SCORE;
  }


// UI

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const roundInfo = document.getElementById('round-text-info');
const roundInfoTwo = document.getElementById('round-text-info-two');
const computerScoreText = document.getElementById('computerScore');
const playerScoreText = document.getElementById('playerScore');


rockBtn.addEventListener('click', () => {
    if(!isGameOver()){
    const playerSelection = "rock";
    const computerSelection = getRandomChoice();
    playRound(playerSelection, computerSelection);
    }
});

paperBtn.addEventListener('click', () => {
    if(!isGameOver()){
    const playerSelection = "paper";
    const computerSelection = getRandomChoice();
    playRound(playerSelection, computerSelection);
    }
});

scissorsBtn.addEventListener('click', () => {
    if(!isGameOver()){
    const playerSelection = "scissors";
    const computerSelection = getRandomChoice();
    playRound(playerSelection, computerSelection);
    }
});

function updateChoices(playerSelection, computerSelection){
    switch (playerSelection) {
        case 'rock':
            playerSign.textContent = '🪨';
            break;
        case 'paper':
            playerSign.textContent = '🧻';
            break;
        case 'scissors':
            playerSign.textContent = '✂️';
            break;
    }

    switch (computerSelection) {
        case 'rock':
            computerSign.textContent = '🪨';
            break;
        case 'paper':
            computerSign.textContent = '🧻';
            break;
        case 'scissors':
            computerSign.textContent = '✂️';
            break;
    }

}

function updateScore(){
    if(roundWinner === 'tie'){
        roundInfo.textContent = "Tie!";
    } else if(roundWinner === 'player'){
        roundInfo.textContent = 'You won!';
    } else{
        roundInfo.textContent = 'You lost!'
    }

    playerScoreText.textContent = `Player: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;
}

function updateRoundMessage( winner, playerSelection, computerSelection){
    if(winner === 'player'){
        roundInfoTwo.textContent = `${playerSelection} beats ${computerSelection}`;
    } else if(winner === 'computer'){
        roundInfoTwo.textContent = `${computerSelection} beats ${playerSelection}`;
    } else {
        roundInfoTwo.textContent = `${playerSelection} ties with ${computerSelection}`;
    }
}

function endGame(){
    if(isGameOver()){
        roundInfo.textContent ='Game over!';
        roundInfoTwo.textContent ='Refresh to play again.';
    }
}







