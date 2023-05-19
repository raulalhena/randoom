import { removeAllChilds } from "./removeAllChilds.js";
import { showCards } from "./showCards.js";
import { selectCategory } from "./selectCategory.js";
import { shuffle } from "./shuffle.js";
import { checkCategory } from "./checkCategory.js";

// Jugar de nuevo, borra los articles (cards) y muestra de nuevo lsa cartas 
// según la categoria seleccionada
export const playAgain = (cardContainer, adventures) => {
    alert("play again")
    removeAllChilds(cardContainer);
    showCards(cardContainer, selectCategory(shuffle(adventures), checkCategory()));

}





