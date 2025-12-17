import { useEffect } from 'react';
import { preloadImages, prefetchImages } from '../utils/imageCache';

/**
 * Hook to preload thumbnail images
 * @param {Array} thumbnails - Array of thumbnail objects with src property
 */
export function useThumbnailPreloading(thumbnails) {
  useEffect(() => {
    if (thumbnails.length === 0) return;
    
    const thumbnailUrls = thumbnails.map(thumb => thumb.src);
    preloadImages(thumbnailUrls).catch(() => {
      // Silently fail - images will still load normally
    });
  }, [thumbnails]);
}

/**
 * Hook to prefetch lightbox images when lightbox opens
 * @param {number} index - Current lightbox index (-1 if closed)
 * @param {Array} lightboxImages - Array of lightbox image objects
 */
export function useLightboxPrefetching(index, lightboxImages) {
  useEffect(() => {
    if (index < 0 || lightboxImages.length === 0) return;

    const imagesToPrefetch = [];
    if (index > 0) {
      imagesToPrefetch.push(lightboxImages[index - 1].src);
    }
    imagesToPrefetch.push(lightboxImages[index].src);
    if (index < lightboxImages.length - 1) {
      imagesToPrefetch.push(lightboxImages[index + 1].src);
    }
    prefetchImages(imagesToPrefetch);
  }, [index, lightboxImages]);
}
