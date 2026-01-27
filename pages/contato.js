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
              src="https://res.cloudinary.com/aguadeira/image/upload/v1636984268/FTM/pexels-photo-210647_1_knblxa.jpg"
              alt="Entre em contato"
              width={940}
              height={627}
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
              number="55 11 97207-0047"
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
