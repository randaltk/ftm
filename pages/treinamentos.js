import styles from "../styles/Home.module.scss";

import Image from "next/image";
import Link from "next/link";

export default function Treinamentos() {
  return (
    <>
      <section className={styles.sessaoLocacao}>
        <div className={styles.indice}>
          <h2>Treinamentos</h2>

          <li className={styles.navItem}>
            <Link href="/">Home</Link> <span>{"»"}</span>
            <Link href="/treinamentos">Treinamentos</Link>
          </li>
        </div>
      </section>
    </>
  );
}
