import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useStateValue } from "../../../StateProvider";
import { getBasketTotal } from "../../../reducer";
import spring from "../../../Api/springServer";

export default function StripeForm({
  setDisabled,
  setError,
  setClientSecret,
  handleSubmit
}
) {
  
  
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const getClientSecret = async () => {
      spring
        .post(`/payment/create?total=${getBasketTotal(basket) * 100}`)
        .then((res) => {
          setClientSecret(res.data);
        });
    };

    getClientSecret();
  }, [basket]);


  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement onChange={handleChange} />
      {/* {error && <div>{error}</div>} */}
    </form>
  );
}
