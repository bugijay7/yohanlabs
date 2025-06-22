import React, { useState } from 'react';

const faqs = [
  {
    question: "How does Yohan Labs approach a new project?",
    answer:
      "We start with a discovery session to understand your goals, users, and vision. From there, we create a tailored roadmap covering design, development, testing, and launch."
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Depending on the project scope, timelines vary. A simple site may take 2–3 weeks, while complex apps can range from 1–3 months."
  },
  {
    question: "What technologies do you use?",
    answer:
      "Our primary stack includes React, Node.js, Express, PostgreSQL, MongoDB, and Tailwind CSS. We also use GitHub, Figma, and modern deployment tools like Vercel, Render, Supabase etc."
  },
  {
    question: "Can I update my site after it's launched?",
    answer:
      "Yes! We build with scalability in mind. We can integrate a CMS or provide admin tools so you can manage your content easily."
  },
  {
    question: "What’s your pricing model?",
    answer:
      "We offer flexible pricing—fixed packages for standard websites, and project-based quotes for custom apps."
  }
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0a0f1c] bg-gradient-radial from-[#0a0f1c] via-[#141e30] to-[#0a0f1c] text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-[#ff7a01] mb-8">FAQs</h2>
      <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
        Here are answers to some of the most common questions we get from clients and collaborators.
      </p>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#2c2c2c] rounded-lg p-5 bg-[#161b22] hover:shadow transition"
          >
            <button
              className="w-full text-left text-lg font-semibold flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-[#ff7a01]">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <p className="mt-3 text-gray-300 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
