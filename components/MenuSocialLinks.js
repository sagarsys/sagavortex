import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SocialLinks } from '../data/social-links';

const MenuSocialLinks = ({ open }) => {
  const handleClick = (e, link) => {
    e.preventDefault();
    window.open(link, '_blank', 'noopener,noreferrer')
  };
  return (
      <List>
        {SocialLinks.map(({ name, link, icon}) => {
          const Icon = icon;
          return (
              <ListItem key={name} disablePadding sx={{ display: 'block' }}>
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
                  <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
          )
        })}
      </List>
  );
};

export default MenuSocialLinks;
