import React from 'react';
import { FaPaintBrush, FaCode, FaSearch } from 'react-icons/fa';

function Highlights() {
  return (
    <div className="flex flex-wrap justify-center mt-10  max-w-[1200px] mx-auto">
      {/* Card 1 - Web Design */}
      <div className="p-4 max-w-sm">
        <div className="flex h-full bg-white p-8 flex-col shadow-md border border-black">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
              <FaPaintBrush />
            </div>
            <h2 className="text-black text-lg font-medium">Web Design</h2>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <p className="leading-relaxed text-base text-black">
              Sleek, responsive, and user-focused interfaces tailored to elevate your brand online.
            </p>
            <a href="#" className="mt-3 text-amber-800 hover:underline inline-flex items-center">
              Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Card 2 - Development */}
      <div className="p-4 max-w-sm">
        <div className="flex h-full bg-white p-8 flex-col shadow-md border border-black">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
              <FaCode />
            </div>
            <h2 className="text-black text-lg font-medium">Development</h2>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <p className="leading-relaxed text-base text-black">
              Scalable and modern web applications built with clean code and best practices.
            </p>
            <a href="#" className="mt-3 text-amber-800 hover:underline inline-flex items-center">
              Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Card 3 - Content & SEO */}
      <div className="p-4 max-w-sm">
        <div className="flex h-full bg-white p-8 flex-col shadow-md border border-black">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
              <FaSearch />
            </div>
            <h2 className="text-black text-lg font-medium">Content & SEO</h2>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <p className="leading-relaxed text-base text-black">
              Get found online with SEO-rich content strategies and engaging copy that converts.
            </p>
            <a href="#" className="mt-3 text-amber-800 hover:underline inline-flex items-center">
              Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
