import { useCallback } from 'react';
import useViewportSize from './useViewportSize';
import { IMAGE_BREAKPOINTS } from '../constants';
import { calculateImageDimensionForViewPort } from '../utils/images';

/**
 * Hook to transform images for lightbox display
 * @param {Array} images - Array of image objects with src function, width, height, caption
 * @returns {Function} - Function that returns lightbox-formatted images
 */
export default function useLightboxImages(images) {
  const { sm, md, lg, xl } = useViewportSize();

  return useCallback(() => {
    let viewport;
    if (sm) viewport = 'sm';
    else if (md) viewport = 'md';
    else if (lg || xl) viewport = 'lg';

    return images.map(({ src, width, height, caption, ...props }) => ({
      src: src(viewport),
      aspectRatio: width / height,
      title: caption,
      srcSet: Object.keys(IMAGE_BREAKPOINTS).map((breakpoint) => ({
        src: src(breakpoint),
        width: calculateImageDimensionForViewPort(breakpoint, width, height).width,
      })),
      width,
      height,
      ...props,
    }));
  }, [images, lg, md, sm, xl]);
}
