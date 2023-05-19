import { showCardSelectedDialog } from "./showCardSelectedDialog.js";

// Añade evento click a todas las tarjetas (articles)
export const addClickToCards = (cardContainer, userAdventures) => {
    const articles = cardContainer.querySelectorAll("article");
    for (let i = 0; i < 12; i++) {
        articles[i].adventureId = userAdventures[i].id;
        articles[i].addEventListener("click", (e) => {
            e.preventDefault();
            //abrir dialog de la aventura correspondiente
            showCardSelectedDialog(userAdventures[i]);
        });
    }
}