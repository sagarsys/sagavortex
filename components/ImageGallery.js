import React, { useCallback, useState, useEffect, useRef } from 'react';
import PhotoAlbum from 'react-photo-album';
import { Lightbox } from 'yet-another-react-lightbox';
import useViewportSize from '../hooks/useViewportSize';
import { IMAGE_BREAKPOINTS } from '../constants';
import { calculateImageDimensionForViewPort } from '../utils/images';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

/**
 * Generic ImageGallery component that displays images in a grid with lightbox
 * @param {Array} images - Array of image objects with src function, caption, width, height
 */
const ImageGallery = ({ images = [] }) => {
  const { sm, md, lg, xl } = useViewportSize();
  const [index, setIndex] = useState(-1);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const containerRef = useRef(null);

  const getThumbnails = useCallback(() => {
    return images.map(({ src, caption, ...props }) => ({
      src: src('thumbnails'),
      alt: caption,
      ...props,
    }));
  }, [images]);

  const getLightboxImages = useCallback(() => {
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

  // Track when images are loaded
  useEffect(() => {
    if (!containerRef.current) return;

    const checkImagesLoaded = () => {
      const imgElements = containerRef.current?.querySelectorAll('img');
      if (imgElements && imgElements.length > 0) {
        let loadedCount = 0;
        const totalImages = imgElements.length;

        imgElements.forEach((img) => {
          if (img.complete) {
            loadedCount++;
          } else {
            img.addEventListener('load', () => {
              loadedCount++;
              if (loadedCount >= totalImages) {
                setImagesLoaded(true);
              }
            });
            img.addEventListener('error', () => {
              loadedCount++;
              if (loadedCount >= totalImages) {
                setImagesLoaded(true);
              }
            });
          }
        });

        if (loadedCount >= totalImages) {
          setImagesLoaded(true);
        }
      } else {
        // If no images found yet, check again after a short delay
        setTimeout(checkImagesLoaded, 100);
      }
    };

    // Start checking after component mounts
    const timer = setTimeout(checkImagesLoaded, 100);
    return () => clearTimeout(timer);
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <Box component="article" sx={{ p: (sm || md) ? 2 : 3 }}>
        <p>No images available in this category.</p>
      </Box>
    );
  }

  const thumbnails = getThumbnails();

  // Skeleton loader component
  const SkeletonLoader = () => (
    <Grid container spacing={sm || md ? 2 : 3}>
      {Array.from({ length: Math.min(6, images.length) }).map((_, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={300}
            sx={{ borderRadius: 1 }}
            animation="wave"
          />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box component="article" sx={{ p: (sm || md) ? 2 : 3, position: 'relative' }}>
      <Box 
        ref={containerRef}
        sx={{ 
          opacity: imagesLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          pointerEvents: imagesLoaded ? 'auto' : 'none'
        }}
      >
        <PhotoAlbum
          photos={thumbnails}
          layout="rows"
          targetRowHeight={300}
          onClick={(event, photo, index) => setIndex(index)}
          spacing={(containerWidth) => (containerWidth < IMAGE_BREAKPOINTS.md ? 15 : 20)}
        />
      </Box>
      {!imagesLoaded && (
        <Box sx={{ position: 'absolute', top: (sm || md) ? 16 : 24, left: (sm || md) ? 16 : 24, right: (sm || md) ? 16 : 24 }}>
          <SkeletonLoader />
        </Box>
      )}
      <Lightbox
        slides={getLightboxImages()}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        carousel={{ finite: false }}
        render={{
          loadingIndicator: () => (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
              }}
            >
              <CircularProgress size={60} sx={{ color: 'white' }} />
            </Box>
          ),
        }}
      />
    </Box>
  );
};

export default ImageGallery;
