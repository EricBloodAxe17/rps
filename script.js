const player = document.getElementById("par1");
const computer = document.getElementById("par2");
const resultText = document.getElementById("par3");
const Pscore = document.getElementById("par4");
const Cscore = document.getElementById("par5");

let playerS = 0;
let compS = 0;
const choice = ["rock", "paper", "scissors"];

function playgame(PlayerChoice) {
    const rand = choice[Math.floor(Math.random() * 3)];
    let result = "";

    if (PlayerChoice === rand) {
        result = "It's a Tie!";
    } else {
        switch (PlayerChoice) {
            case "rock":
                result = (rand === "scissors") ? "You win!" : "You lost!";
                break;
            case "paper":
                result = (rand === "rock") ? "You win!" : "You lost!";
                break;
            case "scissors":
                result = (rand === "paper") ? "You win!" : "You lost!";
                break;
        }

        if (result === "You win!") {
            playerS++;
        } else if (result === "You lost!") {
            compS++;
        }
    }

    player.textContent = `Player: ${PlayerChoice}`;
    computer.textContent = `Computer: ${rand}`;
    resultText.textContent = result;
    Pscore.textContent = `Player Score: ${playerS}`;
    Cscore.textContent = `Computer Score: ${compS}`;
}
