
export const updateAdventure = (customizedAdventure, customizedCard, userAdventures) => {
    const advIndex = userAdventures.findIndex(adv => adv.id === customizedAdventure.id);
    userAdventures[advIndex].name = customizedAdventure.name;
    userAdventures[advIndex].description = customizedAdventure.description;
    userAdventures[advIndex].category = customizedAdventure.category;
    const children = Array.from(customizedCard.children);
    children.forEach(child => {
        if (child.classList.contains("card-content-title")) {
            child.firstChild.nextElementSibling.innerText = userAdventures[advIndex].name;
        }
    });
}
