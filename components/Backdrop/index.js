import Link from "next/link";
import styles from "../../styles/Backdrop.module.scss";

const Backdrop = ({ click, show }) => {
  return (
    show && (
      <div className={styles.backdrop} onClick={click}>
        <div className={styles.headerMenu}>
          <div className={styles.menuIconToggleMenu} onClick={click}>
            ≡
          </div>

          <nav className={styles.mobileHidden}>
            <ul>
              <li className={styles.navItem}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/empresa">Empresa</Link>
              </li>

              <li className={styles.navItem}>
                <Link href="/locacao">Locação</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/vendas">Vendas</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/assistencia-tecnica">Assistência Técnica</Link>
              </li>

              <li className={styles.navItem}>
                <Link href="/projetos-especiais">Projetos Especiais</Link>
              </li>

              <li className={styles.navItem}>
                <Link href="/treinamentos">Treinamentos</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/contato">Contato</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  );
};

export default Backdrop;
