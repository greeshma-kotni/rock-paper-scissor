function makeChoice(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Update the computer choice image source directly in JavaScript
    const computerImg = document.getElementById('computerImg');
    computerImg.src = `static/images/${computerChoice}.png`;

    if (userChoice === computerChoice) {
        showMessage("It's a tie!");
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        showMessage("You win!");
    } else {
        showMessage("Computer wins!");
    }
}

function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function resetGame() {
    document.getElementById('message').textContent = "Choose an option above.";
    document.getElementById('computerImg').src = '';
}
