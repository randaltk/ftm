import styles from "../styles/Home.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <section className={styles.sessaoSobre}>
          <div className={styles.contentPresentation}>
            <div className={styles.contentBanner}>
              <Image
                src="https://res.cloudinary.com/aguadeira/image/upload/v1621735210/public/sectionsobre_1_kz7ogq_1_d6wuw0.png"
                alt="Inspeção"
                width={438.08}
                height={350.38}
              />
            </div>

            <div className={styles.sessaoContent}>
              <div className={styles.borderStyle}></div>
              <h2 className={styles.title}>Por que Comprar da FTM?</h2>
              <p className={styles.description}>
                Comprando equipamentos NACIONAIS fabricados pela FTM, você não
                está sujeito a problemas como:
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
        </section>

        <section
          className={styles.sessaoServicos}
          style={{ marginBottom: "200px", marginTop: "10%" }}
        >
          <div>
            <h2 className={styles.title}>Serviços</h2>
            {/* <p className={styles.descriptionServicos}>
              Equipamentos hidráulicos de alta pressão.
            </p> */}
          </div>

          <div className={styles.cards}>
            <div className={styles.cardsContent}>
              <Image
                className={styles.cardsContentImg}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1624832143/FTM/f-10-serie-f_1_emdwpg.jpg"
                alt="Caldeiras"
                width={500}
                height={500}
              />
              <div className={styles.cardsDescription}>
                <h3>Locação de Máquinas e Ferramentas</h3>
                <p>
                  Por que alugar?
                  <ul className={styles.detail}>
                    <li className={styles.topic}>
                      Disponibilidade imediata dos Equipamentos.
                    </li>
                    <li className={styles.topic}>
                      Facilidade de Gerenciamento
                    </li>
                    <li className={styles.topic}>Benefício Fiscal</li>
                    <li className={styles.topic}>Facilidade de Contratação</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className={styles.cardsContent}>
              <Image
                className={styles.cardsContentImg}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1624832521/FTM/fch-10-serie-champion_2_rgf5w3.jpg"
                alt="Válvulas"
                width={500}
                height={500}
              />
              <div className={styles.cardsDescription}>
                <h3>Venda de Máquinas e Ferramentas</h3>
                <p>
                  Oferecemos equipamentos genuinamente nacional, com tecnologia
                  comparado aos equipamentos importados. Equipamentos Calibrados
                  RBC com garantias superiores comparado ao que o mercado
                  oferece.
                </p>
              </div>
            </div>

            <div className={styles.cardsContent}>
              <Image
                className={styles.cardsContentImg}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1624833289/FTM/fch-1-serie-champion_1_dbj87n.jpg"
                alt="Escadas"
                width={500}
                height={500}
              />
              <div className={styles.cardsDescription}>
                <h3>Assistência Técnica</h3>
                <p>
                  A FTM conta com uma equipe técnica altamente qualificada para
                  manutenção de máquinas e ferramentas do segmento hidráulico,
                  mecânico, elétrico, pneumático e manual.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
