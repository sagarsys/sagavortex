import React from 'react';
import styles from '../styles/About.module.css';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Vortex from '../components/Vortex';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
      <>
        <Head>
          <title>About - SagaVortex Photography</title>
        </Head>
        <Box component="article" className={styles.about}>
          <Vortex />
          <div className={styles.biography}>
            <Typography component="h1" variant="h4" className={styles.heading}>
              About
            </Typography>
            <Typography>
              This is a brief intro about me :p
              This is a brief intro about me :p
              This is a brief intro about me :p
              This is a brief intro about me :p
              This is a brief intro about me :p
              This is a brief intro about me :p
              This is a brief intro about me :p
              This is a brief intro about me :p
              This is a brief intro about me :p
              This is a brief intro about me :p
              This is a brief intro about me :p
              This is a brief intro about me :p
            </Typography>
            <img src="/images/vortex.svg" alt="Vortex" width={200} height={200}/>
          </div>
        </Box>
      </>
  );
};

export default About;
