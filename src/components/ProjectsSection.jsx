import { Children } from "react";

export default function ProjectsSection({ projects }) {
  return (
    <section className="projects">
      <h1>My work</h1>
      <div className="projects-container">{Children.toArray(projects)}</div>
    </section>
  );
}