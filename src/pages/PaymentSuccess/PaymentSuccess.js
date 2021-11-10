import { Button } from "@material-ui/core";
import { MDBCol, MDBContainer, MDBIcon, div } from "mdb-react-ui-kit";
import React from "react";
import { useHistory, withRouter } from "react-router";
import useStyles from "./style";

function PaymentSuccess(props) {
  const classes = useStyles();

  const history = useHistory();
  const  { email, payment_method, amount_paid } = props.match.params;
  return (
    <div className={classes.content}>
      <MDBContainer className="fluid d-flex align-items-center flex-column bg-light shadow pt-3">
        <div className="d-flex mb-3">
          <h2>Payment sucesssful !</h2>
        </div>
        <div className="d-flex mb-3">
          <MDBIcon icon="check-circle" size="4x" color="secondary" />
        </div>
        <div className="d-flex mb-3">
          <div className="mr-auto p-2 ">Payment method</div>
          <div className="p-2 col-example">{payment_method}</div>
        </div>
        <div className="d-flex mb-3">
          <div className="mr-auto p-2 ">Email</div>
          <div className="p-2 ">{email}</div>
        </div>
        <div className="d-flex mb-3">
          <div className="mr-auto p-2 ">
            <strong>Amount paid</strong>
          </div>
          <div className="p-2 ">{amount_paid}</div>
        </div>
        <div className="d-flex mb-3">
          <Button onClick={() => history.replace("/")} color="primary" variant="contained">
            Continue Shopping
          </Button>
        </div>
      </MDBContainer>
    </div>
  );
}

export default withRouter(PaymentSuccess);