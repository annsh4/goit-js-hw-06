function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textColorRef = document.querySelector(".color");
const changeColorBtnRef = document.querySelector(".change-color");
const bodyRef = document.body;

const changeColor = () => {
  textColorRef.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = textColorRef.textContent;
};

changeColorBtnRef.addEventListener("click", changeColor);
