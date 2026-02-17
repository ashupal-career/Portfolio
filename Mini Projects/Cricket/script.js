const choices = ["Bat","Ball","Stump"];
let userScore = 0;
let compScore = 0;

const resultText = document.getElementById("resultText");
const choicesText = document.getElementById("choices");
const userScoreEl = document.getElementById("userScore");
const compScoreEl = document.getElementById("compScore");

document.querySelectorAll(".choice").forEach(btn=>{
    btn.addEventListener("click", ()=>{
        const userMove = btn.dataset.choice;
        playGame(userMove);
    });
});

function playGame(userMove){
    const computerMove = generateComputerChoice();
    const result = getResult(userMove, computerMove);

    if(result === "User"){
        userScore++;
    }
    else if(result === "Computer"){
        compScore++;
    }

    updateUI(userMove, computerMove, result);
}

function generateComputerChoice(){
    return choices[Math.floor(Math.random()*3)];
}

function getResult(user, comp){

    if(user === comp) return "Tie";

    if(
        (user === "Bat" && comp === "Ball") ||
        (user === "Ball" && comp === "Stump") ||
        (user === "Stump" && comp === "Bat")
    ){
        return "User";
    }
    else{
        return "Computer";
    }
}

function updateUI(user, comp, result){
    choicesText.textContent = `You chose ${user} | Computer chose ${comp}`;

    if(result === "Tie"){
        resultText.textContent = "🤝 It's a Tie!";
    }
    else if(result === "User"){
        resultText.textContent = "🎉 You Win!";
    }
    else{
        resultText.textContent = "💻 Computer Wins!";
    }

    userScoreEl.textContent = userScore;
    compScoreEl.textContent = compScore;
}

document.getElementById("resetBtn").addEventListener("click", ()=>{
    userScore = 0;
    compScore = 0;
    userScoreEl.textContent = 0;
    compScoreEl.textContent = 0;
    resultText.textContent = "Game Reset!";
    choicesText.textContent = "";
});
