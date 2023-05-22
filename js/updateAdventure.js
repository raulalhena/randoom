
import { adventures } from "./data.js";


export const updateAdventure = (userAdventure) => {
    adventures.map(adv => {
        if (adv.name === userAdventure.name) {
            adv.name = userAdventure.name;
            adv.description = userAdventure.description;
        }
    })
}

console.log(adventures)

console.log(updateAdventure({ name: "Planta un árbol", description: "Un abol del bueno" }));