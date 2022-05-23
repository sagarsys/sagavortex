import React, { useEffect, useMemo, useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { useMediaQuery } from '@mui/material';
import { DARK_COLOR_PALETTE, LIGHT_COLOR_PALETTE, THEME_MODES } from '../constants';

export default function useCustomTheme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const handleModes = (prefersDarkMode) => prefersDarkMode ? THEME_MODES.DARK : THEME_MODES.LIGHT;
  const handlePalette = (prefersDarkMode) => prefersDarkMode ? DARK_COLOR_PALETTE : LIGHT_COLOR_PALETTE;
  const [mode, setMode] = useState(handleModes(prefersDarkMode));
  const [palette, setPalette] = useState(handlePalette(prefersDarkMode));
  
  useEffect(() => {
    setMode(handleModes(prefersDarkMode));
    setPalette(handlePalette(prefersDarkMode))
  }, [prefersDarkMode]);
  // Create a theme instance.
  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      background: {
        default: palette.BG,
        paper: palette.PRIMARY,
      },
      primary: {
        main: palette.PRIMARY,
      },
      secondary: {
        main: palette.SECONDARY,
      },
      error: {
        main: red.A400,
      },
    },
  }), [mode, palette.BG, palette.PRIMARY, palette.SECONDARY]);
  
  return {
    theme,
    setMode,
  }
}

