import Header from './Header/Header';
import "./App.css";
import React from "react";
import Home from './Home/Home';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";

function App() {
  return (

    <BrowserRouter>
        <div className="App">
            <Header />
            <Switch>

                <Route path='/checkout'>
                    <Checkout />
                </Route>

                <Route path='/login'>
                    <Login />
                </Route>

                <Route path='/'>
                    <Home />
                </Route>

                <Route path='/men'>
                    <Login />
                </Route>

                <Route path='/women'>
                    <Home />
                </Route>

                <Route path='/about'>
                    <Home />
                </Route>
            </Switch>
        </div>
    </BrowserRouter>

  );
}

export default App;
