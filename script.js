function rps() {
    const getUserChoice = (userInput) => {
        if (
            userInput === "rock" ||
            userInput === "paper" ||
            userInput === "scissors" ||
            userInput === "bomb"
        ) {
            return userInput;
        } else {
            return "Error";
        }
    };

    const getComputerChoice = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2:
                return "scissors";
        }
    };

    const determineWinner = (userChoice, computerChoice) => {
        if (userChoice === "bomb") {
            return "You found the secret cheat code! You win!";
        }

        if (userChoice === computerChoice) {
            return "It's a tie!";
        }

        if (userChoice === "rock") {
            return computerChoice === "paper" ? "The computer won!" : "You won!";
        }

        if (userChoice === "paper") {
            return computerChoice === "scissors" ? "The computer won!" : "You won!";
        }

        if (userChoice === "scissors") {
            return computerChoice === "rock" ? "The computer won!" : "You won!";
        }
    };

    const userChoiceElement = document.getElementById("userChoice");
    const userChoice = getUserChoice(userChoiceElement.value);
    const computerChoice = getComputerChoice();

    const result = determineWinner(userChoice, computerChoice);

    const outputElement = document.getElementById("output");
    outputElement.innerHTML = `
        <p>You chose: ${userChoice}</p>
        <p>The computer chose: ${computerChoice}</p>
        <p>${result}</p>
    `;
    outputElement.style.display = "block"; // Show the output box
}
