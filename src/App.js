import React from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    // BEM 
    <Router>
      <div className="app">

      {/* RENDER THE HEADER REGARDLESS OF WHAT PAGE WE ARE ON */}
      <Header />

        <Switch> 

          {/* CHECKOUT PAGE ROUTE */}
          <Route path="/checkout">
            <Checkout />
          </Route>

          {/* HOME PAGE ROUTE (default) Keep default at bottom so it can be listened to */}
          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
