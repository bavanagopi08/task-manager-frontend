import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Register.css";

function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = async () => {

    try {

      await axios.post(
        'http://localhost:5000/api/auth/register',
        {
          name,
          email,
          password
        }
      );

      alert('User Registered');

      navigate("/login");

    } catch (error) {

      alert('Registration Failed');

    }

  };

  return (
    <div className="register-container">
      <form className="register-card" onSubmit={handleRegister}>

      <h2>Register</h2>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

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

      <button type="submit" >
        Register
      </button>
      </form>

    </div>
  );
}

export default Register;