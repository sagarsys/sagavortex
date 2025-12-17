import { useEffect, useState } from 'react';
import { GALLERY_CONFIG } from '../constants';

const MAX_WAIT_TIME = GALLERY_CONFIG.IMAGE_LOADING_MAX_WAIT;
const CHECK_INTERVAL = GALLERY_CONFIG.IMAGE_LOADING_CHECK_INTERVAL;

/**
 * Hook to track when images in a container are loaded
 * @param {React.RefObject} containerRef - Ref to the container element
 * @param {Array} dependencies - Dependencies that trigger re-checking
 * @returns {boolean} - Whether all images are loaded
 */
export default function useImageLoading(containerRef, dependencies = []) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    let mounted = true;
    const loadHandlers = new Map();
    const startTime = Date.now();

    const checkImagesLoaded = () => {
      if (!mounted || !containerRef.current) return;

      const imgElements = containerRef.current?.querySelectorAll('img');
      
      if (imgElements && imgElements.length > 0) {
        let loadedCount = 0;
        const totalImages = imgElements.length;

        imgElements.forEach((img, idx) => {
          if (img.complete && img.naturalWidth > 0) {
            loadedCount++;
          } else if (!loadHandlers.has(idx)) {
            const loadHandler = () => {
              if (mounted) {
                loadedCount++;
                if (loadedCount >= totalImages) {
                  setImagesLoaded(true);
                }
              }
            };
            const errorHandler = () => {
              if (mounted) {
                loadedCount++;
                if (loadedCount >= totalImages) {
                  setImagesLoaded(true);
                }
              }
            };
            
            loadHandlers.set(idx, { load: loadHandler, error: errorHandler });
            img.addEventListener('load', loadHandler, { once: true });
            img.addEventListener('error', errorHandler, { once: true });
          }
        });

        if (loadedCount >= totalImages) {
          setImagesLoaded(true);
        } else {
          const elapsed = Date.now() - startTime;
          if (elapsed < MAX_WAIT_TIME) {
            setTimeout(checkImagesLoaded, CHECK_INTERVAL);
          } else if (mounted) {
            setImagesLoaded(true);
          }
        }
      } else {
        const elapsed = Date.now() - startTime;
        if (elapsed < MAX_WAIT_TIME) {
          setTimeout(checkImagesLoaded, CHECK_INTERVAL);
        } else if (mounted) {
          setImagesLoaded(true);
        }
      }
    };

    const timer = setTimeout(checkImagesLoaded, CHECK_INTERVAL);
    
    return () => {
      mounted = false;
      clearTimeout(timer);
      loadHandlers.forEach((handlers, idx) => {
        const imgElements = containerRef.current?.querySelectorAll('img');
        if (imgElements && imgElements[idx]) {
          imgElements[idx].removeEventListener('load', handlers.load);
          imgElements[idx].removeEventListener('error', handlers.error);
        }
      });
      loadHandlers.clear();
    };
  }, dependencies);

  return imagesLoaded;
}
