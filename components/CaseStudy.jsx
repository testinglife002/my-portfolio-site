// components/CaseStudy.jsx
import Image from "next/image";

export default function CaseStudy({ title, problem, solution, image }) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={1200}
        height={700}
        className="w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-semibold">{title}</h3>

        <p className="mt-3 text-gray-400">
          <strong>Problem:</strong> {problem}
        </p>

        <p className="mt-2 text-gray-400">
          <strong>Solution:</strong> {solution}
        </p>
      </div>
    </div>
  );
}

