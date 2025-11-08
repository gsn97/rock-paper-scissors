let userChoice;
let cpuChoice;
let userScore = 0;
let cpuScore = 0;
let currentRound = 0;
let winAmount;

const body = document.querySelector("body");

const round = document.querySelector("#round");

const winAmountPara = document.querySelector("#winAmountText");
winAmountPara.textContent = "Tip: The buttons below won't work until you select a number! ...Except the GitHub one :)"
winAmountPara.style.fontStyle = "italic";

const results = document.querySelector("#results");

const userChoicePara = document.createElement("p");
const cpuChoicePara = document.createElement("p");
const roundResult = document.createElement("span");
const scoreText = document.createElement("h4");

const btnSubmit = document.querySelector("#btnSubmit");
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");

btnSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    const input = document.querySelector("#winAmount");
    winAmount = +(input.value);
    if (winAmount > 0) {
        winAmountPara.textContent = ("First to " + winAmount + " wins!");
        winAmountPara.style.textDecoration = "underline";
        body.removeChild(document.querySelector("form"));
        btnRock.addEventListener("click", buttonPress);
        btnPaper.addEventListener("click", buttonPress);
        btnScissors.addEventListener("click", buttonPress);
        return winAmount;
    }
})

function buttonPress(e) {
    userChoice = e.target.textContent;
    userChoicePara.textContent = ("You have chosen " + userChoice + "!");
    playRound();
    firstToNum(winAmount);
}

function getCpuChoice () {
    const randomChoice = Math.random();
    if (randomChoice < (1/3)) {
        cpuChoice = "Rock";
    } else if (randomChoice < (2/3)) {
        cpuChoice = "Paper";
    } else {
        cpuChoice = "Scissors";
    }
    cpuChoicePara.textContent = ("The computer has chosen " + cpuChoice + ("!"));
    return cpuChoice;
}

function playRound() {
    currentRound++;
    round.textContent = ("Round: " + currentRound);
    getCpuChoice();
    if (userChoice === cpuChoice) {
        roundResult.textContent = "It's a tie!";
        roundResult.style.backgroundColor = "yellow";
        roundResult.style.color = "black";
        scoreText.textContent = ("Score: " + "You: " + userScore + " || " + "Computer: " + cpuScore);
    } else if (userChoice === "Rock" && cpuChoice === "Scissors") {
        userScore++;;
        roundResult.textContent =  "You win! Rock crushes Scissors!";
        roundResult.style.backgroundColor = "green";
        roundResult.style.color = "white";
        scoreText.textContent = ("Score: " + "You: " + userScore + " || " + "Computer: " + cpuScore);
    } else if (userChoice === "Rock" && cpuChoice === "Paper") {
        cpuScore++;
        roundResult.textContent = "You lose! Paper covers Rock!";
        roundResult.style.backgroundColor = "red";
        roundResult.style.color = "white";
        scoreText.textContent = ("Score: " + "You: " + userScore + " || " + "Computer: " + cpuScore);
    } else if (userChoice === "Paper" && cpuChoice === "Rock") {
        userScore++;;
        roundResult.textContent = "You win! Paper Covers Rock!";
        roundResult.style.backgroundColor = "green";
        roundResult.style.color = "white";
        scoreText.textContent = ("Score: " + "You: " + userScore + " || " + "Computer: " + cpuScore);
    } else if (userChoice === "Paper" && cpuChoice === "Scissors") {
        cpuScore++;
        roundResult.textContent = "You lose! Scissors cuts Paper!";
        roundResult.style.backgroundColor = "red";
        roundResult.style.color = "white";
        scoreText.textContent = ("Score: " + "You: " + userScore + " || " + "Computer: " + cpuScore);
    } else if (userChoice === "Scissors" && cpuChoice === "Paper") {
        userScore++;;
        roundResult.textContent = "You win! Scissors cuts Paper!";
        roundResult.style.backgroundColor = "green";
        roundResult.style.color = "white";
        scoreText.textContent = ("Score: " + "You: " + userScore + " || " + "Computer: " + cpuScore);
    } else if (userChoice === "Scissors" && cpuChoice === "Rock") {
        cpuScore++;
        roundResult.textContent = "You lose! Rock crushes Scissors!";
        roundResult.style.backgroundColor = "red";
        roundResult.style.color = "white";
        scoreText.textContent = ("Score: " + "You: " + userScore + " || " + "Computer: " + cpuScore);
    }
    results.appendChild(userChoicePara);
    results.appendChild(cpuChoicePara);
    results.appendChild(roundResult);
    results.appendChild(scoreText);
}
function firstToNum(winAmount) {
    if (userScore === winAmount || cpuScore === winAmount) {
        const finalScore = document.createElement("p");
        finalScore.style.fontWeight = "bold";
        finalScore.style.fontStyle = "italic";
        finalScore.style.fontSize = "20px";
        if (userScore < cpuScore) {
            finalScore.textContent = "You stink worse than you look, computer wins!";
        } else if (userScore > cpuScore) {
            finalScore.textContent = "HOLY ****! You win!";
        }
        results.appendChild(finalScore);
        round.textContent = ("Rounds Played: " + currentRound);
        const choiceButtons = document.querySelector("#choiceButtons");
        choiceButtons.removeChild(btnRock);
        choiceButtons.removeChild(btnPaper);
        choiceButtons.removeChild(btnScissors);
        body.removeChild(document.querySelector("br"));
        const playAgain = document.createElement("form");
        results.appendChild(playAgain);
        const reset = document.createElement("button");
        reset.textContent = "Play Again";
        playAgain.appendChild(reset);
    }
}