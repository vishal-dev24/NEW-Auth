import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', email: '', password: '', image: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('username', formData.username);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('image', formData.image);
    await axios.post('http://localhost:5000/register', data, { withCredentials: true });
    setFormData({ username: '', email: '', password: '', image: null });
    navigate('/login')
  }

  return (
    <div className='flex justify-center min-h-screen bg-gray-800 p-4'>
      <div className='bg-white p-6 h-full rounded-2xl shadow-lg max-w-sm w-full text-center mt-10'>
        <h2 className='text-2xl font-semibold mb-4'>Register</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input type='text' name='username' placeholder='Full Name' className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400' required onChange={handleChange} value={formData.username} />
          <input type='email' name='email' placeholder='Email' className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400' required onChange={handleChange} value={formData.email} />
          <input type='password' name='password' placeholder='Password' className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400' required onChange={handleChange} value={formData.password} />
          <label className="w-full flex items-center gap-2 p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition">
            <input type="file" name="image" className="hidden" required onChange={handleChange} />
            <span className="text-gray-600">Upload Image</span>
          </label>
          <button type='submit' className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition' > Register </button>
        </form>
        <p className='text-gray-600 text-sm mt-4'>Already have an account?
          <span className='text-blue-500 cursor-pointer hover:underline' onClick={() => navigate('/login')}> Login </span>
        </p>
      </div>
    </div>
  );
};

export default register;