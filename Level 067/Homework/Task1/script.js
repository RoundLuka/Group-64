const playerScore = document.getElementById("playerScore");
const aiScore = document.getElementById("aiScore");
const win = document.getElementById("newGame");
const optionDiv = document.getElementById("userInput");
const compChoiceP = document.getElementById("compChoice");

const choices = ['rock','paper','scissors'];

let myScore = 0;
let compScore = 0;

optionDiv.addEventListener("click",function(e){
    if(e.target.id != "rock" && e.target.id != "paper" && e.target.id != "scissors"){
        return;
    }

    const choiceId = e.target.id;

    const aiChoice = choices[Math.floor(Math.random() * choices.length)];
    compChoiceP.textContent = aiChoice;
    if(choiceId === aiChoice){
        win.textContent = "Draw!";
    }
    else if((choiceId === 'rock' && aiChoice === "paper") || (choiceId === "scissors" && aiChoice === "rock") || (choiceId === 'paper' && aiChoice === 'scissors')){
        compScore++;
        aiScore.textContent = "Computer score " + compScore;
        win.textContent = 'You lost!';
    }
    else{
        myScore++;
        playerScore.textContent = "Your score " + myScore;
        win.textContent = 'You won!';
    }
    
});