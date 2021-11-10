import React from "react";
import "./CheckoutProduct.css";
import {AddShoppingCart, Delete} from "@material-ui/icons";
import {useStateValue} from "../../StateProvider";
import {Button, IconButton} from "@material-ui/core";
import {ButtonGroup} from "@mui/material";

export default function CheckoutProduct({id, image, title, price, count}){

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    const removeOneFromBasket = () => {
        dispatch({
            type: "REMOVE_ONE_FROM_BASKET",
            id: id,
        })
    }

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                count: 1
            }
        })
    }

    return (
        <div className='checkoutProduct'>

            <div className='checkoutProduct_info'>
                <img className='checkoutProduct_image' src={image} />
                <div style={{display: "flex", flexDirection: "column", paddingLeft: "10px"}}>
                    <p className='checkoutProduct_title'>{title}</p>
                    <p className='checkoutProduct_price'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <ButtonGroup
                        disableElevation
                        variant="outlined"
                        color="inherit"
                        size="small"
                        className='btn_group'
                    >
                        <Button onClick={removeOneFromBasket} disabled={count === 1}>-</Button>
                        <Button>{count}</Button>
                        <Button onClick={addToBasket}>+</Button>
                    </ButtonGroup>
                </div>
            </div>
            <IconButton style={{height:"50%"}}>
                <Delete style={{justifyContent:"center", alignItems:"center"}} onClick={removeFromBasket}/>
            </IconButton>
        </div>
    );
}
