
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);

  const [cartItems, setCartItems] = useState([]);
 const [filteredProducts, setFilteredProducts] = useState([]);
  
 const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:8080/products');
    const data = await response.json();
    setProducts(data);
    setFilteredProducts(data);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
 

useEffect(() => {
  fetchData();
}, []);

const addToCart = (product) => {
  setCartItems([...cartItems, product]);
};

const filterProductsByCategory = (category) => {
  if (category === 'All') {
    setFilteredProducts(products);
  } else {
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  }
};

  return (
    
    <div className='productPage'>
         <div className='headingContainer'>
          <h1 style={{color: "#00525D"}}>Most Recommended</h1>
          <div>
            <h1>Products</h1>
            <button onClick={() => filterProductsByCategory('All')}>View All</button>
          </div>
         </div>
          <div className='mainContainer'>
            <div className='filterContainer'>
            <h1>Product Categories</h1>
              <div className='filter'>
                <div className='filter1'>
                  <h1>HandCare</h1>
                  <button  onClick={() => filterProductsByCategory('HandCare')}>+</button>
                </div>
                <div className='filter1'>
                  <h1>Cosmetics</h1>
                  <button  onClick={() => filterProductsByCategory('Cosmetics')}>+</button>

                </div>
                <div className='filter1'>
                  <h1>Dietry Supplements</h1>
                  <button  onClick={() => filterProductsByCategory('DietrySupplements')}>+</button>

                </div>
                <div className='filter1'>
                  <h1>Cough,Cold,Fever</h1>
                  <button  onClick={() => filterProductsByCategory('Cough')}>+</button>

                </div>
                <div className='filter1'>
                  <h1>Nutrition</h1>
                  <button  onClick={() => filterProductsByCategory('Nutrition')}>+</button>

                </div>
                <div className='filter1'>
                  <h1>Vitamins & Minerals</h1>
                  <button  onClick={() => filterProductsByCategory('Vitamins&Minerals')}>+</button>

                </div>
                <div className='filter1'>
                  <h1>Probiotics</h1>
                  <button  onClick={() => filterProductsByCategory('Probiotics')}>+</button>

                </div>
                <div className='filter1'>
                  <h1>Alergies</h1>
                  <button  onClick={() => filterProductsByCategory('Alergies')}>+</button>

                </div>
                <div className='filter1'>
                  <h1>Mouth & teeth</h1>
                  <button  onClick={() => filterProductsByCategory('Mouth&Teeth')}>+</button>

                </div>
                <div className='filter1'>
                  <h1>Eye care</h1>
                  <button  onClick={() => filterProductsByCategory('EyeCare')}>+</button>

                </div>
                <div className='filter1'>
                  <h1>Protection</h1>
                  <button  onClick={() => filterProductsByCategory('Protection')}>+</button>
                </div>
              </div>
            </div> 
            <div className='productContainer'>
                 {filteredProducts.map((product) => (
                  <div className='productItem' key={product.id}>
                  <div className='like'> <FontAwesomeIcon icon={faHeart} /></div>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
                ))}
             
            </div>
          </div>
              
      </div>
  )
}

export default Products;
