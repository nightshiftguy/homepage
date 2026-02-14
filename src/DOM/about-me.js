import mainImgSrc from "../img/main-img.jpg";
import githubIconSrc from "../img/icons/github.svg";
import linkedinImgSrc from "../img/icons/linkedin.svg";

function createIconsContainer(githubHref, linkedinHref) {
  const iconsContainer = document.createElement("div");
  iconsContainer.setAttribute("class", "icons-container");

  const githubLink = document.createElement("a");
  githubLink.setAttribute("href", githubHref);
  githubLink.setAttribute("target", "_blank");

  const githubIcon = document.createElement("img");
  githubIcon.setAttribute("class", "github-icon");
  githubIcon.src = githubIconSrc;

  githubLink.appendChild(githubIcon);
  iconsContainer.appendChild(githubLink);

  const linkedinLink = document.createElement("a");
  linkedinLink.setAttribute("href", linkedinHref);
  linkedinLink.setAttribute("target", "_blank");

  const linkedinImg = document.createElement("img");
  linkedinImg.setAttribute("class", "linkedin-icon");
  linkedinImg.src = linkedinImgSrc;

  linkedinLink.appendChild(linkedinImg);
  iconsContainer.appendChild(linkedinLink);

  return iconsContainer;
}

export default function createAboutMeSection(githubLink, linkedinLink) {
  const container = document.createElement("section");
  container.setAttribute("class", "about-me");

  const aboutMeBackground = document.createElement("div");
  aboutMeBackground.setAttribute("class", "about-me-background");
  container.appendChild(aboutMeBackground);

  const textContainer = document.createElement("div");
  textContainer.setAttribute("class", "about-me-text-container");

  const imgWrapper = document.createElement("div");
  imgWrapper.setAttribute("class", "about-me-img-wrapper");
  const mainImg = document.createElement("img");
  mainImg.setAttribute("class", "about-me-img");
  mainImg.src = mainImgSrc;
  imgWrapper.appendChild(mainImg);

  const myName = document.createElement("h1");
  myName.textContent = "Jan Goluch";
  myName.setAttribute("class", "my-name");
  imgWrapper.appendChild(myName);
  textContainer.append(imgWrapper);

  const header = document.createElement("h1");
  header.textContent = "About me";
  textContainer.appendChild(header);
  const text = document.createElement("p");
  text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed justo non eros aliquet pharetra. Phasellus malesuada faucibus neque, id sodales augue. Maecenas commodo nunc dui, vel ultricies erat aliquet id. Vivamus dictum placerat malesuada. Ut lobortis egestas elementum. Pellentesque fermentum enim ut ligula efficitur, quis iaculis augue consequat. Donec ut mollis felis, eget iaculis lectus. Suspendisse scelerisque pharetra lacus, eget venenatis nulla. Nam iaculis diam eu eleifend facilisis. Mauris blandit metus turpis, quis commodo nisl vehicula vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat porttitor metus id malesuada. Praesent nunc nisl, posuere non erat eu, varius malesuada nunc. Quisque eleifend lectus elit, vitae consectetur enim scelerisque nec.";
  textContainer.appendChild(text);

  textContainer.appendChild(createIconsContainer(githubLink, linkedinLink));

  container.appendChild(textContainer);

  return container;
}
