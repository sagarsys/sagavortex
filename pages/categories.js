import React from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Layout from '../components/Layout';
import Typography from '@mui/material/Typography';

const Categories = () => {
  return (
      <div className={styles.container}>
        <Head>
          <title>Categories - SagaVortex Photography</title>
        </Head>
        <Layout>
          <Typography paragraph>
            Categories
          </Typography>
        </Layout>
      </div>
  );
};

export default Categories;
