"use strict";

// generate a randon number, the number should be between 1 and 20
// Once the user adds the number in the guess input and clicks on click!, we should check if it matches the randome generated number in step 1
// if it matches then we update the number visible in the div with the number class with the guessed number and set the highscore to the current score
// if it does not match - if it is less then the generated number then we show the text too low and decrease the score
// if it does not match - if it is more then the generated number then we show the text too high and decrease the score

//When we click on Again, we reset the game but the highscore remains unchanged.

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log("randomNumber", randomNumber);
let button = document.querySelector(".check");
let score = 20;
let message = document.querySelector(".message");

button.addEventListener("click", function () {
  let guessedNumber = document.querySelector(".guess").value;

  // check if the number entered is empty, if so return false
  if (!guessedNumber) {
    message.textContent = "No Number!";
  } else if (Number(guessedNumber) === randomNumber) {
    // if the guessed number matches
    document.querySelector(".number").textContent = guessedNumber;
    message.textContent = "Correct Number!";
    if (score > Number(document.querySelector(".highscore").textContent)) {
      document.querySelector(".highscore").textContent = score;
    }
    document.querySelector("body").style.backgroundColor = "#60b347";
  } else if (Number(guessedNumber) !== randomNumber) {
    // if the guessed number is less
    if (score > 1) {
      message.textContent =
        guessedNumber < randomNumber ? "Too Low!" : "Too High!";
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You Lost";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Again Click
document.querySelector(".again").addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log("randomNumber1", randomNumber);
  score = 20;
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  message.textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
