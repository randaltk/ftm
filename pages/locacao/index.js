import styles from "../../styles/Home.module.scss";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { locacaoMock } from "./mock";
export default function Locacao() {
  const router = useRouter();
  const routeChange = (e, id) => {
    let path = `locacao/${id}`;

    e.preventDefault();
    router.push(path);
  };

  return (
    <>
      <section className={styles.sessaoLocacao}>
        <div className={styles.indice}>
          <h2>Locação</h2>

          <li className={styles.navItem}>
            <Link href="/">Home</Link> <span>{"»"}</span>
            <Link href="/locacao">Locação</Link>
          </li>
        </div>

        <div className={styles.cardsLocacao}>
          {locacaoMock.map((locacao) => (
            <div
              className={styles.cardsContent}
              onClick={(e) => routeChange(e, locacao.id)}
            >
              <Image
                className={styles.cardsContentImg}
                src={locacao.image}
                alt={locacao.nome}
                width={500}
                height={500}
              />

              <h3>{locacao.nome}</h3>
            </div>
          ))}
        </div>
        {/* <div className={styles.cardsLocacao}>
          <div
            className={styles.cardsContent}
            onClick={(e) => routeChange(e, "locacao")}
          >
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
                  <li className={styles.topic}>Facilidade de Gerenciamento</li>
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
                RBC com garantias superiores comparado ao que o mercado oferece.
              </p>
            </div>
          </div>

          <div
            className={styles.cardsContent}
            onClick={(e) => routeChange(e, "assistencia")}
          >
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

          <div
            className={styles.cardsContent}
            onClick={(e) => routeChange(e, "assistencia")}
          >
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
        </div> */}
      </section>
    </>
  );
}
