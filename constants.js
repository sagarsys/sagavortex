import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CycloneIcon from '@mui/icons-material/Cyclone';

export const THEME_MODES = {
  DARK: 'dark',
  LIGHT: 'light',
};

export const DARK_COLOR_PALETTE = {
  BG: '#222629',
  PRIMARY: '#116466',
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
    label: 'Categories',
    icon: ListAltIcon,
    link: '/categories'
  },
  {
    id: 'smi-3',
    label: 'About',
    icon: CycloneIcon,
    link: '/about'
  }
]
