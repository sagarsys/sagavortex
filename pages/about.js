import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/About.module.css';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Script from 'next/script'
import useWindowSize from '../hooks/useWindowSize';
import particlesJson from '../data/particles.json';
import Box from '@mui/material/Box';

const About = () => {
  const [isGLLoaded, setIsGLLoaded] = useState(false)
  const [isParticlesLoaded, setIsParticlesLoaded] = useState(false)
  const [hasInit, setHasInit] = useState(false)
  const { windowHeight } = useWindowSize()
  const prevWindowHeight = useRef(windowHeight);
  
  useEffect(() => {
    const initParticles = () => {
      particlesJS('particles-js', particlesJson)
      setHasInit(true)
    };
    if (isGLLoaded && isParticlesLoaded && (!hasInit || windowHeight !== prevWindowHeight.current)) initParticles();
  }, [hasInit, isGLLoaded, isParticlesLoaded, windowHeight])
  
  return (
      <>
        <Head>
          <title>About - SagaVortex Photography</title>
        </Head>
        <Box component="article" className={styles.about}>
          <div className={styles.biography}>
            <Typography component="h1" variant="h4" className={styles.heading}>
              About
            </Typography>
            <Typography textAlign="right">
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
            
          </div>
          <div id="particles-js" style={{ height: '100vh' }} />
        </Box>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.4.0/gl-matrix-min.js" strategy="lazyOnload" onLoad={() => setIsGLLoaded(true)} />
        <Script src="js/particles.min.js" strategy="lazyOnload" onLoad={() => setIsParticlesLoaded(true)} />
      </>
  );
};

export default About;
