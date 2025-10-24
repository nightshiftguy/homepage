import "./styles.css";
import testImgSrc from "./img/main-img.jpg";

const container = document.querySelector(".container");
const title = document.createElement("h1");
title.textContent = "Title text";
const text = document.createElement("p");
const testImg = document.createElement("img");
testImg.src = testImgSrc;
testImg.setAttribute("height","400px")
text.textContent = "Hello World!";
container.appendChild(title)
container.appendChild(text);
container.appendChild(testImg);
