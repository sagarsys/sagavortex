import { useState, useEffect } from "react";
// Hook
export default function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [width, setWidth] = useState(undefined);
  const [height, setHeight] = useState(undefined);
  
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  
  return {
    windowWidth: width,
    windowHeight: height,
  };
}
