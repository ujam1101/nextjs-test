import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Home - Next Tutorial</title>
      </Head>
      <Link href="about">About</Link>
      <h1>Welcome Home</h1>
    </div>
  )
}
