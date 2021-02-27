import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Products from "./pages/admin/Products";
import CreateProduct from "./pages/admin/CreateProduct";
import EditProduct from "./pages/admin/EditProduct";
import Checkout from "./pages/checkout/Checkout";
import ShoppingCart from "./pages/checkout/ShoppingCart";
import FinishCheckout from "./pages/checkout/FinishCheckout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Modal from "./components/Modal";

const App = (props) => {
  const location = useLocation();

  return (
    <>
      <Modal>
        <Route exact path="/" component={Home} />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path="/cart" component={ShoppingCart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/finish" component={FinishCheckout} />
            <Route exact path="/admin/products" component={Products} />
            <Route
              exact
              path="/admin/create-product"
              component={CreateProduct}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/admin/edit-product/:slug"
              component={EditProduct}
            />
          </Switch>
        </AnimatePresence>
      </Modal>
    </>
  );
};

export default App;
