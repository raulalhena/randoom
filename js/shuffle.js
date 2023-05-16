export function addLogoToImages() {
  const articleElements = document.querySelectorAll(
    "#card-container-section .card-container article"
  );

  articleElements.forEach((article) => {
    const imgElement = document.createElement("img");
    imgElement.className = "logo-mezclar";
    imgElement.src = "/img/logoR.png";
    imgElement.alt = "logo";
    article.appendChild(imgElement);

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
