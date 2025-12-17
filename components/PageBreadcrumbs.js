import React from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const PageBreadcrumbs = ({ items = [] }) => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: theme.zIndex.appBar - 1,
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
        py: 2,
        px: 3,
        mb: 3,
        boxShadow: `0 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
      }}
    >
      <Breadcrumbs 
        aria-label="breadcrumb"
        sx={{
          '& .MuiBreadcrumbs-separator': {
            mx: 1.5,
          },
        }}
      >
        <MuiLink
          component={Link}
          href="/"
          color="inherit"
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </MuiLink>
        {items.map((item, index) => {
          if (index === items.length - 1) {
            return (
              <Typography key={index} color="text.primary" sx={{ fontWeight: 500 }}>
                {item.label}
              </Typography>
            );
          }
          return (
            <MuiLink
              key={index}
              component={Link}
              href={item.href}
              color="inherit"
              sx={{ 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {item.icon && <item.icon sx={{ mr: 0.5 }} fontSize="inherit" />}
              {item.label}
            </MuiLink>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default PageBreadcrumbs;
