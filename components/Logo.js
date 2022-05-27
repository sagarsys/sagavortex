import React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

const Logo = ({ size = 50, style = { margin: 0 }, showCaption = false }) => {
  return (
      <figure style={style}>
        <Image
            src="/images/logo-sagavortex.svg"
            alt="SagaVortex Photography Logo"
            width={size}
            height={size}
            priority
        />
        <figcaption hidden={!showCaption}>
          <Typography variant="h6" noWrap component="h1" textAlign="center" marginTop={1}>
            SagaVortex Photography
          </Typography>
        </figcaption>
      </figure>
  );
};

export default Logo;
