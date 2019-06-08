let playerScore = 0;
let computerScore = 0;
const maxScore = 5;

const resultDisplay = document.querySelector("#result");
const ScoreDisplay = document.querySelector("#score");

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

    updateScore(result);
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
    
    if (playerScore == maxScore){
        endGame("player wins")
    } else if (computerScore == maxScore){
        endGame("computer wins");
    }
}

function endGame(finalResult){
    //reset scores
    playerScore = 0
    computerScore = 0;
    //announce winner
    if (finalResult === "player wins"){
        setTimeout(function(){alert("You won the game!")},1); 
    } else setTimeout(function(){alert("You won the game!")},1);
    //reset result and score displays
    resultDisplay.textContent = "Pick your weapon.";
    ScoreDisplay.textContent = "Score:  YOU: 0  COMPUTER: 0";
}


