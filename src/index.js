import "./styles.css";
import testImgSrc from "./img/profile_picture.jpg";

const container = document.querySelector(".container");
const text = document.createElement("p");
const testImg = document.createElement("img");
testImg.src = testImgSrc;
text.textContent = "Hello World!";
container.appendChild(text);
container.appendChild(testImg);
