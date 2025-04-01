import React from "react";
import dots from "../../assets/imgs/dots2.png";
import s from "./Dots.module.css";

interface DotsProps {
  top: string;
  left: string;
}

function Dots({ top, left }: DotsProps) {
  return (
    <div className={s.container}>
      <img src={dots} alt="dots" style={{ top: top, left: left }} />
    </div>
  );
}

export default Dots;
