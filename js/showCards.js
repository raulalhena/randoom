//  Importamos el array con las cartas de aventuras y la función shuffle para obtener un array
//  aleatorio con varias
import { adventures } from "./data.js";
import { shuffle } from "./shuffle.js";
import { selectCategory } from "./selectCategory.js";
import { checkCategory } from "./checkCategory.js";

// Obtenemos el elemento con la clase .card-container
const cardContainer = document.querySelector(".card-container");
const shuffledAdventures = shuffle(adventures);


const showCards = (userAdventures) => {

    // Crea 12 elementos article dentro del elemento card-container
    for (let i = 0; i < 12; i++) {
        // alert(userAdventures[i].name)
        const child = cardContainer.appendChild(document.createElement("article"));
        child.classList.add(`card-front`, `card_${userAdventures[i].category}_img`);
        child.innerHTML = `<h3>${userAdventures[i].name}</h3><a href="#" id="edit-btn"><img src="/img/edit.png" alt="Modificar aventura" /></a>`;

        // `<img src=\"/img/${userAdventures[i].category}.jpg\" style=\"width: 55px; height: 100px;\" alt=\"${userAdventures[i].name}\" />`;
    }

}

window.addEventListener("load", showCards(selectCategory(shuffledAdventures, checkCategory())));

const shuffleBtn = document.getElementById("mezclar_btn");

shuffleBtn.addEventListener("click", () => {
    alert("ei")
    showCards(selectCategory(shuffledAdventures, checkCategory()))
});



