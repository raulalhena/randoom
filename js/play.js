import { flipCards } from "./flipCards.js";
import { shuffle } from "./shuffle.js";
import { addClickToCards } from "./addClickToCards.js";
import { createCards } from "./createCards.js";
import { removeAllChilds } from "./removeAllChilds.js";

export const play = (cardContainer, userAdventures) => {
    flipCards(cardContainer);
    const shuffledAdventures = shuffle(userAdventures);
    removeAllChilds(cardContainer);
    createCards(cardContainer, shuffledAdventures, "back");
    addClickToCards(cardContainer, shuffledAdventures);
}