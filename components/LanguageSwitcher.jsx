// components/LanguageSwitcher.jsx
export default function LanguageSwitcher() {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-400">
      <a
        href="/"
        className="hover:text-white transition"
        title="English"
      >
        EN
      </a>
      <span className="opacity-40">|</span>
      <a
        href="/bn"
        className="hover:text-white transition"
        title="বাংলা"
      >
        বাংলা
      </a>
      <span className="opacity-40">|</span>
      <a
        href="/ar"
        className="hover:text-white transition"
        title="العربية"
      >
        العربية
      </a>
    </div>
  );
}
