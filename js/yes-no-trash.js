//Botón "NO"

export const noCloseBtn = (restartDialog) => {
  restartDialog.close();
};


//Botón "SI"
//Falta que se borren los datos 
export const yesCloseBtn = (restartDialog) => {
  restartDialog.close();
  location.reload();
};


