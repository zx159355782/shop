import React from "react";
import { Router, Route } from "react-router-dom";

import Header from "./Header";
import Home from "../components/main/Home";
import Products from "../components/main/Products";
import Cart from "../components/main/Cart";
import Message from "../components/Message";
import Footer from "../components/Footer";

import history from "../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/cart" exact component={Cart} />
        <Message />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
