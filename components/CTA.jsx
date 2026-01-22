// ✅ components/CTA.jsx (FULL CODE)
"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-dark to-card border-t border-border">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          Let’s Build Something Great
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto"
        >
          Have an idea, startup, or business requirement?
          I help clients turn concepts into scalable, production-ready web and SaaS applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <a
            href="/contact"
            className="bg-primary hover:bg-indigo-500 transition px-8 py-3 rounded font-medium text-white"
          >
            Start a Project
          </a>

          <a
            href="/demos"
            className="border border-primary px-8 py-3 rounded hover:bg-primary/10 transition"
          >
            View Live Demos
          </a>
        </motion.div>

      </div>
    </section>
  );
}
