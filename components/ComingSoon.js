import React from 'react';
import Typed from 'react-typed';
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
          <Typography variant="h5" component="h2">
            <Typed
                strings={[
                  'Great things take time',
                  'Check back later for more awesome content.',
                  'Thank you for your continuous support ;)'
                ]}
                typeSpeed={100}
                loop
            />
          </Typography>
        </div>
      </div>
  );
};

export default ComingSoon;
