//  Importamos el array con las cartas de aventuras y la función shuffle para obtener un array
//  aleatorio con varias
import { adventures } from "./data.js";
import { shuffle } from "./shuffle.js";
import { selectCategory } from "./selectCategory.js";
import { checkCategory } from "./checkCategory.js";
import { removeAllChilds } from "./removeAllChilds.js";

// Obtenemos el elemento con la clase .card-container
const cardContainer = document.querySelector(".card-container");
//
const customizeAdventureDialog = document.getElementById("customize-adventure");

export const showCards = (userAdventures) => {
    // Crea 12 elementos article dentro del elemento card-container
    for (let i = 0; i < 12; i++) {
        const child = cardContainer.appendChild(document.createElement("article"));
        child.classList.add(`card-front`);
        child.classList.add(`card_${userAdventures[i].category}_img`);
        child.innerHTML = `
        <img class="front-img" src='/img/${userAdventures[i].category}.jpg' alt='Modificar aventura' width="100%" height="100%" />

        <div class="card-content-title">
            <h3>${userAdventures[i].name}</h5>
        </div>
        <div class="card-content-btn">
            <a href='#' id='edit-btn-${userAdventures[i].id}'>
                <img src='/img/edit.png' alt='Modificar aventura' />
            </a>
        </div>
        `;

        const btn = document
            .getElementById(`edit-btn-${userAdventures[i].id}`)
            .addEventListener("click", () => {
                customizeAdventureDialog.showModal();
            });
    }
};

window.addEventListener("load", () => {
    removeAllChilds(cardContainer);
    showCards(selectCategory(shuffle(adventures), checkCategory()));
});



