import { addLogoToCard } from "./shuffle.js";
import { flipCards } from "./flipCards.js";
import { shuffle } from "./shuffle.js";

// Dar vuelta a las cartas y sonido de giro de cartas

// Cambiar de color circulo del dorso
// Sonido de barajar
// Mostrar mensaje de elegir carta

export const play = (cardContainer, userAdventures) => {
    alert("play ")
    flipCards(cardContainer);
    addLogoToCard();
    shuffle(userAdventures)
    alert(userAdventures.length)
}