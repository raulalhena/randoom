export function addLogoToCard() {
  const articleElements = document.querySelectorAll(
    "#card-container-section .card-container article"
  );

  articleElements.forEach((article) => {
    article.innerHTML += `
      <img class="logo-mezclar" src="/img/logoR.png" alt="logo" />
    `;

    const imgElement = article.querySelector(".logo-mezclar");

    const intervalId = setInterval(() => {
      const randomColor = getRandomHexColor();
      imgElement.style.backgroundColor = randomColor;
    }, 500);

    setTimeout(() => {
      clearInterval(intervalId);
    }, 5000);

    // Initial execution
    const randomColor = getRandomHexColor();
    imgElement.style.backgroundColor = randomColor;
  });
}

// FUNCION GENERAR COLOR RANDOM
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
