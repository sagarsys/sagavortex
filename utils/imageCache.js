/**
 * Image caching utility for faster image loading
 * Uses browser's native caching with preloading and prefetching strategies
 */

// In-memory cache to track loaded images
const imageCache = new Map();

/**
 * Preload an image by creating an Image object
 * This leverages browser's native HTTP cache
 * @param {string} url - Image URL to preload
 * @returns {Promise<void>}
 */
export function preloadImage(url) {
  // Check if already cached in memory
  if (imageCache.has(url)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    // Check if image is already in browser cache
    const img = new Image();
    
    img.onload = () => {
      imageCache.set(url, { loaded: true, timestamp: Date.now() });
      resolve();
    };
    
    img.onerror = () => {
      imageCache.set(url, { loaded: false, timestamp: Date.now() });
      reject(new Error(`Failed to load image: ${url}`));
    };
    
    // Set src to trigger load (browser will use cache if available)
    img.src = url;
  });
}

/**
 * Preload multiple images in parallel
 * @param {string[]} urls - Array of image URLs to preload
 * @returns {Promise<void[]>}
 */
export function preloadImages(urls) {
  return Promise.allSettled(urls.map(url => preloadImage(url)));
}

/**
 * Prefetch an image using link rel="prefetch"
 * This hints to the browser to fetch the resource for future use
 * @param {string} url - Image URL to prefetch
 */
export function prefetchImage(url) {
  if (typeof window === 'undefined') return;
  
  // Check if already prefetched
  const existingLink = document.querySelector(`link[rel="prefetch"][href="${url}"]`);
  if (existingLink) return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.as = 'image';
  link.href = url;
  document.head.appendChild(link);
}

/**
 * Prefetch multiple images
 * @param {string[]} urls - Array of image URLs to prefetch
 */
export function prefetchImages(urls) {
  urls.forEach(url => prefetchImage(url));
}

/**
 * Check if an image is cached (in memory)
 * @param {string} url - Image URL to check
 * @returns {boolean}
 */
export function isImageCached(url) {
  return imageCache.has(url);
}

/**
 * Clear the image cache (useful for memory management)
 */
export function clearImageCache() {
  imageCache.clear();
}

/**
 * Get cache statistics
 * @returns {{size: number, entries: Array}}
 */
export function getCacheStats() {
  return {
    size: imageCache.size,
    entries: Array.from(imageCache.entries()),
  };
}
