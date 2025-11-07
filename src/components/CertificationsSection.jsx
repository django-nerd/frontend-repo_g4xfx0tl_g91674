import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Certified Developer - Associate',
    validation: 'acb0b892c06141df9dd45f259e59a03b',
    url: 'https://aws.amazon.com/verification',
    issue: 'July 19, 2024',
    expiry: 'July 19, 2028',
  },
  {
    name: 'AWS Certified Cloud Practitioner - Foundational',
    validation: '8409e6758ff24666ba6215ed59812cae',
    url: 'https://aws.amazon.com/verification',
    issue: 'April 27, 2024',
    expiry: 'April 27, 2028',
  },
];

const CertificationsSection = () => {
  return (
    <section id="certs" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Certifications
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {certifications.map((c) => (
            <motion.a
              key={c.validation}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative block overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-slate-900/60 to-slate-900/20 p-6 backdrop-blur-sm hover:border-cyan-400/40"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-2xl" />
              <div className="relative flex items-start gap-4">
                <div className="inline-flex rounded-lg border border-cyan-400/30 bg-cyan-400/10 p-3 text-cyan-300">
                  <BadgeCheck size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">{c.name}</h3>
                  <p className="text-sm text-slate-300">Validation No: {c.validation}</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Issue: {c.issue} • Expiry: {c.expiry}
                  </p>
                  <span className="mt-3 inline-block text-sm text-cyan-300 underline">Validate →</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
