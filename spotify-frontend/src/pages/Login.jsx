import { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { data } = await axios.post('http://localhost:5000/auth/signin', { email, password });
      localStorage.setItem('token', data.token);
      alert('Login Successful');
    } catch (error) {
      console.error('Login Error:', error);
      setError('Error logging in. Please check your credentials and try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Spotify 2.0 Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
          className="input-field"
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
          className="input-field"
        />
        <button type="submit" className="submit-button">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;