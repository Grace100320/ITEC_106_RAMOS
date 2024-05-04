let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("player-choice").textContent = `Player Chose: ${playerChoice}`;
    document.getElementById("computer-choice").textContent = "Computer is Choosing...";

    setTimeout(() => {
        document.getElementById("computer-choice").textContent = `Computer Chose: ${computerChoice}`;

        if (playerChoice === computerChoice) {
            document.getElementById("outcome").textContent = "IT'S A TIE!";
        } else if (
            (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
            (playerChoice === "PAPER" && computerChoice === "ROCK") ||
            (playerChoice === "SCISSORS" && computerChoice === "PAPER")
        ) {
            document.getElementById("outcome").textContent = "YOU WIN!";
            playerScore++;
            document.getElementById("player-score").textContent = `Player Score: ${playerScore}`;
        } else {
            document.getElementById("outcome").textContent = "COMPUTER WINS!";
            computerScore++;
            document.getElementById("computer-score").textContent = `Computer Score: ${computerScore}`;
        }
    }, 1000); 
}
