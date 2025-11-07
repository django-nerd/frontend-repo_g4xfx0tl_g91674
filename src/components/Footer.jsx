import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-10 text-center text-sm text-slate-400">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-2 text-slate-300">
          © {new Date().getFullYear()} Karthickumar P. All rights reserved.
        </div>
        <div className="flex items-center justify-center gap-4">
          <a href="mailto:karthickumar1810@gmail.com" className="hover:text-cyan-300">Email</a>
          <a href="tel:+919655499572" className="hover:text-cyan-300">Phone</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
