import mainImgSrc from "../img/main-img.jpg";
import githubIconSrc from "../img/icons/github.svg";
import linkedinImgSrc from "../img/icons/linkedin.svg";

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

export default function AboutMeSection({ githubLink, linkedinLink }) {
  return (
    <section className="about-me">
      <div className="about-me-background" />

      <div className="about-me-text-container">
        <div className="about-me-img-wrapper">
          <img className="about-me-img" src={mainImgSrc} alt="Jan Goluch" />
          <h1 className="my-name">Jan Goluch</h1>
        </div>

        <h1>About me</h1>
        <p>
          I’m a Computer Science student at the Uniwersytet Komisji Edukacji Narodowej in Kraków, specializing in system administration. 
          I build web applications using React on the frontend and Spring Boot on the backend, focusing on clear data flow, well-structured APIs, and maintainable code. 
          I value strong fundamentals and prefer understanding how things work internally. I develop personal projects to test ideas in practice. 
          I’m aiming to grow further through hands-on projects and practical software development experience.
        </p>

        <IconsContainer githubHref={githubLink} linkedinHref={linkedinLink} />
      </div>
    </section>
  );
}