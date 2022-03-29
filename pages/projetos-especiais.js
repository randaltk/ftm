import styles from "../styles/Home.module.scss";

import Image from "next/image";
import Link from "next/link";

export default function ProjetosEspeciais() {
  return (
    <>
      <section className={styles.sessaoLocacao}>
        <div className={styles.indice}>
          <h2>Projetos Especiais</h2>

          <li className={styles.navItem}>
            <Link href="/">Home</Link> <span>{"»"}</span>
            <Link href="/projetos-especiais">Projetos Especiais</Link>
          </li>
        </div>
      </section>
    </>
  );
}
