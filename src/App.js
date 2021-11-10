import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProductList from "./pages/Category/ProductList";
import Checkout from "./pages/Checkout/Checkout";
import Header from "./component/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Searching from "./pages/Searching/Searching";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";

const promise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLIC
);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Elements stripe={promise}>
              <Checkout />
            </Elements>
          </Route>

          <Route path="/payment/success/:payment_method/:email/:amount_paid" component={PaymentSuccess} />

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/products/:product_id" component={ProductDetail} />

          <Route path="/productList/:filter/:value" component={ProductList} />

          <Route path="/search/:searchTerm" component={Searching} />

          <Route path="/about">
            <Home />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
