import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import Project from "./components/Project";
import Footer from "./components/Footer";

import projects from "./projects"
import './styles.css'

const GITHUB_URL = "https://github.com/nightshiftguy";
const LINKEDIN_URL = "https://www.linkedin.com/in/jan-goluch";

export default function App() {
  return (
    <>
      <AboutMeSection githubLink={GITHUB_URL} linkedinLink={LINKEDIN_URL} />
      <ProjectsSection
        projects={projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      />
      <Footer githubLink={GITHUB_URL} linkedinLink={LINKEDIN_URL} />
    </>
  );
}
