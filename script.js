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
    userChoice = prompt("What'll it be? Rock, Paper, or Scissors?");
    console.log("You have chosen " + userChoice + "!");
    return userChoice;
}
// 6. Create Function for Computer Choice by using a randomizer to generate Rock, Paper, or Scissors (getCpuChoice)
//     - Plug that into variable cpuChoice
//     - Print cpuChoice to the console with the message "Computer chooses y"
function getCpuChoice () {
    const randomChoice = Math.random();
        if (randomChoice < (1/3)) {
            cpuChoice = "Rock"
        } else if (randomChoice < (2/3)) {
            cpuChoice = "Paper"
        } else {
            cpuChoice = "Scissors"
        }
    console.log("The computer has chosen " + cpuChoice + ("."));
    return cpuChoice;
}
getUserChoice();
getCpuChoice();
// 7. Create a Function called playRound (with two parameters: userChoice and cpuChoice) (it should encompass the following)
//      - It should call getUserChoice and then getCpuChoice
//         - If userChoice === cpuChoice, then print to console "It's a tie!"
//             - Print a score message
//         - If userChoice is Rock and cpuChoice is Scissors:
//             - Add 1 to userScore and return it
//             - Print to console "You win! Rock crushes Scissors!"
//             - Print a score message
//         - If userChoice is Rock and cpuChoice is Paper:
//             - Add 1 to cpuScore and return it
//             - Print to console "You lose! Paper covers Rock!"
//             - Print a score message
//         - If userChoice is Paper and cpuChoice is Rock:
//             - Add 1 to userScore and return it
//             - Print to console "You win! Paper Covers Rock!"
//             - Print a score message
//         - If userChoice is Paper and cpuChoice is Scissors:
//             - Add 1 to cpuScore and return it
//             - Print to console "You lose! Scissors cuts Paper!"
//             - Print a score message
//         - If userChoice is Scissors and cpuChoice is Paper:
//             - Add 1 to userScore and return it
//             - Print to console "You win! Scissors cuts Paper!"
//             - Print a score message
//         - If userChoice is Scissors and cpuChoice is Rock:
//             - Add 1 to cpuScore and return it
//             - Print to console "You lose! Rock crushes Scissors!"
//             - Print a score message
// 8. Create a function called playGame that calls playRound 5 times, and then displays a final score with the winner