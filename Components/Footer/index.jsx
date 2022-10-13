import styles from './footer.module.css'


const Footer = () => {
  return (
    <div className={styles.contenedor} id="Foot">
      <div className={styles.cont}>
        <p>
        <i className='bx bxs-face'></i> Creado por <span> Felipe Ballarino.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
