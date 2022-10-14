import styles from "./header.module.css";
import React, { useState } from "react";
import Link from "next/link";

const menu = [
  { titulo: "Inicio", href: "/" },
  { titulo: "Sobre Mi", href: "#sobre-mi" },
  { titulo: "Servicios", href: "#servicios" },
  { titulo: "Resumen", href: "#resume" },
  { titulo: "Portfolio", href: "#portfolio" },
  // { titulo: "Contacto", href: "#Foot" },
];

const Head = () => {
  const [open, setOpen] = useState(false);
  const [num, setNum] = useState(0);

  const selector = num;

  const handlerClick = (i) => {
    setOpen(false);
    setNum(i);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titulo}>
          <div className={styles.icono}>
            <h1>F</h1>
            <h1 className={styles.b}>B</h1>
          </div>
          <h3>Felipe Ballarino</h3>
          <hr />
        </div>
        <div className={styles.menu}>
          {menu.map((e, i) => (
            <Link href={e.href} key={i}>
              <a
                className={selector == i ? styles.color : ""}
                onClick={() => setNum(i)}
              >
                {e.titulo}
              </a>
            </Link>
          ))}
        </div>
        <div className={styles.redes}>
          <a
            target="_blank"
            href="https://wa.me/5493534196213?text=Hola!%20Estoy%20interesado%20en%20tu%20servicio"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a target="_blank " href="https://github.com/Felipeballarino">
            <i className="bx bxl-github"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/felipe-ballarino/"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a target="_blank" href="mailto:Felipeballarino97@gmail.com">
            <i className="bx bx-envelope"></i>
          </a>
          <button className={styles.hambur} onClick={() => setOpen(!open)}>
            <div className={styles.hamburguesa}>
              <span className={open ? styles.cerrado : styles.creado}></span>
            </div>
          </button>
          <div className={open ? styles.menuHamb : styles.menuHambOpen}>
            {menu.map((e, i) => (
              <Link href={`${e.href}`} key={i}>
                <a
                  className={selector == i ? styles.color : ""}
                  onClick={() => handlerClick(i)}
                >
                  {e.titulo}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
