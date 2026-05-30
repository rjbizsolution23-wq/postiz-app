import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'DMCA Takedown Notice & Copyright Agent | InstaPost',
  description: 'DMCA copyright agent designation and notice process for InstaPost, a subsidiary of RJ Business Solutions LLC.',
};

export default function DmcaPage() {
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
            DMCA Copyright Policy
          </h1>
          <p className="mt-3 text-lg text-slate-400 font-medium">
            Procedure for submitting claims of copyright infringement.
          </p>
        </div>

        {/* Content Block */}
        <div className="space-y-8 text-slate-300 leading-relaxed text-base">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              1. Notice of Infringement
            </h2>
            <p>
              InstaPost respects intellectual property rights and expects its users to do the same. Pursuant to the Digital Millennium Copyright Act (&ldquo;DMCA&rdquo;), Title 17, United States Code, Section 512, copyright holders can submit a written notice to our designated copyright agent to request removal of allegedly infringing content.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              2. Required Information
            </h2>
            <p className="mb-3">
              To submit a valid DMCA takedown notice, please provide the following written details:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A physical or electronic signature of the copyright owner or authorized representative.</li>
              <li>Identification of the copyrighted work claimed to have been infringed.</li>
              <li>Identification of the material that is claimed to be infringing and its location (e.g., specific URLs).</li>
              <li>Your contact details, including name, physical address, email, and phone number.</li>
              <li>A statement that you have a good-faith belief that use of the material is not authorized by the owner or the law.</li>
              <li>A statement that the information in the notification is accurate and, under penalty of perjury, that you are authorized to act.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block" />
              3. Designated DMCA Agent
            </h2>
            <p className="mb-3">
              Please direct all DMCA correspondence to our official, registered agent at <strong>RJ Business Solutions LLC</strong>:
            </p>
            <div className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-xl space-y-2 font-medium">
              <p className="text-slate-200"><strong>Attn:</strong> Copyright / DMCA Agent</p>
              <p className="text-slate-200"><strong>Company:</strong> RJ Business Solutions LLC</p>
              <p className="text-slate-200"><strong>Address:</strong> 1342 NM 333, Tijeras, New Mexico 87059</p>
              <p className="text-slate-200"><strong>Email:</strong> <a href="mailto:support@rjbusinesssolutions.org" className="text-cyan-400 hover:underline">support@rjbusinesssolutions.org</a></p>
            </div>
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
