import { showCardSelectedDialog } from "./showCardSelectedDialog.js";
import { addLogoToCard } from "./shuffle.js";

// Añade evento click a todas las tarjetas (articles)
export const addClickToCards = async (cardContainer, userAdventures) => {
    // console.log("addclicktocards shuffle adves", shuffledAdventures)
    await addLogoToCard();
    cardContainer.addEventListener("click", (event) => {
        event.preventDefault();
        if (event.target.parentNode.classList.contains("logo-mezclar-container")) {
            showCardSelectedDialog(userAdventures.find((adventure) => adventure.id === event.target.parentNode.parentNode.id), userAdventures);
        } else if (event.target.parentNode.tagName === "ARTICLE") {
            showCardSelectedDialog(userAdventures.find((adventure) => adventure.id === event.target.parentNode.id), userAdventures);
        }
    }, { once: true })
}


