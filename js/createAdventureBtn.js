
//Botón CREA tu propia aventura 
const createBtn = document.querySelector('.create-btn');
const createAdventureDialog = document.querySelector('#create-adventure');

export const createAdventure = () => {
  createBtn.addEventListener('click', () => {
    createAdventureDialog.showModal();
  })
};