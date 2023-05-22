import { removeAllChilds } from "./removeAllChilds.js";
import { createCards } from "./createCards.js";
import { selectValidAdventures } from "./selectAdventures.js";
import { selectCategory } from "./selectCategory.js";
import { adventures } from "./data.js";
import { changeButtonState } from "./changeButtonState.js";

export const showSelectedCategory = (cardContainer, category) => {
    removeAllChilds(cardContainer);
    changeButtonState(document.getElementById("play-btn"), false);
    createCards(cardContainer, selectCategory(selectValidAdventures(adventures), category), "front");
}