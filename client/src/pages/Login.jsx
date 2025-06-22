import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ import this

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [status, setStatus] = useState(null);
  const navigate = useNavigate(); // ✅ initialize

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', formData);

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        setStatus('success');

        // ✅ Redirect to AdminPage
        navigate('/admin');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 mt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring"
          required
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {status === 'loading' ? 'Logging in...' : 'Login'}
        </button>

        {status === 'success' && (
          <p className="text-green-500 mt-4 text-sm text-center">Login successful!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 mt-4 text-sm text-center">Invalid credentials.</p>
        )}
      </form>
    </div>
  );
}

export default Login;
