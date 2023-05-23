import { removeAllFromSelected } from "./removeAllFromSelected.js";
import { selectedCardsArray } from "./selectedCard.js";

export const resetGame = (userAdventures, adventures) => {
    selectedCardsArray.splice(0, selectedCardsArray.length);
    userAdventures = adventures;
    removeAllFromSelected();
}