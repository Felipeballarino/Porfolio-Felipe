import styles from "./top.module.css";
import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const Top = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 100000,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <div className={styles.container} id="Home">
      <div className={styles.elements}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.contenido}>
        <div className={styles.imagen}>
          <img src="/media/iconoHome.svg" att="svg" />
        </div>
        <div className={styles.info}>
          <div className={styles.titulos}>
            <h1>Felipe</h1> <h1> Ballarino</h1>
          </div>
          <span>Programador Full Stack</span>
          <div className={styles.boton}>
            <button onClick={() => scrollToTop()}>Contáctame</button>
          </div>
        </div>
      </div>
      <div className={styles.elemento}>
        <a className={styles.flecha} href="#About">
          <i className="bx bx-chevron-down"></i>
        </a>
      </div>
    </div>
  );
};

export default Top;
