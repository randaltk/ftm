import styles from "../../styles/Home.module.scss";

const ComprarFTM = () => {
  return (
    <>
      {/* <section className={styles.sessaoSobre}> */}
      <div className={styles.contentPresentation}>
        <div className={styles.sessaoContent}>
          <div className={styles.borderStyle}></div>
          <h2 className={styles.title}>Por que comprar da FTM?</h2>
          <p className={styles.description}>
            Comprando equipamentos NACIONAIS fabricados pela FTM, você{" "}
            <span style={{ fontWeight: "bold" }}>NÃO</span> está sujeito a
            problemas como:
          </p>

          <ul className={styles.detail}>
            <li className={styles.topic}>Variação cambial</li>
            <li className={styles.topic}>
              Falta de peças de reposição a pronta entrega.
            </li>
            <li className={styles.topic}>
              Assistência técnica e calibração fora do país.
            </li>
            <li className={styles.topic}>Demora na entrega.</li>
          </ul>
        </div>
      </div>
      {/* </section> */}
    </>
  );
};
export default ComprarFTM;
