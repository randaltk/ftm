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
                  width={214}
                  height={109.5}
                  src="https://res.cloudinary.com/aguadeira/image/upload/v1636228064/FTM/ftmlogo_w9ajqq.png"
                  alt="FTM Equipamentos Hidráulicos de Alta Pressão"
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
