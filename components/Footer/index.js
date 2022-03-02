import Image from "next/image";
import styles from "../../styles/Footer.module.scss";
import Link from "next/link";
import Upload from "../Upload";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.horizontalLayout}>
          <div className={styles.siteMap}>
            <div className={styles.logoMetalPev}>
              <Link href="/">
                <img
                  src="https://res.cloudinary.com/aguadeira/image/upload/v1624376725/FTM/58381766_2253291008227679_90483295795544064_n_1_1_zbwpjn_3_wqxjyj.png"
                  alt="FTM Equipamentos Hidráulicos de Alta Pressão"
                />
              </Link>
            </div>
            <ul className={styles.siteMap}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a href="#quem-somos">Quem Somos</a>
              </li>

              <li>
                <Link href="/locacao">Locação</Link>
              </li>
              <li>
                <Link href="/vendas">Vendas</Link>
              </li>
              <li>
                <Link href="/calibracao">Calibração</Link>
              </li>

              <li>
                <Link href="/manutencao">Manutenção</Link>
              </li>

              <li>
                <Link href="/assistencia-tecnica">Assistência técnica</Link>
              </li>

              <li>
                <Link href="/treinamentos">Treinamentos</Link>
              </li>
              <li>
                <Link href="/contato">Contato</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.footerTitle}>
              <div className={styles.borderStyle}></div>
              Contato
            </h3>
            <p className={styles.footerDescription}>
              Entre em contato e teremos o prazer em esclarecer qualquer dúvida.
            </p>

            <Upload />
          </div>
          <div>
            <h3 className={styles.footerTitle}>
              <div className={styles.borderStyle}></div>
              FTM nas redes sociais
            </h3>
            <ul className={styles.footerSocial}>
              <li>
                <img
                  src="https://res.cloudinary.com/aguadeira/image/upload/v1621878348/public/58e91afdeb97430e81906504_1_lsl4hy.png"
                  alt="Linkedin"
                  width={20}
                  height={20}
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/aguadeira/image/upload/v1621878007/public/584ac2d03ac3a570f94a666d_1_hfppbn.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </li>
            </ul>
            <ul className={styles.footerContact}>
              {/* <li>
                <p>
                  <img
                    alt="WhatsApp"
                    src="https://res.cloudinary.com/aguadeira/image/upload/v1621877447/public/580b57fcd9996e24bc43c543_rq3rpg_1_hzqvlk.png"
                    width={30}
                    height={30}
                  />
                  55 11 99416-6042
                </p>
              </li> */}
              <li>
                <p>
                  <img
                    width={30}
                    height={30}
                    alt="Email"
                    src="https://res.cloudinary.com/aguadeira/image/upload/v1621877390/public/584856b4e0bb315b0f7675ac_1_1_kd0wv4.png"
                  />
                  contato@ftm.net.br
                </p>
              </li>
            </ul>
            <h3 className={styles.footerTitle}>
              <div className={styles.borderStyle}></div>
              Endereço
            </h3>

            <p className={styles.footerDescription}>
              <a
                target="_blank"
                href="https://www.google.com.br/maps/place/R.+Sete+de+Julho,+56+-+Vila+Socorro,+S%C3%A3o+Paulo+-+SP,+04760-070/@-23.6637546,-46.7166505,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce51b1847e0071:0x6fcd6e6aefa16a75!8m2!3d-23.6637595!4d-46.7144618"
              >
                {" "}
                Fábrica (Matriz): Rua Sete de Julho, 56 - 04760-070 - São Paulo
                -
              </a>
            </p>
            <p className={styles.footerDescription}>
              <a
                target="_blank"
                href="https://www.google.com.br/maps/place/R.+Padre+Jo%C3%A3o+%C3%81lvares,+509+-+Vila+Renata,+Guarulhos+-+SP,+07056-000/@-23.462695,-46.5667986,17z/data=!3m1!4b1!4m5!3m4!1s0x94cef5bcb277f9f7:0x2f8a43eae31041ec!8m2!3d-23.4626999!4d-46.5646099"
              >
                {" "}
                Comercial (filial): SP Rua Padre João Álvares, 509 - 07056-000 -
                Guarulhos - SP
              </a>
            </p>
          </div>
        </div>
        <p className={styles.footerEnd}>FTM 2021 Direitos Reservados</p>
      </footer>
    </>
  );
};
export default Footer;
