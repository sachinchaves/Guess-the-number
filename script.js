"use strict";

// generate a randon number, the number should be between 1 and 20
// Once the user adds the number in the guess input and clicks on click!, we should check if it matches the randome generated number generated in step 1
// if it matches then we update the number visible in the div with the number class with the guessed number and set the highscore to the current score
// if it does not match - if it is less then the generated number then we show the text too low and decrease the score
// if it does not match - if it is more then the generated number then we show the text too high and decrease the score

//When we click on Again, we reset the game but the highscore remains unchanged.

let randomNumber = Math.floor(Math.random() * 21);
console.log("randomNumber", randomNumber);

let button = document.querySelector(".check");
let score = 20;

// console.log("guessedNumber", guessedNumber);
let message = document.querySelector(".message");

button.addEventListener("click", function () {
  console.log("this is clicked");
  let guessedNumber = document.querySelector(".guess").value;
  console.log("guessedNumber", guessedNumber);
});
