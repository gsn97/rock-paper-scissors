// Pseudocode Algorithm:
// 1. Create string Variable for user Input (userChoice)
let userChoice;
// 2. Create string Variable for Computer Choice (cpuChoice)
let cpuChoice;
// 3. Create integer Variable for User Score (userScore), default value should be 0
let userScore = 0;
// 4. Create integer Variable for Computer Score (cpuScore), default value should be 0
let cpuScore = 0;
// 5. Create Function that prompts the user for a choice (Rock, Paper, or Scissors) (getUserChoice) (make sure it's case insensitive)
//     - Plug that result into variable userChoice
//     - Print userChoice to the console with the message "You have chosen x"
function getUserChoice () {
    let userEntry = prompt("What'll it be? Rock, Paper, or Scissors?");
    userChoice = (userEntry.at(0).toUpperCase()) + (userEntry.slice(1).toLowerCase());
    console.log("   You have chosen " + userChoice + "!");
    return userChoice;
}
// 6. Create Function for Computer Choice by using a randomizer to generate Rock, Paper, or Scissors (getCpuChoice)
//     - Plug that into variable cpuChoice
//     - Print cpuChoice to the console with the message "Computer chooses y"
function getCpuChoice () {
    const randomChoice = Math.random();
    // console.log(randomChoice + ' is the # the randomizer generated (less than 1/3 = rock; between 1/3 and 2/3 = paper; more than 2/3 = scissors');
        if (randomChoice < (1/3)) {
            cpuChoice = "Rock"
        } else if (randomChoice < (2/3)) {
            cpuChoice = "Paper"
        } else {
            cpuChoice = "Scissors"
        }
    console.log("   The computer has chosen " + cpuChoice + ("!"));
    return cpuChoice;
}
// 7. Create a Function called playRound (with two parameters: userChoice and cpuChoice) (it should encompass the following)
function playRound() {
//      - It should call getUserChoice and then getCpuChoice
    getUserChoice();
    getCpuChoice();
// - If userChoice === cpuChoice, then print to console "It's a tie!"
//     - Print a score message
    if (userChoice === cpuChoice) {
        console.log("It's a tie!");
        console.log("The score is currently:");
        console.log("You: " + userScore + " || " + "Computer: " + cpuScore);
// - If userChoice is Rock and cpuChoice is Scissors:
//     - Add 1 to userScore and return it
//     - Print to console "You win! Rock crushes Scissors!"
//     - Print a score message
    } else if (userChoice === "Rock" && cpuChoice === "Scissors") {
        userScore = (userScore + 1);
        console.log("You win! Rock crushes Scissors!");
        console.log("The score is currently:");
        console.log("You: " + userScore + " || " + "Computer: " + cpuScore);
        return userScore;
// - If userChoice is Rock and cpuChoice is Paper:
//     - Add 1 to cpuScore and return it
//     - Print to console "You lose! Paper covers Rock!"
//     - Print a score message
    } else if (userChoice === "Rock" && cpuChoice === "Paper") {
        cpuScore = (cpuScore + 1);
        console.log("You lose! Paper covers Rock!");
        console.log("The score is currently:");
        console.log("You: " + userScore + " || " + "Computer: " + cpuScore);
        return cpuScore;
// - If userChoice is Paper and cpuChoice is Rock:
//     - Add 1 to userScore and return it
//     - Print to console "You win! Paper Covers Rock!"
//     - Print a score message
    } else if (userChoice === "Paper" && cpuChoice === "Rock") {
        userScore = (userScore + 1);
        console.log("You win! Paper Covers Rock!");
        console.log("The score is currently:");
        console.log("You: " + userScore + " || " + "Computer: " + cpuScore);
        return userScore;
// - If userChoice is Paper and cpuChoice is Scissors:
//     - Add 1 to cpuScore and return it
//     - Print to console "You lose! Scissors cuts Paper!"
//     - Print a score message
    } else if (userChoice === "Paper" && cpuChoice === "Scissors") {
        cpuScore = (cpuScore + 1);
        console.log("You lose! Scissors cuts Paper!");
        console.log("The score is currently:");
        console.log("You: " + userScore + " || " + "Computer: " + cpuScore);
        return cpuScore;
// - If userChoice is Scissors and cpuChoice is Paper:
//     - Add 1 to userScore and return it
//     - Print to console "You win! Scissors cuts Paper!"
//     - Print a score message
    } else if (userChoice === "Scissors" && cpuChoice === "Paper") {
        userScore = (userScore + 1);
        console.log("You win! Scissors cuts Paper!");
        console.log("The score is currently:");
        console.log("You: " + userScore + " || " + "Computer: " + cpuScore);
        return userScore;
// - If userChoice is Scissors and cpuChoice is Rock:
//     - Add 1 to cpuScore and return it
//     - Print to console "You lose! Rock crushes Scissors!"
//     - Print a score message
    } else if (userChoice === "Scissors" && cpuChoice === "Rock") {
        cpuScore = (cpuScore + 1);
        console.log("You lose! Rock crushes Scissors!");
        console.log("The score is currently:");
        console.log("You: " + userScore + " || " + "Computer: " + cpuScore);
        return cpuScore;
// Else return error message
    } else {
        console.log("Hmm...something went wrong.");
        console.log("The score is currently:");
        console.log("You: " + userScore + " || " + "Computer: " + cpuScore);
    }
}
// 8. Create a function called playGame that calls playRound 5 times, and then displays a final score with the winner
function playGame(userScore, cpuScore) {
    alert("Welcome to Rock, Paper, Scissors! By gsn97 - October 2025. This game will last 5 rounds!");
    console.log("Round 1:")
    playRound();
    console.log("Round 2:")
    playRound();
    console.log("Round 3:")
    playRound();
    console.log("Round 4:")
    playRound();
    console.log("FINAL ROUND! - Round 5:")
    playRound();
    if (userScore > cpuScore) {
        console.log("CONGRATULATIONS YOU WIN!")
    } else if (userScore < cpuScore) {
        console.log("BOO YOU STINK AND YOU SHOULD FEEL BAD!");
    } else {
        console.log("Final score is a tie. Boooring, you should refresh and keep trying!")
    }
}
playGame();
