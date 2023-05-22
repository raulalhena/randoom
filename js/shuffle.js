const colors = [
  "#84E5CD",
  "#106061",
  "#F7F7F7",
  "#D9D9D9",
  "#26B19A",
  "#485F87",
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
  return new Promise((res) => {
    const cardContainer = document.querySelector(".card-container");
    const articles = cardContainer.querySelectorAll("article");

    const shuffledColors = shuffle(colors); // Shuffle the colors array

    articles.forEach((article, index) => {
      const imgElement = article.querySelector(".logo-mezclar");
      const initialColor = shuffledColors[index]; // Get the color from the shuffled array

      imgElement.style.backgroundColor = initialColor;

      setTimeout(() => {
        const intervalId = setInterval(() => {
          const randomColor =
            shuffledColors[Math.floor(Math.random() * shuffledColors.length)];
          imgElement.style.backgroundColor = randomColor;
        }, 100);

        setTimeout(() => {
          clearInterval(intervalId);
          imgElement.style.backgroundColor = "#F87628";
          if (index === articles.length - 1) {
            setTimeout(() => {
              const dialog = document.getElementById("popup-elegir-aventura");
              dialog.showModal();
              setTimeout(() => {
                dialog.close();
                res();
              }, 1500);
            }, 500);
          }
        }, 3000);
      }, 1000);
    });
  });
}
