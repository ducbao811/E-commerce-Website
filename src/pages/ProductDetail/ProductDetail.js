import React, { Component } from 'react'
import { withRouter } from 'react-router';
import {useStateValue} from "../../StateProvider";
import useStyles from './style';
import spring from '../../Api/springServer'
import { AddShoppingCart } from '@mui/icons-material';
import { Button, ButtonGroup } from '@mui/material';

function ProductDetail(props) {

    const classes = useStyles();
    const [product, setProduct] = React.useState('')
    const [{basket}, dispatch] = useStateValue();
    const [count, setCount] = React.useState(1)

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: props.match.params.product_id,
                title: product.name,
                image: product.image,
                price: product.price,
                count: count
            }
        })
    }

    const fetchProduct = () => {
        spring.get("/products/" + props.match.params.product_id)
            .then((res) => {
                setProduct(res.data)
            })
    }

    React.useEffect(() => {
        fetchProduct();
     }, [])

    return (
        <div className={classes.content}>
            
            <div className={classes.image}>
                <img className={classes.img} src={product.image}/>
            </div>

            <div className={classes.right}>
                <div>
                    <h3 style={{fontSize: 26}}>{product.name}</h3>
                    <span style={{color: "#a3a5a7", fontSize: 12}}>SKU : {product.sku}</span>
                </div>
                
                <div className={classes.product_price}>
                    <small>$</small>
                    <span>{product.price}</span>
                </div>

                <div>
                    <div style={{marginBottom: "12px"}}><h4>Description</h4></div>
                    <div>
                        {product.description}
                    </div>
                </div>

                <div style={{marginTop: "12px"}}>
                <ButtonGroup
                        disableElevation
                        variant="outlined"
                        color="inherit"
                        size="small"
                        className='btn_group'
                    >
                        <Button onClick={() => {setCount(count - 1)}} disabled={count === 1}>-</Button>
                        <Button>{count}</Button>
                        <Button onClick={() => {setCount(count + 1)}}>+</Button>
                    </ButtonGroup>
                </div>

                <div style={{marginTop: "12px"}}>
                    <Button
                        variant="contained"
                        sx={{ width: "100%", height: "4em", backgroundColor: "gray" }}
                        color="inherit"
                        onClick={addToBasket}
                    >
                        Add to cart
                        <AddShoppingCart />
                    </Button>
                </div>
            </div>
            
        </div>
    );
}


export default withRouter(ProductDetail);