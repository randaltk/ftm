import styles from "../styles/Home.module.scss";

import Image from "next/image";
import ImageGallery from "react-image-gallery";
import Link from "next/link";

export default function Galeria() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
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
