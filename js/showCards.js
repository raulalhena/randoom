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
        cardContainer.appendChild(document.createElement("article")).innerHTML =
            `<img src=\"/img/${userAdventures[i].category}.jpg\" style=\"width: 55px; height: 100px;\" alt=\"${userAdventures[i].name}\" />`;
    }

}

window.addEventListener("load", showCards(selectCategory(shuffledAdventures, checkCategory())));



