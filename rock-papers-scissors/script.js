/* Rock = 0, Paper = 1, Scissors = 2 */

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Rock/Paper/Scissors ?");
    if(humanChoice.toLowerCase() == "rock"){
        return 0}
    else if(humanChoice.toLowerCase() == "paper"){
        return 1}
    else if(humanChoice.toLowerCase() == "scissors"){
        return 2}
    else{
    return "Not a correct input!";}
}

function playRound(computerChoice, humanChoice){
    if(humanChoice == 0 && computerChoice == 0){
        return "Draw! You both picked Rock"}
    else if(humanChoice == 0 && computerChoice == 1){
        ++computerScore;
        return "You lose! Paper beats Rock."}
    else if(humanChoice == 0 && computerChoice == 2){
        ++humanScore;
        return "You win! Rock beats Scissors."}

    else if(humanChoice == 1 && computerChoice == 1){
        return "Draw! You both picked Paper"}
    else if(humanChoice == 1 && computerChoice == 0){
        ++humanScore;
        return "You win! Paper beats Rock."}
    else if(humanChoice == 1 && computerChoice == 2){
        ++computerScore;
        return "You lose! Scissors beat Paper.."}

    else if(humanChoice == 2 && computerChoice == 2){
        return "Draw! You both picked Scissors"}
    else if(humanChoice == 2 && computerChoice == 0){
        ++computerScore;
        return "You lose! Rock beats Scissors."}
    else if(humanChoice == 2 && computerChoice == 1){
        ++humanScore;
        return "You win! Scissors beat Paper.."}
}

function playGame(){
    humanScore = 0;
    computerScore = 0;
    for(let i = 0; i < 5; i++){
        console.log(playRound(getComputerChoice(), getHumanChoice()));
        console.log("Human Score: " + humanScore)
        console.log("Computer Score: " + computerScore)
    }
    if(humanScore > computerScore){
        console.log("You won the game!")
    }
    else if(humanScore < computerScore){
        console.log("You lost! Better try another time.")
    }
    else{
        console.log("A draw... Feels worse than a lose?")
    }
}

playGame();