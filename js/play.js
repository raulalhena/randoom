import { addLogoToCard } from "./shuffle.js";
import { flipCards } from "./flipCards.js";

const cardContainer = document.querySelector(".card-container");
const playBtn = document.getElementById("shuffle-btn");

playBtn.addEventListener("click", () => {
    // Dar vuelta a las cartas y sonido de giro de cartas
    flipCards(cardContainer);
    addLogoToCard();

    // Cambiar de color circulo del dorso
    // Sonido de barajar
    // Mostrar mensaje de elegir carta

    // showCards(selectCategory(shuffle(adventures), checkCategory()))
});