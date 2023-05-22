
import "./sounds.js";
import { createAdventure } from "./createAdventure.js";
import { removeAllChilds } from "./removeAllChilds.js";
import { createCards } from "./createCards.js";
import { selectCategory } from "./selectCategory.js";
import { checkCategory } from "./checkCategory.js";
import { createRestartDialog } from "./trash.js";
import { showInfoDialog } from "./showInfoDialog.js";
import { closeDialog } from "./closeDialog.js";
import { adventures } from "./data.js";
import { play } from "./play.js";
import { playAgain } from "./playAgain.js";
import { changeButtonState } from "./changeButtonState.js";
import { selectValidAdventures } from "./selectAdventures.js";
import { yesCloseBtn, noCloseBtn } from "./yes-no-trash.js";
import { showSelectedCategory } from "./showSelectedCategory.js";


// Variables
let userAdventures = [];

// Ejecución en el momento de cargarse la página
window.addEventListener("load", (e) => {
  e.preventDefault();
  removeAllChilds(cardContainer);
  userAdventures = selectCategory(selectValidAdventures(adventures), checkCategory());
  createCards(cardContainer, userAdventures, "front");
});

// Containers
const cardContainer = document.querySelector(".card-container");

// // Dialogos
const infoDialogue = document.getElementById("information");
const closeDialogues = document.getElementsByTagName("dialog");
const createAdventureDialog = document.querySelector('#create-adventure');
const restartDialog = document.getElementById('restart-game');

// // Botones
const playBtn = document.getElementById("play-btn");
const playAgainBtn = document.getElementById("play-again-btn");
const closeButtons = document.getElementsByClassName("close-btn");
const helpButton = document.querySelector(".help-btn");
const createBtn = document.querySelector('.create-btn');
const restartGameBtn = document.getElementById('restart-game-btn');
const navButtons = document.querySelector("nav").children;

// Añade eventos de los elementos
playBtn.addEventListener("click", (e) => {
  e.preventDefault();
  play(cardContainer, userAdventures);
  changeButtonState(playBtn, true);
});
playAgainBtn.addEventListener("click", (e) => {
  e.preventDefault();
  playAgain(cardContainer, adventures);
  changeButtonState(playBtn, false);
});
helpButton.addEventListener("click", (e) => {
  e.preventDefault();
  showInfoDialog(infoDialogue);
});
createBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createAdventure(createAdventureDialog, adventures);
});
restartGameBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createRestartDialog(restartDialog);
});
closeDialog(closeButtons, closeDialogues);

restartDialog.addEventListener('click', (e) => {
  e.preventDefault();
  noCloseBtn(restartDialog);
});
restartDialog.addEventListener('click', (e) => {
  e.preventDefault();
  yesCloseBtn(restartDialog);
});

for (const btn of navButtons) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    showSelectedCategory(cardContainer, btn.innerText.toLowerCase());
  });
}
