export const rotateElement = (element) => {
  return new Promise((resolve) => {
    element.style.transform = "scaleX(0.2)";
    element.style.transition = "transform 0.2s ease-in-out";

    setTimeout(() => {
      element.style.transform = "scaleX(1)"; //
      resolve();
    }, 100);
  });
};
