import React from "react";
import argFlag from "../../../assets/imgs/argFlag.png";
import usaFlag from "../../../assets/imgs/usaFlag.png";
import s from "./Flags.module.css";

interface FlagsProps {
  setLang: any;
}

interface FlagProp {
  src: string;
  id: string;
  setLang: any;
}

interface ArrayFlag {
  img: string;
  id: string;
}

const flags: ArrayFlag[] = [
  {
    img: argFlag,
    id: "es",
  },
  {
    img: usaFlag,
    id: "en",
  },
];

function Flag({ src, id, setLang }: FlagProp) {
  const handleClick = (e: any) => {
    setLang(e.target.id);
  };

  return (
    <div
      id={id}
      className={s.flag}
      style={{
        width: "30px",
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={handleClick}
    ></div>
  );
}

function Flags({ setLang }: FlagsProps) {
  return (
    <div className={s.container}>
      {flags.map((f, i) => (
        <Flag key={`${f.id}_${i}`} src={f.img} id={f.id} setLang={setLang} />
      ))}
    </div>
  );
}

export default Flags;
