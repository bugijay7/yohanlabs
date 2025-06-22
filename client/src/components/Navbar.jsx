import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

function Navbar() {
  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-[#0d1117] shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle font-extrabold text-white">
            <FiMenu size={20} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[60] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Talk To Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-2xl font-bold text-white">
          Yohan Labs
        </Link>
      </div>

      <div className="navbar-end gap-2">
        <Link to="/contact" className="text-white p-2 font-bold hover:text-[#ff7a01] transition">
          Talk to Us
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
