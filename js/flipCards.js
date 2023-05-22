// Cambio de cara de cada una de las cartas
// export const flipCards = (parent) => {
//   parent.querySelectorAll("article").forEach((child) => {

//   });
// };

import { rotateElement } from "./animation.js";

export const flipCards = (parent) => {
  parent.querySelectorAll("article").forEach((child) => {
    rotateElement(child);
  });
};
