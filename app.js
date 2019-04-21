var userScore = 0;
var pcScore = 0;
const userScore_span = document.getElementById("user-score");
const pcScore_span = document.getElementById("pc-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getPcChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choices[randomNumber];
}

console.log(getPcChoice());

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";

}

function win(user, pc){
    userChoice_div=document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    pcScore_span.innerHTML = pcScore;
    result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(pc)}. You win! 🔥`;
    userChoice_div.classList.add('green-glow');
    setTimeout(()=> userChoice_div.classList.remove('green-glow'), 500);

}

function lose(user, pc){
  userChoice_div=document.getElementById(user);
  pcScore++;
  userScore_span.innerHTML = userScore;
  pcScore_span.innerHTML = pcScore;
  result_p.innerHTML = `${convertToWord(user)} loses to ${convertToWord(pc)}. You lost...💩`;
  userChoice_div.classList.add('red-glow');
  setTimeout(()=> userChoice_div.classList.remove('red-glow'), 500);

}
function draw(user, pc){
  userChoice_div=document.getElementById(user);
  result_p.innerHTML = `${convertToWord(user)} equals ${convertToWord(pc)}. It's a draw.`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(()=> userChoice_div.classList.remove('gray-glow'), 500);

}

function game(userChoice) {
  const pcChoice = getPcChoice();
  switch (userChoice + pcChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, pcChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, pcChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
     draw(userChoice, pcChoice);
      break;
  }
}



function main() {
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}

main();
