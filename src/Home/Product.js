import React from "react";
import './Product.css';
import {useStateValue} from "../StateProvider";
import {IconButton} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";
import {Button} from "@mui/material";

export default function Product({id, title, image, price}){

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
            }
        })
    }

    return (
        <div className='product'>

            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>

            <img
                src={image}
            />

            <Button variant="contained" onClick={addToBasket} startIcon={<AddShoppingCart />} size="large">
                Add to cart
            </Button>

        </div>
    );
}