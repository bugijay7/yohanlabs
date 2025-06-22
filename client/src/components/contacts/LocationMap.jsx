import React from 'react';

function LocationMap() {
  return (
    <section className="bg-[#0d1117] py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#ff7a01] text-center mb-8">
          Our Location
        </h2>

        <p className="text-center text-gray-400 mb-6 max-w-2xl mx-auto">
          You can find us at the heart of Nairobi. Feel free to visit, book an appointment,
          or just come say hello. Here's where we're located:
        </p>

        <div className="w-full h-[400px] overflow-hidden rounded-xl shadow-lg border border-gray-700">
          <iframe
            title="Yohan Labs Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.109737160188!2d36.80649797821171!3d-1.2920652520170054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10ea55ec41e5%3A0x35231ae2d85fbc21!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1681117887427!5m2!1sen!2ske"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default LocationMap;
