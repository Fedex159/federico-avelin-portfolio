import React, { useRef, useEffect, useState } from "react";
import about from "../../assets/imgs/about2.jpg";
import Dots from "../Dots/Dots";
import { useOnScreen } from "../../utils";
import s from "./About.module.css";
interface AboutProps {
  setSelect: any;
  lang: string;
}

interface Description {
  en: string;
  es: string;
}

const description: Description = {
  en: `I'm Federico Avelin, FullStack developer. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create enjoyable experiences. I perfect my skills every day, to keep up to date and continue advancing in my career as a developer.\n\nI develop websites with HTML, CSS and JavaScript. For the front, I love to use React alongside Redux, and for the back Express along with PostgresSQL and Sequelize.\n\nI always work to achieve the best result in each project that I have in my hands, with me you will find someone who will not give up easily.`,
  es: `Soy Federico Avelin, desarrollador FullStack. Me apasiona aprovechar mis diversos antecedentes para descifrar problemas desafiantes y crear experiencias agradables. Perfecciono mis habilidades todos los días, para mantenerme actualizado y seguir avanzando en mi carrera como desarrollador.\n\nDesarrollo sitios web con HTML, CSS y JavaScript. Para el front, me encanta usar React junto con Redux, y para el back Express junto con PostgresSQL y Sequelize.\n\nSiempre trabajo para lograr el mejor resultado en cada proyecto que tengo en mis manos, conmigo encontrarás a alguien que no se rendirá fácilmente.`,
};

const link: string =
  "https://drive.google.com/file/d/1SbpEuBhXu_17X85YFGg7HFuSl8UqvuGB/view?usp=sharing";

const linkEs: string =
  "https://drive.google.com/file/d/1YknFJJPy9p7QfCPxH8VmoF-c3WZ5aU0J/view?usp=sharing";

function About({ setSelect, lang }: AboutProps) {
  const [start, setStart] = useState(false);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setStart(true);
      setSelect("About");
    }
  }, [isVisible, setSelect]);

  return (
    <div id="about" className={s.about}>
      <Dots top="30%" left="0px" />
      <div className={`${s.container} fadeIn ${start && "fadeInVisible"}`}>
        <div className={s.img}>
          <div className={s.border}></div>
          <img src={about} alt="about" />
        </div>
        <div className={s.info}>
          <h2 ref={ref}>{lang === "es" ? "Sobre mi" : "About Me"}</h2>
          <p>{lang === "es" ? description.es : description.en}</p>
          <a
            href={lang === "es" ? linkEs : link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={s.button}>
              {lang === "es" ? "Descargar CV" : "Download CV"}
            </div>
          </a>
        </div>
      </div>
      ;
    </div>
  );
}

export default About;
