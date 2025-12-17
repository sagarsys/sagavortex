import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const LOADER_SIZE = 60;
const LOADER_BG = 'rgba(0, 0, 0, 0.5)';

/**
 * Loading indicator component for lightbox
 */
const LightboxLoader = () => (
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
      backgroundColor: LOADER_BG,
      zIndex: 1,
    }}
  >
    <CircularProgress size={LOADER_SIZE} sx={{ color: 'white' }} />
  </Box>
);

export default LightboxLoader;
