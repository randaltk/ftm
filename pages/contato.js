import styles from "../styles/Home.module.scss";
import Image from "next/image";
import ReactWhatsapp from "react-whatsapp";
export default function Contato() {
  return (
    <>
      <section className={styles.sessaoContato}>
        <div className={styles.contentPresentation}>
          <div className={styles.contentBanner}>
            <Image
              src="https://res.cloudinary.com/aguadeira/image/upload/v1621748263/public/pexels-linkedin-sales-navigator-2182973_2_zc2bpt.jpg"
              alt="Entre em contato"
              width={438.08}
              height={350.38}
              alt="Contato"
            />
          </div>

          <div className={styles.sessaoContent}>
            <div className={styles.borderStyle}></div>
            <h2 className={styles.title}>Entre em contato !</h2>
            <p className={styles.description}>
              Nossa equipe esta preparada para atender a sua empresa de forma
              ágil, confiável e transparente.
            </p>

            <ReactWhatsapp
              className={styles.btnDefault}
              number="55 11 95363-4019"
              message="Olá! Gostaria de obter mais informações"
              href="#"
            >
              Iniciar Conversa
              <img
                className={styles.whatsAppIcon}
                alt="WhatsApp"
                width={20}
                height={20}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1621877447/public/580b57fcd9996e24bc43c543_rq3rpg_1_hzqvlk.png"
              />
            </ReactWhatsapp>
          </div>
        </div>
      </section>
    </>
  );
}
