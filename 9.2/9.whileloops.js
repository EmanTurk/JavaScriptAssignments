const randomNumber = Math.floor(Math.random() * 51);

let userGuess;

while (userGuess !== randomNumber) {
  userGuess = parseInt(prompt("Guess a number between 0 and 50:"));

  if (userGuess === randomNumber) {
    alert("Congratulations! You guessed the right number.");
  } else if (userGuess < randomNumber) {
    console.log("Your guess is too low.");
  } else {
    console.log("Your guess is too high.");
  }
}
