import { shuffle } from "./shuffle.js"

// Selecciona las aventuras que no están completas ni ya seleccionadas
export const selectValidAdventures = (userAdventures) => {
    const randomizedAdventures = shuffle(userAdventures);
    const userAdventuresToShow = randomizedAdventures.filter(adventure => adventure.selected === false);
    return userAdventuresToShow;
}
