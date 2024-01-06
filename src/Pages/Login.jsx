// Login.js
import React, { useState } from 'react';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here (e.g., API call)
    console.log(loginData); // Replace with actual login logic
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Create form inputs for email and password */}
        {/* Example: */}
        <input type="email" name="email" value={loginData.email} onChange={handleInputChange} />
        <input type="password" name="password" value={loginData.password} onChange={handleInputChange} />
        {/* Add submit button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
