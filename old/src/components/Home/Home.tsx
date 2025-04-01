import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import StartScreen from "../StartScreen/StartScreen";
import About from "../About/About";
import Technologies from "../Technologies/Technologies";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import s from "./Home.module.css";

function Home() {
  const [select, setSelect] = useState("");
  const [lang, setLang] = useState("es");

  useEffect(() => {
    if (navigator.language.includes("en")) {
      setLang("en");
    }
  }, []);

  return (
    <div className={s.container}>
      <NavBar select={select} setLang={setLang} lang={lang} />
      <StartScreen setSelect={setSelect} lang={lang} />
      <About setSelect={setSelect} lang={lang} />
      <Technologies setSelect={setSelect} lang={lang} />
      <Projects setSelect={setSelect} lang={lang} />
      <Contact setSelect={setSelect} lang={lang} />
      <Footer />
    </div>
  );
}

export default Home;
