import React, { useEffect } from "react";
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
import store from "./store";
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import { getCurrentUser } from "./actions/auth";
import { fetchProducts } from "./actions/product";
import { addToCart } from "./actions/cart";
import AdminRoute from "./routes/AdminRoute";

const App = (props) => {
  const location = useLocation();

  useEffect(() => {
    if (localStorage.token) {
      console.log(localStorage.token);
      setAuthToken(localStorage.token);
    }

    store.dispatch(getCurrentUser());
    store.dispatch(fetchProducts());

    if (localStorage.getItem("cart")) {
      store.dispatch(addToCart([...JSON.parse(localStorage.getItem("cart"))]));
    }
  }, []);

  return (
    <>
      <Provider store={store}>
        <Modal>
          <Route exact path="/" component={Home} />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route exact path="/cart" component={ShoppingCart} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/checkout/finish" component={FinishCheckout} />
              <AdminRoute exact path="/admin/products" component={Products} />
              <AdminRoute
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
      </Provider>
    </>
  );
};

export default App;
