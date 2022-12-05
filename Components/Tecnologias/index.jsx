import styles from "./tecnologias.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Tecnologias = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.contenedor} id="servicios">
      <div className={styles.titulo}>
        <div className={styles.about}>
          <h2>SERVICIOS</h2>
        </div>
        <div className={styles.tituloUno}>
          <p>Conocimientos</p>
          <hr />
        </div>
      </div>
      <div className={styles.tecnoCont}>
        <div
          className={styles.tecno}
          data-aos="zoom-in-right"
          data-aos-duration="1500"
        >
          <div className={styles.logo}>
            <i className="bx bx-desktop"></i>
          </div>
          <div className={styles.tecnoInfo}>
            <h1>Front-End</h1>
            <p>
              Me considero una persona creativa, y perfeccionista. Junto con tu
              ayuda y un poquito de creatividad podemos crear una web acorde a
              sus necesidades.
            </p>
            <div className={styles.iconos}>
              <span>
                <i className="bx bxl-react"></i>
                <p>Next JS</p>
              </span>
              <span>
                <i className="bx bxl-react"></i>
                <p>React JS</p>
              </span>
              <span>
                <i className="bx bxl-angular"></i>
                <p>Angular JS</p>
              </span>
            </div>
          </div>
        </div>

        <div
          className={styles.tecno}
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <div className={styles.logo}>
            <i className="bx bx-server"></i>
          </div>
          <div className={styles.tecnoInfo}>
            <h1>Back-End</h1>
            <p>
              Desarrollador back-end con experiencia completa en el diseño, la
              mejora y el mantenimiento de aplicaciones web.
            </p>
            <div className={styles.iconos}>
              <span>
                <i className="bx bxl-javascript"></i>
                <p>JavaScript</p>
              </span>
              <span>
                <i className="bx bxl-nodejs"></i>
                <p>Node JS</p>
              </span>
              <span>
                <i className={styles.express}>Express</i>
                <p>Express.js</p>
              </span>
            </div>
          </div>
        </div>

        <div
          className={styles.tecno}
          data-aos="zoom-in-left"
          data-aos-duration="1500"
        >
          <div className={styles.logo}>
            <i className="bx bx-data"></i>
          </div>
          <div className={styles.tecnoInfo}>
            <h1>Base de Datos</h1>
            <p>
              Te ofrezco un servicio de buena organización y almacenamiento de
              datos para un fácil manejo de ellos.
            </p>
            <div className={styles.iconos}>
              <span>
                <i className="bx bxs-data"></i>
                <p>SQL</p>
              </span>
              {/* <span>
                <i className="bx bxs-data"></i>
                <p>NoSQL*</p>
              </span>
              <p>*: En Proceso</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tecnologias;
