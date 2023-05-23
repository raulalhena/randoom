import { removeAllChilds } from "./removeAllChilds.js";
import { createCards } from "./createCards.js";
import { selectValidAdventures } from "./selectAdventures.js";
import { selectCategory } from "./selectCategory.js";
import { changeButtonState } from "./changeButtonState.js";

export const showSelectedCategory = (cardContainer, category, userAdventures) => {
    removeAllChilds(cardContainer);
    changeButtonState(document.getElementById("play-btn"), false);
    createCards(cardContainer, selectCategory(selectValidAdventures(userAdventures), category), "front");
}