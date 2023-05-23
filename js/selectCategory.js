// Selecciona las aventuras de una categoria concreta. Recibe el array barajado de aventuras
// y la categoría seleccionada y devuelve un array con las aventuras correspondientes

// o devuelve el array barajado con mezcla de categorias que correponde a "todas"
export const selectCategory = (userAdventures, category) => {
  if (category !== "todas") {
    // Crea un nuevo array con los elementos de shuffledAdventures que coincidan
    // con la categoria recibida por argumento
    const adventuresByCategory = userAdventures.filter((adventure) => {
      return adventure.category === category;
    });

    return adventuresByCategory.splice(0, 8);
  }

  return userAdventures.splice(0, 8);
};
