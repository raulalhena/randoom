import { colors } from "./data.js";

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
