// app/projects/page.jsx
import CaseStudy from "@/components/CaseStudy";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects | DigitalElevation",
  description:
    "Real-world web and SaaS projects built by Md. Nazmur Rashid using React, Next.js, and MERN stack.",
};

export default function Projects() {
  return (
    <div>
    <section className="max-w-6xl mx-auto py-24 px-6">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="Canva-Like Online Design Editor"
          description="A browser-based design editor allowing users to create, edit, and export designs without installing software."
          features={[
            "Drag & drop canvas",
            "Text and image tools",
            "Layer management",
            "Export designs",
          ]}
          tech="React, Fabric.js, Node.js, MongoDB"
        />

        <ProjectCard
          title="Admin Dashboard System"
          description="A secure role-based dashboard for managing users, analytics, and business data."
          features={[
            "Role-based access",
            "Analytics panels",
            "User management",
            "REST APIs",
          ]}
          tech="React, Next.js, Express"
        />
      </div>
    </section>
    <section className="max-w-6xl mx-auto py-24 px-6 space-y-16">
      <CaseStudy
        title="Canva-Like Online Design Editor"
        image="/projects/design-editor.png"
        problem="Users needed a browser-based design tool without installing software."
        solution="Built a drag-and-drop editor with text, images, layers, and export."
      />

      <CaseStudy
        title="Admin Dashboard System"
        image="/projects/dashboard.png"
        problem="Businesses needed centralized analytics and user management."
        solution="Developed a secure role-based dashboard with reports and APIs."
      />
    </section>
    </div>
  );
}
