let choices = document.querySelectorAll(".choice");
choices.forEach(image => image.addEventListener("click", beginRound));

let computerChoices = document.querySelectorAll(".computer-choice");

function highlightChoice(selected, choicelist){
    choicelist.forEach(function(choice){
        if (choice.id == selected){
            choice.classList.add("pulse");
            choice.classList.remove("grayed");
        } else {
            choice.classList.add("grayed");
            choice.classList.remove("pulse");
        }
    });
}

function beginRound(){
    highlightChoice("none", choices);
    highlightChoice("none", computerChoices);
    let playerSelection = this.id; //id of image selected will be "Rock", "Paper", or "Scissors"
    let computerSelection = getComputerChoice();
    highlightChoice(playerSelection, choices);
    highlightChoice(computerSelection, computerChoices);
    console.log(playerSelection + "v" + computerSelection + "=" + playRound(playerSelection,computerSelection));
}

function getComputerChoice(){ 
    let random123 = Math.floor((Math.random()*3) + 1) //pick a random number between 1 and 3.
    switch (random123){
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}

function playRound(playerSelection,computerSelection){
    if (playerSelection == "Invalid") return "invalid";
        
    if (playerSelection == computerSelection){
        return "draw";
    }
    
    switch (playerSelection){
        case "Rock":
            if (computerSelection == "Scissors"){
                return "win";
            } else return "lose";
        
        case "Paper":
            if (computerSelection == "Rock"){
                return "win";
            } else return "lose";
        
        case "Scissors":
            if (computerSelection == "Paper"){
                return "win";
            } else return "lose";
    }                
}

//helper function for game()
function printScore(playerScore,computerScore){
    return "SCORE - You: " + playerScore + " / Computer: " + computerScore;
}

function game(){
    const numberOfRounds = 5;
    let currentRound = 1;
    let playerScore = 0;
    let computerScore = 0;

    while (currentRound <= numberOfRounds){
        
        playerSelection = getNormalized(prompt("Rock! Paper! Scissors! Enter your choice: "));
        computerSelection = getComputerChoice();

        switch (playRound(playerSelection, computerSelection)){
            
            case "win":
                playerScore++;
                console.log("You win! " + playerSelection + " beats " + computerSelection + ". " + printScore(playerScore,computerScore));
                currentRound++;
                break;
            
            case "lose":
                computerScore++;
                console.log("You lose! " + computerSelection + " beats " + playerSelection + ". " + printScore(playerScore,computerScore));
                currentRound++;
                break;

            case "draw": //Note: Draws don't increase the score or advance the round.
                console.log("It's a draw! You both picked " + playerSelection + ". Play again.")
                break;
        }
    }
    if (playerScore > computerScore){
        console.log("You won the game!");
    } else console.log("You lost the game!"); //No chance of a draw for round of 5 (or any odd number)
}
//game(); //Play the game. */