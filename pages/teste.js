import styles from "../styles/Home.module.scss";

import Image from "next/image";
import Link from "next/link";

export default function teste() {
  return (
    <>
      <section className={styles.sessaoLocacao}>
        <div className={styles.indice}>
          <h2>Assistência Técnica</h2>

          <li className={styles.navItem}>
            <Link href="/">Home</Link> <span>{"»"}</span>
            <Link href="/assistencia-tecnica">Assistência Técnica</Link>
          </li>
        </div>
      </section>
    </>
  );
}
