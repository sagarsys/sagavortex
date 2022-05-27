import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import CycloneIcon from '@mui/icons-material/Cyclone';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BurstModeIcon from '@mui/icons-material/BurstMode';

export const THEME_MODES = {
  DARK: 'dark',
  LIGHT: 'light',
};

export const DARK_COLOR_PALETTE = {
  BG: '#1a1a1d',
  PRIMARY: '#002828',
  SECONDARY: '#4e4e50'
};

export const LIGHT_COLOR_PALETTE = {
  BG: '#d1e8e2',
  PRIMARY: '#d1e8e2',
  SECONDARY: '#FFCB9A'
};

export const DRAWER_WIDTH = 300;

export const SITE_MENU_ITEMS = [
  {
    id: 'smi-1',
    label: 'Home',
    icon: HomeIcon,
    link: '/'
  },
  {
    id: 'smi-2',
    label: 'Gallery',
    icon: CollectionsIcon,
    link: '/categories'
  },
  {
    id: 'smi-3',
    label: 'Prints',
    icon: BurstModeIcon,
    link: '/prints'
  },
  {
    id: 'smi-4',
    label: 'Blog',
    icon: AutoStoriesIcon,
    link: '/blog',
  },
  {
    id: 'smi-5',
    label: 'About',
    icon: CycloneIcon,
    link: '/about'
  }
]

export const VIEWPORT_SIZES = {
  SM: 600,
  MD: 1024,
  LG: 1920,
  XL: 2500,
}

export const IMAGE_BREAKPOINTS = {
  sm: 540,
  md: 1080,
  lg: 1920,
}

export const DEVICE_ORIENTATION = {
  PORTRAIT: 'portrait',
  LANDSCAPE: 'landscape'
}
