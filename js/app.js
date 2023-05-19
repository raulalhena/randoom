import { createAdventure } from "./createAdventure.js";
import "./playAgain.js";

// dialogo información

const helpButton = document.getElementsByClassName("help-btn");
const infoDialogue = document.getElementById("information");
const closeButtons = document.getElementsByClassName("close-btn");
const closeDialogues = document.getElementsByTagName("dialog");

helpButton[0].addEventListener("click", () => {
  infoDialogue.show();
});

//bucle para cerrar las ventanas
for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", () => {
    for (let j = 0; j < closeDialogues.length; j++) {
      closeDialogues[j].close();
    }
  });
}

createAdventure();
