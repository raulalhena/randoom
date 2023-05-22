// 
export const strikeThrough = (text) => {
    return text
        .split('')
        .map(char => char + '\u0336')
        .join('')
}