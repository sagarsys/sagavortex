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
