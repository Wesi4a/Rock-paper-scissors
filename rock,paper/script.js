const playerT = document.querySelector("#playerT");
const computerT = document.querySelector("#computerT");
const resultT = document.querySelector("#resultT");
const choiceBtns = document.querySelectorAll(".choicebtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click",() => {
    player = button.textContent;
    computerTurn();
    playerT.textContent = `Player: ${player}`;
    computerT.textContent = `Computer: ${computer}`;
    resultT.textContent = checkWinner();
}));

function computerTurn  () {

    const randomNumber = Math.floor(Math.random() *3) + 1;

    switch (randomNumber){ 
        case 1:
            computer = "ROCK";
            break;
        case 2 :
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}
 function checkWinner(){
    if(player == computer){
        return "Draw";
    }
    else if(computer == "ROCK"){
        return(player == "PAPER") ? "You win!" : "You lose!"
    }
    else if(computer == "PAPER"){
        return(player == "SCISSORS") ?"You win!" : "You lose!"
    }
    else if(computer == "SCISSORS"){
        return(player == "ROCK") ?"You win!" : "You lose!"
    }
 }