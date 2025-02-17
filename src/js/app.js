const holeGame = document.querySelectorAll(".hole");
const gameDead = document.getElementById("dead");
const gameLost = document.getElementById("lost");
const button = document.getElementById("btn");

let elem;
let victory = 0;
let exit = 0;
let a = 0;
let b = 0;
let timeId;
let i = 0;

function time() {
  for (i = 0; i < holeGame.length; i++) {
    holeGame[i].addEventListener("click", handler);
  }
}

button.addEventListener("click", handler1);

function handler1() {
  time();
  timeId = setInterval(numbers_cells, 800);
}

function handler() {
  elem = this.classList.contains("hole_has-mole");
  if (elem) {
    victory = victory + 1;
    gameDead.textContent = victory;
    if (victory === 10) {
      clearInterval(timeId);
      alert("Вы победили!");
      victory = 0;
      exit = 0;
      gameDead.textContent = 0;
      gameLost.textContent = 0;
    }
  } else {
    exit = exit + 1;
    gameLost.textContent = exit;
    if (exit === 5) {
      clearInterval(timeId);
      alert("Вы проиграли!");
      victory = 0;
      exit = 0;
      gameDead.textContent = 0;
      gameLost.textContent = 0;
    }
  }
}

function numbers_cells() {
  holeGame[a].classList.remove("hole_has-mole");
  while (a == b) {
    a = Math.floor(Math.random() * holeGame.length);
  }
  b = a;
  holeGame[b].classList.add("hole_has-mole");
}
