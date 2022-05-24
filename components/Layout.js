// noinspection JSValidateTypes

import React, { useCallback, useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AppTopBar from './AppTopBar';
import SideMenuNav from './SideMenuNav';
import DrawerHeader from './DrawerHeader';
import Drawer from './Drawer';
import Logo from './Logo';
import { DRAWER_WIDTH } from '../constants';
import MenuSocialLinks from './MenuSocialLinks';
import useViewportSize from '../hooks/useViewportSize';

export default function Layout({ children }) {
  const theme = useTheme()
  const { lg, xl } = useViewportSize()
  const [open, setOpen] = useState((lg || xl));
  const handleDrawerOpen = useCallback(() => { setOpen(true); }, []);
  const handleDrawerClose = useCallback(() => { setOpen(false); }, []);
  
  useEffect(() => { setOpen(lg || xl) }, [lg, xl])
  
  return (
      <Box sx={{ display: 'flex' }}>
        <AppTopBar isOpened={open} handleDrawerOpen={handleDrawerOpen}/>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
            </IconButton>
          </DrawerHeader>
          <Divider/>
          {open && (
              <>
                <Logo size={DRAWER_WIDTH}/>
                <Typography variant="h6" noWrap component="h1" textAlign="center" marginBottom={2}>
                  SagaVortex Photography
                </Typography>
              </>
          )}
          <SideMenuNav open={open}/>
          <Divider/>
          <MenuSocialLinks open={open}/>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {!open && <DrawerHeader/>}
          {children}
        </Box>
      </Box>
  );
}
