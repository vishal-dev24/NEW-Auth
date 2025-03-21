import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/login", formData, { withCredentials: true });
    setFormData({ email: "", password: "" });
    navigate("/home");
  };

  return (
    <div className='flex justify-center min-h-screen bg-gray-800 p-4'>
      <div className='bg-white p-6 h-full rounded-2xl shadow-lg max-w-sm w-full text-center mt-10'>
        <h2 className='text-2xl font-semibold mb-4'>Login</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input type='email' name='email' required placeholder='Email' value={formData.email} onChange={handleChange} className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400' />
          <input type='password' name='password' required placeholder='Password' value={formData.password} onChange={handleChange} className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400' />
          <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition' > Login </button>
        </form>
        <p className='text-gray-600 text-sm mt-4'>Don't have an account?
          <span className='text-blue-500 cursor-pointer hover:underline' onClick={() => navigate("/")}>Register</span>
        </p>
      </div>
    </div>)
}

export default Login