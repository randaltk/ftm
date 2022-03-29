import styles from "../styles/Home.module.scss";

import Image from "next/image";
import Link from "next/link";

export default function AssistenciaTecnica() {
  return (
    <>
      <div>
        <section className={styles.sessaoLocacao}>
          <div className={styles.indice}>
            <h2>Assistência Técnica</h2>

            <li className={styles.navItem}>
              <Link href="/">Home</Link> <span>{"»"}</span>
              <Link href="/assistencia-tecnica">Assistencia Técnica</Link>
            </li>
          </div>
        </section>

        <section className={styles.sessaoSobre}>
          <div className={styles.sessaoContent} style={{ marginTop: "6em" }}>
            <div className={styles.contentBanner}>
              <Image src="/" alt="Inspeção" width={905} height={768} />
            </div>

            <p className={styles.description}>
              A FTM conta com uma equipe técnica altamente qualificada para
              manutenção de máquinas e ferramentas do segmento hidráulico,
              mecânico, elétrico, pneumático e manual, nossa oficina está
              devidamente equipada com ferramentas tecnológicas para realizarmos
              a desmontagem, o diagnóstico e a perfeita manutenção, que tem
              garantia completa de mão de obra e peças. Todos os orçamentos são
              encaminhados aos clientes juntamente com o Relatório técnico com
              foto evidenciando o problema e a solução do mesmo.
            </p>
          </div>
          <div>
            <div className={styles.contentBanner}>
              <Image
                src="https://res.cloudinary.com/aguadeira/image/upload/v1636984632/FTM/691ece7e-a649-411e-b2ab-2c21fac7006e_1_zvmemj.jpg"
                alt="Calibração"
                width={438.08}
                height={350.38}
              />
            </div>
            <div className={styles.sessaoContent}>
              <div className={styles.borderStyle}></div>
              <h2 className={styles.title}>Calibração</h2>
              <p className={styles.description}>
                Sempre que aplicável, os equipamentos fornecidos pela FTM para
                locação ou venda são calibrados com padroes nacionais de medida
                rastreáveis à Rede Brasileira de Calibração (RBC) em
                laboratórios qualificados e independentes.
              </p>
            </div>

            <div className={styles.sessaoContent} style={{ marginTop: "10em" }}>
              <div className={styles.borderStyle}></div>
              <h2 className={styles.title}>Manutenção</h2>
              <div className={styles.contentBanner}>
                <Image
                  src="https://res.cloudinary.com/aguadeira/image/upload/v1648574812/FTM/assis-tec-2_gqi3u4.jpg"
                  alt="Manutenção"
                  width={905}
                  height={768}
                />
              </div>

              <p className={styles.description}>
                Prestamos assistência técnica e manutenção{" "}
              </p>
            </div>
            <div className={styles.sessaoContent} style={{ marginTop: "16em" }}>
              <div className={styles.borderStyle}></div>
              <h2 className={styles.title}>Treinamentos</h2>
              <div className={styles.contentBanner}>
                <Image
                  src="https://res.cloudinary.com/aguadeira/image/upload/v1636990367/FTM/83e540ab-c0b6-4393-a21a-a747945fe95d_2_q2s7u0.jpg"
                  alt="Treinamentos"
                  width={905}
                  height={768}
                />
              </div>

              <p className={styles.description}>Treinamentos</p>
            </div>
            <div className={styles.sessaoContent} style={{ marginTop: "20em" }}>
              <div className={styles.borderStyle}></div>
              <h2 className={styles.title}>Projetos Especiais</h2>
              <div className={styles.contentBanner}>
                <Image
                  src="https://res.cloudinary.com/aguadeira/image/upload/v1648575289/FTM/projetos-especiais-2_penzli.jpg"
                  alt="Projetos Especiais"
                  width={905}
                  height={768}
                />
              </div>

              <p className={styles.description}>
                Projetamos e fabricamos projetos especiais sob encomenda de
                acordo com as necessidades de aplicação
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
