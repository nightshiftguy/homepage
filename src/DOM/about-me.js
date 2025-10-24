import mainImgSrc from "../img/main-img.jpg";
import githubIconSrc from "../img/icons/github.svg"
import linkedinImgSrc from "../img/icons/linkedin.svg"
import twitterIconSrc from "../img/icons/twitter.svg"

function createIconsContainer(){
    const iconsContainer = document.createElement("div");

  const githubIcon = document.createElement("img");
  githubIcon.setAttribute("class", "github-icon");
  githubIcon.src = githubIconSrc;
  iconsContainer.appendChild(githubIcon);

  const linkedinImg = document.createElement("img");
  linkedinImg.setAttribute("class", "linkedin-icon");
  linkedinImg.src = linkedinImgSrc;
  iconsContainer.appendChild(linkedinImg);

  const twitterIcon = document.createElement("img");
  twitterIcon.setAttribute("class", "twitter-icon");
  twitterIcon.src = twitterIconSrc;
  iconsContainer.appendChild(twitterIcon);
  return iconsContainer;
}

export default function createAboutMeSection() {
  const container = document.createElement("section");
  container.setAttribute("class", "about-me");

  const mainImg = document.createElement("img");
  mainImg.src = mainImgSrc;
  container.appendChild(mainImg);

  const myName = document.createElement("h1");
  myName.textContent = "Jan Goluch";
  myName.setAttribute("class", "main-img");
  container.appendChild(myName);

  const textContainer = document.createElement("div");
  const header = document.createElement("h1");
  header.textContent = "About me";
  textContainer.appendChild(header);
  const text = document.createElement("p");
  text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed justo non eros aliquet pharetra. Phasellus malesuada faucibus neque, id sodales augue. Maecenas commodo nunc dui, vel ultricies erat aliquet id. Vivamus dictum placerat malesuada. Ut lobortis egestas elementum. Pellentesque fermentum enim ut ligula efficitur, quis iaculis augue consequat. Donec ut mollis felis, eget iaculis lectus. Suspendisse scelerisque pharetra lacus, eget venenatis nulla. Nam iaculis diam eu eleifend facilisis. Mauris blandit metus turpis, quis commodo nisl vehicula vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat porttitor metus id malesuada. Praesent nunc nisl, posuere non erat eu, varius malesuada nunc. Quisque eleifend lectus elit, vitae consectetur enim scelerisque nec.";
  textContainer.appendChild(text);

  textContainer.appendChild(createIconsContainer());

  container.appendChild(textContainer);

  return container;
}
