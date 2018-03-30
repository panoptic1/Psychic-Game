//==========================VARIABLES=================================
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;

var losses = 0;

var guessesLeft = 10;

var letterGuess = [];

var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];


//=========================LOGIC========================================
console.log(randomLetter);

document.onkeyup = function(event) {
    //Computer picks a random letter from the array
    console.log(randomLetter);
    var userPick = event.key; //User enters a key, and the script recognizes
    if (userPick !== randomLetter) {
        if (letterGuess.indexOf(userPick) < 0) {
            guessesLeft --;
            document.getElementById("guessesLeft").textContent = guessesLeft;
            letterGuess.push(userPick);
            document.getElementById("guessedLetters").textContent = letterGuess;
        }
    }
    
    else {
        wins ++;
        document.getElementById("wins").textContent = wins;
        guessesLeft = 10;
        document.getElementById("guessesLeft").textContent = guessesLeft;
        guessedLetters = [];
        document.getElementById("guessedLetters").textContent = letterGuess;
        randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    if (guessesLeft == 0) {
        losses ++;
        randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        letterGuess = [];
        guessesLeft = 10; 
        document.getElementById("losses").textContent = losses;
        document.getElementById("guessedLetters").textContent = letterGuess;
        document.getElementById("guessesLeft").textContent = guessesLeft;
    }
}
