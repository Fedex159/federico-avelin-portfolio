import React, { useState } from "react";
import hamburger from "../../../assets/imgs/hamburger.png";
import { items, NavItem } from "../NavBar";
import Flags from "../Flags/Flags";
import s from "./Sidebar.module.css";

interface SidebarProps {
  select: string;
  setLang: any;
  lang: string;
}

function Sidebar({ select, setLang, lang }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const [delay, setDelay] = useState(false);
  const [start, setStart] = useState(false);

  const handleClick = () => {
    setStart(true);
    setOpen((prev) => !prev);
    handleDelay(!open);
  };

  const handleDelay = (open: Boolean) => {
    setTimeout(() => {
      if (!open) {
        setDelay(true);
      } else {
        setDelay(false);
      }
    }, 200);
  };

  return (
    <div className={s.container}>
      <img src={hamburger} alt="hamburger" onClick={handleClick} />
      <div
        className={`${s.bar} ${open ? s.openBar : s.closeBar}`}
        style={delay ? { display: "none" } : start ? {} : { display: "none" }}
      >
        <div className={s.items}>
          {items.map((item, index) => (
            <NavItem
              key={`${item}_${index}`}
              title={item}
              select={select}
              lang={lang}
              index={index}
            />
          ))}
        </div>
        <Flags setLang={setLang} />
      </div>
    </div>
  );
}

export default Sidebar;
