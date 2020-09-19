// get random computer choices

function computerPlay() {
    const gamechoices = ['rock', 'paper', 'scissors']
    const compChoice = Math.round(Math.random() * 2)
    return gamechoices[compChoice].toLowerCase();
}


// get user input

function userPlay() {
    let userchoice = prompt('Game started choose between Rock, Paper, Scissors')
    return userchoice
}


//fuction that plays one round of game and return the results

function playRound(computerSelection, playerSelection) {
    let results;
    if (computerSelection === 'rock') {
        switch (playerSelection) {
            case 'rock':
                results = "You Tie!";
                break;
            case 'paper':
                results = "You Win!  Paper beats Rock";
                playerScore++;
                break;
            case 'scissors':
                results = "You Lose! Rock beats Scissors";
                computerScore++;
                break;
        }
    } else if (computerSelection === 'paper') {
        switch (playerSelection) {
            case 'rock':
                results = "You Lose! Paper beats Rock";
                computerScore++;
                break;
            case 'paper':
                results = "You Tie!";
                break;
            case 'scissors':
                results = "You Win! Scissors beats Paper";
                playerScore++;
                break;
        }
    } else if (computerSelection === 'scissors') {
        switch (playerSelection) {
            case 'rock':
                results = "You Win! Rock beats Scissors";
                playerScore++;
                break;
            case 'paper':
                results = "You Lose! Scissors beats Paper";
                computerScore++;
                break;
            case 'scissors':
                results = "You Tie!";
                break;
        }
    }
    console.log(results);
}

//fuction to decide the first to win 3 games and also
// result overall score

function game() {
    playerScore = 0;
    computerScore = 0;
    while (playerScore < 3 && computerScore < 3) {
        playerSelection = userPlay();
        computerSelection = computerPlay();
        playRound(computerSelection, playerSelection);
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);
    }
    (playerScore > computerScore) ?
        console.log(`You Win! ${playerScore} - ${computerScore}`) :
        console.log(`You Lose! ${playerScore} - ${computerScore}`);
}
let playerSelection;
let computerSelection;
let playerScore;
let computerScore;

game()
















/*function finalResult(){
    if (userscore > compscore) {
        alert(`you won! the game final score: user: ${userscore}, computer: ${compscore}`)
        console.log(`you won! the game final score: user: ${userscore}, computer: ${compscore}`)


    }else if (userscore < compscore) {``
        console.log(`you lost! the game final score: user: ${userscore}, computer: ${compscore}`)

    }else {
        console.log(`its a tie! the game final score: user: ${userscore}, computer: ${compscore}`)

    }
}
*/