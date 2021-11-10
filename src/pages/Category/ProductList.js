import React from 'react'
import spring from "../../Api/springServer";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import useStyles from './style';
import Product from "../Home/Product";
import { withRouter } from 'react-router';

function ProductList(props) {

    const [productList, setProductList] = React.useState([]);
    const classes = useStyles();

    const fetchProduct = () => {
        const filter = props.match.params.filter;
        const value = props.match.params.value;
        if (filter === "category") {
            spring.get("/products/search/findByCategory?category=" + value)
                .then((res) => {
                    setProductList(res.data._embedded.products)
                })
        }
        else {
            spring.get("/products/search/nameContaining?name=" + value)
                .then((res) => {
                    setProductList(res.data._embedded.products)
                })
        }
    }

    React.useEffect(() => {
        fetchProduct();
    },[props.match.params])

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
            <div className={classes.title}>
                <h3 style={{ font: "50px Bold", }}>{props.match.params.value}</h3>
            </div>
            <Container sx={{ py: 7 }} maxWidth="70%">
                    <Grid container spacing={3}>
                        {renderedProducts}
                    </Grid>
            </Container>
        </div>
    )
}

export default withRouter(ProductList);