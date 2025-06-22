// src/pages/About.jsx
import React from 'react';
import AboutIntro from '../components/about/AboutIntro';
import TechStack from '../components/about/TechStack';
import CaseStudies from '../components/about/CaseStudies';
import BlogSection from '../components/about/BlogSection';
import Faq from '../components/about/Faq';

function About() {
  return (
    <div>
      <AboutIntro />
      <TechStack />
      <CaseStudies />
      <BlogSection />
      <Faq />
    </div>
  );
}

export default About;
