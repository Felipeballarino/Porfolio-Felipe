import * as React from "react";
import styles from "./jobs.module.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const trabajos = [
  {
    title: "Londero",
    category: "Front End",
    url: "https://landing.londero.com.ar/",
    img: "/media/londero.png",
    state: true,
  },
  {
    title: "Rialto",
    category: "Front End",
    url: "https://rialto.ar/",
    img: "/media/Rialto.png",
    state: true,
  },
  {
    title: "Grupo Fonte",
    category: "Full Stack",
    url: "https://grupofonte.com.ar/",
    img: "/media/grupoFonte.png",
    state: true,
  },
  {
    title: "Custer Agencia",
    category: "Front End",
    url: "https://custer.com.ar/",
    img: "/media/custerAgencia.png",
    state: true,
  },
  {
    title: "Pueblo Nuevo",
    category: "Front End",
    url: "https://pueblonuevo.ar/",
    img: "/media/puebloNuevo.png",
    state: true,
  },
  {
    title: "Don Omar",
    category: "Full Stack",
    url: "https://don-omar.vercel.app/",
    img: "/media/donOmar.png",
    state: true,
  },
  {
    title: "Patio Chino",
    category: "Full Stack",
    url: "",
    img: "/media/patio.png",
    state: false,
  },
  {
    title: "Samex",
    category: "Front End",
    url: "",
    img: "/media/samex.png",
    state: false,
  },
  {
    title: "Clinica Marañon",
    category: "Front End",
    url: "",
    img: "/media/maranon.png",
    state: false,
  },
];

const seleccion = [
  { id: 1, nombre: "Todos" },
  { id: 2, nombre: "Terminados" },
  { id: 3, nombre: "En proceso" },
];

const Jobs = () => {
  const [select, setSelect] = useState(1);
  const [jobs, setJobs] = useState(trabajos);

  useEffect(() => {
    AOS.init();
  }, []);

  const jobFilter = (id) => {
    setSelect(id);
    if (id === 2) {
      const t = trabajos.filter((t) => t.state === true);
      setJobs(t);
    } else if (id === 3) {
      const t = trabajos.filter((t) => t.state === false);
      setJobs(t);
    } else {
      setJobs(trabajos);
    }
  };

  return (
    <div className={styles.contenedor} id="Port">
      <div className={styles.titulo}>
        <div className={styles.about}>
          <h2>PORTFOLIO</h2>
        </div>
        <div className={styles.tituloUno}>
          <p>Mis Trabajos</p>
          <hr />
        </div>
      </div>
      <div className={styles.seleccion}>
        <ul>
          {seleccion.map((s) => (
            <li
              key={s.id}
              className={select == s.id ? styles.sel : ""}
              onClick={() => jobFilter(s.id)}
            >
              {s.nombre}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.contenedorImg}>
        {jobs.map((e, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.bgr}>
              <div>
                <h1>{e.title}</h1>
                <p>{e.category}</p>
              </div>
              {e.url && (
                <div className={styles.icons}>
                  <a href={e.url} target="_blank">
                    <i className={`bx bx-show ${styles.ver} `}></i>
                    <p> Ir al sitio</p>
                  </a>
                </div>
              )}
            </div>
            <img src={e.img} alt="work" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
