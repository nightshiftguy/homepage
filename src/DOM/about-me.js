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
    "I’m a Computer Science student at the Uniwersytet Komisji Edukacji Narodowej in Kraków, specializing in system administration. I build web applications using React on the frontend and Spring Boot on the backend, focusing on clear data flow, well-structured APIs, and maintainable code. I value strong fundamentals and prefer understanding how things work internally. I develop personal projects to test ideas in practice. I’m aiming to grow further through hands-on projects and practical software development experience.";
  textContainer.appendChild(text);

  textContainer.appendChild(createIconsContainer(githubLink, linkedinLink));

  container.appendChild(textContainer);

  return container;
}
