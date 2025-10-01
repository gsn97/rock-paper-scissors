let userChoice;
let cpuChoice;
let userScore = 0;
let cpuScore = 0;
// declared variables for choices and scores

function getUserChoice () {
   userChoice = prompt(`What will you play? Enter 1 for Rock, 2 for Paper, or 3 for Scissors.`);
    return userChoice;
}

function showUserChoice (){
    if (userChoice === (`1`)) {
    console.log(`You have chosen Rock! The computer plays...`);
    } else if (userChoice === (`2`)) {
    console.log(`You have chosen Paper! The computer plays...`);
    } else if (userChoice === (`3`)) {
    console.log(`You have chosen Scissors! The computer plays...`);
    } else {
    alert(`Invalid input :(`);
    console.log(`You didn't follow the instructions, and the computer played...`);
    }
}

function getRandomCpuChoice () {
    let cpuRandom = Math.random();
    return cpuRandom;
}

function showCpuChoice(cpuRandom) {
        if (cpuRandom < 1 / 3) {
        cpuChoice = `1`;
        console.log(`ROCK!`);
        console.log(cpuChoice);
    } else if (cpuRandom < 2 / 3) {
        cpuChoice = `2`;
        console.log(`PAPER!`);
        console.log(cpuChoice);
    } else {
        cpuChoice = `3`;
        console.log(`Scissors!`);
        console.log(cpuChoice);
    }
    return cpuChoice;
}
 function showRoundWinner(userChoice, cpuChoice) {
    if (userChoice = cpuChoice) { // user and cpu tie
        console.log(`It's a tie! No points awarded.`);
    }
    else if (userChoice === (`1`)) { //user chooses rock
        if (cpuChoice === (`3`)) { // cpu chooses scissors and loses
            console.log(`You win! 1 point awarded to you!`);
            userScore = userScore + 1;
            return userScore;
        } else { // cpu chooses paper and wins
            console.log(`You lose! 1 point awarded to the computer!`);
            cpuScore = cpuScore + 1;
            return cpuScore;
        }
    } else if (userChoice === (`2`)) { // user chooses paper
        if (cpuChoice === (`1`)) { // cpu chooses rock and loses
            console.log(`You win! 1 point awarded to you!`);
            userScore = userScore + 1;
            return userScore;    
        } else { // cpu chooses scissors and wins
            console.log(`You lose! 1 point awarded to the computer!`);
            cpuScore = cpuScore + 1;
            return cpuScore;
        } 
    } else { // user chooses scissors
        if (cpuChoice === (`2`)) { // cpu chooses paper and loses
            console.log(`You win! 1 point awarded to you!`);
            userScore = userScore + 1;
            return userScore;
        } else { // cpu chooses rock and wins
            console.log(`You lose! 1 point awarded to the computer!`);
            cpuScore = cpuScore + 1;
            return cpuScore;
        }
    }
 }


getUserChoice();
showUserChoice();
getRandomCpuChoice();
showCpuChoice();
showRoundWinner();

