import { getUnsplashImageUrl, calculateImageDimensionForViewPort } from '../utils/images';
import { IMAGE_BREAKPOINTS } from '../constants';

// Helper function to get image URL for a specific viewport
// Uses 'Home' as category name for homepage images
function getImageUrl(caption, width, height, viewport = 'thumbnails') {
  if (viewport === 'thumbnails') {
    // Thumbnails are smaller, use a fixed size
    const thumbnailSize = 300;
    const aspectRatio = width / height;
    const thumbWidth = aspectRatio >= 1 ? thumbnailSize : Math.round(thumbnailSize * aspectRatio);
    const thumbHeight = aspectRatio >= 1 ? Math.round(thumbnailSize / aspectRatio) : thumbnailSize;
    return getUnsplashImageUrl('Home', caption, thumbWidth, thumbHeight);
  }
  
  // For other viewports, calculate dimensions based on breakpoints
  const dimensions = calculateImageDimensionForViewPort(viewport, width, height);
  return getUnsplashImageUrl('Home', caption, Math.round(dimensions.width), Math.round(dimensions.height));
}

export const imagesData = [
  {
    src: (viewport = 'thumbnails') => getImageUrl('3 Mamelles Moonrise', 1536, 1920, viewport),
    caption: '3 Mamelles Moonrise',
    width: 1536,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('3 Mamelles Sunset', 1536, 1920, viewport),
    caption: '3 Mamelles Sunset',
    width: 1536,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('3 Mamelles Sunset view', 1280, 1920, viewport),
    caption: '3 Mamelles Sunset view',
    width: 1280,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('7 Cascades', 1536, 1920, viewport),
    caption: '7 Cascades',
    width: 1536,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('400 Pieds', 1920, 1280, viewport),
    caption: '400 Pieds',
    width: 1920,
    height: 1280,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Sunset Frame Pieter Both', 1353, 1920, viewport),
    caption: 'Sunset Frame Pieter Both',
    width: 1353,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Alma Sunrise', 1920, 1086, viewport),
    caption: 'Alma Sunrise',
    width: 1920,
    height: 1086,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Alma Sunset Trees', 1280, 1920, viewport),
    caption: 'Alma Sunset Trees',
    width: 1280,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Avalon Falls', 1280, 1920, viewport),
    caption: 'Avalon Falls',
    width: 1280,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Be mine', 1278, 1920, viewport),
    caption: 'Be mine',
    width: 1278,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Beau Champs night', 1920, 1280, viewport),
    caption: 'Beau Champs night',
    width: 1920,
    height: 1280,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Benares Sunrise', 1920, 1278, viewport),
    caption: 'Benares Sunrise',
    width: 1920,
    height: 1278,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Benares Sunrise vibes', 1920, 1278, viewport),
    caption: 'Benares Sunrise vibes',
    width: 1920,
    height: 1278,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Benares Sunset', 1278, 1920, viewport),
    caption: 'Benares Sunset',
    width: 1278,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Cloudy Moonrise', 1920, 1920, viewport),
    caption: 'Cloudy Moonrise',
    width: 1920,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Cloudy Pieter', 1536, 1920, viewport),
    caption: 'Cloudy Pieter',
    width: 1536,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Shrouded in darkness', 1920, 1280, viewport),
    caption: 'Shrouded in darkness',
    width: 1920,
    height: 1280,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Dreamy Milky way', 1920, 1280, viewport),
    caption: 'Dreamy Milky way',
    width: 1920,
    height: 1280,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Epic Clouds', 1920, 1278, viewport),
    caption: 'Epic Clouds',
    width: 1920,
    height: 1278,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Fayence Sunrise', 1920, 1280, viewport),
    caption: 'Fayence Sunrise',
    width: 1920,
    height: 1280,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Fool\'s Gold', 1920, 1278, viewport),
    caption: 'Fool\'s Gold',
    width: 1920,
    height: 1278,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Heart Sunset', 1920, 1280, viewport),
    caption: 'Heart Sunset',
    width: 1920,
    height: 1280,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Le Mornes Sunset', 1920, 1278, viewport),
    caption: 'Le Mornes Sunset',
    width: 1920,
    height: 1278,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Le Pouce Lightning', 1920, 1280, viewport),
    caption: 'Le Pouce Lightning',
    width: 1920,
    height: 1280,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Le Pouce Moon', 1920, 1280, viewport),
    caption: 'Le Pouce Moon',
    width: 1920,
    height: 1280,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Le Pouce Sunrise', 1536, 1920, viewport),
    caption: 'Le Pouce Sunrise',
    width: 1536,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Milky way reflection', 1280, 1920, viewport),
    caption: 'Milky way reflection',
    width: 1280,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Moody waves', 1536, 1920, viewport),
    caption: 'Moody waves',
    width: 1536,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Moonrise', 1536, 1920, viewport),
    caption: 'Moonrise',
    width: 1536,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Moon\'s eye', 1920, 1920, viewport),
    caption: 'Moon\'s eye',
    width: 1920,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Fullmoon moonshot', 1920, 1920, viewport),
    caption: 'Fullmoon moonshot',
    width: 1920,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Ocean sunset vibes', 1920, 1280, viewport),
    caption: 'Ocean sunset vibes',
    width: 1920,
    height: 1280,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Pieter in the clouds', 1920, 1280, viewport),
    caption: 'Pieter in the clouds',
    width: 1920,
    height: 1280,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Pomponette Nightshot', 1920, 1280, viewport),
    caption: 'Pomponette Nightshot',
    width: 1920,
    height: 1280,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Pont Goyaves Nightshot', 1920, 1278, viewport),
    caption: 'Pont Goyaves Nightshot',
    width: 1920,
    height: 1278,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Savinia Cliff', 1536, 1920, viewport),
    caption: 'Savinia Cliff',
    width: 1536,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Savinia Fiery Sunset', 1920, 1280, viewport),
    caption: 'Savinia Fiery Sunset',
    width: 1920,
    height: 1280,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Savinia Milky way', 1536, 1920, viewport),
    caption: 'Savinia Milky way',
    width: 1536,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Savinia Waves', 1920, 1278, viewport),
    caption: 'Savinia Waves',
    width: 1920,
    height: 1278,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Savinia Waves panorama', 1920, 1214, viewport),
    caption: 'Savinia Waves panorama',
    width: 1920,
    height: 1214,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Shadow Play sunrise', 1920, 1278, viewport),
    caption: 'Shadow Play sunrise',
    width: 1920,
    height: 1278,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Signal Sunset', 1920, 1279, viewport),
    caption: 'Signal Sunset',
    width: 1920,
    height: 1279,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Signal Tree', 1920, 1280, viewport),
    caption: 'Signal Tree',
    width: 1920,
    height: 1280,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Stormy Milky way', 1920, 1278, viewport),
    caption: 'Stormy Milky way',
    width: 1920,
    height: 1278,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Stormy Sunset vibes', 1920, 1280, viewport),
    caption: 'Stormy Sunset vibes',
    width: 1920,
    height: 1280,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Sunset Clouds Le Pouce', 1536, 1920, viewport),
    caption: 'Sunset Clouds Le Pouce',
    width: 1536,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Tamarin Bay sunset', 1536, 1920, viewport),
    caption: 'Tamarin Bay sunset',
    width: 1536,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Tornado sunset clouds', 1536, 1920, viewport),
    caption: 'Tornado sunset clouds',
    width: 1536,
    height: 1920,
  },
  {
    src: (viewport = 'thumbnails') => getImageUrl('Waterfalls Rock balancing', 1279, 1920, viewport),
    caption: 'Waterfalls Rock balancing',
    width: 1279,
    height: 1920,
  },
];
