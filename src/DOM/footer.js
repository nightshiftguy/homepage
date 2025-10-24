import footerImgSrc from "../img/footer-img.jpg";

import githubIconSrc from "../img/icons/github.svg";
import linkedinImgSrc from "../img/icons/linkedin.svg";
import twitterIconSrc from "../img/icons/twitter.svg";

import phoneIconSrc from "../img/icons/phone.svg";
import emailIconSrc from "../img/icons/email.svg";

function createPhone() {
  const container = document.createElement("div");

  const phoneIcon = document.createElement("img");
  phoneIcon.setAttribute("class", "github-icon");
  phoneIcon.src = phoneIconSrc;
  container.appendChild(phoneIcon);

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "123-123-123";
  container.appendChild(phoneNumber);

  return container;
}

function createMail() {
    const container = document.createElement("div");

  const emailIcon = document.createElement("img");
  emailIcon.setAttribute("class", "github-icon");
  emailIcon.src = emailIconSrc;
  container.appendChild(emailIcon);

  const email = document.createElement("p");
  email.textContent = "my.mail@gmail.com";
  container.appendChild(email);

  return container;
}

function createIconsContainer() {
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

export default function createFooter() {
  const container = document.createElement("footer");
  container.setAttribute("class", "footer");

  const left = document.createElement("div");

  const header = document.createElement("h1");
  header.textContent = "Contact me";
  left.appendChild(header);

  const text = document.createElement("p");
  text.textContent =
    "Please get in touch if you think our work could be mutually beneficial!";
  left.appendChild(text);

  const address = document.createElement("p");
  //use innerHTML because content is trusted
  address.innerHTML = "1234 Random Road<br/>Warsaw Poland";
  left.appendChild(address);

  left.appendChild(createPhone());
  left.appendChild(createMail());
  left.appendChild(createIconsContainer());

  container.appendChild(left);

  const footerImg = document.createElement("img");
  footerImg.src = footerImgSrc;
  container.appendChild(footerImg);

  return container;
}
