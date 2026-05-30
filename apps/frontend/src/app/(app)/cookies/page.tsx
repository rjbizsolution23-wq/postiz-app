import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Cookie Consent & Policy | InstaPost',
  description: 'Cookie Policy and browser preference information for InstaPost, a subsidiary of RJ Business Solutions LLC.',
};

export default function CookiesPage() {
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
            Cookie Policy
          </h1>
          <p className="mt-3 text-lg text-slate-400 font-medium">
            Understand how and why we utilize browser cookies on InstaPost.
          </p>
        </div>

        {/* Content Block */}
        <div className="space-y-8 text-slate-300 leading-relaxed text-base">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your browser or device when you visit a webpage. They are widely utilized to make web applications function correctly, or to deliver analytics and personalization features.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              2. How We Use Cookies
            </h2>
            <p className="mb-3">
              InstaPost uses cookies for the following critical purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Session Cookies:</strong> We store a secure `auth` cookie to identify who you are and maintain your secure login state across various page loads. These are mandatory for platform operations.</li>
              <li><strong>Preference Cookies:</strong> Used to remember your chosen language, timezone, and sidebar/layout customization settings.</li>
              <li><strong>Analytics Cookies:</strong> Optional, anonymized tools (like self-hosted Plausible or PostHog) to understand application traffic patterns and identify backend lag or scaling blockages.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              3. Managing Cookie Choices
            </h2>
            <p>
              Most browsers allow you to block or delete cookies entirely via browser settings. Please note that blocking or deleting essential cookies will prevent you from signing in and scheduled social media automation from operating correctly.
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
