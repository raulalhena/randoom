import { categories } from "./data.js";

export const showCustomizeAdventureDialog = (adventureId, customizeAdventureDialog) => {
    let myHTML = `
    <button class="close-btn" id="customize-adventure-close-btn">&times;</button>
    <section>
      <h2>Personaliza la aventura</h2>
      <select name="categories" id="categories">`;

    for (let category of categories) {
        myHTML += `< option value = "${category}" > ${category.charAt(0).toUpperCase() + category.slice(1)}</option>`;
    }

    myHTML +=
        `</select>
        <input type="text" placeholder="Título" />
        <textarea name="description" id="description" cols="30" rows="5" placeholder="Descripcion"></textarea>
        <button>Guardar</button>
      </section>`;


    customizeAdventureDialog.innerHTML = myHTML;

    customizeAdventureDialog.showModal();
}