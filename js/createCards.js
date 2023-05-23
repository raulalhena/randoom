import { showCustomizeAdventureDialog } from "./showCustomizeAdventureDialog.js";

// Muestra cartas en pantalla, crea elementos article y añade un eventListener a los botones de editar
export const createCards = (cardContainer, userAdventures, side) => {
    const customizeAdventureDialog = document.getElementById("customize-adventure");

    // Crea 12 elementos article dentro del elemento card-container
    for (let i = 0; i < userAdventures.length; i++) {
        const child = cardContainer.appendChild(document.createElement("article"));

        if (side === "back") {
            child.classList.remove(`card-front`);
            child.classList.add(`card-${side}`);

            child.id = userAdventures[i].id;
            child.innerHTML += `<img class="back-img" src='/img/todas2.png' alt='Modificar aventura' width="100%" height="100%" />
           <div class="logo-mezclar-container">
            <img class="logo-mezclar" src="/img/logoR.png" alt="logo"/>
           </div>
           `;

        } else if (side === "front") {
            child.classList.remove(`card-back`);
            child.classList.add(`card-${side}`);
            child.id = userAdventures[i].id;
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
                .addEventListener("click", (e) => {
                    showCustomizeAdventureDialog(e.target.parentNode.id.substring(9), customizeAdventureDialog, userAdventures);
                });
        }
    }
};
