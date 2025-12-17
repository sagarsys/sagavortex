import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import CategoryCard from '../../components/CategoryCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import styles from '../../styles/Gallery.module.css';
import useViewportSize from '../../hooks/useViewportSize';
import { getAllCategories } from '../../data/categories';

const Gallery = () => {
  const { xl } = useViewportSize();
  const categories = getAllCategories();

  return (
    <>
      <Head>
        <title>Gallery - SagaVortex Photography</title>
      </Head>
      <Box component="article" className={styles.gallery}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
          <MuiLink
            component={Link}
            href="/"
            color="inherit"
            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </MuiLink>
          <Typography color="text.primary">Gallery</Typography>
        </Breadcrumbs>
        <Typography variant="h5" component="h1" sx={{ mb: 4 }}>
          Browse by categories
        </Typography>
        <Grid container rowSpacing={6} columnSpacing={4}>
          {categories.map((category) => (
            <Grid key={category.id} item md={6} lg={4} xl={xl ? 3 : 4}>
              <CategoryCard
                id={category.id}
                cover={category.coverImage}
                name={category.name}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Gallery;
