import React from 'react';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import CategoryCard from '../../components/CategoryCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CollectionsIcon from '@mui/icons-material/Collections';
import styles from '../../styles/Gallery.module.css';
import useViewportSize from '../../hooks/useViewportSize';
import { getAllCategories } from '../../data/categories';
import PageBreadcrumbs from '../../components/PageBreadcrumbs';

const Gallery = () => {
  const { xl } = useViewportSize();
  const categories = getAllCategories();

  return (
    <>
      <Head>
        <title>Gallery - SagaVortex Photography</title>
      </Head>
      <PageBreadcrumbs
        items={[
          { label: 'Gallery', icon: CollectionsIcon },
        ]}
      />
      <Box component="article" className={styles.gallery} sx={{ p: 3 }}>
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
