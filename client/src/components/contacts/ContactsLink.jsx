import React, { useState } from 'react';
import axios from 'axios';
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaShareAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function ContactsLink() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await axios.post('https://yohanlabs.onrender.com/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  return (
    <section className="bg-[#0d1117] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="flex flex-col justify-between">
          <div className="mb-10">
            <h2 className="text-4xl font-bold uppercase text-[#ff7a01] mb-6">
              We are always ready to help you and answer your questions
            </h2>
            <p className="text-gray-300 text-lg">
              Our team is here to assist you. Whether you have inquiries, feedback,
              or need support — feel free to reach out anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#161b22] p-6 rounded-lg shadow">
              <FaPhoneAlt className="text-[#ff7a01] text-2xl mb-2" />
              <h3 className="text-xl font-semibold mb-1">Call Center</h3>
              <p className="text-gray-400">+254 702 443 418</p>
            </div>
            <div className="bg-[#161b22] p-6 rounded-lg shadow">
              <FaMapMarkerAlt className="text-[#ff7a01] text-2xl mb-2" />
              <h3 className="text-xl font-semibold mb-1">Our Location</h3>
              <p className="text-gray-400">Nairobi, Kenya</p>
            </div>
            <div className="bg-[#161b22] p-6 rounded-lg shadow">
              <FaEnvelope className="text-[#ff7a01] text-2xl mb-2" />
              <h3 className="text-xl font-semibold mb-1">Email</h3>
              <p className="text-gray-400">yohanlabske@gmail.com</p>
            </div>
            <div className="bg-[#161b22] p-6 rounded-lg shadow">
              <FaShareAlt className="text-[#ff7a01] text-2xl mb-2" />
              <h3 className="text-xl font-semibold mb-1">Social Network</h3>
              <p className="text-gray-400 mb-4">Follow us on social media</p>
              <div className="flex gap-4 text-[#ff7a01] text-xl">
                <a href="https://www.facebook.com/profile.php?id=61577628123447" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/yohanlabske/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white">
                  <FaInstagram />
                </a>
                <a href="https://www.tiktok.com/@yohanlabs" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-white">
                  <FaTiktok />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-white">
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="bg-[#161b22] p-8 rounded-lg shadow">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded bg-[#0d1117] border border-gray-700 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full p-3 rounded bg-[#0d1117] border border-gray-700 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Message Subject"
                className="w-full p-3 rounded bg-[#0d1117] border border-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 rounded bg-[#0d1117] border border-gray-700 text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#ff7a01] text-black px-6 py-3 rounded hover:bg-orange-600 transition font-semibold"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-green-500 mt-2 text-sm text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 mt-2 text-sm text-center">Something went wrong. Try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactsLink;
