import React from 'react';
import profileImage from '../../assets/yohan-about.jpg'; // Replace with your actual image path

function AboutIntro() {
  return (
    <div className="bg-[#0a0f1c] bg-gradient-radial from-[#0a0f1c] via-[#141e30] to-[#0a0f1c] py-16 px-16">
    <section className="flex flex-col-reverse md:flex-row items-center gap-5 max-w-[1200px] mx-auto ">
      {/* Text Section */}
      <div className="flex-1">
        <h2 className="text-5xl sm:text-4xl font-bold mb-4 text-[#ff7a01]">ABOUT YOHAN LABS</h2>
        <p className="text-gray-400 mb-4 leading-relaxed">
          Yohan Labs is a forward-thinking web development agency dedicated to building fast, beautiful,
          and scalable websites and applications. Whether you're a startup or a growing business, we provide
          custom solutions that elevate your brand and drive results.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Our mission is simple: combine clean code, modern design, and great user experiences. We value
          transparency, quality, and creativity — and we believe in empowering our clients through technology.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <img
          src={profileImage}
          alt="Founder of Yohan Labs"
          className="w-full max-w-sm mx-auto rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
    </div>
  );
}

export default AboutIntro;
