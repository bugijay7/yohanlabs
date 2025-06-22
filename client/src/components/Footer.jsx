import React from 'react';
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import YohanLogo from '../assets/yohan-logo3.png'; // Make sure this path is correct

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-black text-gray-400 p-10">
      {/* Logo + Description */}
      <aside>
        <img src={YohanLogo} alt="Yohan Labs Logo" className="w-50 h-50" />
      </aside>

      {/* Services Section */}
      <nav>
        <h6 className="footer-title text-white">Services</h6>
        <p className="link link-hover">Web Design</p>
        <p className="link link-hover">Frontend Development</p>
        <p className="link link-hover">Backend Integration</p>
        <p className="link link-hover">SEO Optimization</p>

      </nav>

      {/* Company Info */}
      <nav>
        <h6 className="footer-title text-white">Company</h6>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Talk To Us</Link>
            <Link to="/login">Admin</Link>
        
      </nav>

      {/* Contact / Social */}
      <nav>
        <h6 className="footer-title text-white">Get in Touch</h6>
        <a
          href="mailto:yohanlabske@gmail.com"
          className="link link-hover inline-flex items-center gap-2"
        >
          <FaEnvelope /> Email
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover inline-flex items-center gap-2"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover inline-flex items-center gap-2"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
