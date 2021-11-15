import styles from "../../styles/Home.module.scss";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import locacaoMock from "../../mocks/locacaoMock";
import ComprarFTM from "../../components/ComprarFTM";
export default function Vendas() {
  const router = useRouter();
  const routeChange = (
    e,
    id,
    nome,
    imagem,
    descricao,
    fichaTecnica,
    imagemTabela
  ) => {
    e.preventDefault();

    return router.push({
      pathname: `vendas/${id}`,

      query: {
        nome: nome,
        imagem: imagem,
        descricao: descricao,
        fichaTecnica: JSON.stringify(fichaTecnica),
        imagemTabela: imagemTabela,
      },
    });
  };

  return (
    <>
      <section className={styles.sessaoLocacao}>
        <div className={styles.indice}>
          <h2>Vendas</h2>

          <li className={styles.navItem}>
            <Link href="/">Home</Link> <span>{"»"}</span>
            <Link href="/vendas">Vendas</Link>
          </li>
        </div>
        <div className={styles.remove}>
          <ComprarFTM />
        </div>
        <div className={styles.cardsLocacao}>
          {locacaoMock.map((locacao, key) => (
            <div
              className={styles.cardsContent}
              onClick={(e) =>
                routeChange(
                  e,
                  locacao.id,
                  locacao.nome,
                  locacao.imagem,
                  locacao.descricao,
                  locacao.fichaTecnica,
                  locacao.imagemTabela
                )
              }
              key={key}
            >
              <Image
                className={styles.cardsContentImg}
                src={locacao.imagem}
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
