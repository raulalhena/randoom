import { adventure } from "data.js";
import { colors } from "colors.js";

// dialogo información 

const helpButton = document.getElementsByClassName("help-btn");
const infoDialogue = document.getElementById("information");
const closeButtons = document.getElementsByClassName("close-btn");
const closeDialogues = document.getElementsByTagName("dialog");

helpButton[0].addEventListener("click", () => {
  infoDialogue.show();
});

//bucle para cerrar las ventanas
for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", () => {
    for (let j = 0; j < closeDialogues.length; j++) {
      closeDialogues[j].close();
    }
  });
}

//dialogo aventura seleccionada

//no se acá qué tenemos que poner 
//porque este dialogo sale cuando ya selecciono una o mas tarjetas

//const selectedButton = ver el botón;
const selectedDialogue = document.getElementById("card-selected");

selectedButton[0].addEventListener("clik", () => {
  infoDialogue.show();
});

//dialogo crear tu aventura

const createButton = document.getElementsByClassName("create-btn");
const createDialoge = document.getElementById("create-adventure");

createButton[0].addEventListener("click", () => {
  createDialoge.show();
})

//personaliza tu aventura

//no se acá qué tenemos que poner 
//porque este dialogo sale desde el editor en las tarjetas

//const customizeButton = ver el botón 
const customizeDialoge = document.getElementById("customize-adventure");

customizeButton[0].addEventListener("click", () => {
  customizeDialoge.show();
})

//falta el dialogo luego de mezclar 