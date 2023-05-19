// Funcion barajar recibe array y devuelve array mezclado y sin repetir
export const shuffle = (array) => {
  for (let i = array.length; i > 0; ) {
    let randomIndex;

    randomIndex = Math.floor(Math.random() * i);
    i--;

    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
};

export function addLogoToCard() {
  const cardContainer = document.querySelector(".card-container");
  const articles = cardContainer.querySelectorAll("article");
  articles.forEach((article) => {
    article.innerHTML += `
       <div class="logo-mezclar-container">
        <img class="logo-mezclar" src="/img/logoR.png" alt="logo"/>
       </div>
       `;

    const imgElement = article.querySelector(".logo-mezclar");

    const initialColor = getRandomHexColor();
    imgElement.style.backgroundColor = initialColor;

    setTimeout(() => {
      const intervalId = setInterval(() => {
        const randomColor = getRandomHexColor();
        imgElement.style.backgroundColor = randomColor;
      }, 100);

      setTimeout(() => {
        clearInterval(intervalId);
        imgElement.style.backgroundColor = "#F87628";
      }, 3000);
    }, 1000);
  });
}

// FUNCION GENERAR COLOR RANDOM
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
