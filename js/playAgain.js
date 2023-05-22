import { removeAllChilds } from "./removeAllChilds.js";
import { createCards } from "./createCards.js";
import { selectCategory } from "./selectCategory.js";
import { checkCategory } from "./checkCategory.js";
import { selectValidAdventures } from "./selectAdventures.js";

// Jugar de nuevo, borra los articles (cards) y muestra de nuevo lsa cartas 
// según la categoria seleccionada
export const playAgain = (cardContainer, adventures) => {
    removeAllChilds(cardContainer);
    createCards(cardContainer, selectCategory(selectValidAdventures(adventures), checkCategory()), "front");

}





