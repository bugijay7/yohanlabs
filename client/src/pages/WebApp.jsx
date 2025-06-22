import React from 'react';

function WebApp() {
  return (
    <section className="px-6 py-16 mx-auto text-gray-100 bg-[#0d1117] leading-relaxed">
        <div className='max-w-[1200px] mx-auto'>
      <article>
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#ff7a01] mb-4">
            How to Structure a Modern Web App
          </h1>
          <p className="text-gray-400 text-sm italic">by Yohan Labs • June 2025</p>
        </header>

        <p className="mb-6">
          Structuring a modern web application can feel overwhelming at first—but it doesn’t have to be. Whether you’re building a single-page portfolio or a full-scale SaaS platform, a good structure is your foundation. At Yohan Labs, we’ve worked on everything from booking systems to ecommerce dashboards, and we’ve picked up a few things along the way. Here's our take on building clean, scalable apps that are easy to maintain.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff7a01] mt-10 mb-4">1. Start with a Clean Folder Structure</h2>
        <p className="mb-4">
          First things first—organization. We recommend a folder structure that separates concerns and keeps things modular. Here’s a structure we love using in React projects:
        </p>

        <pre className="bg-[#161b22] p-4 rounded text-sm text-gray-300 overflow-x-auto mb-6">
{`
src/
│
├── components/       // Reusable UI elements (buttons, cards)
├── pages/            // Page-level components (Home.jsx, About.jsx)
├── assets/           // Images, videos, fonts
├── hooks/            // Custom React hooks
├── services/         // API calls and integrations
├── utils/            // Helper functions
├── context/          // Global state and providers
└── App.jsx           // Main app shell
`}
        </pre>

        <h2 className="text-2xl font-semibold text-[#ff7a01] mt-10 mb-4">2. Use React Router for Navigation</h2>
        <p className="mb-6">
          If you’re building a multi-page app, <code className="text-white">react-router-dom</code> is essential. Define your routes clearly, and keep route components inside the <code>pages/</code> folder. Lazy-load routes for better performance.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff7a01] mt-10 mb-4">3. Keep State Manageable</h2>
        <p className="mb-6">
          For small apps, React’s built-in state and Context API are enough. As your app grows, consider using tools like Zustand or Redux Toolkit. Keep local UI state inside components and global state (like user auth) in a provider.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff7a01] mt-10 mb-4">4. Styling: Pick a Scalable Approach</h2>
        <p className="mb-6">
          We use <strong>Tailwind CSS</strong> at Yohan Labs for most projects. It’s utility-first, highly customizable, and helps maintain consistency. If you prefer component-based styling, look into CSS Modules or styled-components.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff7a01] mt-10 mb-4">5. Create a Dedicated API Layer</h2>
        <p className="mb-6">
          Keep your API logic separate. Inside <code>services/</code>, create modules like <code>authService.js</code> or <code>bookingService.js</code> to handle requests. This way, if your backend changes, you only update things in one place.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff7a01] mt-10 mb-4">6. Use Environment Variables</h2>
        <p className="mb-6">
          Always keep secrets (like API keys) out of your code. Use <code>.env</code> files and the <code>import.meta.env</code> object (in Vite) or <code>process.env</code> (in Create React App) to manage environment-specific variables.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff7a01] mt-10 mb-4">7. Test Early and Often</h2>
        <p className="mb-6">
          For unit testing, tools like <code>Jest</code> and <code>React Testing Library</code> are reliable. You don’t need 100% coverage—but testing key components and logic can save hours of debugging later.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff7a01] mt-10 mb-4">8. Deploy With Confidence</h2>
        <p className="mb-6">
          We recommend deploying frontend apps with <strong>Vercel</strong> or <strong>Netlify</strong>—they’re fast, reliable, and free to get started. For full-stack apps, consider Render, Railway, or even Docker on a VPS if you want full control.
        </p>

        <hr className="my-12 border-[#222]" />

        <p className="text-center text-gray-400 italic">
          "Good structure is invisible, but you feel it in every interaction."
        </p>

        <footer className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Yohan Labs. All rights reserved.
        </footer>
      </article>
      </div>
    </section>
  );
}

export default WebApp;
