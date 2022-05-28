import React, { useState } from 'react'
import Script from 'next/script'
import styles from '../styles/About.module.css'

const Vortex = () => {
  const [hasThreeLoaded, setHasThreeLoaded] = useState(false)
  const [hasMeshLoaded, setHasMeshLoaded] = useState(false)
  const [hasGsapLoaded, setHasGsapLoaded] = useState(false)
  const [hasMotionLoaded, setHasMotionLoaded] = useState(false)
  const [hasInit, setHasInit] = useState(false)
  
  return (
      <>
        <div id="webgl" className={styles.container} />
        <Script strategy="lazyOnload" onLoad={() => setHasThreeLoaded(true)} src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r126/three.min.js" />
        {hasThreeLoaded && <Script strategy="lazyOnload" onLoad={() => setHasMeshLoaded(true)} src="https://cdnjs.cloudflare.com/ajax/libs/three.meshline/1.3.0/THREE.MeshLine.js" />}
        <Script strategy="lazyOnload" onLoad={() => setHasGsapLoaded(true)} src="https://unpkg.co/gsap@3/dist/gsap.min.js" />
        <Script strategy="lazyOnload" onLoad={() => setHasMotionLoaded(true)} src="https://unpkg.com/gsap@3/dist/MotionPathPlugin.min.js" />
        {(hasThreeLoaded && hasMeshLoaded && hasGsapLoaded && hasMotionLoaded && !hasInit) &&
            <Script src="js/vortex.js" strategy="lazyOnload" onLoad={() => setHasInit(true)} />}
      </>
  );
};

export default Vortex;
