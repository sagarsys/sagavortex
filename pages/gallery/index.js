import React from 'react';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import CategoryCard from '../../components/CategoryCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from '../../styles/Gallery.module.css'
import useViewportSize from '../../hooks/useViewportSize'

const Gallery = ({categories}) => {
    const { xl } = useViewportSize()
    return (
        <>
            <Head>
                <title>Gallery - SagaVortex Photography</title>
            </Head>
            <Box component="article" className={styles.gallery}>
                <Typography variant="h5" component="h1">
                    Browse by categories
                </Typography>
                <Grid container rowSpacing={6} columnSpacing={4}>
                    {categories?.map(({id, name, cover}) => (
                        <Grid key={`${name}-${id}`} item md={6} lg={4} xl={ xl ? 3 : 4} >
                            <CategoryCard
                                id={id}
                                cover={cover?.attributes?.url}
                                name={name}
                            />
                        </Grid>
                    ))}
                </Grid>

            </Box>
        </>
    )
}

export default Gallery;

export async function getStaticProps() {
    const results = await fetch('http://localhost:1337/api/categories/?populate=cover')
    try {
        const categories = await results.json();
        return {
            props: {
                categories: categories.data
                    .map(({id, attributes}) => ({id, ...attributes}))
                    .filter(({active}) => active)
                    .map(({cover, ...props}) => ({...props, cover: cover.data})),
            },
        }
    } catch (e) {
        console.warn(`Error fetching categories: ${e}`)
        return {
            props: {categories: []},
        }
    }
}