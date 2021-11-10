import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { Collapse } from "@material-ui/core";
import StripeForm from "../Stripe/StripeForm";

export default function Shipment({
  setDisabled,
  setError,
  handleSubmit,
  setClientSecret,
  option,
  setOption
}) {

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="payment"
        value={option}
        name="radio-buttons-group"
        onChange={(event) => {
          setOption(event.target.value);
        }}
      >
        <FormControlLabel
          value="cash"
          control={<Radio />}
          label="Pay by cash"
        />
        <Collapse in={option === "cash"}>
          <p>
            You might give the money for the shipper the total amount or the
            rest in case of deposit beforehand.
          </p>
        </Collapse>
        <FormControlLabel
          value="credit"
          control={<Radio />}
          label="Pay with Credit Card"
        />
        <Collapse in={option !== "cash"}>
          <StripeForm
            setDisabled={setDisabled}
            setError={setError}
            setClientSecret={setClientSecret}
            handleSubmit={handleSubmit}
          />
        </Collapse>
      </RadioGroup>
    </FormControl>
  );
}
