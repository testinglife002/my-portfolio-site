// components/ProjectCard.jsx (UPGRADED)
"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, features, tech }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-card border border-border rounded-xl p-6 transition"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-3">{description}</p>

      <ul className="mt-4 list-disc list-inside text-gray-300 text-sm">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <p className="text-sm text-gray-500 mt-4">{tech}</p>
    </motion.div>
  );
}