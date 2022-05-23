import React from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Layout from '../components/Layout';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
      <div className={styles.container}>
        <Head>
          <title>About - SagaVortex Photography</title>
        </Head>
        <Layout>
          <Typography paragraph>
            About
          </Typography>
        </Layout>
      </div>
  );
};

export default About;
