const colors = [
  "#84E5CD",
  "#106061",
  "#F7F7F7",
  "#D9D9D9",
  "#26B19A",
  "#041A43",
  "#943B7F",
  "#840A0E",
  "#F7352C",
  "#FC792B",
  "#FFD66A",
  "#FDE8A4",
];

// Funcion barajar recibe array y devuelve array mezclado y sin repetir
export const shuffle = (array) => {

  for (let i = array.length; i > 0;) {
    let randomIndex;

    randomIndex = Math.floor(Math.random() * i + 1);
    i--;

    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
};

export function addLogoToCard() {
  const cardContainer = document.querySelector(".card-container");
  const articles = cardContainer.querySelectorAll("article");

  const shuffledColors = shuffle(colors); // Mezclar los colores

  articles.forEach((article, index) => {
    // article.innerHTML += `
    //   <div class="logo-mezclar-container">
    //     <img class="logo-mezclar" src="/img/logoR.png" alt="logo"/>
    //   </div>
    // `;

    const imgElement = article.querySelector(".logo-mezclar");
    const initialColor = shuffledColors[index]; // Coge un color del array mezclado

    imgElement.style.backgroundColor = initialColor;

    setTimeout(() => {
      const intervalId = setInterval(() => {
        const randomColor =
          shuffledColors[Math.floor(Math.random() * shuffledColors.length)];
        imgElement.style.backgroundColor = randomColor;
      }, 100);

      setTimeout(() => {
        const intervalId = setInterval(() => {
          const randomColor = getRandomHexColor();
          imgElement.style.backgroundColor = randomColor;
        }, 100);

        setTimeout(() => {
          clearInterval(intervalId);
          imgElement.style.backgroundColor = "#F87628";
          res();
        }, 3000);
      }, 1000);

    });
  });
}
