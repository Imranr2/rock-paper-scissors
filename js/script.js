const ROCK = "ROCK"
const PAPER = "PAPER"
const SCISSORS = "SCISSORS"
const CHOICES = [ROCK, PAPER, SCISSORS]

function computerPlay() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}