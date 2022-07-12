const ROCK = "ROCK"
const PAPER = "PAPER"
const SCISSORS = "SCISSORS"
const CHOICES = [ROCK, PAPER, SCISSORS]

function computerPlay() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === ROCK && computerSelection === SCISSORS) 
    || (playerSelection === SCISSORS && computerSelection === PAPER)
    || (playerSelection === PAPER && computerSelection === ROCK)) {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else if ((computerSelection === ROCK && playerSelection === SCISSORS) 
    || (computerSelection === SCISSORS && playerSelection === PAPER)
    || (computerSelection === PAPER && playerSelection === ROCK)) {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    } else {
        return "It's a draw!"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose rock, paper or scissors").toUpperCase()
        let computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
    }
}