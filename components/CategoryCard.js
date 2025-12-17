import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';
import useViewportSize from '../hooks/useViewportSize';
import { useRouter } from 'next/router';

const CategoryCard = ({ id, name, cover }) => {
    const { sm, md, lg, xl } = useViewportSize();
    const router = useRouter();
    const cardHeight = xl ? 480 : 360;
    const [imageLoaded, setImageLoaded] = useState(false);
    
    const navigateToCategory = (id) => {
        router.push(`/gallery/${id}`);
    };
    
    return (
        <Card>
            <CardActionArea onClick={() => navigateToCategory(id)}>
                <div style={{ position: 'relative', width: '100%', height: cardHeight, overflow: 'hidden' }}>
                    {!imageLoaded && (
                        <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={cardHeight}
                            sx={{ position: 'absolute', top: 0, left: 0 }}
                            animation="wave"
                        />
                    )}
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
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(true)}
                    />
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