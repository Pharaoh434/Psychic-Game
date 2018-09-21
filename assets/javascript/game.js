var letterOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];
document.onkeyup = function(event) {
var userGuess = (event.key).toLowerCase();


if (letterOptions.indexOf(userGuess) > -1) {
lettersGuessed.push(userGuess);
}

if (userGuess === computerGuess) {
    wins++;
    guessesLeft = 10;
    lettersGuessed = [];
    computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];
}

if (userGuess !== computerGuess){
    guessesLeft--;
}

if (guessesLeft === 0) {
    losses++;
    guessesLeft= 9;
    lettersGuessed = [];
    computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];
}

var html =
"<h1>The Psychic Game</h1>" +
"<p>Guess what letter I'm thinking of</p>" +
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses Left: " + guessesLeft + "</p>" +
"<p>Incorrect guesses: " + lettersGuessed + "</p>";

document.getElementById("game").innerHTML = html;
console.log("You Guess:" + userGuess);
console.log("Computer Guess: " + computerGuess);
};