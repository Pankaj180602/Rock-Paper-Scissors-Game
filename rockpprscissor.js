let choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let message = document.querySelector("#msg");
let user = 0;
let comp = 0;

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const compChoiceGen = () => {
    const compChoicesList = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return compChoicesList[randomIdx];
}

const playGame = (userChoice) => {
    const compChoice = compChoiceGen();

    if (userChoice === compChoice) {
        message.innerText = "It's a draw, Play again!";
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        user++;
        userScore.innerText = user;
        message.innerText = `You Won! Your ${userChoice} beats comp's ${compChoice}`;
    }
    else {
        comp++;
        compScore.innerText = comp;
        message.innerText = `Comp Won! Comp's ${compChoice} beats your ${userChoice}`;
    }
};