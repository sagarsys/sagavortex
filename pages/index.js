import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import HomeGallery from '../components/HomeGallery';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SagaVortex Photography</title>
      </Head>
      <Layout>
        <HomeGallery />
      </Layout>
    </div>
  )
}
