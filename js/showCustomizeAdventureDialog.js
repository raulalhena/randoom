import { categories } from "./data.js";
import { closeOneDialog } from "./closeDialog.js";
import { updateAdventure } from "./updateAdventure.js";

export const showCustomizeAdventureDialog = (adventureId, customizeAdventureDialog, userAdventures) => {
    const adventure = userAdventures.find(adv => adv.id === adventureId);
    let selected = "";

    let myHTML = `
    <button class="close-btn" id="customize-adventure-close-btn">&times;</button>
    <section>
      <h2>Personaliza la aventura</h2>
      <select name="categories" id="categories">`;

    for (let category of categories) {
        if (adventure.category === category) {
            selected = "selected";
        } else {
            selected = "";
        }
        myHTML += `<option value = "${category}" ${selected}> ${category.charAt(0).toUpperCase() + category.slice(1)}</option>`;

    }

    myHTML +=
        `</select>
        <input type="text" id="title" placeholder="Título" value="${adventure.name}"/>
        <textarea name="description" id="description" cols="30" rows="5" placeholder="Descripcion" value="${adventure.description}">${adventure.description}</textarea>
        <button id="customize-adventure-save-btn">Guardar</button>
      </section > `;

    customizeAdventureDialog.innerHTML = myHTML;
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const categorySelected = document.getElementById("categories");
    const customizedCard = document.getElementById(adventure.id);

    const saveBtn = document.getElementById("customize-adventure-save-btn");
    saveBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const customizedAdventure = {
            id: adventure.id,
            name: title.value,
            description: description.value,
            category: categorySelected.value
        }
        updateAdventure(customizedAdventure, customizedCard, userAdventures);
    })

    const closeBtn = document.getElementById("customize-adventure-close-btn");
    closeOneDialog(closeBtn, customizeAdventureDialog);
    customizeAdventureDialog.showModal();
}