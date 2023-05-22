import { adventures } from "./data.js";

export const updateAdventure = (userAdventure) => {
    const adventure = adventures.find(adv => adv.name === userAdventure.name)
    adventure.name = userAdventure.name;
    adventure.description = userAdventure.description;
    return adventure;
}

console.log(updateAdventure({ name: "Planta un árbol", description: "Un abol del bueno" }));