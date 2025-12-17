import React from 'react';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArticleIcon from '@mui/icons-material/Article';
import BlogCard from '../../components/BlogCard';
import { getSortedPostsData } from '../../utils/blog';
import useViewportSize from '../../hooks/useViewportSize';
import PageBreadcrumbs from '../../components/PageBreadcrumbs';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Blog = ({ allPostsData }) => {
  const { xl } = useViewportSize();

  return (
    <>
      <Head>
        <title>Blog - SagaVortex Photography</title>
      </Head>
      <PageBreadcrumbs
        items={[
          { label: 'Blog', icon: ArticleIcon },
        ]}
      />
      <Box component="article" sx={{ p: 3 }}>
        <Typography variant="h5" component="h1" sx={{ mb: 4 }}>
          Blog Posts
        </Typography>
        {allPostsData.length === 0 ? (
          <Typography variant="body1" color="text.secondary">
            No blog posts yet. Check back soon!
          </Typography>
        ) : (
          <Grid container rowSpacing={4} columnSpacing={4}>
            {allPostsData.map((post) => (
              <Grid key={post.id} item xs={12} sm={6} md={4} lg={xl ? 3 : 4}>
                <BlogCard
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  slug={post.id}
                  thumbnail={post.thumbnail}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default Blog;
