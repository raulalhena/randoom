// Elimina todas los elementos hijos de un elemento html
export const removeAllChilds = (parent) => {
    parent.querySelectorAll("article").forEach((child) => {
        child.remove();
    });
};
