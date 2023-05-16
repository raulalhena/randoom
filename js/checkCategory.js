// Comprueba cual de los botones de categoría está seleccionado y devuelve el texto en minúsculas
// si no hay ninguno, devuelve el texto "todas"
export const checkCategory = () => {

    // Seleccionamos los hijos (botones) del elemento nav
    const categoryButtons = document.querySelector("nav").children;

    // Recorremos todos los hijos y el que está seleccionado (tiene focus)
    // devuelve el texto en minúsculas
    for (const categoryBtn of categoryButtons) {
        if (categoryBtn === document.activeElement) {
            return categoryBtn.innerText.toLowerCase();
        }
    }
    return "todas";
}