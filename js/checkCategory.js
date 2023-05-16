// Comprueba cual de los botones de categoría está seleccionado y devuelve el texto en minúsculas
// si no hay ninguno, devuelve el texto "todas"
export const checkCategory = () => {
    const categoryButtons = document.querySelector("nav").children;
    for (const categoryBtn of categoryButtons) {
        if (categoryBtn === document.activeElement) {
            return categoryBtn.innerText.toLowerCase();
        }
    }
    return "todas";
}