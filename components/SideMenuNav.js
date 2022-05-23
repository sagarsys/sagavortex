// noinspection JSValidateTypes

import React from 'react';
import { SITE_MENU_ITEMS } from '../constants';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { useRouter } from 'next/router';

function SideMenuNav({ open }) {
  const router = useRouter()
  const handleClick = (e, link) => { e.preventDefault(); router.push(link); };
  return (
      <List>
        {SITE_MENU_ITEMS.map(({ id, label, icon, link}) => {
          const Icon = icon;
          return (
              <ListItem key={id} disablePadding sx={{ display: 'block' }}>
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
  );
}

export default SideMenuNav;
