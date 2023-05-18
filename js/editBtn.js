
//Botón PERSONALIZA la aventura
export const getEditButtons = async () => {
  while (document.querySelectorAll("edit-btn") === null) {
    new Promise(resolve => document.querySelectorAll("edit-btn"));
  }
  return document.querySelectorAll("edit-btn");
}
const customizeAdventureDialog = document.getElementById('customize-adventure');



export const editAdventure = async () => {
  alert(getEditButtons().then(data => data));
  const editButtons = getEditButtons().then(() => buttons);
  editButtons.forEach(btn.addEventListener('click', function () {
    customizeAdventureDialog.showModal();
  }));
};