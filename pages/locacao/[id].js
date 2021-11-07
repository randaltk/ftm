import { locacaoMock } from "./mock";
import styles from "../../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
export default function Details() {
  function detailLocacao() {
    const paths = locacaoMock.map((locacao) => {
      return {
        params: {
          id: locacao.id,
        },
      };
    });
  }
  return (
    <section className={styles.sessaoSobre}>
      <div className={styles.contentPresentation}>
        <div className={styles.sessaoContent}>
          {/* <div className={styles.borderStyle}></div>
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
            A FTM foi fundada no Brasil em 2002, trazendo know how, e inovações
            tecnológicas ao mercado brasileiro. Tem como foco principal a
            qualidade e competitividade no mercado, através de seu atendimento
            personalizado desde a comercialização de seus produtos e serviços,
            até o pós venda. Nossa Missão é, satisfazer nossos clientes,
            oferecendo conforto, praticidade e segurança dos produtos e serviços
            ofertados. Recompensados pelo nosso trabalho, nos tornamos, uma das
            principais empresas do ramo de venda, locação de chaves de torque e
            tensionadores hidráulicos, além de projetos especiais e apoio
            técnico no seguimento de torqueamento e tensionamento controlado de
            parafusos, onde atendemos vários setores da nossa economia do
            mercado brasileiro. Nosso maior patrimônio é a satisfação de nossos
            clientes, além da preocupação com a segurança dos usuários dos
            nossos produtos.
          </p> */}
          <section className={styles.sessaoLocacao}>
            <div>
              <h2>Locação</h2>
            </div>
            <li className={styles.navItem}>
              <Link href="/">Home</Link> <span>{"»"}</span>
              <Link href="/locacao">Locação</Link>
            </li>
          </section>
        </div>
      </div>
    </section>
  );
}
