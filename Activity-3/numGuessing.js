// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
function checkGuess() {

const guessInput = document.getElementById('guessInput').value;
 const message = document.getElementById('message');
 // Check if the input is a number between 1 and 10
 if (isNaN(guessInput) || guessInput < 1 || guessInput > 10) {
 message.textContent = 'Invalid input: Please input a number between 1 and 10.';
 return;
 }
 const guess = parseInt(guessInput);
 // Increase the number of attempts
 attempts++;
 // Check if the guess is correct
 if (guess === randomNumber) {
 message.textContent = `Congratulations! You've guessed the correct number
(${randomNumber}) in ${attempts} attempts.`;
 } else if (guess < randomNumber) {
 message.textContent = 'Too low. Try again!';
 } else {
 message.textContent = 'Too high. Try again!';
 }
}