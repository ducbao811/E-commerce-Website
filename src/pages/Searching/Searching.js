import React from "react";
import spring from "../../Api/springServer";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useStyles from "./style";
import Product from "../Home/Product";
import { withRouter } from "react-router";

function Searching(props) {
  const [productList, setProductList] = React.useState([]);
  const [quantity, setQuantity] = React.useState(null);
  const classes = useStyles();

  const fetchProduct = () => {
    const searchTerm = props.match.params.searchTerm;
    spring
      .get("/products/search/nameContaining?name=" + searchTerm)
      .then((res) => {
        setQuantity(res.data.page.totalElements);
        if (res.data.page.totalElements !== 0) {
          setProductList(res.data._embedded.products);
        }
      });
  };

  React.useEffect(() => {
    fetchProduct();
  }, [props.match.params]);

  function retrieveId(link) {
    return parseFloat(link.replace("http://localhost:8080/products/", ""));
  }

  const renderedProducts = productList.map((product) => {
    return (
      <Product
        id={retrieveId(product._links.product.href)}
        title={product.name}
        price={product.price}
        image={product.image}
      />
    );
  });

  return (
    <div className={classes.content}>
      <div className={classes.title}>
        <h3 style={{ font: "50px Bold" }}>Search Results</h3>
        {quantity === 0 ? (
          <p>
            There are no products found for "{props.match.params.searchTerm}" !
          </p>
        ) : (
          <p>There are {quantity} products found</p>
        )}
      </div>
      <Container sx={{ py: 7 }} maxWidth="70%">
        {quantity === 0 ? (
          <div />
        ) : (
          <>
            <p>
              Searching results for{" "}
              <strong>"{props.match.params.searchTerm}"</strong>
            </p>
            <Grid container spacing={3}>
              {renderedProducts}
            </Grid>
          </>
        )}
      </Container>
    </div>
  );
}

export default withRouter(Searching);
