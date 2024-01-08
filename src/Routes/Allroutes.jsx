import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';

import LoginSignupContainer from '../Component/Login/LoginSignupContainer/LoginSignupContainer';
import Products from '../Pages/Products';
import Cart from '../Pages/Cart';
import Checkout from '../Pages/Checkout';

function AllRoutes() {
  const [cartItems, setCartItems] = useState([]);

  const handleRemove = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const handleChangeQuantity = (item, quantityChange) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, amount: cartItem.amount + quantityChange };
      }
      return cartItem;
    });
    setCartItems(updatedCart);
  };


  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/LoginSignupContainer" element={<LoginSignupContainer />} />
      <Route
        path="/products"
        element={<Products setCartItems={setCartItems} cartItems={cartItems}  />}
      />
      <Route
        path="/cart"
        element={<Cart cartItems={cartItems}    handleRemove={handleRemove}  setCartItems={setCartItems} handleChangeQuantity={handleChangeQuantity}  />}
      />
      <Route
        path="/checkout"
        render={(props) => <Checkout {...props} cartItems={cartItems} />}
      />
    </Routes>
  );
}

export { AllRoutes };
