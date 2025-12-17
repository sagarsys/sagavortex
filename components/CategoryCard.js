import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';
import useViewportSize from '../hooks/useViewportSize';
import { useRouter } from 'next/router';

const CategoryCard = ({ id, name, cover }) => {
    const { xl } = useViewportSize();
    const router = useRouter();
    const [cardHeight, setCardHeight] = useState(360); // Default for SSR
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    
    useEffect(() => {
        // Set height only on client side to avoid hydration mismatch
        setCardHeight(xl ? 480 : 360);
    }, [xl]);
    
    const navigateToCategory = (id) => {
        router.push(`/gallery/${id}`);
    };
    
    return (
        <Card>
            <CardActionArea onClick={() => navigateToCategory(id)}>
                <div style={{ position: 'relative', width: '100%', height: cardHeight, overflow: 'hidden' }}>
                    {!imageLoaded && !imageError && (
                        <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={cardHeight}
                            sx={{ position: 'absolute', top: 0, left: 0 }}
                            animation="wave"
                        />
                    )}
                    {!imageError && (
                        <Image
                            src={cover}
                            alt={name}
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
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CategoryCard;