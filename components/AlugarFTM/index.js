import styles from "../../styles/Home.module.scss";

const ComprarFTM = () => {
  return (
    <>
      <div className={styles.contentPresentation}>
        <div className={styles.sessaoContent}>
          <div className={styles.borderStyle}></div>
          <h2 className={styles.title}>Por que alugar com a FTM?</h2>
          <ul className={styles.detail}>
            <li className={styles.topic}>
              Disponibilidade imediata dos Equipamentos.
            </li>
            <li className={styles.topic}>Facilidade de Gerenciamento</li>
            <li className={styles.topic}>Benefício Fiscal</li>
            <li className={styles.topic}>Facilidade de Contratação</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default ComprarFTM;
