import React, { useState } from 'react';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import contactImage from '../assets/contact.jpg';

function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    console.log('Submitting with Axios:', formData);

    try {
      const response = await axios.post('https://yohanlabs.onrender.com/api/connect', formData);
      console.log('Axios response:', response.data);

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Axios error:', error.response?.data || error.message);
      setStatus('error');
    }
  };

  return (
    <div className="my-10 flex flex-row flex-wrap justify-center items-start gap-6 max-w-[1200px] mx-auto px-4 min-h-[550px]">
      {/* Form Section */}
      <div className="w-full sm:w-[60%] bg-[#121212] text-white border border-gray-600 p-6 sm:p-8 md:p-10 rounded-lg flex flex-col items-start gap-5 font-sans h-full">
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-xl sm:text-2xl font-bold">
            Connect <span className="text-[#ff7a01]">with Me</span>
          </h2>
          <p className="text-sm text-gray-400">I’d love to hear from you</p>
        </div>

        {/* Form */}
        <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            className="w-full px-3 py-2 rounded border border-[#2c2c2c] bg-transparent text-sm text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff7a01]"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            className="w-full px-3 py-2 rounded border border-[#2c2c2c] bg-transparent text-sm text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff7a01]"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full px-3 py-2 rounded border border-[#2c2c2c] bg-transparent text-sm text-gray-300 placeholder-gray-400 resize-none max-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#ff7a01]"
            required
          ></textarea>

          <input
            type="submit"
            value={status === 'loading' ? 'Sending...' : 'Send Message'}
            className="w-full bg-white text-black font-semibold py-2 mt-2 rounded hover:bg-gray-100 active:bg-gray-200 cursor-pointer transition-all"
          />
        </form>

        {/* Status Message */}
        {status === 'success' && (
          <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 text-sm mt-2">Something went wrong. Please try again.</p>
        )}

        {/* Divider */}
        <div className="relative uppercase text-xs text-gray-400 mt-2">
          <span className="before:absolute before:w-[45%] before:h-[1px] before:bg-[#2c2c2c] before:left-[-55%] before:top-1/2 after:absolute after:w-[45%] after:h-[1px] after:bg-[#2c2c2c] after:right-[-55%] after:top-1/2">
            or
          </span>
        </div>

        {/* Gmail Button */}
        <a
          href="mailto:yohanlabske@gmail.com"
          className="w-full flex justify-center items-center gap-2 text-sm text-white border border-[#2c2c2c] px-3 py-2 rounded hover:bg-[#2c2c2c] active:bg-[#1a1a1a] transition-all"
        >
          <FcGoogle className="w-5 h-5" />
          Continue with Gmail
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full sm:w-[35%] max-w-md h-[478px]">
        <img
          src={contactImage}
          alt="Contact Illustration"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
}

export default Connect;
