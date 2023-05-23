
import "./sounds.js";
import { createAdventure } from "./showCreateAdventureDialog.js";
import { removeAllChilds } from "./removeAllChilds.js";
import { createCards } from "./createCards.js";
import { createRestartDialog } from "./trash.js";
import { showInfoDialog } from "./showInfoDialog.js";
import { closeDialog } from "./closeDialog.js";
import { adventures } from "./data.js";
import { play } from "./play.js";
import { playAgain } from "./playAgain.js";
import { changeButtonState } from "./changeButtonState.js";
import { yesBtn, noBtn } from "./yes-no-trash.js";
import { showSelectedCategory } from "./showSelectedCategory.js";
import { addClickToCards } from "./addClickToCards.js";
import { flipCards } from "./flipCards.js";
import { addClickToEditButtons } from "./addClickToEditButtons.js";
import { newAdventure } from "./newAdventure.js";


// Variables
const userAdventures = adventures;
let userAdventuresToShow = [];

// Containers
const cardContainer = document.querySelector(".card-container");

// // Dialogos
const infoDialogue = document.getElementById("information");
const closeDialogues = document.getElementsByTagName("dialog");
const createAdventureDialog = document.querySelector('#create-adventure');
const restartDialog = document.getElementById('restart-game');
const customizeAdventureDialog = document.getElementById("customize-adventure");

// // Botones
const playBtn = document.getElementById("play-btn");
const playAgainBtn = document.getElementById("play-again-btn");
const closeButtons = document.getElementsByClassName("close-btn");
const helpButton = document.querySelector(".help-btn");
const createBtn = document.querySelector('.create-btn');
const restartGameBtn = document.getElementById('restart-game-btn');
const navButtons = document.querySelector("nav").children;
let editButtons = [];

// Ejecución en el momento de cargarse la página
window.addEventListener("load", (e) => {
  e.preventDefault();
  removeAllChilds(cardContainer);
  userAdventuresToShow = playAgain(cardContainer, userAdventures);
  createCards(cardContainer, userAdventuresToShow, "front");
  editButtons = document.querySelectorAll(".edit-btn");
  alert(editButtons.length)
  addClickToEditButtons(editButtons, customizeAdventureDialog, userAdventures);
});

// Añade eventos de los elementos y controla la ejecución y la comunicación entre vista y modelo

// Botón de play
playBtn.addEventListener("click", (e) => {
  e.preventDefault();
  changeButtonState(playBtn, true);
  const hiddenAdventures = play(cardContainer, userAdventuresToShow);
  removeAllChilds(cardContainer);
  createCards(cardContainer, hiddenAdventures, "back");
  addClickToCards(cardContainer, hiddenAdventures);
  flipCards(cardContainer);
});

// Botón de play again
playAgainBtn.addEventListener("click", (e) => {
  e.preventDefault();
  userAdventuresToShow = playAgain(cardContainer, userAdventures);
  removeAllChilds(cardContainer);
  createCards(cardContainer, userAdventuresToShow, "front");
  addClickToEditButtons(editButtons, customizeAdventureDialog, userAdventures);
  changeButtonState(playBtn, false);
});

// Botón de información sobre el juego
helpButton.addEventListener("click", (e) => {
  e.preventDefault();
  showInfoDialog(infoDialogue);
});

// Crea una nueva entrada en la lista de aventuras
createBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createAdventure(createAdventureDialog, userAdventures);
  userAdventures.push(newAdventure());
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
    showSelectedCategory(cardContainer, btn.innerText.toLowerCase(), userAdventures);
  });
}
