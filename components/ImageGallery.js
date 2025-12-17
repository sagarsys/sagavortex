import React, { useState, useRef } from 'react';
import PhotoAlbum from 'react-photo-album';
import { Lightbox } from 'yet-another-react-lightbox';
import useViewportSize from '../hooks/useViewportSize';
import { IMAGE_BREAKPOINTS, GALLERY_CONFIG } from '../constants';
import useThumbnails from '../hooks/useThumbnails';
import useLightboxImages from '../hooks/useLightboxImages';
import useImageLoading from '../hooks/useImageLoading';
import { useThumbnailPreloading, useLightboxPrefetching } from '../hooks/useImagePreloading';
import SkeletonLoader from './SkeletonLoader';
import LightboxLoader from './LightboxLoader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * Generic ImageGallery component that displays images in a grid with lightbox
 * @param {Array} images - Array of image objects with src function, caption, width, height
 */
const ImageGallery = ({ images = [] }) => {
  const { sm, md } = useViewportSize();
  const [index, setIndex] = useState(-1);
  const containerRef = useRef(null);

  if (!images || images.length === 0) {
    return (
      <Box component="article" sx={{ p: (sm || md) ? 2 : 3 }}>
        <Typography>No images available in this category.</Typography>
      </Box>
    );
  }

  const thumbnails = useThumbnails(images)();
  const getLightboxImages = useLightboxImages(images);
  const imagesLoaded = useImageLoading(containerRef, [thumbnails]);
  
  useThumbnailPreloading(thumbnails);
  useLightboxPrefetching(index, getLightboxImages());
  
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
          targetRowHeight={GALLERY_CONFIG.TARGET_ROW_HEIGHT}
          onClick={(event, photo, index) => setIndex(index)}
          spacing={(containerWidth) => 
            containerWidth < IMAGE_BREAKPOINTS.md 
              ? GALLERY_CONFIG.SPACING_SMALL 
              : GALLERY_CONFIG.SPACING_LARGE
          }
        />
      </Box>
      {!imagesLoaded && (
        <Box sx={{ 
          position: 'absolute', 
          top: (sm || md) ? 16 : 24, 
          left: (sm || md) ? 16 : 24, 
          right: (sm || md) ? 16 : 24 
        }}>
          <SkeletonLoader maxCount={images.length} />
        </Box>
      )}
      <Lightbox
        slides={getLightboxImages()}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        carousel={{ finite: false }}
        render={{
          loadingIndicator: () => <LightboxLoader />,
        }}
      />
    </Box>
  );
};

export default ImageGallery;
