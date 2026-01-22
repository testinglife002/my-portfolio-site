// components/Navbar.jsx
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  return (
    <nav className="border-b border-border bg-dark">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-6">
          <a
            href="/"
            className="text-xl font-bold tracking-wide text-white"
          >
            DigitalElevation
          </a>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-6 text-gray-300">
            <a href="/" className="hover:text-white transition">
              Home
            </a>
            <a href="/projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="/demos" className="hover:text-white transition">
              Live Demos
            </a>

            <a href="/services" className="hover:text-white transition">
              Services
            </a>
            <a href="/about" className="hover:text-white transition">
              About
            </a>
            <a
              href="/contact"
              className="text-primary font-semibold hover:opacity-90 transition"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Right Side: Language Switcher */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
        </div>

      </div>
    </nav>
  );
}

