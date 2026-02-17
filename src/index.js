import "./styles.css";

import battleshipProjectImgSrc from "./img/projects-screenshots/battleship.png";
import libraryProjectImgSrc from "./img/projects-screenshots/library.png";
import restaurantPageProjectImgSrc from "./img/projects-screenshots/restaurant-page.png";
import ticTacToeProjectImgSrc from "./img/projects-screenshots/tic-tac-toe.png";
import todoListProjectImgSrc from "./img/projects-screenshots/todo-list.png";
import weatherAppProjectImgSrc from "./img/projects-screenshots/weather-app.png";
import contactListProjectImgSrc from "./img/projects-screenshots/contact-list.png"

import createAboutMeSection from "./DOM/about-me";
import createProjectsSection from "./DOM/projects";
import createFooter from "./DOM/footer";
import createProject from "./DOM/project";

const container = document.querySelector(".container");

const aboutMeSection = createAboutMeSection("https://github.com/nightshiftguy","https://www.linkedin.com/in/jan-goluch");
const projectsSection = createProjectsSection([
  createProject(
    "Contact List",
    "Keep all your contacts in one place",
    "https://app.contact-list.nightguys-projects.top/",
    "https://github.com/nightshiftguy/contact-list",
    contactListProjectImgSrc,
  ),
  createProject(
    "Battleship",
    "Try to destroy all enemy ships",
    "https://nightshiftguy.github.io/battleship/",
    "https://github.com/nightshiftguy/battleship",
    battleshipProjectImgSrc,
  ),
  createProject(
    "Todo list",
    "Create and complete your todos",
    "https://nightshiftguy.github.io/todo-list/",
    "https://github.com/nightshiftguy/todo-list",
    todoListProjectImgSrc,
  ),
  createProject(
    "Tic tac toe",
    "Simple game for two players",
    "https://nightshiftguy.github.io/tic-tac-toe/",
    "https://github.com/nightshiftguy/tic-tac-toe",
    ticTacToeProjectImgSrc,
  ),
  createProject(
    "Weather app",
    "Check weather from visual crossing API",
    "https://nightshiftguy.github.io/weather-app/",
    "https://github.com/nightshiftguy/weather-app",
    weatherAppProjectImgSrc,
  ),
    createProject(
    "Library",
    "Manage library collection",
    "https://nightshiftguy.github.io/books-js-exercise/",
    "https://github.com/nightshiftguy/books-js-exercise",
    libraryProjectImgSrc,
  ),
  createProject(
    "Restaurant page",
    "Simple restaurant page",
    "https://nightshiftguy.github.io/restaurant-page/",
    "https://github.com/nightshiftguy/restaurant-page",
    restaurantPageProjectImgSrc,
  ),
]);
const footer = createFooter("https://github.com/nightshiftguy","https://www.linkedin.com/in/jan-goluch");

container.appendChild(aboutMeSection);
container.appendChild(projectsSection);
container.appendChild(footer);
