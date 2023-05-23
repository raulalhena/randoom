import { categories } from "./data.js";
import { closeOneDialog } from "./closeDialog.js";
//Botón CREA tu propia aventura 
export const createAdventure = (createAdventureDialog, userAdventures) => {
  let myHTML = `
  <button class="close-btn" id="create-adventure-close-btn">&times;</button>
    <section>
      <h2>¡Añade tu nueva aventura!</h2>
      <select name="categories" id="categories">`;
  for (let category of categories) {
    myHTML += `<option value="${category}">${category.charAt(0).toUpperCase() + category.slice(1)}</option>`;
  }

  myHTML +=
    `</select >
      <input type="text" id="title-new" placeholder="Título" />
      <textarea name="description" id="description" cols="30" rows="5" placeholder="Descripción de la aventura"></textarea>
      <button id="add-new-adventure-btn">Añadir</button>
    </section >
  `;
  createAdventureDialog.innerHTML = myHTML;

  const closeBtn = document.getElementById("create-adventure-close-btn");
  closeOneDialog(closeBtn, createAdventureDialog);
  createAdventureDialog.showModal();
};