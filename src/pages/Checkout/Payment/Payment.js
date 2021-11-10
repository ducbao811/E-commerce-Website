import React, { useState } from "react";
import { MDBValidation, MDBInput, MDBBtn, MDBCheckbox } from "mdb-react-ui-kit";
import "../Checkout.css";
import Shipment from "./Shipment";
import { Button } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useHistory } from "react-router";
import { getBasketTotal } from "../../../reducer.js";
import { useStateValue } from "../../../StateProvider";

function Payment() {
  const [formValue, setFormValue] = useState({
    fname: "",
    lname: "",
    email: "",
    city: "",
    district: "",
    ward: "",
    address: "",
  });

  const [error, setError] = React.useState(null);
  const [disabled, setDisabled] = React.useState(true);
  const [processing, setProcessing] = React.useState("");
  const [succeeded, setSucceeded] = React.useState(false);
  const [{ basket }, dispatch] = useStateValue();
  const [option, setOption] = React.useState("cash");

  function checkPropertiesEmpty(obj) {
    for (var key in obj) {
      if (obj[key] === "") return true;
    }
    return false;
  }

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [clientSecret, setClientSecret] = React.useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        setError(null);
        setSucceeded(true);
        setProcessing(false);
        dispatch({
          type: "REMOVE_ALL",
        });
        history.replace("/payment/success/" + option + "/" + formValue.email  + "/" + getBasketTotal(basket));
      });
  };

  return (
    <MDBValidation className="row g-3" noValidate>
      <div className="col-sm-6">
        <MDBInput
          value={formValue.fname}
          name="fname"
          onChange={onChange}
          id="validationCustom01"
          required
          label="First name"
        />
      </div>
      <div className="col-sm-6">
        <MDBInput
          value={formValue.lname}
          name="lname"
          onChange={onChange}
          id="validationCustom02"
          required
          label="Last name"
        />
      </div>
      <div className="col-md-12">
        <MDBInput
          value={formValue.email}
          name="email"
          onChange={onChange}
          id="validationCustom03"
          required
          label="Email"
        />
      </div>
      <div className="col-md-4">
        <MDBInput
          value={formValue.city}
          name="city"
          onChange={onChange}
          id="validationCustom04"
          required
          label="City"
          validation="Invalid City"
          invalid
        />
      </div>
      <div className="col-md-4">
        <MDBInput
          value={formValue.district}
          name="district"
          onChange={onChange}
          id="validationCustom05"
          required
          label="District"
          validation="Invalid District"
          invalid
        />
      </div>
      <div className="col-md-4">
        <MDBInput
          value={formValue.ward}
          name="ward"
          onChange={onChange}
          id="validationCustom06"
          required
          label="Ward"
          validation="Invalid Ward"
          invalid
        />
      </div>
      <div className="col-md-12">
        <MDBInput
          value={formValue.address}
          name="address"
          onChange={onChange}
          id="validationCustom07"
          required
          label="Address"
        />
      </div>
      <div className="col-sm-12">
        <p className="checkout_title">Payment Method</p>
        {checkPropertiesEmpty(formValue) ? (
          <> </>
        ) : (
          <Shipment
              setDisabled={setDisabled}
              setError={setError}
              handleSubmit={handleSubmit}
              setClientSecret={setClientSecret}
              option={option}
              setOption={setOption}
          />
        )}
      </div>
      <div className="col-md-12">
        <Button
          disabled={processing || disabled || succeeded}
          variant="contain"
          size="medium"
          type="submit"
          onClick={handleSubmit}
        >
          <span>{processing ? <p>Processing</p> : "Place Order"}</span>
        </Button>
      </div>
    </MDBValidation>
  );
}
export default Payment;
