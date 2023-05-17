
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Funcion barajar recibe array y devuelve array mezclado y sin repetir
export const shuffle = (array) => {

    for (let i = array.length; i > 0;) {
        let randomIndex;

        randomIndex = Math.floor(Math.random() * i);
        i--;

        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }

    return array;

}