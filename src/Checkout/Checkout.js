import "./Checkout.css";
import React from "react";
import Subtotal from "./Subtotal";
import {useStateValue} from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

// Check out page
export default function Checkout(){

    const [{basket}, dispatch] = useStateValue();


    return (
        <div className='checkout'>

            <h2 className='checkout_title'>Your Shopping Basket</h2>

            {basket.map(item => (
                    <CheckoutProduct
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        count={item.count}
                    />
            ))}

            <Subtotal />
        </div>
    );
}