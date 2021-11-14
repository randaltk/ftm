import styles from "../styles/Home.module.scss";

import Image from "next/image";
import Link from "next/link";

export default function Calibracao() {
  return (
    <>
      <section className={styles.sessaoLocacao}>
        <div className={styles.indice}>
          <h2>Calibração</h2>

          <li className={styles.navItem}>
            <Link href="/">Home</Link> <span>{"»"}</span>
            <Link href="/calibracao">Calibração</Link>
          </li>
        </div>
      </section>
    </>
  );
}
