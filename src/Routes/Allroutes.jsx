import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import Products from '../Pages/Products';
import Cart from '../Pages/Cart';
import Checkout from '../Pages/Checkout';

function AllRoutes() {
  const [cartItems, setCartItems] = useState([]);
 
  const removeFromCart = (indexToRemove) => {
    const updatedCartItems = cartItems.filter((item, index) => index !== indexToRemove);
    setCartItems(updatedCartItems);
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/products"
        element={<Products setCartItems={setCartItems} cartItems={cartItems} />}
      />
      <Route
        path="/cart"
        element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
      />
      <Route
        path="/checkout"
        render={(props) => <Checkout {...props} cartItems={cartItems} />}
      />
    </Routes>
  );
}

export { AllRoutes };
