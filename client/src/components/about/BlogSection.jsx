import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: "How to Structure a Modern Web App",
    date: "June 2025",
    summary: "Discover the best practices for organizing files and folders in React, Node.js, and Tailwind-based projects.",
    tags: ["React", "Architecture", "Best Practices"],
    link: "/webap"
  },
  {
    title: "Why Tailwind CSS is a Game Changer",
    date: "May 2025",
    summary: "Explore the benefits of using utility-first CSS frameworks and how it speeds up modern UI development.",
    tags: ["CSS", "Tailwind", "Design Systems"],
    link: "/tailwind"
  },
  {
    title: "API Security with JWT in Node.js",
    date: "April 2025",
    summary: "Learn how to protect your backend using JSON Web Tokens and proper Express middleware.",
    tags: ["Node.js", "JWT", "Security"],
    link: "/apisec"
  }
];

function Blogsection() {
  return (
    <section className="bg-[#0a0f1c] bg-gradient-radial from-[#0a0f1c] via-[#141e30] to-[#0a0f1c] text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-[#ff7a01] mb-4">Insights & Blog</h2>
      <p className="text-gray-400 text-center max-w-xl mx-auto mb-10">
        Explore thoughts, tutorials, and ideas from our team at Yohan Labs. Stay up to date with the web's evolving ecosystem.
      </p>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-[#161b22] p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-white mb-2">{post.title}</h3>
            <p className="text-sm text-gray-400 mb-3">{post.date}</p>
            <p className="text-gray-300 mb-4">{post.summary}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, i) => (
                <span key={i} className="bg-[#ff7a01]/10 text-[#ff7a01] text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to={post.link}
              className="text-[#ff7a01] hover:underline text-sm font-semibold"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogsection;
