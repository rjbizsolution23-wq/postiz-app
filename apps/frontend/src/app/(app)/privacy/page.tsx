import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | InstaPost',
  description: 'Privacy Policy and data governance for InstaPost, a subsidiary of RJ Business Solutions LLC.',
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-3 text-lg text-slate-400 font-medium">
            Your trust is our priority. Learn how InstaPost handles and protects your data.
          </p>
        </div>

        {/* Content Block */}
        <div className="space-y-8 text-slate-300 leading-relaxed text-base">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              1. Overview
            </h2>
            <p>
              InstaPost (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), a premium social media scheduling suite operated by <strong>RJ Business Solutions LLC</strong>, is committed to safeguarding your privacy. This Privacy Policy describes how we collect, use, and share your personal information when you use our web application and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              2. Data We Collect
            </h2>
            <p className="mb-3">
              To provide our premium scheduling and automation tools, we collect the following types of data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Credentials:</strong> Email addresses, user names, and hashed passwords.</li>
              <li><strong>Social Media Tokens:</strong> OAuth keys and publishing permissions granted by you to connect external networks (e.g., YouTube, TikTok, LinkedIn, Reddit, X).</li>
              <li><strong>Usage Information:</strong> Information about your browser, device, IP address, and scheduling history to maintain system integrity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              3. How We Use Your Data
            </h2>
            <p className="mb-3">
              We process your data strictly to fulfill our contract with you and under legitimate business operations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To authorize and authenticate your account sessions.</li>
              <li>To execute automated scheduling and post delivery commands to social media networks at your designated slots.</li>
              <li>To manage Stripe subscriptions, invoices, and payment histories securely.</li>
              <li>To provide customer support and troubleshoot technical anomalies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              4. Data Retention and Deletion
            </h2>
            <p>
              We retain account information for as long as your account is active. You may request the absolute deletion of your account and all associated third-party authorization tokens at any time by navigating to your Settings page or contacting us at <a href="mailto:support@rjbusinesssolutions.org" className="text-cyan-400 hover:underline">support@rjbusinesssolutions.org</a>. Upon receiving your deletion request, all data is permanently scrubbed within 14 business days.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              5. Security Practices
            </h2>
            <p>
              Your data is encrypted in transit and at rest using industry-standard protocols. We restrict administrative access to data databases and perform weekly vulnerability assessments to guarantee absolute data security.
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
