import React from 'react';
import image1 from '../assets/essence.jpg';
import image2 from '../assets/forkedup.jpg';
import image3 from '../assets/muscle.jpg';
import image4 from '../assets/turs120.jpg';

function SelectProjects() {
  return (
    <div className="grid grid-cols-2 gap-2 mt-10 px-4 max-w-[1200px] mx-auto">
      <div>
        <a href="https://essence-rosy.vercel.app" target="_blank" rel="noopener noreferrer">
          <img
            className="h-auto max-w-full rounded-lg border border-b-black hover:opacity-90 transition-all duration-200"
            src={image1}
            alt="Project 1"
          />
        </a>
      </div>
      <div>
        <a href="https://forkedup-phi.vercel.app" target="_blank" rel="noopener noreferrer">
          <img
            className="h-auto max-w-full rounded-lg border border-b-black hover:opacity-90 transition-all duration-200"
            src={image2}
            alt="Project 2"
          />
        </a>
      </div>
      <div>
        <a href="https://muscle-district.vercel.app" target="_blank" rel="noopener noreferrer">
          <img
            className="h-auto max-w-full rounded-lg border border-b-black hover:opacity-90 transition-all duration-200"
            src={image3}
            alt="Project 3"
          />
        </a>
      </div>
      <div>
        <a href="https://turs120.vercel.app" target="_blank" rel="noopener noreferrer">
          <img
            className="h-auto max-w-full rounded-lg border border-b-black hover:opacity-90 transition-all duration-200"
            src={image4}
            alt="Project 4"
          />
        </a>
      </div>
    </div>
  );
}

export default SelectProjects;
