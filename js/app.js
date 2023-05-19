
import { createAdventure } from "./createAdventure.js";
import { removeAllChilds } from "./removeAllChilds.js";
import { showCards } from "./showCards.js";
import { selectCategory } from "./selectCategory.js";
import { shuffle } from "./shuffle.js";
import { checkCategory } from "./checkCategory.js";
import { closeDialog } from "./closeDialog.js";
import { showInfoDialog } from "./showInfoDialog.js";
import { adventures } from "./data.js";
import { play } from "./play.js";
import { playAgain } from "./playAgain.js";

// Containers
const cardContainer = document.querySelector(".card-container");

// // Dialogos
const infoDialogue = document.getElementById("information");
const closeDialogues = document.getElementsByTagName("dialog");

// // Botones
const playBtn = document.getElementById("play-btn");
const playAgainBtn = document.getElementById("play-again-btn");
const closeButtons = document.getElementsByClassName("close-btn");
const helpButton = document.querySelector(".help-btn");


// Añade eventos de los elementos
playBtn.addEventListener("click", (e) => {
  e.preventDefault();
  play(cardContainer, adventures);
});
playAgainBtn.addEventListener("click", (e) => {
  e.preventDefault();
  playAgain(cardContainer, adventures);
});
helpButton.addEventListener("click", (e) => {
  e.preventDefault();
  showInfoDialog(infoDialogue);
});

// createAdventure();

window.addEventListener("load", () => {
  removeAllChilds(cardContainer);
  showCards(cardContainer, selectCategory(shuffle(adventures), checkCategory()));
});

closeDialog(closeButtons);