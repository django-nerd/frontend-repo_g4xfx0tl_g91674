import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Experience
        </motion.h2>

        <div className="mt-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-slate-900/60 to-slate-900/20 p-6 backdrop-blur-sm"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-2xl" />
            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="inline-flex rounded-lg border border-cyan-400/30 bg-cyan-400/10 p-3 text-cyan-300">
                  <Building2 size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Meyi Cloud Solutions</h3>
                  <p className="text-sm text-slate-300">Backend Developer • Pondicherry, India</p>
                </div>
              </div>
              <div className="text-sm text-cyan-300">Sep 2022 – Present</div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Led a team of five backend developers delivering three concurrent projects on time.</li>
              <li>• Collaborated cross‑functionally to ship apps serving 1000+ monthly active users.</li>
              <li>• Acted as client liaison—translated requirements into actionable tasks.</li>
              <li>• Built scalable Python services and optimized APIs for 30% faster response times.</li>
              <li>• Integrated RESTful APIs with PostgreSQL; improved reliability and resilience.</li>
              <li>• Implemented scraping pipelines with Playwright for dynamic websites.</li>
              <li>• Deployed using AWS serverless (CloudFormation, CloudFront, CodePipeline, S3, Lambda).</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
