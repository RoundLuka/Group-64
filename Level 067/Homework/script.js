const choiceDiv = document.getElementById("userChoice");
const playerScoreP = document.getElementById("playerScoreP");
const compScoreP = document.getElementById("compScoreP");
const compChoiceP = document.getElementById("compChoiceP");
const resultDiplay = document.getElementById("gameRes");
const options = ["Rock", "Paper", "Scissors"]

let playerScore = 0;
let computerScore = 0;

function gameLogic(clickEvent) {
    let randomIndex = Math.floor(Math.random() * 3)
    let computerChoice = options[randomIndex]

    let playerChoice = clickEvent.target.textContent

    compChoiceP.textContent = `Computer choice: ${computerChoice}`

    if ((computerChoice === "Rock" && playerChoice === "Scissors") || (computerChoice === "Paper" && playerChoice === "Rock") || (computerChoice === "Scissors" && playerChoice === "Paper")) {
        resultDiplay.textContent = "Computer Wins!"
        computerScore++;
    } else if (computerChoice === playerChoice) {
        resultDiplay.textContent = "Draw!"
    } else {
        resultDiplay.textContent = "Player Wins!"
        playerScore++;
    }

    playerScoreP.textContent = `Player Score: ${playerScore}`;
    compScoreP.textContent = `Computer Score: ${computerScore}`;
    
}

choiceDiv.onclick = gameLogic



