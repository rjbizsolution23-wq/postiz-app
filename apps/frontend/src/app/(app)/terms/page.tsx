import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | InstaPost',
  description: 'Terms of Service and User Agreements for InstaPost, a subsidiary of RJ Business Solutions LLC.',
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-3 text-lg text-slate-400 font-medium">
            Please read these Terms carefully before using the InstaPost platform.
          </p>
        </div>

        {/* Content Block */}
        <div className="space-y-8 text-slate-300 leading-relaxed text-base">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using InstaPost (&ldquo;the Service&rdquo;), you agree to comply with and be bound by these Terms of Service. If you do not agree, you must immediately cease all utilization of the Service. The Service is owned and operated in full by <strong>RJ Business Solutions LLC</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              2. User Obligations & Conduct
            </h2>
            <p className="mb-3">
              When utilizing InstaPost to publish content, you warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All content published by you is compliant with local, state, and federal laws.</li>
              <li>You will not use the platform to orchestrate spam, harassment, or disseminate malicious code/malware.</li>
              <li>You will respect the API limits and rate guidelines of both InstaPost and connected social media networks.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              3. Credit Repair and Financial Compliance
            </h2>
            <p className="mb-3">
              If utilizing InstaPost for credit repair services, consulting, or marketing under CROA/FCRA niches, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Adhere to all written contract disclosure guidelines before any service is rendered.</li>
              <li>Ensure absolutely zero advance fees are collected or marketed in violation of the Credit Repair Organizations Act (CROA).</li>
              <li>Refrain from making any false or misleading statements regarding consumers&rsquo; credit score changes or guarantees.</li>
              <li>Absolutely refrain from creating or advertising synthetic identities or Credit Privacy Numbers (CPNs), which are strictly illegal.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              4. Payment & Billing
            </h2>
            <p>
              Subscribed plans are managed via Stripe. Fees are billed on a recurring monthly or yearly cycle and are non-refundable except as required by law. If you wish to cancel, you can do so easily through your Billing Settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              5. Limitation of Liability
            </h2>
            <p>
              In no event shall RJ Business Solutions LLC, nor its directors, employees, or partners, be liable for any indirect, incidental, or consequential damages resulting from your use of, or inability to use, the platform.
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
