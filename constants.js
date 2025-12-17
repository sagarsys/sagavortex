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
    link: '/gallery'
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

export const VORTEX_TAU = Math.PI * 2;

export const VORTEX_COLORS = [
  "#f94144",
  "#f3722c",
  "#f8961e",
  "#f9844a",
  "#f9c74f",
  "#90be6d",
  "#43aa8b",
  "#4d908e",
  "#577590",
  "#277da1"
];

// Gallery constants
export const GALLERY_CONFIG = {
  TARGET_ROW_HEIGHT: 300,
  SPACING_SMALL: 15,
  SPACING_LARGE: 20,
  SKELETON_COUNT: 18,
  SKELETON_HEIGHT: 300,
  IMAGE_LOADING_MAX_WAIT: 10000, // 10 seconds
  IMAGE_LOADING_CHECK_INTERVAL: 200, // 200ms
};

// Lightbox constants
export const LIGHTBOX_CONFIG = {
  LOADER_SIZE: 60,
  LOADER_BG: 'rgba(0, 0, 0, 0.5)',
};
