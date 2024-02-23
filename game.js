let targetNumber;
let attempts = 0;

function generateRandomNumber() {
    targetNumber = Math.floor(Math.random() * 50) + 1;
}

// Call generateRandomNumber on page load
generateRandomNumber();

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    attempts++;

    if (userGuess === targetNumber) {
        document.getElementById('feedback').innerHTML = `🎉 Congratulations! You guessed the number in ${attempts} attempts! 🎉`;
        // Reset attempts and generate new target number
        attempts = 0;
        generateRandomNumber();
    } else if (userGuess < targetNumber) {
        document.getElementById('feedback').innerHTML = 'Too low! Try a higher number! 🔼';
    } else {
        document.getElementById('feedback').innerHTML = 'Too high! Try a lower number! 🔽';
    }
}
