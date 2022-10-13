import styles from "./about.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const About = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    setTimeout(() => {
      contador < 5000 ? setContador(contador + 1) : "";
    }, 50),
    (
      <div className={styles.contenedor} id="About">
        <div className={styles.titulo}>
          <div className={styles.about}>
            <h2>SOBRE MI</h2>
          </div>
          <div className={styles.tituloUno}>
            <p>Conóceme</p>
            <hr />
          </div>
        </div>

        <div className={styles.infoCont}>
          <div
            className={styles.infoLeft}
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <h1>
              Soy <span>Felipe Ballarino,</span> programador Web
            </h1>
            <p>
              Desde que comence mi viaje en el mundo de la programacion hace ya
              casi dos anios, eh trabajado para agencias, participe y colabore
              con personas talentosas para crear productos digitales para uso
              comercial y de consumo. Soy tranquilo, confiado, naturalmente
              curioso y trabajo permanentemente para mejorar mis habilidades.
            </p>
            <p>
              Me gusta desarrollar proyectos innovadores y creativos. Siempre
              estoy en busca de nuevos retos y suelo ser bastante meticuloso a
              la hora de trabajar. Busco la manera de hacer que mis proyectos
              sean agradables a la vista.
            </p>
          </div>
          <div
            className={styles.infoRight}
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <p>
              Nombre:<span> Felipe Ballarino</span>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:Felipeballarino97@gmail.com">
                Felipeballarino97@gmail.com
              </a>
            </p>
            <p>
              Edad: <span> 25</span>
            </p>
            <p>
              Localidad: <span> Cordoba / Argentina</span>
            </p>
            <div className={styles.boton}>
              <button>
                <a
                  href="/files/CVFELIPEBALLARINO.pdf"
                  download={"  CV-FELIPE-BALLARINO.pdf"}
                >
                  {" "}
                  Descargar CV{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
        <div
          className={styles.contador}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          <div className={styles.cont}>
            <h1>{contador} +</h1>
            <h2>Horas Programando</h2>
          </div>
        </div>
      </div>
    )
  );
};

export default About;
