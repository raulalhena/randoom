import { adventures } from "./data.js";

export const updateAdventure = (userAdventure, customizedCard) => {
    console.log("before ", adventures)
    const advIndex = adventures.findIndex(adv => adv.id === userAdventure.id);
    adventures[advIndex].name = userAdventure.name;
    adventures[advIndex].description = userAdventure.description;
    adventures[advIndex].category = userAdventure.category;
    const children = Array.from(customizedCard.children);
    children.forEach(child => {
        if (child.classList.contains("card-content-title")) {
            child.firstChild.nextElementSibling.innerText = adventures[advIndex].name;
        }
    });
}
