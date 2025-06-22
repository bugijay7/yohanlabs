import React from 'react';
import contactBg from '../../assets/contacts-intro.jpg'; // Update the path based on your file structure

function ContactsIntro() {
  return (
    <div
      className="hero min-h-[50vh]"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold">CONTACTS</h1>
        </div>
      </div>
    </div>
  );
}

export default ContactsIntro;
