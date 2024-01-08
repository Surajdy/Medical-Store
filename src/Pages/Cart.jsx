import React, { useEffect, useState } from 'react';
import "./cart.css"

const Cart = ({ cartItems,setCartItems,handleChangeQuantity,handleRemove }) => {
  const [price, setPrice] = useState(0);


  const handlePrice = ()=>{
    let ans = 0;
    cartItems.map((item)=>(
        ans += item.amount * item.price
    ))
    setPrice(ans);
}

const handleCheckout = () => {
  // Perform any additional checkout logic if needed
  // For now, let's just navigate to the checkout page
  window.location.href = '/Checkout';

};



useEffect(()=>{
  handlePrice();
});


  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className='cartContainer'>
        {cartItems.map((item, index) => (
          
          <div className='cartItem' key={index}>
          <div className="cart_img">
              <img src={item.image} alt='productimage' />
                             <p>{item.name}</p>
          </div>
          <div>
                             <button onClick={()=>handleChangeQuantity(item, +1)}> + </button>
                             <button>{item.amount}</button>
                             <button onClick= {()=>handleChangeQuantity(item, -1)}> - </button>
           </div>
           <div>
                             <span>$ {item.price}</span>
                             <button onClick={() => handleRemove(item.id)}>Remove</button>

        </div>
                     
          </div>          
        ))}
      </div>
        
      )}
        <div className='total'>
                 <span>Total Price of your Cart</span>
                 <span> $ {price}</span>
        </div>
        <button id='Checkout' onClick={handleCheckout}>Checkout -  $ {price}</button>

    </div>
  );
};

export default Cart;
