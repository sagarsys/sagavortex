import React, { useCallback, useState } from 'react'
import PhotoAlbum from 'react-photo-album'
import { Lightbox } from 'yet-another-react-lightbox'
import useViewportSize from '../hooks/useViewportSize'
import { imagesData } from '../data/images'
import { IMAGE_BREAKPOINTS } from '../constants';
import { calculateImageDimensionForViewPort } from '../utils/images';
import Box from '@mui/material/Box';

const HomeGallery = () => {
  const { sm, md, lg, xl } = useViewportSize()
  const [index, setIndex] = useState(-1)
  const getThumbnails = useCallback(() => imagesData.map(({ src, caption, ...props}) => ({
        src: src('thumbnails'),
        alt: caption,
        ...props
      })), []
  )
  const getLightboxImages = useCallback(() => {
    let viewport
    if (sm) viewport = 'sm'
    else if (md) viewport = 'md'
    else if (lg || xl) viewport = 'lg'
    return imagesData.map(({ src, width, height, caption,...props}) => ({
      src: src(viewport),
      aspectRatio: width / height,
      title: caption,
      srcSet: Object.keys(IMAGE_BREAKPOINTS).map((breakpoint) => ({
        src: src(breakpoint),
        width: calculateImageDimensionForViewPort(breakpoint, width, height).width
      })),
      width, height, ...props
    }))
  }, [lg, md, sm, xl])
  
  return (
      <Box component="article" sx={{ p: (sm || md) ? 2 : 3 }}>
        <PhotoAlbum
            photos={getThumbnails()}
            layout="rows"
            targetRowHeight={300}
            onClick={(event, photo, index) => setIndex(index)}
            spacing={(containerWidth => containerWidth < IMAGE_BREAKPOINTS.md ? 15 : 20)}
        />
        <Lightbox
            slides={getLightboxImages()}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            carousel={{ finite: false, }}
        />
      </Box>
  );
};

export default HomeGallery;
