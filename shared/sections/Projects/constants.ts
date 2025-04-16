import {
  ImageGifFinder,
  ImageLiteflix,
  ImagePortfolio,
  ImageSnakeReact,
  ImageVideogames,
  ImageWebService,
} from "@/public/assets";
import { Translations } from "@/shared/types/translations";
import { StaticImageData } from "next/image";

type ProjectsList = {
  descriptionTranslationKey: Translations<"projects">;
  image: StaticImageData;
  repositoryUrl: string;
  titleTranslationKey: Translations<"projects">;
  websiteUrl: string;
  hideProject?: boolean;
}[];

export const PROJECTS_LIST: ProjectsList = [
  {
    descriptionTranslationKey: "items.webService.description",
    image: ImageWebService,
    repositoryUrl: "https://github.com/Fedex159/pf-web-service",
    titleTranslationKey: "items.webService.title",
    websiteUrl: "https://pf-web-service.vercel.app/",
  },
  {
    descriptionTranslationKey: "items.videogames.description",
    image: ImageVideogames,
    repositoryUrl: "https://github.com/Fedex159/pi-videogames/",
    titleTranslationKey: "items.videogames.title",
    websiteUrl: "https://pi-videogames-kappa.vercel.app/",
  },
  {
    descriptionTranslationKey: "items.snake.description",
    image: ImageSnakeReact,
    repositoryUrl: "https://github.com/Fedex159/snake-react",
    titleTranslationKey: "items.snake.title",
    websiteUrl: "https://snake-react-ten.vercel.app/",
  },
  {
    descriptionTranslationKey: "items.gifs.description",
    image: ImageGifFinder,
    repositoryUrl: "https://github.com/Fedex159/gif-finder",
    titleTranslationKey: "items.gifs.title",
    websiteUrl: "https://gif-finder-mu.vercel.app/",
  },
  {
    descriptionTranslationKey: "items.porfolio.description",
    image: ImagePortfolio,
    repositoryUrl: "https://github.com/Fedex159/federico-avelin-portfolio",
    titleTranslationKey: "items.porfolio.title",
    websiteUrl: "https://federico-avelin-portfolio.vercel.app/",
    hideProject: true,
  },
  {
    descriptionTranslationKey: "items.liteflix.description",
    image: ImageLiteflix,
    repositoryUrl: "https://github.com/Fedex159/liteflix-challenge",
    titleTranslationKey: "items.liteflix.title",
    websiteUrl: "https://liteflix-challenge-five.vercel.app/",
  },
].filter((project) => !project.hideProject) as ProjectsList;
