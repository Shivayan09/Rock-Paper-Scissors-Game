let userScore = 0;
let compScore = 0;

const options = document.querySelectorAll(".option");
const msg = document.querySelector("#msg");
const resultColor = document.querySelector(".result-show");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const i = Math.floor(Math.random()*3);
    return choices[i];
}
const drawGame = (userChoice) => {
    console.log("Game was draw");
    msg.innerText = `Draw! Both chose ${userChoice}`;
    resultColor.style.backgroundColor = "rgb(0, 26, 69)"
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        resultColor.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose!")
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        resultColor.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("User's choice : ", userChoice);
    console.log("Computer's choice : ", compChoice);
    if(userChoice==compChoice) {
        drawGame(userChoice);
    } else {
        let userWin = true;
        if(userChoice==="rock") {
            userWin = compChoice==="paper" ? false : true;
        } else if(userChoice==="paper") {
            userWin = compChoice==="scissors" ? false : true;
        } else {
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
options.forEach((option) => {
    console.log(option);
    option.addEventListener("click", () => {
        const userChoice = option.getAttribute("id");
        playGame(userChoice);
    });
});
