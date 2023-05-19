const getRandomHexColor = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        resolve(color);
      }, 2000); 
    });
  };
  
 export const showDialogAfterDelay = () => {
    const dialog = document.getElementById('chooseAdventurePopUp');
    dialog.showModal();
  
    setTimeout(() => {
      dialog.close();
    }, 2000); 
  };
  
  getRandomHexColor()
    .then(() => {
      return new Promise((resolve) => {
        setTimeout(resolve, 2000); 
      });
    })
    .then(() => {
      setTimeout(showDialogAfterDelay()); // Retraso de medio segundo antes de mostrar el diálogo en milisegundos
    });
  