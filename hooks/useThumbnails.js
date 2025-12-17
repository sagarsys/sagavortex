import { useCallback } from 'react';

/**
 * Hook to transform images into thumbnail format
 * @param {Array} images - Array of image objects with src function and caption
 * @returns {Function} - Function that returns thumbnail-formatted images
 */
export default function useThumbnails(images) {
  return useCallback(() => {
    return images.map(({ src, caption, ...props }) => ({
      src: src('thumbnails'),
      alt: caption,
      ...props,
    }));
  }, [images]);
}
