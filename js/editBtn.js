
//Botón PERSONALIZA la aventura
const editButton = document.getElementById('edit-btn');
const customizeAdventureDialog = document.getElementById('customize-adventure');


export const editAdventure = () => {
  editButton.addEventListener('click', function () {
    customizeAdventureDialog.showModal();
  })
};