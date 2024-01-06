// App.js (Updated)
import React, { useState } from 'react'
import {Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Products from '../Pages/Products'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'

function AllRoutes() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Routes>
     
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route
          path="/products"
          element=
            {<Products/>}/>
        <Route
          path="/cart"
          render={(props) => <Cart {...props} cartItems={cartItems} />}
        />
        <Route
          path="/checkout"
          render={(props) => <Checkout {...props} cartItems={cartItems} />}
      />
    </Routes>
  );
}

export {AllRoutes};
