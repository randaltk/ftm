import Image from "next/image";
import styles from "../styles/Empresa.module.scss";
export default function Empresa() {
  return (
    <>
      {" "}
      <section className={styles.sessaoEmpresa}>
        <a id="empresa" name="empresa"></a>
        <div className={styles.contentPresentationEmpresa}>
          <div className={styles.contentBannerEmpresa}>
            <Image
              width={532.8}
              height={532.8}
              src="https://res.cloudinary.com/aguadeira/image/upload/v1617378253/Nolan/icon-nr13_uwxlnj.png"
              alt="NR-13"
            />
          </div>

          <div className={styles.sessaoContent}>
            <h2 className={styles.title}>
              A FTM é uma empresa especialista em equipamentos hidráulicos de
              alta pressão
            </h2>
            <p className={styles.description}>
              Com foco na segurança de equipamentos como Caldeiras, Vasos de
              pressão, Tanques metálicos e Tubulações como também aplicando
              treinamento para operadores de Caldeiras e Vasos de pressão
            </p>

            <div className={styles.beneficios}>
              <h3>Benefícios</h3>
              <div className={styles.detailDois}>
                <p className={styles.topicDois}>
                  <span>• </span> Adequação as normas da NR-13
                </p>
                <p className={styles.topicDois}>
                  <span>• </span>Adequação as normas da NP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
