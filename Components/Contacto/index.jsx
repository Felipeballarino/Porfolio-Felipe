import styles from "./contacto.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contacto = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.contenedor} id="Contact">
      <div className={styles.titulo}>
        <div className={styles.about}>
          <h2>CONTACTO</h2>
        </div>
        <div className={styles.tituloUno}>
          <p>Contactame</p>
          <hr />
        </div>
      </div>

      <div className={styles.contContact}>
        <div className={styles.info}>
          <div className={styles.contactMe}>
            <h1>CONTACTAME.</h1>
            <span>
              <i className="bx bxs-phone"></i>(+54) 9 3534-196213
            </span>
            <span>
              <i className="bx bxl-whatsapp"></i>(+54) 9 3534-196213
            </span>
            <span>
              <i className="bx bxs-envelope"></i> Felipeballarino97@gmail.com
            </span>
          </div>
          <div className={styles.follow}>
            <h1>SIGUEME.</h1>
            <div className={styles.redes}>
              <i className="bx bxl-whatsapp"></i>
              <i className="bx bxl-github"></i>
              <i className="bx bxl-linkedin"></i>
              <i className="bx bx-envelope"></i>
            </div>
          </div>
        </div>
        <form className={styles.inputs}>
          <div className={styles.top}>
            <input placeholder="Nombre" />
            <input placeholder="Email" />
          </div>
          <div className={styles.bottom}>
            <textarea placeholder="Cuentame tus necesidades..."></textarea>
          </div>
          <div className={styles.boton}>
            <button>Enviar Mensaje</button>
          </div>
        </form>
      </div>

      <div className={styles.elemento}>
        <a className={styles.flecha} href="#About">
          <i className="bx bxs-chevron-up"></i>
        </a>
      </div>
    </div>
  );
};

export default Contacto;
