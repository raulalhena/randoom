
import "./sounds.js";
import { createAdventure } from "./createAdventure.js";
import { removeAllChilds } from "./removeAllChilds.js";
import { showCards } from "./showCards.js";
import { selectCategory } from "./selectCategory.js";
import { shuffle } from "./shuffle.js";
import { checkCategory } from "./checkCategory.js";
import { createRestartDialog } from "./trash.js";
import { showInfoDialog } from "./showInfoDialog.js";
import { closeDialog } from "./closeDialog.js";
import { adventures } from "./data.js";
import { play } from "./play.js";
import { playAgain } from "./playAgain.js";
import { changeButtonState } from "./changeButtonState.js";

// Variables
let userAdventures = [];

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

// Añade eventos de los elementos
playBtn.addEventListener("click", (e) => {
  e.preventDefault();
  play(cardContainer, userAdventures);
  changeButtonState(playBtn);
});
playAgainBtn.addEventListener("click", (e) => {
  e.preventDefault();
  playAgain(cardContainer, adventures);
  changeButtonState(playBtn);
});
helpButton.addEventListener("click", (e) => {
  e.preventDefault();
  showInfoDialog(infoDialogue);
});
createBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createAdventure(createAdventureDialog);
});
restartGameBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createRestartDialog(restartDialog);
})
closeDialog(closeButtons, closeDialogues);

// Ejecución en el momento de cargarse la página
window.addEventListener("load", () => {
  removeAllChilds(cardContainer);
  userAdventures = selectCategory(shuffle(adventures), checkCategory())
  showCards(cardContainer, userAdventures);
});