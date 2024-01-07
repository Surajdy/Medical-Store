// // Signup.js
// import React, { useState } from 'react';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     // Add other necessary fields for signup
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement signup logic here (e.g., API call)
//     console.log(formData); // Replace with actual signup logic
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Create form inputs for username, email, password, etc. */}
//         {/* Example: */}
//         <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
//         <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
//         <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
//         {/* Add submit button */}
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;

// <div className='products'>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name} - ${product.price}
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
// </div>
// </div>