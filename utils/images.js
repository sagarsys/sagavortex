import { IMAGE_BREAKPOINTS } from '../constants';

/**
 * Calculate image size based on a given viewport
 * IMAGE_BREAKPOINT is used to determine max image sizes
 *
 * @param {string} viewport
 * @param {number} width
 * @param {number} height
 * @return {{width: number, height: number}}
 */
export function calculateImageDimensionForViewPort(viewport, width, height) {
  const aspectRatio = width / height
  const isLandscape = aspectRatio >= 1;
  const maxDimension = IMAGE_BREAKPOINTS[viewport];
  const viewportResizeRatio = isLandscape ? maxDimension / width : maxDimension / height;
  return {
    width: width * viewportResizeRatio,
    height: height * viewportResizeRatio,
  }
}

/**
 * Generate a seed from a string (caption) for consistent image generation
 * @param {string} str
 * @return {number}
 */
function generateSeed(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

/**
 * Generate image URL using Picsum Photos with seeded images
 * Each category+caption combination gets a unique seed for consistent images
 * Supports both old signature (caption, width, height) and new (categoryName, caption, width, height)
 * @param {string} categoryNameOrCaption - Category name or caption (for backward compatibility)
 * @param {string|number} captionOrWidth - Caption (if category provided) or width (if old signature)
 * @param {number} widthOrHeight - Width (if category provided) or height (if old signature)
 * @param {number} [height] - Height (only if category provided)
 * @return {string}
 */
export function getUnsplashImageUrl(categoryNameOrCaption, captionOrWidth, widthOrHeight, height) {
  let categoryName, caption, width, finalHeight;
  
  // Detect signature: if second param is a number, it's the old 3-param signature
  if (typeof captionOrWidth === 'number') {
    // Old signature: (caption, width, height)
    categoryName = 'Home';
    caption = categoryNameOrCaption;
    width = captionOrWidth;
    finalHeight = widthOrHeight;
  } else {
    // New signature: (categoryName, caption, width, height)
    categoryName = categoryNameOrCaption;
    caption = captionOrWidth;
    width = widthOrHeight;
    finalHeight = height;
  }
  
  // Create a seed from category + caption for consistency
  const seed = generateSeed(`${categoryName} ${caption}`);
  
  // Use Picsum Photos with seeded images for consistent results
  return `https://picsum.photos/seed/${seed}/${width}/${finalHeight}`;
}

