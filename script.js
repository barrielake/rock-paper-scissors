let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

const resultDisplay = document.querySelector("#result");
const ScoreDisplay = document.querySelector("#score");
const finalResultDisplay = document.querySelector("#final-result");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", ()=> playRound("Rock",computerPlay()));
paperButton.addEventListener("click", ()=> playRound("Paper",computerPlay()));
scissorsButton.addEventListener("click", ()=> playRound("Scissors",computerPlay()));

//Get the computer's random choice.
function computerPlay(){ 
    let random123 = Math.floor((Math.random()*3) + 1) //pick a random number between 1 and 3.
    switch (random123){
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}

function playRound(playerSelection,computerSelection){
    //Check for draw
    if (playerSelection == computerSelection){
        printResult("draw",playerSelection,computerSelection); 
        return;
    }
    //If not a draw, check whether the player wins or loses.
    let result = "";
    switch (playerSelection){
        case "Rock":
            if (computerSelection == "Scissors"){
                result = "win";
            } else result = "lose";
            break;
        
        case "Paper":
            if (computerSelection == "Rock"){
                result = "win";
            } else result = "lose";
            break;
        
        case "Scissors":
            if (computerSelection == "Paper"){
                result = "win";
            } else result = "lose";
            break;
    }    
    printResult(result, playerSelection, computerSelection);
    updateScore(result); //increments and prints updated scores

    if (playerScore === winningScore){
        endGame("player wins")
    } else if (computerScore === winningScore){
        endGame("computer wins");
    }
}

function printResult(result,playerSelection,computerSelection){
    switch(result){
        case "win":
            resultDisplay.textContent = `You WIN. ${playerSelection} beats ${computerSelection}.`;
            break;
        case "lose":
            resultDisplay.textContent = `You LOSE. ${computerSelection} beats ${playerSelection}.`;
            break;
        case "draw":
            resultDisplay.textContent = `It's a DRAW. You both picked ${playerSelection}.`;
            break;
    }
}

function updateScore(result){
    if (result === "win"){
        playerScore++;
    } else computerScore++; 

    ScoreDisplay.textContent = `Score:  YOU: ${playerScore} COMPUTER: ${computerScore}`;
}

function endGame(finalResult){
    if (finalResult === "player wins"){
        finalResultDisplay.textContent = "You won the game!"; 
    } else finalResultDisplay.textContent = "You lost the game!";
    //prevent user from making more plays after the game is over
    rockButton.setAttribute("disabled", "true");
    paperButton.setAttribute("disabled", "true");
    scissorsButton.setAttribute("disabled", "true");
    //add a reset button to the page
    let resetButton = document.createElement("button");
    resetButton.textContent = "Play again?";
    resetButton.addEventListener("click", () => resetGame());
    finalResultDisplay.appendChild(resetButton);
}

function resetGame(){
    playerScore = 0
    computerScore = 0;
    resultDisplay.textContent = "Pick your weapon.";
    ScoreDisplay.textContent = "Score:  YOU: 0  COMPUTER: 0";
    finalResultDisplay.textContent = "";
    rockButton.removeAttribute("disabled");
    paperButton.removeAttribute("disabled");
    scissorsButton.removeAttribute("disabled");
}


