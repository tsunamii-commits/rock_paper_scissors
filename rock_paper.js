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


function getPlayerChoice() {
    input = prompt("Rock, Paper, Scissors?")
    return input.toLowerCase()
}

function getComputerChoice(list) {
    return list[Math.floor((Math.random()*list.length))]
}

function checkWinner(computerSelection, playerSelection){
if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper" ){
        playerPoint++;
        return "You Win! " + playerSelection + " beats " + computerSelection + ".";
    } else if (!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")) {
        return "Invalid input :(";
    } else if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors" ) { 
        return "Wowee, it's a tie!";
    } else {
        computerPoint++;
        return "You Lose! " + computerSelection + " beats " + playerSelection + " :( .";
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice()
        const computerSelection = getComputerChoice(["rock","paper","scissors"])
        checkWinner()
        console.log("* " + checkWinner(computerSelection, playerSelection))
        console.log("Your choice: " + playerSelection)
        console.log("Computer choice: " + computerSelection)
    }

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

game()