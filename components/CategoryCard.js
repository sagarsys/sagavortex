import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import useViewportSize from '../hooks/useViewportSize'
import {useRouter} from 'next/router'

const CategoryCard = ({ id, name, cover }) => {
    const { sm, md, lg, xl } = useViewportSize()
    const router = useRouter()
    const navigateToCategory = (id) => {
        console.log(id)
        router.push(`gallery/${id}`)
    }
    return (
        <Card>
            <CardActionArea onClick={() => navigateToCategory(id)}>
                <CardMedia
                    component="img"
                    height={xl ? 480 : 360}
                    image={cover}
                    alt={name}
                />
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