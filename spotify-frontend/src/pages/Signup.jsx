import { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('http://localhost:5000/auth/register', {
        username,
        email,
        password,
      });
      alert('Signup Successful! You can now log in.');
      window.location.href = '/login';
    } catch (error) {
      console.error('Signup Error:', error);
      setError('Error signing up. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Spotify 2.0 Signup</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Username" 
          required 
          className="input-field"
        />
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
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Signup;