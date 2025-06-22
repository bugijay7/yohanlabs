import React from 'react';
import essenceImage from '../../assets/essence.jpg';

function CaseStudies() {
  const projects = [
    {
      title: "Earth & Essence – Salon Booking App",
      client: "Client Project – Beauty & Wellness",
      challenge: "Create an intuitive platform for clients to book appointments and for stylists to manage their schedules.",
      solution:
        "Developed a responsive web app where users can browse services, choose stylists, and book appointments. Stylists have their own dashboard to view and manage upcoming bookings. Features include authentication, service filtering, and calendar integration.",
      tools: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "PostgreSQL",
        "JWT Auth",
        "neon/serverless",
        "bcryptjs"
      ],
      image: essenceImage,
      impact:
        "Streamlined client bookings and improved salon efficiency by digitizing appointment management.",
      link: "https://essence-rosy.vercel.app"
    }
  ];

  return (
    <section className="bg-[#0a0f1c] bg-gradient-radial from-[#0a0f1c] via-[#141e30] to-[#0a0f1c] py-16 text-white">
      <h2 className="text-4xl font-bold text-center text-[#ff7a01] mb-8">
        Case Studies
      </h2>

      <div className="max-w-6xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#161b22] rounded-xl p-6 shadow-lg flex flex-col lg:flex-row gap-6"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full lg:w-1/2 object-cover"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 italic mb-4">{project.client}</p>
                <p className="mb-4">
                  <strong className="text-[#ff7a01]">Challenge:</strong> {project.challenge}
                </p>
                <p className="mb-4">
                  <strong className="text-[#ff7a01]">Solution:</strong> {project.solution}
                </p>
                <p className="mb-4">
                  <strong className="text-[#ff7a01]">Impact:</strong> {project.impact}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-[#ff7a01]/10 text-[#ff7a01] text-sm px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-[#ff7a01] text-black font-semibold px-6 py-2 rounded hover:bg-orange-500 transition"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CaseStudies;
