import "../styles/globals.scss";
import styles from "../styles/Home.module.scss";
import Head from "next/head";
// Components
// import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FTM | Equipamentos Hidráulicos de Alta Pressão</title>
      </Head>

      <main className={styles.bodyContent}>
        <Topbar />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

export default MyApp;
