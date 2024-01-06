// Cart.js
import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      {/* Add other cart-related functionality such as total price, checkout button, etc. */}
    </div>
  );
}

export default Cart;
