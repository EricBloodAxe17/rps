function getComputerChoice() {
    const max = Math.floor(Math.random() * 3);

    if (max === 0) {
        return "rock";
    } else if (max === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const choice = getComputerChoice();
console.log(choice);