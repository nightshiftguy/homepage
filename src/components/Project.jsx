import githubIconSrc from "../img/icons/github.svg";
import openInNewIconSrc from "../img/icons/open-in-new.svg";

export default function Project({
  title,
  description,
  liveLink,
  githubLink,
  imgSrc,
}) {
  return (
    <section className="project">
      <a href={liveLink}>
        <img className="screenshot-img" src={imgSrc} alt="Project preview" />
      </a>
      <div className="project-info">
        <div className="top">
          <h2>{title}</h2>
          <div className="icon-links">
            <a href={githubLink}>
              <img className="github-icon" src={githubIconSrc} alt="Github icon" />
            </a>
            <a href={liveLink}>
              <img className="open-in-new-icon" src={openInNewIconSrc} alt="Preview icon" />
            </a>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </section>
  );
}