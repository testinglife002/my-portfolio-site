
/*
export default function Home() {
  return (
    <main className="py-28 text-center">
      <h1 className="text-5xl font-bold">
        Full-Stack Web & App Developer
      </h1>

      <p className="mt-6 text-gray-400">
        I’m Md. Nazmur Rashid, founder of DigitalElevation.
        I build scalable, production-ready applications.
      </p>
    </main>
  );
}
*/


// app/page.jsx (UPDATED)
import MotionWrapper from "@/components/MotionWrapper";
import CTA from "@/components/CTA";


export default function Home() {
  return (
    <main>
      <section className="py-28 text-center max-w-5xl mx-auto px-6">
        <MotionWrapper>
          <h1 className="text-5xl font-bold leading-tight">
            Full-Stack Web & App Developer
          </h1>
        </MotionWrapper>

        <MotionWrapper delay={0.2}>
          <p className="mt-6 text-gray-400 text-lg">
            I’m Md. Nazmur Rashid, founder of{" "}
            <span className="text-primary font-semibold">
              DigitalElevation
            </span>.  
            I build scalable, production-ready web & SaaS applications.
          </p>
        </MotionWrapper>

        <MotionWrapper delay={0.4}>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/projects"
              className="bg-primary hover:bg-indigo-500 px-6 py-3 rounded font-medium"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="border border-primary px-6 py-3 rounded hover:bg-primary/10"
            >
              Hire Me
            </a>
          </div>
        </MotionWrapper>
      </section>

      <CTA />
    </main>
  );
}



