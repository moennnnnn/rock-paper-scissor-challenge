let score = 0;
 
function playerPick(playerChoice) {

    const choices = ['rock', 'paper', 'scissors'];

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (playerChoice === computerChoice) {

        result = "IT'S A TIE";

    } else if (

        (playerChoice === "rock" && computerChoice === "scissors") ||

        (playerChoice === "paper" && computerChoice === "rock") ||

        (playerChoice === "scissors" && computerChoice === "paper")

    ) {

        result = "YOU WIN";

        score++;

    } else {

        result = "YOU LOSE";

        score--;

    }
 
    document.getElementById("score").innerText = score;
 
    document.getElementById("player-choice").innerHTML = `
<img src="/rock-paper-scissors-master/images/icon-${playerChoice}.svg" alt="${playerChoice}" width="60">

    `;

    document.getElementById("computer-choice").innerHTML = `
<img src="/rock-paper-scissors-master/images/icon-${computerChoice}.svg" alt="${computerChoice}" width="60">

    `;
 
    setBorderColor("player-choice", playerChoice);

    setBorderColor("computer-choice", computerChoice);
 
    document.getElementById("result-message").innerText = result;

    document.getElementById("game").style.display = "none";

    document.getElementById("result").style.display = "flex";

}
 
function setBorderColor(id, choice) {

    let color = "";

    if (choice === "rock") color = "#dc2e4e";

    if (choice === "paper") color = "#eca922";

    if (choice === "scissors") color = "#4865f4";
 
    document.getElementById(id).style.borderColor = color;

}
 
function playAgain() {

    document.getElementById("game").style.display = "flex";

    document.getElementById("result").style.display = "none";

}
 
function openRules() {

    document.getElementById("rules-popup").style.display = "flex";

}
 
function closeRules() {

    document.getElementById("rules-popup").style.display = "none";

}

 