import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // ✅ Correct import

import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ApiSec from './pages/ApiSec';
import WebApp from './pages/WebApp';
import Tailwind from './pages/Tailwind';
import AdminPage from './pages/AdminPage';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Component added here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/apisec" element={<ApiSec />} />
        <Route path="/webap" element={<WebApp />} />
        <Route path="/tailwind" element={<Tailwind />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
