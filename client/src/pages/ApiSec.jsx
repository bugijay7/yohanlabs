import React from 'react';

function ApiSec() {
  return (
    <section className="px-6 py-16  mx-auto text-gray-100 bg-[#0d1117] leading-relaxed">
         <div className='max-w-[1200px] mx-auto'>
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#22c55e] mb-4">
          API Security with JWT in Node.js
        </h1>
        <p className="text-gray-400 text-sm italic">by Yohan Labs • June 2025</p>
      </header>

      <article>
        <p className="mb-6">
          In today’s world of modern web apps, securing your APIs is a non-negotiable part of development. Whether you're building a booking app, an e-commerce backend, or a content platform—ensuring that your endpoints are safe is critical.
          One of the most popular methods of securing APIs is using <strong>JWT (JSON Web Tokens)</strong>. Let’s walk through what JWT is and how to implement it in a Node.js app.
        </p>

        <h2 className="text-2xl font-semibold text-[#22c55e] mt-10 mb-4">🔐 What is JWT?</h2>
        <p className="mb-6">
          JSON Web Token (JWT) is a compact, URL-safe way of representing claims between two parties. It is commonly used for authentication and authorization. A JWT contains three parts:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li><strong>Header</strong> – contains the algorithm and token type</li>
          <li><strong>Payload</strong> – includes user data or claims</li>
          <li><strong>Signature</strong> – verifies that the token hasn’t been altered</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#22c55e] mt-10 mb-4">🛠️ Setting Up JWT in Node.js</h2>
        <p className="mb-6">
          You’ll need a few packages to get started:
        </p>

        <pre className="bg-[#161b22] text-sm p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-green-400">
{`npm install jsonwebtoken bcryptjs dotenv`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold text-[#22c55e] mb-2">1. Generate a Token</h3>
        <pre className="bg-[#161b22] text-sm p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-blue-300">
{`const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold text-[#22c55e] mb-2">2. Middleware to Protect Routes</h3>
        <pre className="bg-[#161b22] text-sm p-4 rounded-md overflow-x-auto mb-6">
          <code className="text-blue-300">
{`const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  let token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token failed' });
  }
};`}
          </code>
        </pre>

        <p className="mb-6">
          Now you can add <code>protect</code> as middleware to any route you want to secure.
        </p>

        <h2 className="text-2xl font-semibold text-[#22c55e] mt-10 mb-4">✅ Benefits of Using JWT</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Stateless – no session storage needed</li>
          <li>Compact – easily sent in HTTP headers</li>
          <li>Secure – tamper-proof with digital signatures</li>
        </ul>

        <blockquote className="border-l-4 border-[#22c55e] pl-4 italic text-gray-400 my-10">
          “With great APIs comes great responsibility. Secure them like your app depends on it—because it does.”
        </blockquote>

        <h2 className="text-2xl font-semibold text-[#22c55e] mt-10 mb-4">🔚 Final Thoughts</h2>
        <p className="mb-6">
          JWTs offer a clean, scalable way to manage secure access in your Node.js APIs. From login to role-based access control, they form the backbone of modern API security. As with all authentication systems, always store secrets in environment variables and implement HTTPS for your production servers.
        </p>

        <footer className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Yohan Labs. All rights reserved.
        </footer>
      </article>
      </div>
    </section>
  );
}

export default ApiSec;
