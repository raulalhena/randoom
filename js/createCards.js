import { adventures } from "./data.js";

const cardContainer = document.querySelector("card-container");

adventures.forEach(adventure => {
    cardContainer.appendChild(
        `<article><img src='${adventure.category}.png>`
    )
});


