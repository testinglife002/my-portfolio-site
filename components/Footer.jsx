// 📄 components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} DigitalElevation — Md. Nazmur Rashid  
        <br />
        Full-Stack Web & App Developer
      </div>
    </footer>
  );
}
