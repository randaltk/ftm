import styles from "../styles/Home.module.scss";
import Image from "next/image";
import ReactWhatsapp from "react-whatsapp";
export default function Home() {
  return (
    <>
      <div>
        <section className={styles.sessaoSobre}>
          <ReactWhatsapp
            className={styles.wppAbsolute}
            number="55 11 99416-6042"
            message="Olá! Gostaria de obter mais informações"
            href="#"
          >
            <img
              alt="WhatsApp"
              width={60}
              height={60}
              src="https://res.cloudinary.com/aguadeira/image/upload/v1636221969/FTM/logo-whatsapp-png-46041_1_vtrevq.png"
            />
          </ReactWhatsapp>
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
                  src="https://res.cloudinary.com/aguadeira/image/upload/v1624840207/FTM/pexels-kervin-edward-lara-3976320_kmwwlz.jpg"
                  alt="Inspeção"
                  width={438.08}
                  height={350.38}
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
