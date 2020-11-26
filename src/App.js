import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          {/* CHECKOUT PATH */}
          <Route path="/login">
            <Login />
          </Route>
          {/* CHECKOUT PATH */}
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/* HOME PATH */}
          <Route path="/">
            <Home />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
