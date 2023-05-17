
//Botón PERSONALIZA la aventura
const editButton = document.getElementById('edit-btn');
const customizeAdventureDialog = document.getElementById('customize-adventure');


editButton.addEventListener('click', function () {
  customizeAdventureDialog.showModal();
});