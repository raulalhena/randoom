// Añade evento click a todos los botones de cerrar dialogos
export const closeDialog = (closeButtons, closeDialogues,) => {
    //bucle para cerrar las ventanas
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", () => {
            for (let j = 0; j < closeDialogues.length; j++) {
                closeDialogues[j].close();
            }
        });
    }
}

export const closeOneDialog = (closeBtn, dialogToClose) => {
    closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        dialogToClose.close();
    });
}
