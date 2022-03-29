import styles from "../styles/Home.module.scss";

import Image from "next/image";
import ImageGallery from "react-image-gallery";
import Link from "next/link";

export default function Galeria() {
  const images = [
    {
      original:
        "https://res.cloudinary.com/aguadeira/image/upload/v1648583718/FTM/Galeria/WhatsApp_Image_2022-03-29_at_16.32.26_4_qzbe2h.jpg",
      thumbnail:
        "https://res.cloudinary.com/aguadeira/image/upload/v1648583718/FTM/Galeria/WhatsApp_Image_2022-03-29_at_16.32.26_4_qzbe2h.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/aguadeira/image/upload/v1648583718/FTM/Galeria/WhatsApp_Image_2022-03-29_at_16.32.26_6_dijsqv.jpg",
      thumbnail:
        "https://res.cloudinary.com/aguadeira/image/upload/v1648583718/FTM/Galeria/WhatsApp_Image_2022-03-29_at_16.32.26_6_dijsqv.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/aguadeira/image/upload/v1648583719/FTM/Galeria/WhatsApp_Image_2022-03-29_at_16.32.26_8_txwvtx.jpg",
      thumbnail:
        "https://res.cloudinary.com/aguadeira/image/upload/v1648583719/FTM/Galeria/WhatsApp_Image_2022-03-29_at_16.32.26_8_txwvtx.jpg",
    },
  ];
  return (
    <>
      <section className={styles.sessaoLocacao}>
        <div className={styles.indice}>
          <h2>Galeria</h2>

          <li className={styles.navItem}>
            <Link href="/">Home</Link> <span>{"»"}</span>
            <Link href="/galeria">Galeria</Link>
          </li>
        </div>
      </section>

      <section>
        <ImageGallery items={images} />;
      </section>
    </>
  );
}
