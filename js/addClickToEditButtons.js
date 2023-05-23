import { showCustomizeAdventureDialog } from "./showCustomizeAdventureDialog.js";

export const addClickToEditButtons = (editButtons, customizeAdventureDialog, userAdventures) => {
    editButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            showCustomizeAdventureDialog(e.target.parentNode.id.substring(9), customizeAdventureDialog, userAdventures);
        });
    });
}