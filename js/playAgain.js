import { adventures } from "./data.js";
import { removeAllChilds } from "./removeAllChilds.js";
import { showCards } from "./showCards.js";
import { selectCategory } from "./selectCategory.js";
import { shuffle } from "./shuffle.js";
import { checkCategory } from "./checkCategory.js";

// Recuperamos botón de jugar de nuevo
const playAgainBtn = document.getElementById("play-again-btn");
const cardContainer = document.querySelector(".card-container");

// Jugar de nuevo, borra los articles (cards) y muestra de nuevo lsa cartas 
// según la categoria seleccionada
export const playAgain = () => {

    removeAllChilds(cardContainer);
    showCards(selectCategory(shuffle(adventures), checkCategory()));

}

// En el evento click ejecuta playAgain()
playAgainBtn.addEventListener("click", playAgain);



