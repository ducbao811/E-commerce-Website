import "./Checkout.css";
import React from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { MDBCol, MDBContainer } from "mdb-react-ui-kit";
import Payment from "./Payment/Payment";

// Check out page
export default function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <MDBContainer fluid className="d-flex align-items-start bg-light shadow">
        <MDBCol size="8" className="py-3 px-4">
          <p className="checkout_title">Your Shopping Basket</p>
          {basket.map((item) => (
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
        </MDBCol>
        <MDBCol size="4" className="py-3 px-4">
          <p className="checkout_title">Shipping Information</p>
          <Payment></Payment>
        </MDBCol>
      </MDBContainer>
    </div>
  );
}
