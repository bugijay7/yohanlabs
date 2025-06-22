import React from 'react';

function Tailwind() {
  return (
    <section className="px-6 py-16  mx-auto text-gray-100 bg-[#0d1117] leading-relaxed">
         <div className='max-w-[1200px] mx-auto'>
      <article>
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#38bdf8] mb-4">
            Why Tailwind CSS is a Game Changer
          </h1>
          <p className="text-gray-400 text-sm italic">by Yohan Labs • June 2025</p>
        </header>

        <p className="mb-6">
          CSS frameworks have been around for a long time—from Bootstrap to Foundation—but none have revolutionized frontend styling quite like <strong>Tailwind CSS</strong>. Whether you're building a portfolio, startup MVP, or full-scale web app, Tailwind brings both speed and flexibility to your workflow. Let’s break down what makes it a game changer.
        </p>

        <h2 className="text-2xl font-semibold text-[#38bdf8] mt-10 mb-4">1. Utility-First, Not Component-First</h2>
        <p className="mb-6">
          Tailwind’s utility-first approach means you're working with low-level classes like <code>p-4</code>, <code>text-center</code>, and <code>bg-gray-800</code> to build your UI—rather than writing custom CSS for every element. This encourages consistency and reduces the need for naming endless CSS classes or creating new files for minor tweaks.
        </p>

        <h2 className="text-2xl font-semibold text-[#38bdf8] mt-10 mb-4">2. Design Directly in Your Markup</h2>
        <p className="mb-6">
          With Tailwind, you’re no longer flipping between HTML and CSS files. You design directly in your JSX (or HTML), adjusting padding, margin, font size, and layout on the fly. This drastically improves development speed and makes collaboration with designers smoother.
        </p>

        <h2 className="text-2xl font-semibold text-[#38bdf8] mt-10 mb-4">3. Customizable and Scalable</h2>
        <p className="mb-6">
          Need a custom color palette or spacing system? Tailwind's configuration file (<code>tailwind.config.js</code>) makes it easy to define your design system once and use it everywhere. This allows teams to scale and stay consistent without locking into rigid defaults.
        </p>

        <h2 className="text-2xl font-semibold text-[#38bdf8] mt-10 mb-4">4. Mobile-First and Responsive by Default</h2>
        <p className="mb-6">
          Tailwind encourages a mobile-first mindset, with simple responsive prefixes like <code>sm:</code>, <code>md:</code>, and <code>lg:</code>. You can build fully responsive layouts with precision and speed—without writing media queries manually.
        </p>

        <h2 className="text-2xl font-semibold text-[#38bdf8] mt-10 mb-4">5. Built for Speed and Maintainability</h2>
        <p className="mb-6">
          Combined with tools like PostCSS and PurgeCSS, Tailwind removes all unused styles in production, making your CSS incredibly lean. Plus, fewer custom classes means less refactoring and more readable code in the long run.
        </p>

        <blockquote className="border-l-4 border-[#38bdf8] pl-4 italic text-gray-400 my-10">
          “Tailwind CSS didn’t just speed up development—it improved how we think about design systems.”
        </blockquote>

        <h2 className="text-2xl font-semibold text-[#38bdf8] mt-10 mb-4">6. Ecosystem and Community</h2>
        <p className="mb-6">
          From Tailwind UI to Headless UI and now even Tailwind Plugins, the ecosystem is thriving. There's a massive community creating templates, components, and plugins—so you're never building alone.
        </p>

        <hr className="my-12 border-[#222]" />

        <p className="text-center text-gray-400 italic">
          If you're still writing custom CSS for everything... it might be time to give Tailwind a try.
        </p>

        <footer className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Yohan Labs. All rights reserved.
        </footer>
      </article>
      </div>
    </section>
  );
}

export default Tailwind;
