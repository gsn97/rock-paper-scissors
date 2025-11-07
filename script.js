let userChoice;
let cpuChoice;
let userScore = 0;
let cpuScore = 0;
let currentRound = 0;

const round = document.querySelector("#round");

const results = document.querySelector("#results");

const userChoicePara = document.createElement("p");
const cpuChoicePara = document.createElement("p");
const roundResult = document.createElement("span");
const scoreText = document.createElement("h4");

const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");

function buttonPress(e) {
    userChoice = e.target.textContent;
    userChoicePara.textContent = ("You have chosen " + userChoice + "!");
    playRound();
    firstToFive();
}

btnRock.addEventListener("click", buttonPress);
btnPaper.addEventListener("click", buttonPress);
btnScissors.addEventListener("click", buttonPress);

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
    } else {
        console.log("   Who taught you how to type? Helen Keller?");
        scoreText.textContent = ("Score: " + "You: " + userScore + " || " + "Computer: " + cpuScore);
    }
    results.appendChild(userChoicePara);
    results.appendChild(cpuChoicePara);
    results.appendChild(roundResult);
    results.appendChild(scoreText);
}
function firstToFive() {    
    if (userScore === 5 || cpuScore === 5) {
        const finalScore = document.createElement("p");
        finalScore.style.fontWeight = "bold";
        finalScore.style.fontStyle = "italic";
        finalScore.style.fontSize = "20px";
        if (userScore < cpuScore) {
            finalScore.textContent = "You suck, computer wins!";
        } else if (userScore > cpuScore) {
            finalScore.textContent = "Yay! You win!";
        }
        results.appendChild(finalScore);
        round.textContent = ("Rounds Played: " + currentRound);
        const body = document.querySelector("body");
        body.removeChild(btnRock);
        body.removeChild(btnPaper);
        body.removeChild(btnScissors);
        const playAgain = document.createElement("form");
        results.appendChild(playAgain);
        const reset = document.createElement("button");
        reset.textContent = "Play Again";
        playAgain.appendChild(reset);
    }
}