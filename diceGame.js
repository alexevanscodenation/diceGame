const roll = document.getElementById("roll"); 
const score = document.getElementById("score");
const dice = document.getElementById("dice");
let player1 = 0

roll.addEventListener("click", () => {
    roll.textContent = "Roll";
    let myRoll = Math.ceil(Math.random() *6);
    dice.src = `${myRoll}.png`
    player1 += myRoll;
    score.textContent = (player1 > 11) ? `Keep Going!  ${player1}` : `Your score is: ${player1}`;
    if(myRoll === 1) {
        score.textContent = `You lose!`;
        player1 = 0;
        roll.textContent = `Try again?`;
    } else {
        if (player1 >= 20){
            score.textContent = `You win!`;
            player1 = 0;
            roll.textContent = `Play again?`;

        }
    }
})