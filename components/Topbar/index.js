import Image from "next/image";
import styles from "../../styles/Topbar.module.scss";

const Topbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.item}>
            <span>Fábrica (Matriz): 11 5522-6262 </span>

            <Image
              src="https://res.cloudinary.com/aguadeira/image/upload/v1623681451/FTM/pngegg_1_yo4wa3.png"
              alt="Tel"
              width={22}
              height={22}
            />
            <div className={styles.separator}></div>
          </div>

          <div className={styles.item}>
            <span> Comercial (filial): 11 2304-5873</span>
            <Image
              src="https://res.cloudinary.com/aguadeira/image/upload/v1623681451/FTM/pngegg_1_yo4wa3.png"
              alt="Tel"
              width={22}
              height={22}
            />
            <div className={styles.separator}></div>
          </div>
          {/* 
          <div className={styles.item}>
            <span> (011) 99416-6042</span>
            <Image
              src="https://res.cloudinary.com/aguadeira/image/upload/v1621877447/public/580b57fcd9996e24bc43c543_rq3rpg_1_hzqvlk.png"
              alt="WhatsApp"
              width={25}
              height={25}
            />
            <div className={styles.separator}></div>
          </div> */}

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
