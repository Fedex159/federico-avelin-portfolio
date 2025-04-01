import React, { useEffect, useRef, useState } from "react";
import { useOnScreen } from "../../utils";
import Info from "./Info/Info";
import Form from "./Form/Form";
import Dots from "../Dots/Dots";
import s from "./Contact.module.css";

function Contact({ setSelect, lang }: any) {
  const [start, setStart] = useState(false);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setStart(true);
      setSelect("Contact");
    }
  }, [isVisible, setSelect]);

  return (
    <div id="contact" className={s.contact}>
      <Dots top="35%" left="88.5%" />
      <div className={`${s.container} fadeIn ${start && "fadeInVisible"}`}>
        <h2 ref={ref}>{lang === "es" ? "Contáctame" : "Contact Me"}</h2>
        <div className={s.group}>
          <Info />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
