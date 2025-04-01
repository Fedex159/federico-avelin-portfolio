import webService from "../imgs/web-service.png";
import videoGames from "../imgs/videogames.png";
import gifFinder from "../imgs/gif-finder.png";
import portfolio from "../imgs/portfolio.png";
import liteflix from "../imgs/liteflix.png";
import snake from "../imgs/snake.png";

export interface Project {
  title: string;
  description?: string;
  descriptionEs?: string;
  img: string;
  repo: string;
  prod: string;
}

export const projects: Project[] = [
  {
    title: "Web Service",
    description:
      "E-commerce of sales and acquisition of services. Includes cart, payment methods, user panel, chat and many other features.",
    descriptionEs:
      "E-commerce de ventas y adquisición de servicios. Incluye carrito, métodos de pago, panel de usuario, chat y muchas otras funciones.",
    img: webService,
    repo: "https://github.com/Fedex159/pf-web-service",
    prod: "https://pf-web-service.vercel.app/",
  },
  {
    title: "Videogames",
    description:
      "Video games app. Some of the main functions are: video game search, filtering, creation of new video games, paging.",
    descriptionEs:
      "App de videojuegos. Algunas de las funciones principales son: búsqueda de videojuegos, filtrado, creación de nuevos videojuegos, paginación. ",
    img: videoGames,
    repo: "https://github.com/Fedex159/pi-videogames/",
    prod: "https://pi-videogames-kappa.vercel.app/",
  },
  {
    title: "Snake React",
    description: `
      Classic arcade videogame of Snake. 
      It has 3 difficulties, sounds and responsive. 
      Functional on mobile devices.
    `,
    descriptionEs: `
    Clásico videojuego arcade de Snake. 
    Tiene 3 dificultades, sonidos y responsive. 
    Funcional en dispositivos mobiles.
    `,
    img: snake,
    repo: "https://github.com/Fedex159/snake-react",
    prod: "https://snake-react-ten.vercel.app/",
  },
  {
    title: "Gif Finder",
    description:
      "Gifs app. Some of the main functions are: GIF search, color selector, add to favorites, carousel.",
    descriptionEs:
      "App de Gifs. Algunas de las funciones principales son: búsqueda de GIF, selector de color, agregar a favoritos, carrusel.",
    img: gifFinder,
    repo: "https://github.com/Fedex159/gif-finder",
    prod: "https://gif-finder-mu.vercel.app/",
  },
  {
    title: "Portfolio",
    description: `
      My personal portfolio. Made with React and Typescript. 
      You will find my personal information, projects and technologies.
      `,
    descriptionEs: `
      Mi portfolio personal. Hecho con React y Typescript. 
      Encontraran mi información personal, proyectos y tecnologías.
      `,
    img: portfolio,
    repo: "https://github.com/Fedex159/federico-avelin-portfolio",
    prod: "https://federico-avelin-portfolio.vercel.app/",
  },
  {
    title: "Liteflix",
    description: `
      Dynamic movie catalog. Challenge done as
      challenged for litebox company.
    `,
    descriptionEs: `
      Catalogo de películas dinámico. Challenge hecho como
      desafió para la empresa litebox.
    `,
    img: liteflix,
    repo: "https://github.com/Fedex159/liteflix-challenge",
    prod: "https://liteflix-challenge-five.vercel.app/",
  },
];
