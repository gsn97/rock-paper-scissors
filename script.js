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

function getRandomCpuChoice () { // generates a random value to be used for CPU's choice
    let cpuRandom = (Math.floor(Math.random() * 3) + 1);
    // console.log(cpuRandom);
    return cpuRandom;
}

function showCpuChoice(cpuRandom) { // determines how the random value above can equally result in rock, paper or scissors
    if (cpuRandom == 1) {
        cpuChoice = `1`;
        console.log(`Rock! ` + cpuChoice);
    } else if (cpuRandom == 2) {
        cpuChoice = `2`;
        console.log(`Paper! ` + cpuChoice);
    } else {
        cpuChoice = `3`;
        console.log(`Scissors! ` + cpuChoice);
    }
    return cpuChoice;

}

function getCpuChoice () {
    let cpuRandom = Math.floor(Math.random() * 3);
    switch (cpuRandom) {
    case 0:
            return `rock`;
        case 1:
            return `paper`;
        case 2:
            return `scissors`;
    }
}

function showRoundWinner(userChoice, cpuChoice) {
    if (userChoice = cpuChoice) { // user and cpu tie
        console.log(`It's a tie! No points awarded.`);
    }
    else if (userChoice === (`1`)) { //user chooses rock
        if (cpuChoice === (`3`)) { // cpu chooses scissors and loses
            console.log(`You win! Rock beats scissors! 1 point awarded to you!`);
            userScore = userScore + 1;
            return userScore;
        } else { // cpu chooses paper and wins
            console.log(`You lose! Paper beats rock! 1 point awarded to the computer!`);
            cpuScore = cpuScore + 1;
            return cpuScore;
        }
    } else if (userChoice === (`2`)) { // user chooses paper
        if (cpuChoice === (`1`)) { // cpu chooses rock and loses
            console.log(`You win! Paper beats rock! 1 point awarded to you!`);
            userScore = userScore + 1;
            return userScore;    
        } else { // cpu chooses scissors and wins
            console.log(`You lose! Scissors beats paper! 1 point awarded to the computer!`);
            cpuScore = cpuScore + 1;
            return cpuScore;
        } 
    } else { // user chooses scissors
        if (cpuChoice === (`2`)) { // cpu chooses paper and loses
            console.log(`You win! Scissors beats paper! 1 point awarded to you!`);
            userScore = userScore + 1;
            return userScore;
        } else { // cpu chooses rock and wins
            console.log(`You lose! Rock beats scissors! 1 point awarded to the computer!`);
            cpuScore = cpuScore + 1;
            return cpuScore;
        }
    }
    return userScore;
    return cpuScore;
 }



getUserChoice();
showUserChoice();
getRandomCpuChoice();
showCpuChoice();
showRoundWinner();
console.log(`Your Score: ` + userScore + `. Computer Score: ` + cpuScore);

