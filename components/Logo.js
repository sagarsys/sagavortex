import React from 'react';
import Image from 'next/image';

const Logo = ({ size = 50 }) => {
  return (
      <Image src="/logo-sagar-sys-black.png" alt="SagaVortex Logo" width={size} height={size} />
  );
};

export default Logo;
