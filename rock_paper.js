/*User selects rock paper or scissors
Code selects rock paper or scissors too
If user selects rock and c does scissors, user wins
If user selects paper and c selects rock, user wins
If user selects scissors and c selects paper, user wins
If user selects something not in choices, they suck
All else, user loses 

Conditions:
- User can type in any case
- String returned has 2 parts: 
    - win or lose
    - What beats what
 */

let playerPoint = 0
let computerPoint = 0
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
let pResult = document.getElementById('result');
let pScore = document.getElementById('score');
var playerSelection;

    

//gets computer choice
function getComputerChoice() {
    const computerChoices = ["rock","paper","scissors"]
    const randomNum = [Math.floor((Math.random()*computerChoices.length))]
    return computerChoices[randomNum]
}

function checkWinner(computerSelection, playerSelection){
    console.log(computerSelection, playerSelection)
    console.log(computerPoint, playerPoint)
    console.log(pScore)
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper" ){
        playerPoint++;
        pResult.innerHTML = "You Win! " + playerSelection + " beats " + computerSelection + ".";
        pScore.innerHTML = "Your Score: "+ playerPoint + " | " + "Computer Score: " + computerPoint;
        // return "You Win! " + playerSelection + " beats " + computerSelection + ".";
    } else if (!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")) {
        //const p = document.createElement('p');
        pResult.innerHTML = "Invalid input :(";
        pScore.innerHTML = "Your Score: "+ playerPoint + " | " + "Computer Score: " + computerPoint;
        // outcomeDiv.appendChild(p);
        //return "Invalid input :(";
    } else {
        computerPoint++;
        //const p = document.createElement('p');
        pResult.innerHTML = "You Lose! "+ computerSelection + " beats " + playerSelection + " :( .";
        pScore.innerHTML = "Your Score: "+ playerPoint + " | " + "Computer Score: " + computerPoint;

        //outcomeDiv.appendChild(p);
        //return "You Lose! " + computerSelection + " beats " + playerSelection + " :( .";
    }
} 

function resetScore () {
        playerPoint = 0;
        computerPoint = 0;
}
const checkResult = (playerPoint,computerPoint) => {
    if (playerPoint === 5) {
        pResult.innerHTML = "You win! Humans rule!";
        resetScore();
    } else if (computerPoint === 5) {
        pResult.innerHTML = "You lose! The singularity is coming!";
        resetScore();        
}
}

rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    checkWinner(computerSelection, playerSelection);
    checkResult(playerPoint,computerPoint);
});

paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    checkWinner(computerSelection, playerSelection);
    checkResult(playerPoint,computerPoint);
});
    

scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    checkWinner(computerSelection, playerSelection);
    checkResult(playerPoint,computerPoint);
});


//loops the game 5 times
/*
function game() {
    for (let i = 0; i < 5; i++) {

        checkWinner()
        console.log("* " + checkWinner(computerSelection, playerSelection))
        console.log("Your choice: " + playerSelection)
        console.log("Computer choice: " + computerSelection)
    }


//measures points -> change this
    if (playerPoint > computerPoint) {
        console.log("*** You beat the computer! Great job :)")
        console.log("Your points: " + playerPoint)
        console.log("Computer points: " + computerPoint)
    } else if (playerPoint < computerPoint) {
        console.log("*** You lost. Be careful of the singularity!")
        console.log("Your points: " + playerPoint)
        console.log("Computer points: " + computerPoint)
    } else {
        console.log("*** It's a tie! We are all the same.")
        console.log("Your points: " + playerPoint)
        console.log("Computer points: " + computerPoint)
    }
        
}
*/
