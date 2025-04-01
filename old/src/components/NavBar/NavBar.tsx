import React from "react";
import logo from "../../assets/imgs/logo.png";
import Sidebar from "./Sidebar/Sidebar";
import Flags from "./Flags/Flags";
import s from "./NavBar.module.css";

export const items: string[] = [
  "Home",
  "About",
  "Technologies",
  "Projects",
  "Contact",
];

const itemsEs: string[] = [
  "Inicio",
  "Sobre Mi",
  "Tecnologías",
  "Proyectos",
  "Contacto",
];

interface Item {
  title: string;
  select: string;
  index: number;
  lang: string;
}

interface NavProps {
  select: string;
  setLang: any;
  lang: string;
}

export function NavItem({ title, select, index, lang }: Item) {
  return (
    <div className={s.item}>
      <a
        style={title === select ? { color: "yellow", fontWeight: "bold" } : {}}
        href={`#${title[0].toLocaleLowerCase() + title.substr(1)}`}
      >
        {lang === "es" ? itemsEs[index] : title}
      </a>
    </div>
  );
}

function NavBar({ select, setLang, lang }: NavProps) {
  return (
    <div className={s.nav}>
      <div className={s.container}>
        <a href="#home">
          <img src={logo} alt="logo" />
        </a>
        <div className={s.buttons}>
          {items.map((item, index) => (
            <NavItem
              key={`${item}_${index}`}
              title={item}
              select={select}
              lang={lang}
              index={index}
            />
          ))}
          <Flags setLang={setLang} />
        </div>
        <Sidebar select={select} setLang={setLang} lang={lang} />
      </div>
    </div>
  );
}

export default NavBar;
