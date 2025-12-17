import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';

const BlogCard = ({ title, excerpt, date, slug, thumbnail }) => {
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const navigateToPost = (slug) => {
    router.push(`/blog/${slug}`);
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea 
        onClick={() => navigateToPost(slug)}
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
      >
        {thumbnail && (
          <Box sx={{ position: 'relative', width: '100%', height: 200, overflow: 'hidden' }}>
            {!imageLoaded && !imageError && (
              <Skeleton
                variant="rectangular"
                width="100%"
                height={200}
                sx={{ position: 'absolute', top: 0, left: 0 }}
                animation="wave"
              />
            )}
            {!imageError && (
              <Image
                src={thumbnail}
                alt={title}
                fill
                style={{ 
                  objectFit: 'cover',
                  opacity: imageLoaded ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out'
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
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
                }}
              >
                <Typography variant="body2">Image unavailable</Typography>
              </Box>
            )}
          </Box>
        )}
        <CardContent sx={{ flexGrow: 1, width: '100%' }}>
          <Typography 
            gutterBottom 
            variant="h5" 
            component="div"
            sx={{ 
              mb: 2,
              fontWeight: 600,
              lineHeight: 1.3
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ 
              mb: 2,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              minHeight: '4.5em'
            }}
          >
            {excerpt}
          </Typography>
          <Box sx={{ mt: 'auto' }}>
            <Typography 
              variant="caption" 
              color="text.secondary"
              sx={{ fontStyle: 'italic' }}
            >
              {formatDate(date)}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
