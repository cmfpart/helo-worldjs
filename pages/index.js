import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
 
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Hello World</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
              <h3>CMF PART</h3>
            <Link href="blog">
              <p>
              Tekan Aku!
            </p>
            </Link>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}