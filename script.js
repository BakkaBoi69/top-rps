const rock = document.querySelector('#rock-button');
const paper = document.querySelector('#paper-button');
const scissors = document.querySelector('#scissors-button');
const MAX = 3;
const MIN = 1;
const roundWinner = document.querySelector('#round-winner');
let playerScore = 0;
let compScore = 0;
let gameOver = false;
const restart = document.querySelector('.restart')
const userScore = document.querySelector('#player-score')
const cpuScore = document.querySelector('#cpu-score')
const finalWinner = document.querySelector('.final-winner')

function getComputerChoice() {
    // MIN and MAX included
    let choice = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    if (choice == 1) {
        return 'Rock'
    } else if (choice == 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    if (gameOver == false) {
        if (computerSelection == 'Rock' && playerSelection == 'Paper' || computerSelection == 'Paper' && playerSelection == 'Scissors' || computerSelection == 'Scissors' && playerSelection == 'Rock') {
            // Player wins
            playerScore++;
            updateScore();
            roundWinner.textContent = `${playerSelection} beats ${computerSelection}. You Win!`;
        } else if (computerSelection == playerSelection) {
            // Tie
            roundWinner.textContent = `You both chose ${playerSelection}. It's a tie!`;
        } else {
            // Computer wins
            compScore++;
            updateScore();
            roundWinner.textContent = `${computerSelection} beats ${playerSelection}. You Lose!`;
        }
    }
}

// All event listeners for user input
rock.addEventListener('click', () => {
    playRound('Rock', getComputerChoice());
});

paper.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());
});

scissors.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice());
});

restart.addEventListener('click', () => {
    playerScore = 0;
    compScore = 0;
    gameOver = false;
    roundWinner.textContent = '';
    finalWinner.textContent = '';
    cpuScore.textContent = 'Computer: 0';
    userScore.textContent = 'User: 0';
    restart.classList.toggle('restart');

})

function updateScore() {
    detectWinner();
    userScore.textContent = `User: ${playerScore}`;
    cpuScore.textContent = `Computer: ${compScore}`;
}

function detectWinner() {
    if (playerScore == 5) {
        finalWinner.textContent = `Final winner is you`;
        gameOver = true;
        restart.classList.toggle('restart');
    } else if (compScore == 5) {
        finalWinner.textContent = `Final winner is not you`;
        gameOver = true;
        restart.classList.toggle('restart');
    }
}

