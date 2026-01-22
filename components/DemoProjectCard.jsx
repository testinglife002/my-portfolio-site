// 📄 components/DemoProjectCard.jsx
import Image from "next/image";

export default function DemoProjectCard({ title, description, image, link }) {
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
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-primary font-medium hover:underline"
        >
          View Live Demo →
        </a>
      </div>
    </div>
  );
}
