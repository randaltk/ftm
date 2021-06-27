import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Header.module.scss";
const Header = () => {
  return (
    <>
      <header className={styles.headerStyle}>
        <div className={styles.linearGradient}>
          <div className={styles.headerNavigation}>
            <div className={styles.logoMetalPev}>
              <a href="/">
                <Image
                  src="https://res.cloudinary.com/aguadeira/image/upload/v1624376725/FTM/58381766_2253291008227679_90483295795544064_n_1_1_zbwpjn_3_wqxjyj.png"
                  alt="FTM Equipamentos Hidráulicos de Alta Pressão"
                  width={160}
                  height={71}
                />
              </a>
            </div>

            <div className={styles.headerMenu}>
              <div className={styles.menuIconToggleMenu}>≡</div>

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

          <section className={styles.headerContent}>
            <div className={styles.textCard}>
              <h2 className={styles.title}>
                A melhor solução em torque controlado
              </h2>
              <p className={styles.description}></p>
              <a href="#contato">
                {" "}
                <button className={styles.btnDefault}>
                  <a href="/contato">
                    Solicitar orçamento
                    <img
                      src="https://res.cloudinary.com/aguadeira/image/upload/v1621722710/public/Arrow_4_heq4na.png"
                      alt="Arrow"
                      width={9}
                      height={8}
                    />
                  </a>
                </button>
              </a>
            </div>
          </section>
        </div>
      </header>
    </>
  );
};
export default Header;
