import Image from "next/image";
import styles from "../../styles/Topbar.module.scss";
import Link from "next/dist/client/link";

const Topbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoMetalPev}>
            <Link href="/">
              <Image
                width={214}
                height={112}
                src="https://res.cloudinary.com/aguadeira/image/upload/v1636991087/FTM/sadasas_lelmlm_1_a6uq54.jpg"
                alt="FTM Equipamentos Hidráulicos de Alta Pressão"
              />
            </Link>
          </div>

          <div className={styles.item}>
            <div style={{ display: " flex" }}>
              <span>
                <b>Fábrica (Matriz):</b> 11 5522-6264{" "}
              </span>
            </div>

            <Image
              src="https://res.cloudinary.com/aguadeira/image/upload/v1623681451/FTM/pngegg_1_yo4wa3.png"
              alt="Tel"
              width={22}
              height={22}
            />
            <div className={styles.separator}></div>
          </div>

          <div className={styles.item}>
            <div style={{ display: "flex" }}>
              <span>
                <b>Comercial (filial):</b> 11 2304-5873
              </span>
              <span style={{ marginLeft: "0.5em" }}>| 11 2304-2767 </span>
            </div>

            <Image
              src="https://res.cloudinary.com/aguadeira/image/upload/v1623681451/FTM/pngegg_1_yo4wa3.png"
              alt="Tel"
              width={22}
              height={22}
            />
            <div className={styles.separator}></div>
          </div>

          <div className={styles.item}>
            <span>contato@ftm.net.br</span>
            <Image
              src="https://res.cloudinary.com/aguadeira/image/upload/v1621877390/public/584856b4e0bb315b0f7675ac_1_1_kd0wv4.png"
              alt="Email"
              width={28}
              height={28}
            />
            <div
              style={{ border: "1px solid transparent" }}
              className={styles.separator}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Topbar;
