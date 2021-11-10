import React from "react";
import useStyles from './style';
import Product from "./Product";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from "react-router-dom";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import spring from "../../Api/springServer";
import { useEffect } from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


export default function Home() {

    const classes = useStyles();
    const [productList, setProductList] = React.useState([]);

    const fetchProduct = () => {
        spring.get("/products/search/newRelease")
            .then((res) => {
                setProductList(res.data._embedded.products)
            })
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    function retrieveId(link) {
        return parseFloat(link.replace("http://localhost:8080/products/", ""));
    }

    const renderedProducts = productList.map((product) => {
        return <Product
            id={retrieveId(product._links.product.href)}
            title={product.name}
            price={product.price}
            image={product.image}
        />;
    })
    return (
        <div className={classes.content}>
            <div>

            <ImageList
                    sx={{ width: "100%", height: "auto" }}
                    variant="quilted"
                    cols={4}
                    rowHeight={"auto"}
                    style={{ marginLeft: "5px", marginRight: "5px", }}
                    component={Link}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}
                        sx={{ ":hover": { opacity: '90%' } }} component={Link} to={'/productList/title/' + item.keyword}>
                        <img
                            {...srcset(item.img, 200, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                            />
                        <ImageListItemBar
                            sx={{
                                background:
                                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                font: "10px OpenSans-Bold",
                                ":hover": {
                                    background: "black"
                                }
                              }}
                            title={item.title}
                        />
                    </ImageListItem>
                ))}
            </ImageList>

                <div className={classes.title}>
                    <h2 style={{font:"50px OpenSans-Bold",}}>New Arrival</h2>
                </div>

                <Container sx={{ py: 7 }} maxWidth="70%">
                    <Grid container spacing={3}>
                        {renderedProducts}
                    </Grid>
                </Container>
            </div>

        </div>
    );
}

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1612821745127-53855be9cbd1',
      title: 'Air Jordan Collection',
      keyword: 'Jordan',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1541597455068-49e3562bdfa4',
        title: 'Reebok Collection',
        keyword: 'Reebok',
    },
    {
      img: 'https://images.unsplash.com/photo-1529085216271-4f5b495a450b',
        title: 'Nike Air Force Collection',
        keyword: 'Air Force',
    },
    {
      img: 'https://images.unsplash.com/photo-1581547555428-b070fb4a46ea',
        title: 'New Balance Collection',
        keyword: 'New Balance',
      cols: 2,
    },
];
  
