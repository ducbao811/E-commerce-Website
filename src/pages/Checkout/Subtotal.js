import React from "react";
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "../../StateProvider";
import {getBasketTotal} from "../../reducer";
export default function Subtotal(){

    const [{basket}, dispatch] = useStateValue();

    return (
        <div>
            {basket?.reduce((accumulator, current) => accumulator + current.count, 0) !== 0 ?
            <div className='subtotal'>
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <p style={{fontWeight: "bold"}}>
                                Total : <strong>{value}</strong>
                            </p>
                        </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />
            </div>
            :
            <div style={{justifyContent: "center", textAlign: "center"}}>
                    <h3>There is nothing in your basket</h3>
                    <p>You haven't bought anything</p>
            </div>}
        </div>
    );
}