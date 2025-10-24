import githubIconSrc from "../img/icons/github.svg";
import openInNewIconSrc from "../img/icons/open-in-new.svg";

function createIconsContainer() {
  const iconsContainer = document.createElement("div");
  
  const githubIcon = document.createElement("img");
  githubIcon.setAttribute("class", "github-icon");
  githubIcon.src = githubIconSrc;
  iconsContainer.appendChild(githubIcon);

  const openInNewIcon = document.createElement("img");
  openInNewIcon.setAttribute("class", "open-in-new-icon");
  openInNewIcon.src = openInNewIconSrc;
  iconsContainer.appendChild(openInNewIcon);
  return iconsContainer;
}

export default function createProject(
  projectName,
  shortDescription,
  screenshotSrc,
) {
  const container = document.createElement("section");
  container.setAttribute("class", "project");

  const screenshot = document.createElement("img");
  screenshot.setAttribute("class", "github-icon");
  screenshot.src = screenshotSrc;
  container.appendChild(screenshot);

  const textContainer = document.createElement("div");

  const textContainerTop = document.createElement("div");
  textContainerTop.setAttribute("class", ".top");

  const header = document.createElement("h1");
  header.textContent = projectName;
  textContainerTop.appendChild(header);

  textContainerTop.appendChild(createIconsContainer());

  textContainer.appendChild(textContainerTop);

  const description = document.createElement("p");
  description.textContent = shortDescription;
  textContainer.appendChild(description)

  container.appendChild(textContainer);

  return container;
}
