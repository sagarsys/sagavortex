import React from 'react';
import Head from 'next/head'
import HomeGallery from '../components/HomeGallery';

export default function Home() {
  return (
    <>
      <Head>
        <title>SagaVortex Photography</title>
      </Head>
      <HomeGallery />
    </>
  )
}
