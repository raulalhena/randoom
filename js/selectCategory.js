// Selecciona las aventuras de una categoria concreta. Recibe el array barajado de aventuras
// y la categoría seleccionada y devuelve un array con las aventuras correspondientes
// o devuelve el array barajado con mezcla de categorias que correponde a "todas"
export const selectCategory = (shuffledAdventures, category) => {
    // alert("selectCat" + category)
    if (category !== "todas") {
        const adventuresByCategory = shuffledAdventures.filter(adventure => {
            return adventure.category === category;
        });
        // alert("adv" + adventuresByCategory + " advcat ")
        return adventuresByCategory;
    }

    // alert("sh" + shuffledAdventures + " sh ")
    return shuffledAdventures;
}