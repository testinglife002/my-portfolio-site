// 📄 app/demos/page.jsx
import DemoProjectCard from "@/components/DemoProjectCard";

export const metadata = {
  title: "Live Demo Projects | DigitalElevation",
  description:
    "Live demo web applications built by Md. Nazmur Rashid under DigitalElevation.",
};

export default function DemoProjects() {
  return (
    <section className="max-w-6xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-bold mb-6">Live Demo Projects</h1>

      <p className="text-gray-400 mb-12 max-w-2xl">
        Below are real, live web applications built and deployed by
        DigitalElevation. You can explore the landing pages and functionality
        directly.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <DemoProjectCard
          title="My Daily Ibadah App"
          description="A daily Islamic worship tracking application with a clean, user-friendly interface."
          image="/demos/daily-ibadah.png"
          link="https://my-daily-ibadah-app-build.web.app/"
        />

        <DemoProjectCard
          title="Multipurpose Web App"
          description="A modern multipurpose web application showcasing reusable UI components and layouts."
          image="/demos/multipurpose-app.png"
          link="https://my-multipurpose-app.vercel.app/"
        />
      </div>
    </section>
  );
}

