import styles from "../styles/Home.module.scss";
import Image from "next/image";

import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const routeChange = (e, item) => {
    let path = "";

    if (item === "locacao") {
      path = "locacao";
    } else if (item === "assistencia") {
      path = "assistencia-tecnica";
    } else {
      path = "vendas";
    }
    e.preventDefault();
    router.push(path);
  };

  return (
    <>
      <div>
        <section className={styles.sessaoSobre}>
          <div className={styles.contentPresentation}>
            <div className={styles.contentBanner}>
              <Image
                src="https://res.cloudinary.com/aguadeira/image/upload/v1636984632/FTM/691ece7e-a649-411e-b2ab-2c21fac7006e_1_zvmemj.jpg"
                alt="Inspeção"
                width={438.08}
                height={350.38}
              />
            </div>
            <div className={styles.sessaoContent}>
              <div className={styles.borderStyle}></div>
              <h2 className={styles.title}>Sobre</h2>
              <p className={styles.description}>
                A FTM é uma empresa especializa na Fabricação e Locação de
                equipamentos hidráulicos de alta pressão; Chaves de torque,
                tensionadores e projetos especiais que proporcionam facilidade e
                confiabilidade a diversas procedimentos de montagens
                industriais, onde há a necessidade de torqueamento ou
                tensionamento controlado, através de modernas ferramentas
                fabricadas dentro dos mais rígidos padrões de qualidade da
                Industria 4.0.
              </p>
            </div>
            <a id="quem-somos" name="quem-somos"></a>
            <div className={styles.sessaoContent} style={{ marginTop: "8em" }}>
              <div className={styles.borderStyle}></div>
              <h2 className={styles.title}> História</h2>
              <div className={styles.contentBanner}>
                <Image
                  src="https://res.cloudinary.com/aguadeira/image/upload/v1636985162/FTM/eaeff13f-25c1-481d-ad07-d25ad1a94910_2_uiwimd.jpg"
                  alt="Inspeção"
                  width={905}
                  height={768}
                />
              </div>

              <p className={styles.description}>
                A FTM foi fundada no Brasil em 2002, trazendo know how, e
                inovações tecnológicas ao mercado brasileiro. Tem como foco
                principal a qualidade e competitividade no mercado, através de
                seu atendimento personalizado desde a comercialização de seus
                produtos e serviços, até o pós venda. Nossa Missão é, satisfazer
                nossos clientes, oferecendo conforto, praticidade e segurança
                dos produtos e serviços ofertados. Recompensados pelo nosso
                trabalho, nos tornamos, uma das principais empresas do ramo de
                venda, locação de chaves de torque e tensionadores hidráulicos,
                além de projetos especiais e apoio técnico no seguimento de
                torqueamento e tensionamento controlado de parafusos, onde
                atendemos vários setores da nossa economia do mercado
                brasileiro. Nosso maior patrimônio é a satisfação de nossos
                clientes, além da preocupação com a segurança dos usuários dos
                nossos produtos.
              </p>
            </div>
          </div>
        </section>

        <section
          className={styles.sessaoServicos}
          style={{ marginBottom: "200px", marginTop: "10%" }}
        >
          <div>
            <h2 className={styles.title}>Serviços e Produtos</h2>
            {/* <p className={styles.descriptionServicos}>
              Equipamentos hidráulicos de alta pressão.
            </p> */}
          </div>

          <div className={styles.cards}>
            <div
              className={styles.cardsContent}
              onClick={(e) => routeChange(e, "locacao")}
            >
              <Image
                className={styles.cardsContentImg}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1636987518/FTM/80567124-1081-433c-883d-d01e0214cfa3_1_h4sccd.jpg"
                alt="Caldeiras"
                width={578}
                height={640}
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

            <div
              className={styles.cardsContent}
              onClick={(e) => routeChange(e, "venda")}
            >
              <Image
                className={styles.cardsContentImg}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1636987443/FTM/venda_1_z2kkkn.jpg"
                alt="Válvulas"
                width={578}
                height={640}
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

            {/* <div
              className={styles.cardsContent}
              onClick={(e) => routeChange(e, "assistencia")}
            >
              <Image
                className={styles.cardsContentImg}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1636989021/FTM/0b425151-3a22-4b00-8ff8-1b12536c0b2a_1_v8c61u.jpg"
                alt="Escadas"
                width={578}
                height={640}
              />
              <div className={styles.cardsDescription}>
                <h3>Calibração</h3>
                <p>
                  A FTM conta com uma equipe técnica altamente qualificada para
                  manutenção de máquinas e ferramentas do segmento hidráulico,
                  mecânico, elétrico, pneumático e manual.
                </p>
              </div>
            </div>

            <div
              className={styles.cardsContent}
              onClick={(e) => routeChange(e, "assistencia")}
            >
              <Image
                className={styles.cardsContentImg}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1636494064/FTM/7191af8b-d2d3-4627-850e-3b23d3ec56da_3_gfxfw3.jpg"
                alt="Escadas"
                width={578}
                height={640}
              />
              <div className={styles.cardsDescription}>
                <h3>Manutenção</h3>
                <p>
                  A FTM conta com uma equipe técnica altamente qualificada para
                  manutenção de máquinas e ferramentas do segmento hidráulico,
                  mecânico, elétrico, pneumático e manual.
                </p>
              </div>
            </div>

            <div
              className={styles.cardsContent}
              onClick={(e) => routeChange(e, "assistencia")}
            >
              <Image
                className={styles.cardsContentImg}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1636494064/FTM/7191af8b-d2d3-4627-850e-3b23d3ec56da_3_gfxfw3.jpg"
                alt="Escadas"
                width={578}
                height={640}
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

            <div
              className={styles.cardsContent}
              onClick={(e) => routeChange(e, "assistencia")}
            >
              <Image
                className={styles.cardsContentImg}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1636990367/FTM/83e540ab-c0b6-4393-a21a-a747945fe95d_2_q2s7u0.jpg"
                alt="Escadas"
                width={578}
                height={640}
              />
              <div className={styles.cardsDescription}>
                <h3>Treinamentos</h3>
                <p>
                  A FTM conta com uma equipe técnica altamente qualificada para
                  manutenção de máquinas e ferramentas do segmento hidráulico,
                  mecânico, elétrico, pneumático e manual.
                </p>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
}
