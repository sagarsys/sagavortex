// noinspection JSValidateTypes

import React from 'react';
import { SITE_MENU_ITEMS } from '../constants';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { useRouter } from 'next/router';
import useViewportSize from '../hooks/useViewportSize';

function SideMenuNav({ open, setOpen }) {
  const { sm, md } = useViewportSize()
  const router = useRouter()
  const handleClick = (e, link) => {
    e.preventDefault()
    if (sm || md) setOpen(false)
    router.push(link)
  };
  return (
      <nav>
        <List>
          {SITE_MENU_ITEMS.map(({ id, label, icon, link}) => {
            const Icon = icon;
            return (
                <ListItem
                    key={id}
                    disablePadding
                    sx={{ display: 'block' }}
                    style={router.asPath === link ? {backgroundColor: 'rgba(255, 255, 255, 0.08)'} : {} }
                >
                  <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}
                      onClick={(e) => handleClick(e, link)}
                  >
                    <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                    >
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
            )
          })}
        </List>
      </nav>
  );
}

export default SideMenuNav;
