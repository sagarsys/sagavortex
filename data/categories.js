import { getUnsplashImageUrl, calculateImageDimensionForViewPort } from '../utils/images';

// Landscape photography categories with Picsum Photos images
// Images are loaded from Picsum Photos with category-based seeds for consistent results

// Helper function to get image URL for a specific viewport
function getImageUrl(categoryName, caption, width, height, viewport = 'thumbnails') {
  if (viewport === 'thumbnails') {
    // Thumbnails are smaller, use a fixed size
    const thumbnailSize = 300;
    const aspectRatio = width / height;
    const thumbWidth = aspectRatio >= 1 ? thumbnailSize : Math.round(thumbnailSize * aspectRatio);
    const thumbHeight = aspectRatio >= 1 ? Math.round(thumbnailSize / aspectRatio) : thumbnailSize;
    return getUnsplashImageUrl(categoryName, caption, thumbWidth, thumbHeight);
  }
  
  // For other viewports, calculate dimensions based on breakpoints
  const dimensions = calculateImageDimensionForViewPort(viewport, width, height);
  return getUnsplashImageUrl(categoryName, caption, Math.round(dimensions.width), Math.round(dimensions.height));
}

export const categories = [
  {
    id: 'mountains',
    name: 'Mountains',
    description: 'Majestic mountain landscapes and peaks',
    coverImage: getUnsplashImageUrl('Mountains', 'Mountain landscape', 800, 600),
    images: [
      {
        src: (viewport = 'thumbnails') => getImageUrl('Mountains', 'Mountain Peak Sunrise', 1920, 1280, viewport),
        caption: 'Mountain Peak Sunrise',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Mountains', 'Alpine Vista', 1920, 1280, viewport),
        caption: 'Alpine Vista',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Mountains', 'Mountain Range at Dusk', 1920, 1280, viewport),
        caption: 'Mountain Range at Dusk',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Mountains', 'Snow-Capped Peaks', 1920, 1280, viewport),
        caption: 'Snow-Capped Peaks',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Mountains', 'Mountain Pass', 1920, 1280, viewport),
        caption: 'Mountain Pass',
        width: 1920,
        height: 1280,
      },
    ],
  },
  {
    id: 'seascapes',
    name: 'Seascapes',
    description: 'Ocean views, beaches, and coastal scenes',
    coverImage: getUnsplashImageUrl('Seascapes', 'Ocean seascape', 800, 600),
    images: [
      {
        src: (viewport = 'thumbnails') => getImageUrl('Seascapes', 'Ocean Sunset', 1920, 1280, viewport),
        caption: 'Ocean Sunset',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Seascapes', 'Waves Crashing', 1920, 1280, viewport),
        caption: 'Waves Crashing',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Seascapes', 'Coastal Cliffs', 1920, 1280, viewport),
        caption: 'Coastal Cliffs',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Seascapes', 'Beach Sunrise', 1920, 1280, viewport),
        caption: 'Beach Sunrise',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Seascapes', 'Rocky Shore', 1920, 1280, viewport),
        caption: 'Rocky Shore',
        width: 1920,
        height: 1280,
      },
    ],
  },
  {
    id: 'treescapes',
    name: 'Treescapes',
    description: 'Forests, trees, and woodland scenes',
    coverImage: getUnsplashImageUrl('Treescapes', 'Forest treescape', 800, 600),
    images: [
      {
        src: (viewport = 'thumbnails') => getImageUrl('Treescapes', 'Forest Path', 1920, 1280, viewport),
        caption: 'Forest Path',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Treescapes', 'Autumn Colors', 1920, 1280, viewport),
        caption: 'Autumn Colors',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Treescapes', 'Misty Woods', 1920, 1280, viewport),
        caption: 'Misty Woods',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Treescapes', 'Tree Canopy', 1920, 1280, viewport),
        caption: 'Tree Canopy',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Treescapes', 'Lone Tree', 1920, 1280, viewport),
        caption: 'Lone Tree',
        width: 1920,
        height: 1280,
      },
    ],
  },
  {
    id: 'nightscapes',
    name: 'Nightscapes',
    description: 'Night photography, stars, and astrophotography',
    coverImage: getUnsplashImageUrl('Nightscapes', 'Night sky stars', 800, 600),
    images: [
      {
        src: (viewport = 'thumbnails') => getImageUrl('Nightscapes', 'Milky Way', 1920, 1280, viewport),
        caption: 'Milky Way',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Nightscapes', 'Starry Night', 1920, 1280, viewport),
        caption: 'Starry Night',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Nightscapes', 'Moonlit Landscape', 1920, 1280, viewport),
        caption: 'Moonlit Landscape',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Nightscapes', 'Aurora', 1920, 1280, viewport),
        caption: 'Aurora',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Nightscapes', 'City Lights', 1920, 1280, viewport),
        caption: 'City Lights',
        width: 1920,
        height: 1280,
      },
    ],
  },
  {
    id: 'macro',
    name: 'Macro',
    description: 'Close-up photography of nature',
    coverImage: getUnsplashImageUrl('Macro', 'Macro nature close-up', 800, 600),
    images: [
      {
        src: (viewport = 'thumbnails') => getImageUrl('Macro', 'Flower Detail', 1920, 1280, viewport),
        caption: 'Flower Detail',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Macro', 'Leaf Texture', 1920, 1280, viewport),
        caption: 'Leaf Texture',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Macro', 'Water Droplets', 1920, 1280, viewport),
        caption: 'Water Droplets',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Macro', 'Insect Close-up', 1920, 1280, viewport),
        caption: 'Insect Close-up',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Macro', 'Frost Patterns', 1920, 1280, viewport),
        caption: 'Frost Patterns',
        width: 1920,
        height: 1280,
      },
    ],
  },
  {
    id: 'sunrises-sunsets',
    name: 'Sunsets & Sunrises',
    description: 'Golden hour and dramatic sky colors',
    coverImage: getUnsplashImageUrl('Sunsets & Sunrises', 'Sunset sky', 800, 600),
    images: [
      {
        src: (viewport = 'thumbnails') => getImageUrl('Sunsets & Sunrises', 'Golden Hour', 1920, 1280, viewport),
        caption: 'Golden Hour',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Sunsets & Sunrises', 'Sunset Over Water', 1920, 1280, viewport),
        caption: 'Sunset Over Water',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Sunsets & Sunrises', 'Dawn Breaking', 1920, 1280, viewport),
        caption: 'Dawn Breaking',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Sunsets & Sunrises', 'Clouds at Sunset', 1920, 1280, viewport),
        caption: 'Clouds at Sunset',
        width: 1920,
        height: 1280,
      },
      {
        src: (viewport = 'thumbnails') => getImageUrl('Sunsets & Sunrises', 'Mountain Sunset', 1920, 1280, viewport),
        caption: 'Mountain Sunset',
        width: 1920,
        height: 1280,
      },
    ],
  },
];

// Helper to get category by ID
export function getCategoryById(id) {
  return categories.find(cat => cat.id === id);
}

// Helper to get all categories
export function getAllCategories() {
  return categories;
}
