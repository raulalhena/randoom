import { showCardSelectedDialog } from "./showCardSelectedDialog.js";
import { addLogoToCard } from "./addLogoToCard.js";

// Añade evento click a todas las tarjetas (articles)
export const addClickToCards = async (cardContainer, shuffledAdventures) => {
    // console.log("addclicktocards shuffle adves", shuffledAdventures)
    await addLogoToCard();
    cardContainer.addEventListener("click", (event) => {
        event.preventDefault();
        if (event.target.parentNode.classList.contains("logo-mezclar-container")) {
            showCardSelectedDialog(shuffledAdventures.find((adventure) => adventure.id === event.target.parentNode.parentNode.id), shuffledAdventures);
        } else if (event.target.parentNode.tagName === "ARTICLE") {
            showCardSelectedDialog(shuffledAdventures.find((adventure) => adventure.id === event.target.parentNode.id), shuffledAdventures);
        }
    }, { once: true })
}


