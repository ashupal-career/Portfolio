let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#computer-score");
let userscID = userScore.getAttribute("id");
let compscID = compScore.getAttribute("id");
console.log(userscID + " " + compscID);
let userUpdateScore = 0;
let compUpdateScore = 0;
let msgChange = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const playGame = (userID) => {
  const compChoice = genCompChoice();
  //console.log("comp choice: " + compChoice);
  const userChoice = userID;
  //console.log("user choice: " + userChoice);
  if (compChoice === userChoice) {
    drawGame(compChoice, userChoice);
    msgChange.innerText = `Match is Draw!!!😎🥳 ${userChoice} === ${compChoice}`;
    msgChange.style.backgroundColor = "orange";
  } else {
    let winner = winGame(compChoice, userChoice);
    if (winner) {
      userUpdateScore++;
      console.log("User Wins!!!");
      //userUpdateScore = userUpdateScore + 1;
      console.log("User Score:" + userUpdateScore);
      userScore.innerText = userUpdateScore;
      msgChange.innerText = `You are the Winnnerrr!!!😎🥳 ${userChoice} beats ${compChoice}`;
      msgChange.style.backgroundColor = "green";
    } else {
      compUpdateScore++;
      console.log("Computer Wins!!");
      //compUpdateScore = compUpdateScore + 1;
      console.log("Computer Score:" + compUpdateScore);
      compScore.innerText = compUpdateScore;
      msgChange.innerText = `Computer winss!!!😒🤨😶‍🌫️🤐😤 ${compChoice} beats ${userChoice}`;
      msgChange.style.backgroundColor = "red";
    }
  }
};

const scoreUpdate = () => {};

const drawGame = (compChoice, userChoice) => {
  if (compChoice === userChoice) {
    console.log("Game is Draw!!");
  }
};

const winGame = (compChoice, userChoice) => {
  let userWin = false;
  if (userChoice === "rock") {
    userWin = compChoice === "scissors" ? true : false;
  } else if (userChoice === "paper") {
    userWin = compChoice === "rock" ? true : false;
  } else {
    userWin = compChoice === "paper" ? true : false;
  }

  return userWin;
};

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randomSelection = Math.floor(Math.random() * 3);
  return options[randomSelection];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userID = choice.getAttribute("id");
    //console.log(userID + " is clicked");
    playGame(userID);
  });
});
