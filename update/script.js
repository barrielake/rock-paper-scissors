const numberOfRounds = 5;

let choices = document.querySelectorAll(".choice");
choices.forEach(image => image.addEventListener("click", beginRound));

let computerChoices = document.querySelectorAll(".computer-choice");

function highlightChoice(selected, choicelist){
    choicelist.forEach(function(choice){
        if (choice.id == selected) {
            choice.classList.remove("grayed");
        } else choice.classList.add("grayed");
    });
}

function getComputerChoice(){ 
    let random123 = Math.floor((Math.random()*3) + 1) //pick a random number between 1 and 3.
    switch (random123){
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}

function beginRound(){
    highlightChoice("none", choices);
    highlightChoice("none", computerChoices);
    let playerSelection = this.id; //id of image selected will be "Rock", "Paper", or "Scissors"
    let computerSelection = getComputerChoice();
    highlightChoice(playerSelection, choices);
    highlightChoice(computerSelection, computerChoices);
    
    updateGame(playerSelection,computerSelection);
}

let message = document.querySelector("#message");

function updateGame(playerSelection,computerSelection){
    let result = play(playerSelection,computerSelection);    
    
    switch(result){
        case "draw":
            message.textContent = `It's a draw! You both picked ${playerSelection}.`;
            break;
        case "win":
            message.textContent = `You win! ${playerSelection} beats ${computerSelection}.`
            break;
        case "lose":
            message.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`
            break;
    }
}

function play(playerSelection,computerSelection){
    if (playerSelection == computerSelection) return "draw";    
    switch (playerSelection){
        case "Rock":
            if (computerSelection == "Scissors") return "win"; 
            return "lose";
        case "Paper":
            if (computerSelection == "Rock") return "win"; 
            return "lose";
        case "Scissors":
            if (computerSelection == "Paper") return "win"; 
            return "lose";
    }
}

