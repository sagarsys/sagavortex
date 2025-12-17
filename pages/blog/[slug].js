import React, { useState } from 'react';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';
import ArticleIcon from '@mui/icons-material/Article';
import { getAllPostIds, getPostData } from '../../utils/blog';
import PageBreadcrumbs from '../../components/PageBreadcrumbs';
import styles from '../../styles/Blog.module.css';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

const BlogPost = ({ postData }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Head>
        <title>{postData.title} - SagaVortex Photography</title>
        <meta name="description" content={postData.excerpt} />
      </Head>
      <PageBreadcrumbs
        items={[
          { label: 'Blog', href: '/blog', icon: ArticleIcon },
          { label: postData.title },
        ]}
      />
      <Box component="article" sx={{ p: 3, maxWidth: '900px', mx: 'auto' }}>
        {postData.thumbnail && (
          <Box 
            sx={{ 
              position: 'relative', 
              width: '100%', 
              height: { xs: 300, sm: 400, md: 500 },
              mb: 4,
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3
            }}
          >
            {!imageLoaded && !imageError && (
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                sx={{ position: 'absolute', top: 0, left: 0 }}
                animation="wave"
              />
            )}
            {!imageError && (
              <Image
                src={postData.thumbnail}
                alt={postData.title}
                fill
                style={{ 
                  objectFit: 'cover',
                  opacity: imageLoaded ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out'
                }}
                sizes="(max-width: 768px) 100vw, 900px"
                priority={true}
                unoptimized={true}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true);
                  setImageLoaded(true);
                }}
              />
            )}
            {imageError && (
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'background.default',
                  color: 'text.secondary',
                  minHeight: 300,
                }}
              >
                <Typography variant="body2">Image unavailable</Typography>
              </Box>
            )}
          </Box>
        )}
        
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ mb: 2, fontWeight: 600 }}
        >
          {postData.title}
        </Typography>
        
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ mb: 4, fontStyle: 'italic' }}
        >
          {formatDate(postData.date)} {postData.author && `• By ${postData.author}`}
        </Typography>
        
        <Box
          className={styles.blogContent}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </Box>
    </>
  );
};

export default BlogPost;
