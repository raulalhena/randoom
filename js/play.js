import { flipCards } from "./flipCards.js";
import { shuffle } from "./shuffle.js";
import { addClickToCards } from "./addClickToCards.js";
import { createCards } from "./createCards.js";
import { removeAllChilds } from "./removeAllChilds.js";
import { rotateElement } from "./animation.js";

export const play = (cardContainer, userAdventures) => {
  const shuffledAdventures = shuffle(userAdventures);
  removeAllChilds(cardContainer);
  createCards(cardContainer, shuffledAdventures, "back");
  addClickToCards(cardContainer, shuffledAdventures);

  // Aplicar animación de rotación a cada artículo
  flipCards(cardContainer);
};
