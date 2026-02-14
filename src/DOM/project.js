import githubIconSrc from "../img/icons/github.svg";
import openInNewIconSrc from "../img/icons/open-in-new.svg";

function createIconsContainer(previewHref, githubHref) {
  const iconsContainer = document.createElement("div");

  const githubLink = document.createElement("a");
  githubLink.setAttribute("href", githubHref);
  githubLink.setAttribute("target", "_blank");

  const githubIcon = document.createElement("img");
  githubIcon.setAttribute("class", "github-icon");
  githubIcon.src = githubIconSrc;
  githubLink.appendChild(githubIcon);

  iconsContainer.append(githubLink);

  const previewLink = document.createElement("a");
  previewLink.setAttribute("href", previewHref);
  previewLink.setAttribute("target", "_blank");

  const openInNewIcon = document.createElement("img");
  openInNewIcon.setAttribute("class", "open-in-new-icon");
  openInNewIcon.src = openInNewIconSrc;
  previewLink.appendChild(openInNewIcon);

  iconsContainer.append(previewLink);

  return iconsContainer;
}

export default function createProject(
  projectName,
  shortDescription,
  previewLink,
  githubLink,
  screenshotSrc,
) {
  const container = document.createElement("section");
  container.setAttribute("class", "project");

  const screenshotPreviewLink = document.createElement("a");
  screenshotPreviewLink.setAttribute("href", previewLink);
  screenshotPreviewLink.setAttribute("target", "_blank");

  const screenshot = document.createElement("img");
  screenshot.setAttribute("class", "screenshot-img");
  screenshot.src = screenshotSrc;
  screenshotPreviewLink.appendChild(screenshot);
  container.appendChild(screenshotPreviewLink);

  const textContainer = document.createElement("div");

  const textContainerTop = document.createElement("div");
  textContainerTop.setAttribute("class", ".top");

  const header = document.createElement("h2");
  header.textContent = projectName;
  textContainerTop.appendChild(header);

  textContainerTop.appendChild(createIconsContainer(previewLink, githubLink));

  textContainer.appendChild(textContainerTop);

  const description = document.createElement("p");
  description.textContent = shortDescription;
  textContainer.appendChild(description);

  container.appendChild(textContainer);

  return container;
}
