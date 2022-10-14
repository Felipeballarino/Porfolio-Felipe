import styles from "./top.module.css";
import React from "react";
import { useRouter } from "next/router";

const Top = () => {
  const router = useRouter();
  const scrollToTop = () => {
    router.push("#sobre-mi");
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
          <span>Programador Front End / Full Stack </span>
          <div className={styles.boton}>
            <button onClick={() => scrollToTop()}>Contáctame</button>
          </div>
        </div>
      </div>
      <div className={styles.elemento}>
        <a className={styles.flecha} href="#sobre-mi">
          <i className="bx bx-chevron-down"></i>
        </a>
      </div>
    </div>
  );
};

export default Top;
