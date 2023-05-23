// Funcion barajar recibe array y devuelve array mezclado y sin repetir
export const shuffle = (array) => {
  for (let i = array.length; i > 0;) {
    let randomIndex;

    randomIndex = Math.floor(Math.random() * i + 1);
    i--;

    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}