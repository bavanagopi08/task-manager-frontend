import "./Login.css";
import { useState } from 'react';
import axios from 'axios';

import { Navigate, useNavigate } from 'react-router-dom';

function Login() {

  const navigate=useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        {
          email,
          password
        }
      );

      console.log("Response:", response.data);

      localStorage.setItem(
        'token',
        response.data.token
      );

      alert('Login Successful');

      navigate('/');

    } catch (error) {
      console.log("Error:", error);

      alert( 'Login Failed');

    }

  };

  return (
    <div className="login-container">
        <form className="login-card" onSubmit={handleLogin}>

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">
        Login
      </button>

      </form>

    </div>
  );
}

export default Login;