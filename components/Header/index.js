import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/Header.module.scss";

const Header = ({ click }) => {
  var images = [
    "https://res.cloudinary.com/aguadeira/image/upload/v1646225142/FTM/vendas/pexels-kindel-media-9800117_jra0x2.jpg",
    "https://res.cloudinary.com/aguadeira/image/upload/v1646229652/FTM/vendas/pexels-dimitry-anikin-4994495_xjqvao.jpg",
    "https://res.cloudinary.com/aguadeira/image/upload/v1646229723/FTM/vendas/pexels-pixabay-33192_esdciu.jpg",
    "https://res.cloudinary.com/aguadeira/image/upload/v1646243362/FTM/vendas/pexels-magda-ehlers-2569842_gn5y31.jpg",
  ];

  const sliderRef = useRef();

  useEffect(() => {
    var i = 0;
    setInterval(function () {
      sliderRef.current.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i = 0;
      }
    }, 5000);
  }, [sliderRef]);

  function currentSlide(number) {
    if (number === 1) {
      sliderRef.current.style.backgroundImage = "url(" + images[0] + ")";
    }
    if (number === 2) {
      sliderRef.current.style.backgroundImage = "url(" + images[1] + ")";
    }
    if (number === 3) {
      sliderRef.current.style.backgroundImage = "url(" + images[2] + ")";
    }
    if (number === 4) {
      sliderRef.current.style.backgroundImage = "url(" + images[3] + ")";
    }
  }
  return (
    <>
      <header className={styles.headerStyle} ref={sliderRef}>
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

                  {/* <div className={styles.dropdown}>
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
                  </div> */}

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
                "A melhor solução em torque controlado"
              </h2>

              <p>Torqueando ou tencionando a FTM é a melhor opção.</p>
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

            <div className={styles.dotBox}>
              <span
                className={styles.dot}
                onClick={() => currentSlide(1)}
              ></span>
              <span
                className={styles.dot}
                onClick={() => currentSlide(2)}
              ></span>
              <span
                className={styles.dot}
                onClick={() => currentSlide(3)}
              ></span>
              <span
                className={styles.dot}
                onClick={() => currentSlide(4)}
              ></span>
            </div>
          </section>
          <div className={styles.container}>
            <img
              className={styles.item}
              src="https://res.cloudinary.com/aguadeira/image/upload/v1642427393/FTM/vendas/ftm-f_3_kuu0uu.jpg"
            />

            <img
              className={styles.item}
              src="https://res.cloudinary.com/aguadeira/image/upload/v1642440765/FTM/vendas/fch_pdkaxz.jpg"
            />

            <img
              className={styles.item}
              src="https://res.cloudinary.com/aguadeira/image/upload/v1643071441/FTM/vendas/ftmumiljha_1_r9ftdo.png"
            />

            <img
              className={styles.item}
              src="https://res.cloudinary.com/aguadeira/image/upload/v1643132201/FTM/vendas/Sem_t%C3%ADtulo_elt6rg.png"
            />

            <img
              className={styles.item}
              src="https://res.cloudinary.com/aguadeira/image/upload/v1646222433/FTM/vendas/tensionadorwind_1_b2pnsr.png"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
