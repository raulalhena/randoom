// Cambio de cara de cada una de las cartas
export const flipCards = (parent) => {
  parent.querySelectorAll("article").forEach((child) => {
    child.classList.toggle(`card-front`);
    child.classList.toggle(`card-back`);
    child.querySelector("img").classList.toggle("front-img");
    child.querySelector("img").classList.toggle("back-img");
    child.querySelector("img").src = "/img/todas2.png";
  });
};
