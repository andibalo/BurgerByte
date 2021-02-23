import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/admin/Products";
import CreateProduct from "./pages/admin/CreateProduct";
import Checkout from "./pages/Checkout";

const App = (props) => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Switch>
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/admin/products" component={Products} />
        <Route exact path="/admin/create-product" component={CreateProduct} />
      </Switch>
    </Router>
  );
};

export default App;
