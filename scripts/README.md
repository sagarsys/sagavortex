# Image System

The gallery uses **Picsum Photos** to load images dynamically with category-based seeds.

## How It Works

- Each category + caption combination generates a unique seed
- Seeds ensure consistent images for the same category/caption pair
- Images are loaded from: `https://picsum.photos/seed/{seed}/{width}/{height}`
- Images are automatically optimized by Next.js Image component

## Benefits

- ✅ No need to download or store images locally
- ✅ Consistent images per category (same seed = same image)
- ✅ Fast loading with Next.js optimization
- ✅ Responsive images for different viewports
