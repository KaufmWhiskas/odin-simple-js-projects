/* Rock = 0, Paper = 1, Scissors = 2 */

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

function playRound(humanChoice){
    const choices = ["Rock", "Paper", "Scissors"];

    let computerChoice = getComputerChoice()

    if (humanChoice === computerChoice) {
        return `Draw! You both picked ${choices[humanChoice]}`;
    }

    let result = (humanChoice - computerChoice + 3) % 3;

    if (result === 1) {
        humanScore++;
        score.textContent = `Score: H:${humanScore} - C:${computerScore}`
        choice.textContent = `Choices: H:${choices[humanChoice]} - C:${choices[computerChoice]}`
        if (humanScore >= 5) {
            winner.textContent = "You won the game!"
            rock.remove()
            paper.remove()
            scissors.remove()
        }
    } else {
        computerScore++;
        score.textContent = `Score: H:${humanScore} - C:${computerScore}`
        choice.textContent = `Choices: H:${choices[humanChoice]} - C:${choices[computerChoice]}`
        if (computerScore >= 5) {
            winner.textContent = "You lost the game! :("
            rock.remove()
            paper.remove()
            scissors.remove()
        }
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const score = document.querySelector("#score");
const choice = document.querySelector("#last_choice");
const winner = document.querySelector("#winner")

rock.addEventListener("click", () => playRound(0));
paper.addEventListener("click", () => playRound(1));
scissors.addEventListener("click", () => playRound(2));