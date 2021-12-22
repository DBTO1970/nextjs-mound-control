import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const word = 'be yourself'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mound Control</title>
        <meta name="description" content="barter, trade, nextjs" />
        <link rel="icon" href="../public/assistant.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Mound Control
        </h1>
        <p className={styles.description}>A place to {word}</p>

        

        <div className={styles.grid}>
         <Link href="/rando">Rando-Sho</Link>
        </div>
      </main>

      <footer className={styles.footer}>
        &copy;2022 Don Barto Jr
      </footer>
    </div>
  )
}
