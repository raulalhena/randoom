
// Deshabilitar botón para que no se pueda usar y a
export const changeButtonState = (button) => {
    button.classList.toggle("disabled-btn");
    button.disabled = !button.disabled;
}