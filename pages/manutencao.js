import styles from "../styles/Home.module.scss";

import Image from "next/image";
import Link from "next/link";

export default function Manutencao() {
  return (
    <>
      <section className={styles.sessaoLocacao}>
        <div className={styles.indice}>
          <h2>Manutenção</h2>

          <li className={styles.navItem}>
            <Link href="/">Home</Link> <span>{"»"}</span>
            <Link href="/manutencao">Manutenção</Link>
          </li>
        </div>
      </section>
    </>
  );
}
