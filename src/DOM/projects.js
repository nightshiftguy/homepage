export default function createProjectsSection(projects) {
  const container = document.createElement("section");
  container.setAttribute("class", "projects");

  const header = document.createElement("h1");
  header.textContent = "My work";
  container.appendChild(header);

  const projectsContainer = document.createElement("div");
  projectsContainer.setAttribute("class", "projects-container");
  projects.forEach((project) => {
    projectsContainer.appendChild(project);
  });

  container.appendChild(projectsContainer);

  return container;
}
