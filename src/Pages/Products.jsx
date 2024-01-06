// Products.js (Updated)
import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch products data from an API or mock data
    // Update the 'products' state with fetched data
    // Example: Fetching mock data
    const fetchData = async () => {
      // Perform API call or use mock data
      const response = await fetch(`http://localhost:8080/products`);
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>Products</h2>
      {/* Display products */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
