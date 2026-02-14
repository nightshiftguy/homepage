import footerImgSrc from "../img/footer-img.jpg";

import githubIconSrc from "../img/icons/github.svg";
import linkedinImgSrc from "../img/icons/linkedin.svg";

import phoneIconSrc from "../img/icons/phone.svg";
import emailIconSrc from "../img/icons/email.svg";

function createPhone() {
  const container = document.createElement("div");
  container.setAttribute("class", "phone");

  const phoneIcon = document.createElement("img");
  phoneIcon.setAttribute("class", "phone-icon");
  phoneIcon.src = phoneIconSrc;
  container.appendChild(phoneIcon);

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "123-123-123";
  container.appendChild(phoneNumber);

  return container;
}

function createMail() {
  const container = document.createElement("div");
  container.setAttribute("class", "mail");

  const emailIcon = document.createElement("img");
  emailIcon.setAttribute("class", "github-icon");
  emailIcon.src = emailIconSrc;
  container.appendChild(emailIcon);

  const email = document.createElement("p");
  email.textContent = "my.mail@gmail.com";
  container.appendChild(email);

  return container;
}

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

export default function createFooter(githubLink, linkedinLink) {
  const container = document.createElement("footer");
  container.setAttribute("class", "footer");

  const left = document.createElement("div");

  const header = document.createElement("h1");
  header.textContent = "Thanks for visiting my website!";
  left.appendChild(header);

  const text = document.createElement("p");
  text.textContent =
    "Please get in touch if you think our work could be mutually beneficial!";
  left.appendChild(text);

  // Not needed
  // const address = document.createElement("p");
  // //use innerHTML because content is trusted
  // address.innerHTML = "1234 Random Road<br/>Warsaw Poland";
  // address.setAttribute("class", "address");
  // left.appendChild(address);

  // left.appendChild(createPhone());
  // left.appendChild(createMail());
  left.appendChild(createIconsContainer(githubLink, linkedinLink));

  container.appendChild(left);

  const footerImg = document.createElement("img");
  footerImg.setAttribute("class", "footer-img");
  footerImg.src = footerImgSrc;
  container.appendChild(footerImg);

  return container;
}
