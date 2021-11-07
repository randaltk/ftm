import styles from "../../styles/Home.module.scss";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import locacaoMock from "../../mocks/locacaoMock";
export default function Locacao() {
  const router = useRouter();
  const routeChange = (e, nome, id) => {
    e.preventDefault();
    return router.push({
      pathname: `locacao/${id}`,

      query: { nome: nome },
    });
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
          {locacaoMock.map((locacao, key) => (
            <div
              className={styles.cardsContent}
              onClick={(e) => routeChange(e, locacao.nome, locacao.id)}
              key={key}
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
      </section>
    </>
  );
}
