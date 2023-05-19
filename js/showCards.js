
// Muestra cartas en pantalla, crea elementos article y añade un eventListener a los botones de editar
export const showCards = (cardContainer, userAdventures) => {
    alert("show cards")
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





