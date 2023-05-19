

let mezclar_btn = document.getElementById("play-btn")
let empezar_nuevo_btn = document.getElementById("play-again-btn")

mezclar_btn.addEventListener("click", () => {
    const sonido = new Audio("./sounds/riffle-card-shuffle-104313.mp3");
    sonido.play();
})
empezar_nuevo_btn.addEventListener("click", () => {
    const sonido = new Audio("./sounds/get_ready_1-104602.mp3");
    sonido.play();
})