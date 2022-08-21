
const computerGuess = document.getElementById("computer-guess")
const playerGuess = document.getElementById("player-guess")
const btn = document.querySelectorAll("button")
const playerScoreEl = document.getElementById("playerScore")
const computerScoreEl = document.getElementById("computerScore")
let playerScoreVal = 0
let computerScoreVal = 0

let computerTry
let playerTry

function rock() {
    playerGuess.textContent = "Rock"
    playerTry = "Rock"
    createComputerChoice()
}

function paper() {
    playerGuess.textContent = "Paper"
    playerTry = "Paper"
    createComputerChoice()
}

function scissors() {
    playerGuess.textContent = "Scissors"
    playerTry = "Scissors"
    createComputerChoice()
}

function createComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1)
    
    if (randomNumber === 1) {
        computerTry = "Rock"
    }
    if (randomNumber === 2) {
        computerTry = "Paper"
    }
    if (randomNumber === 3) {
        computerTry = "Scissors"
    }
    computerGuess.textContent = computerTry


    if (playerTry === computerTry) {
        null 
} if (playerTry === "Rock" && computerTry === "Scissors") {
        playerScoreEl.textContent =  playerScoreVal += 1
        glow()
} if (playerTry === "Rock" && computerTry === "Paper") {
        computerScoreEl.textContent = computerScoreVal += 1
        glow()
} if (playerTry === "Paper" && computerTry === "Rock" ) {
        playerScoreEl.textContent =  playerScoreVal += 1
        glow()
} if (playerTry === "Paper" && computerTry === "Scissors" ) {
        computerScoreEl.textContent = computerScoreVal += 1 
        glow()
} if (playerTry === "Scissors" && computerTry === "Rock" ) {
        computerScoreEl.textContent = computerScoreVal += 1
        glow()
} if (playerTry === "Scissors" && computerTry === "Paper" ) {
        playerScoreEl.textContent =  playerScoreVal += 1
        glow()
}

}



function glow() {
      
    if (playerScoreVal > computerScoreVal) {
           playerScoreEl.style.backgroundColor = "#6BF178";
           computerScoreEl.style.backgroundColor = "#080001";
    } else {
            playerScoreEl.style.backgroundColor = "#080001";
            computerScoreEl.style.backgroundColor = "#6BF178";
    }
}
