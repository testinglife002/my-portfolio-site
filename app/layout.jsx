// app/layout.jsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata = {
  title: "DigitalElevation | Full-Stack Web & App Developer",
  description:
    "Md. Nazmur Rashid — Full-stack web & app developer. React, Next.js, MERN, SaaS & business-ready applications.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Web App Developer",
    "SaaS Developer",
    "DigitalElevation",
  ],
  openGraph: {
    title: "DigitalElevation — Full-Stack Developer",
    description:
      "I build fast, scalable, production-ready web and mobile applications.",
    url: "https://digitalelevation.vercel.app",
    siteName: "DigitalElevation",
    images: ["/og-image.png"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <SchemaMarkup />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
