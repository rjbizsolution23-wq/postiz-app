import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Accessibility Statement | InstaPost',
  description: 'WCAG 2.1 AA compliance and web accessibility guidelines for InstaPost, a subsidiary of RJ Business Solutions LLC.',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8">
      {/* Decorative top gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-2xl shadow-2xl p-8 sm:p-12 mb-12">
        
        {/* Header Navigation */}
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-slate-800">
          <Link href="/auth/login" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold group">
            <span className="transform group-hover:-translate-x-1 transition-transform inline-block">←</span> Back to Login
          </Link>
          <span className="text-xs text-slate-400 uppercase tracking-widest bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700/50">
            Last Updated: May 30, 2026
          </span>
        </div>

        {/* Title Block */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Accessibility Statement
          </h1>
          <p className="mt-3 text-lg text-slate-400 font-medium">
            Our commitment to digital inclusion and accessible web systems.
          </p>
        </div>

        {/* Content Block */}
        <div className="space-y-8 text-slate-300 leading-relaxed text-base">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              1. General Intent
            </h2>
            <p>
              InstaPost and <strong>RJ Business Solutions LLC</strong> are dedicated to providing a premium application that is accessible to the widest possible audience, regardless of ability or technology. We actively audit our templates and routes to align with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA parameters.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              2. Implemented Measures
            </h2>
            <p className="mb-3">
              To support accessibility across our frontend components, we have designed the user interface around the following requirements:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Sufficient Contrast:</strong> Maintaining contrast ratios of at least 4.5:1 for body copy and 3:1 for large graphical components.</li>
              <li><strong>Keyboard Navigation:</strong> Standardized focus rings, skip-to-content links, and full keyboard-accessibility on modal dialog states.</li>
              <li><strong>Semantic markup:</strong> Logical header hierarchies (h1-h6) and appropriate aria-labels on icon buttons.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              3. Continuous Auditing
            </h2>
            <p>
              We integrate automated `axe-core` accessibility scanners into our staging pipeline. We recognize that web accessibility is a continuous process, and we actively test using screen readers and keyboard-only layouts.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              4. Feedback and Support
            </h2>
            <p>
              If you experience any accessibility issues or would like to request alternative format delivery, please let us know by emailing <a href="mailto:support@rjbusinesssolutions.org" className="text-cyan-400 hover:underline">support@rjbusinesssolutions.org</a>. We endeavor to resolve issues within 3 business days.
            </p>
          </section>
        </div>
      </div>

      {/* Corporate Footer */}
      <footer className="text-center text-xs text-slate-500 space-y-2 mt-auto">
        <p>&copy; {new Date().getFullYear()} RJ Business Solutions LLC. All rights reserved.</p>
        <p className="text-slate-400 font-medium">
          RJ Business Solutions &middot; 1342 NM 333, Tijeras, NM 87059 &middot; <a href="mailto:support@rjbusinesssolutions.org" className="hover:text-cyan-400 transition-colors">support@rjbusinesssolutions.org</a>
        </p>
      </footer>
    </div>
  );
}
