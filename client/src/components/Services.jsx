import React from 'react';
import { FaCode, FaPaintBrush, FaDatabase, FaLaptopCode, FaUserTie, FaRegFileAlt } from 'react-icons/fa';

function Services() {
  const services = [
    { icon: <FaCode />, title: 'Git Version Control', description: 'Efficient source code management and collaboration using Git and GitHub.' },
    { icon: <FaPaintBrush />, title: 'Web Design', description: 'Crafting visually engaging and user-friendly interface designs tailored to your brand.' },
    { icon: <FaDatabase />, title: 'Backend Development', description: 'Building secure, scalable, and high-performance server-side solutions.' },
    { icon: <FaLaptopCode />, title: 'Web Development', description: 'Full-stack website development from concept to deployment.' },
    { icon: <FaUserTie />, title: 'Freelancing Services', description: 'Reliable freelance support for diverse web development projects and startups.' },
    { icon: <FaRegFileAlt />, title: 'Content Strategy & Management', description: 'Organizing and optimizing content for clarity, SEO, and user engagement.' },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white border border-black p-6 shadow hover:shadow-lg transition duration-300">
            <div className="text-3xl mb-4 text-black">{service.icon}</div>
            <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
            <p className="text-black">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
