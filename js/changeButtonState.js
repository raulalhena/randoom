
// Deshabilitar botón para que no se pueda usar y a
export const changeButtonState = (button, isAble) => {
    if (isAble) {
        button.classList.remove("disabled-btn");
        button.disabled = isAble;
    } else {
        button.classList.add("disabled-btn");
        button.disabled = isAble;
    }
}