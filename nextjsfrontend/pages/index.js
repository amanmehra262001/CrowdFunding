import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crowd Funding DAPP</title>
        <meta name="description" content="Our CrowdFunding DAPP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Crowd Funding!</a> DAPP
        </h1>

        <p className={styles.description}>
          Tell us who you are
        </p>

        <div className={styles.grid}>
          <Link href="/fundRaiser">
            <div  className={styles.card}>
            <h2>Fund Raiser &rarr;</h2>
            <p>Click here to register as a fund raiser! This will list you with other fund raisers.</p>
            </div>
          </Link>

          <Link href="/funder">
            <div className={styles.card}>
            <h2>Funder &rarr;</h2>
            <p>Want to donate! Come forward and lend a helping hand to needy...</p>
            </div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
