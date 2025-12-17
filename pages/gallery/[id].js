import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CollectionsIcon from '@mui/icons-material/Collections';
import ImageGallery from '../../components/ImageGallery';
import { getCategoryById } from '../../data/categories';
import PageBreadcrumbs from '../../components/PageBreadcrumbs';

const CategoryGallery = () => {
  const router = useRouter();
  const { id } = router.query;
  const category = id ? getCategoryById(id) : null;

  if (!category) {
    return (
      <>
        <Head>
          <title>Category Not Found - SagaVortex Photography</title>
        </Head>
        <Box component="article" sx={{ p: 3 }}>
          <Typography variant="h4" component="h1">
            Category not found
          </Typography>
          <Typography sx={{ mt: 2 }}>
            The category you're looking for doesn't exist.
          </Typography>
        </Box>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{category.name} - SagaVortex Photography</title>
      </Head>
      <PageBreadcrumbs
        items={[
          { label: 'Gallery', href: '/gallery', icon: CollectionsIcon },
          { label: category.name },
        ]}
      />
      <Box component="article" sx={{ p: { xs: 2, md: 3 } }}>
        <Typography variant="h4" component="h1" sx={{ mb: 1 }}>
          {category.name}
        </Typography>
        {category.description && (
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            {category.description}
          </Typography>
        )}
        <ImageGallery images={category.images} />
      </Box>
    </>
  );
};

export default CategoryGallery;
