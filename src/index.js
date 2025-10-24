import "./styles.css";

import battleshipProjectImgSrc from "./img/projects-screenshots/battleship.png";
import libraryProjectImgSrc from "./img/projects-screenshots/library.png";
import restaurantPageProjectImgSrc from "./img/projects-screenshots/restaurant-page.png";
import ticTacToeProjectImgSrc from "./img/projects-screenshots/tic-tac-toe.png";
import todoListProjectImgSrc from "./img/projects-screenshots/todo-list.png";
import weatherAppProjectImgSrc from "./img/projects-screenshots/weather-app.png";

import createAboutMeSection from "./DOM/about-me";
import createProjectsSection from "./DOM/projects";
import createFooter from "./DOM/footer";
import createProject from "./DOM/project";

const container = document.querySelector(".container");

const aboutMeSection = createAboutMeSection();
const projectsSection = createProjectsSection([
  createProject("Battleship", "Try to destroy all enemy ships", battleshipProjectImgSrc),
  createProject("Library", "Manage library collection", libraryProjectImgSrc),
  createProject("Restaurant page", "Simple restaurant page", restaurantPageProjectImgSrc),
  createProject("Tic tac toe", "Simple game for two players", ticTacToeProjectImgSrc),
  createProject("Todo list", "Create and complete your todos", todoListProjectImgSrc),
  createProject("Weather app", "Check weather from visual crossing API", weatherAppProjectImgSrc),
]);
const footer = createFooter();

container.appendChild(aboutMeSection);
container.appendChild(projectsSection);
container.appendChild(footer);
