import Head from 'next/head'
import Link from 'next/link'
import { HeaderPersonal } from '../components/Headers/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CredNosso</title>
        <meta name="description" content="Sistema Institucional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderPersonal slug="home" />

      <div className={styles.box}>
          
      </div>
    
    </div>
  )
}
