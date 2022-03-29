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
              number="55 11 99416-6042"
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

      <section className={styles.sessaoContato}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h4>Endereços</h4>
            <b>Fábrica (Matriz):</b> Rua Sete de Julho, 56 - 04760-070 - São
            Paulo - <br></br> <b>Comercial (filial):</b> SP Rua Padre João
            Álvares, 509 - 07056-000 - Guarulhos - SP
            <h4>Contato</h4>
            <div style={{ display: " flex" }}>
              <span>
                <b>Fábrica (Matriz):</b> 11 5522-6264{" "}
              </span>
              <span style={{ marginLeft: "0.5em" }}>| 11 2574-5782 </span>
              <span style={{ marginLeft: "0.5em" }}>
                (Engenharia - 11 99416-6042)
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <span>
                <b>Comercial (filial):</b> 11 2304-5873
              </span>
              <span style={{ marginLeft: "0.5em" }}>| 11 2304-2767 </span>

              <span style={{ marginLeft: "0.5em" }}>| 11 98576-2624 </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
