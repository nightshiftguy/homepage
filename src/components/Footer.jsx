import footerImgSrc from "../img/footer-img.jpg";

import githubIconSrc from "../img/icons/github.svg";
import linkedinImgSrc from "../img/icons/linkedin.svg";

import emailIconSrc from "../img/icons/email.svg";

function Mail() {
  return (
    <div className="mail">
      <img className="email-icon" src={emailIconSrc} alt="Email" />
      <p>jgoluch@gmail.com</p>
    </div>
  );
}

function IconsContainer({ githubHref, linkedinHref }) {
  return (
    <div className="icons-container">
      <a href={githubHref}>
        <img className="github-icon" src={githubIconSrc} alt="GitHub" />
      </a>
      <a href={linkedinHref}>
        <img className="linkedin-icon" src={linkedinImgSrc} alt="LinkedIn" />
      </a>
    </div>
  );
}

export default function Footer({ githubLink, linkedinLink }) {
  return (
    <footer className="footer">
      <div>
        <h1>Thanks for visiting my website!</h1>
        <p>
          Please get in touch if you think our work could be mutually
          beneficial!
        </p>

        <Mail />
        <IconsContainer githubHref={githubLink} linkedinHref={linkedinLink} />
      </div>

      <img className="footer-img" src={footerImgSrc} alt="" />
    </footer>
  );
}
