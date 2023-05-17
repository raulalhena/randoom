//  Importamos el array con las cartas de aventuras y la función shuffle para obtener un array
//  aleatorio con varias
import { adventures } from "./data.js";
import { shuffle } from "./shuffle.js";
import { selectCategory } from "./selectCategory.js";
import { checkCategory } from "./checkCategory.js";

// Obtenemos el elemento con la clase .card-container
const cardContainer = document.querySelector(".card-container");

// Elimina todas los elementos hijos de un elemento html
const removeAllChilds = (parent) => {
    parent.querySelectorAll("article").forEach(child => {
        child.remove()
    });
}

const showCards = (userAdventures) => {
    removeAllChilds(cardContainer);

    // Crea 12 elementos article dentro del elemento card-container
    for (let i = 0; i < 12; i++) {
        // alert(userAdventures[i].name)
        const child = cardContainer.appendChild(document.createElement("article"));
        child.classList.add(`card-front`, `card_${userAdventures[i].category}_img`);
        child.innerHTML = `<h3>${userAdventures[i].name}</h3><a href='#' id='edit-btn'><img src='/img/edit.png' alt='Modificar aventura' /></a>`;
    }

}

window.addEventListener("load", showCards(selectCategory(shuffle(adventures), checkCategory())));

const shuffleBtn = document.getElementById("mezclar_btn");

shuffleBtn.addEventListener("click", () => {
    showCards(selectCategory(shuffle(adventures), checkCategory()))
});



