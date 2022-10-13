import React from "react";
import styles from "./wpp.module.css";

const Wpp = () => {
  return (
    <div className={styles.contenedor}>
      <a
        target="_blank"
        className={styles.wpp}
        href={
          "https://wa.me/5493534196213?text=Hola!%20Estoy%20interesado%20en%20tu%20servicio"
        }
      >
        <i className="bx bxl-whatsapp"></i>
      </a>
    </div>
  );
};

export default Wpp;
