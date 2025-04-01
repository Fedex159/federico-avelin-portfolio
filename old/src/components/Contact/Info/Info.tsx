import React from "react";
import { InfoObj, info } from "../../../assets/jsons/info";
import s from "./Info.module.css";

function ButtonInfo({ src, alt, title, href }: InfoObj) {
  return (
    <div className={s.button}>
      <img src={src} alt={alt} />
      <a href={href} rel="noopener noreferrer" target="_blank">
        <h4>{title}</h4>
      </a>
    </div>
  );
}

function Info() {
  return (
    <div className={s.container}>
      {info.map((i, index) => (
        <ButtonInfo
          key={`${i.title}_${index}`}
          src={i.src}
          alt={i.alt}
          title={i.title}
          href={i.href}
        />
      ))}
    </div>
  );
}

export default Info;
