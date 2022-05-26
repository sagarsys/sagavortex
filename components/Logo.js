import React from 'react';
import Image from 'next/image';

const Logo = ({ size = 50 }) => {
  return (
      <Image
          src="/logo-sagar-sys-black-sm.png"
          alt="SagaVortex Photography Logo"
          width={size}
          height={size}
          priority
      />
  );
};

export default Logo;
