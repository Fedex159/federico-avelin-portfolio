import React, { useEffect, useRef, useState } from "react";
import { useOnScreen } from "../../utils";
import profile from "../../assets/imgs/profile.jpg";
import s from "./StartScreen.module.css";

const infoEn = {
  title: "Hi There 👋 I'm",
  name: "Federico\nAvelin",
  subtitle: "Fullstack Web Developer",
  // description: "A fullstack developer from Argentina, I ❤️ React and Express.",
  description:
    "Excellent predisposition for teamwork, maintaining the ability to develop projects that are scalable and modular. I ❤️ React and Express.",
  button: "Hire Me",
};

const infoEs = {
  title: "Hola 👋 Soy",
  name: "Federico\nAvelin",
  subtitle: "Desarrollador Web Fullstack",
  description:
    "Excelente predisposición para el trabajo en equipo, manteniendo la capacidad de desarrollar proyectos que sean escalables y modulables. Me ❤️ React y Express.",
  button: "Contrátame",
};

function StartScreen({ setSelect, lang }: any) {
  const [start, setStart] = useState(false);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setStart(true);
      setSelect("Home");
    }
  }, [isVisible, setSelect]);

  return (
    <div
      id="home"
      className={`${s.container} fadeIn ${start && "fadeInVisible"}`}
    >
      <div className={s.info}>
        <h4 ref={ref}>{lang === "es" ? infoEs.title : infoEn.title}</h4>
        <p>{infoEn.name}</p>
        <h3>{lang === "es" ? infoEs.subtitle : infoEn.subtitle}</h3>
        <div className={s.description}>
          {lang === "es" ? infoEs.description : infoEn.description}
        </div>
        <a href="#contact">
          <div className={s.button}>
            {lang === "es" ? infoEs.button : infoEn.button}
          </div>
        </a>
      </div>
      <img src={profile} alt="profile" />
    </div>
  );
}

export default StartScreen;
