import React from "react";
import './Product.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';


export default function Product({id, title, image, price}){
    

    return (
        <Grid item xs={12} sm={10} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
                component={Link}
                to={"/products/" + id}
            >
                <CardMedia
                    component="img"
                    sx={{
                    // 16:9
                    pt: '10.25%',
                    }}
                    image={image}
                    alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="sutitle" component="h4">
                    {title}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>   
    );
}