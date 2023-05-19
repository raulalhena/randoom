

export const closeDialog = (closeButtons) => {
    //bucle para cerrar las ventanas
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", () => {
            for (let j = 0; j < closeDialogues.length; j++) {
                closeDialogues[j].close();
            }
        });
    }
}