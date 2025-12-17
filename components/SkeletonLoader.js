import React from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import useViewportSize from '../hooks/useViewportSize';

const SKELETON_COUNT = 18;
const SKELETON_HEIGHT = 300;

/**
 * Skeleton loader component for image galleries
 * @param {number} count - Number of skeletons to display (default: 18)
 * @param {number} maxCount - Maximum number of skeletons based on available images
 */
const SkeletonLoader = ({ count = SKELETON_COUNT, maxCount }) => {
  const { sm, md } = useViewportSize();
  const skeletonCount = Math.min(count, maxCount || count);

  return (
    <Grid container spacing={sm || md ? 2 : 3}>
      {Array.from({ length: skeletonCount }).map((_, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={SKELETON_HEIGHT}
            sx={{ borderRadius: 1 }}
            animation="wave"
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkeletonLoader;
