import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Header.module.scss";

const Header = ({ click }) => {
  return (
    <>
      <header className={styles.headerStyle}>
        <div className={styles.linearGradient}>
          <div className={styles.headerNavigation}>
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
                    <a href="#quem-somos">Quem Somos</a>
                  </li>

                  <li className={styles.navItem}>
                    <Link href="/locacao">Locação</Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link href="/vendas">Vendas</Link>
                  </li>

                  <div className={styles.dropdown}>
                    <li className={styles.navItem}>Serviços</li>
                    <div className={styles.dropdownContent}>
                      <ul>
                        <li className={styles.navItem}>
                          <Link href="/calibracao">Calibração</Link>
                        </li>

                        <li className={styles.navItem}>
                          <Link href="/manutencao">Manutenção</Link>
                        </li>

                        <li className={styles.navItem}>
                          <Link href="/assistencia-tecnica">
                            Assistência técnica
                          </Link>
                        </li>

                        <li className={styles.navItem}>
                          <Link href="/treinamentos">Treinamentos</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

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
                Soluções em Montagens Industriais
              </h2>
              <p className={styles.description}></p>
              <Link href="/contato">
                <button className={styles.btnDefault}>
                  Solicitar orçamento
                  <img
                    src="https://res.cloudinary.com/aguadeira/image/upload/v1621722710/public/Arrow_4_heq4na.png"
                    alt="Arrow"
                    width={9}
                    height={8}
                  />
                </button>
              </Link>
            </div>

            {/* <div className={styles.imagesContainer}>
              <Image
                src="https://res.cloudinary.com/aguadeira/image/upload/v1636982380/FTM/slider_tmmjqz.jpg"
                alt="Inspeção"
                width={438.08}
                height={350.38}
              />
              <Image
                src="https://res.cloudinary.com/aguadeira/image/upload/v1636982252/FTM/c102801e-b6cc-48e8-886f-03dc4dc7bdda_rtdt4r.jpg"
                alt="Inspeção"
                width={438.08}
                height={350.38}
              />
              <Image
                src="https://res.cloudinary.com/aguadeira/image/upload/v1624840207/FTM/pexels-kervin-edward-lara-3976320_kmwwlz.jpg"
                alt="Inspeção"
                width={438.08}
                height={350.38}
              />
            </div> */}
          </section>
        </div>
      </header>
    </>
  );
};
export default Header;
