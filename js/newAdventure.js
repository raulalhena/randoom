import { generarId } from "./data";

export const newAdventure = () => {
    const categorySelected = document.getElementById("categories");
    const titleInput = document.getElementById("title-new");
    const description = document.getElementById("description");
    const addNewAdventureBtn = document.getElementById("add-new-adventure-btn");

    addNewAdventureBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const newAdventure = {
            id: generarId(),
            name: titleInput.value,
            desciption: description.value,
            category: categorySelected.value,
            selected: false,
            completed: false
        }
        titleInput.value = "";
        description.value = "";
        return newAdventure;
    });
}
