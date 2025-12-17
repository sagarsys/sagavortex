import React from 'react';
import TypeAnimation from 'react-type-animation';
import styles from '../styles/ComingSoon.module.css'
import Typography from '@mui/material/Typography';

const ComingSoon = () => {
  return (
      <div className={styles.comingSoon}>
        <div className={styles.innerWrap}>
          <img className={styles.avatar} src="/images/infinity.svg" alt="Infinity" />
          <Typography variant="h1" component="h1" className={styles.heading}>
            Coming Soon.
          </Typography>
          <Typography variant="body1" component="h2">
            <TypeAnimation
                sequence={[
                  'Great things take time!',
                  2000,
                  'We promise it will be worth the wait..',
                  2000,
                  'Check back later!',
                  2000,
                  'Thanks for your continuous support ;)',
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
            />
          </Typography>
        </div>
      </div>
  );
};

export default ComingSoon;
