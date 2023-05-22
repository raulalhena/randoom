import { shuffle } from "./shuffle.js"

// Selecciona las aventuras que no están completas ni ya seleccionadas
export const selectValidAdventures = (adventures) => {
    const randomizedAdventures = shuffle(adventures);
    const userAdventures = randomizedAdventures.filter(adventure => adventure.selected === false);
    return userAdventures;
}
