import { useEffect } from "react";
import styles from "./resumen.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Resumen = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.contenedor} id="resume">
      <div className={styles.titulo}>
        <div className={styles.about}>
          <h2>RESUMEN</h2>
        </div>
        <div className={styles.tituloUno}>
          <p>Historial</p>
          <hr />
        </div>
      </div>
      <div className={styles.contInfo}>
        <div className={styles.educacion}>
          <h1>Mi Educacion</h1>
          <div className={styles.contCard}>
            <div
              className={styles.card}
              // data-aos="zoom-in-right" data-aos-duration="1500"
            >
              <span>2021 - 2021</span>
              <h3>Full Stack Developer</h3>
              <a href="https://www.soyhenry.com/" target="_blank">
                SoyHENRY
              </a>
              <p>
                Con +800 horas de programación basado en prácticas y proyectos
                reales. Entrenamiento intensivo en el que aprendi las últimas
                tecnologías y lenguajes de programación.
              </p>
            </div>
            <div
              className={styles.card}
              // data-aos="zoom-in-right" data-aos-duration="1500"
            >
              <span>2022 - 2022</span>
              <h3>Master en React</h3>
              <a
                href="https://www.udemy.com/course/master-en-react-aprender-reactjs-hooks-mern-nodejs-jwt/"
                target="_blank"
              >
                Udemy
              </a>
              <p>
                Componentes funcionales, Hooks, Router, NodeJs, ExpressJs,
                JavaScript, React 18 y Maquetacion web.
              </p>
            </div>

            <div
              className={styles.card}
              // data-aos="zoom-in-right" data-aos-duration="1500"
            >
              <span>2022 - En Curso</span>
              <h3>Programación Node</h3>
              <a
                href="https://www.udemy.com/course/node-de-cero-a-experto/"
                target="_blank"
              >
                Udemy
              </a>
              <p>
                Node debe de ser una herramienta muy importante hoy en día,
                debemos de estar preparados para implementar todas sus bondades
                para el beneficio de nuestros proyectos o trabajo, para poder
                crear aplicaciones modernas escalables que nos permitirán estar
                siempre a la vanguardia con la tecnología.
              </p>
            </div>

            {/* <div
              className={styles.card}
              // data-aos="zoom-in-right" data-aos-duration="1500"
            >
              <span>2021 - En Pausa</span>
              <h3>Analisa en Sistemas</h3>
              <a
                href="http://issd.edu.ar/index.php/analista-de-sistemas/"
                target="_blank"
              >
                Instituto Superior Santo Domingo
              </a>
              <p>
                Preparacion para integrarse exitosamente al equipo de trabajo de
                una organización dedicada a los Sistemas Informáticos, o al Área
                de Sistemas de cualquier empresa, y también para desarrollarse
                de manera independiente, como prestador de servicios de calidad.
              </p>
            </div> */}
          </div>
        </div>
        <div className={styles.experiencia}>
          <h1>Mi Experiencia</h1>
          <div className={styles.contCard}>
            <div
              className={styles.card}
              // data-aos="zoom-in-left"
              // data-aos-duration="1500"
            >
              <span>2021 - Actualidad</span>
              <h3>Full Stack Developer</h3>
              <a href="http://custer.com.ar/" target="_blank">
                Custer Agencia
              </a>
              <p>
                Agencia y consultora de marketing digital la cual trabaja con
                organizaciones de variados rubros. Desarrollo y mantenimiento de
                aplicaciones hechas con JavaScript, AngularJs y MySQL. Uso de
                GIT, metodoligas como SCRUM y el gestor de tareas TRELLO.
              </p>
            </div>
            <div
              className={styles.card}
              // data-aos="zoom-in-left"
              // data-aos-duration="1500"
            >
              <span>2020 - 2020</span>
              <h3>Full Stack</h3>
              <a href="https://www.soyhenry.com/" target="_blank">
                Soy HENRY
              </a>
              <p>
                Durante mis estudios en el bootcamp de SoyHENRY me toco
                desarrollar dos proyectos muy complejos. El primero fue un
                proyecto individual utilizando React-Redux, Express, y SQL. El
                segundo fue un proyecto grupal, en el cual utilizamos las mismas
                tecnologias, sumandole el uso de metodolias agiles como SCRUM y
                el otranizador de tareas TRELLO.
              </p>
            </div>
            {/*  <div
              className={styles.card}
              // data-aos="zoom-in-left"
              // data-aos-duration="1500"
            >
              <span>2021 - 2022</span>
              <h3>Full Stack </h3>
              <a href="https://grupofonte.com.ar/" target="_blank">
                Grupo Fonte - Custer
              </a>
              <p>
                Proyecto 100% real desarrollado de cero. Utilizando AngularJs y
                algunos framework para darle un estilo propio de lo que se
                merece.
              </p>
            </div>
            <div
              className={styles.card}
              // data-aos="zoom-in-left"
              // data-aos-duration="1500"
            >
              <span>2022 - 2022</span>
              <h3>Front-End</h3>
              <a href="http://custer.com.ar/" target="_blank">
                Londero - Custer
              </a>
              <p>
                Web desarrollada con ReactJs para empresa familiar dedicada a la
                comercialización de equipamientos comerciales
              </p>
            </div>
            <div
              className={styles.card}
              // data-aos="zoom-in-left"
              // data-aos-duration="1500"
            >
              <span>2022 - 2022</span>
              <h3>Front-End</h3>
              <a href="http://custer.com.ar/" target="_blank">
                Custer Page - Custer
              </a>
              <p>
                Web desarrollada con AngularJs para agencia y consultora de
                marketing digital.
              </p>
            </div>
            <div
              className={styles.card}
              // data-aos="zoom-in-left"
              // data-aos-duration="1500"
            >
              <span>2021 - 2021</span>
              <h3>Front-End </h3>
              <a href="https://rialto.ar/" target="_blank">
                Rialto - Custer
              </a>
              <p>
                Proyecto 100% real para complejo de cabanas ubicado en un rincon
                de las sierras cordobesas. Las tecnologias utilizadas fueron
                AngularJs y JavaScript para darle detalles muy importantes para
                la experiencia de usuario final.
              </p>
            </div>
            <div
              className={styles.card}
              // data-aos="zoom-in-left"
              // data-aos-duration="1500"
            >
              <span>2021 - 2021</span>
              <h3>Front-End</h3>
              <a href="https://rialto.ar/" target="_blank">
                Pueblo Nuevo - Custer
              </a>
              <p>
                Web desarrollada con AngularJs para barrio residencial ubicado
                en Villa Maria.
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <div className={styles.boton}>
        <button>
          <a
            href="/files/CVFELIPEBALLARINO.pdf"
            download={"  CV-FELIPE-BALLARINO.pdf"}
          >
            Descargar CV <span className="material-icons">get_app</span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Resumen;
