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
            <div className={styles.logoMetalPev}>
              <a href="/">
                <Image
                  src="https://res.cloudinary.com/aguadeira/image/upload/v1636205192/FTM/sadasas-depositphotos-bgremover_jxyrfv.png"
                  alt="FTM Equipamentos Hidráulicos de Alta Pressão"
                  width={230}
                  height={120}
                />
              </a>
            </div>

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
                    <a id="quem-somos">Quem Somos</a>
                  </li>

                  <li className={styles.navItem}>
                    <Link href="/locacao">Locação</Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link href="/vendas">Vendas</Link>
                  </li>
                  <li className={styles.navItem}>
                    <Link href="/assistencia-tecnica">Serviços</Link>
                  </li>
                  {/* 
                  <li className={styles.navItem}>
                    <Link href="/projetos-especiais">Projetos Especiais</Link>
                  </li>

                  <li className={styles.navItem}>
                    <Link href="/treinamentos">Treinamentos</Link>
                  </li> */}
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
                Soluções em Montagens Industriais com Equipamentos Hidráulicos
                de Alta Pressão
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
          </section>
        </div>
      </header>
    </>
  );
};
export default Header;
