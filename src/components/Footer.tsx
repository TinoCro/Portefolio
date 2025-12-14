export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-10 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-2 text-sm text-slate-300">
          Portfolio BTS SIO SISR - {currentYear}
        </div>
        <p className="text-xs text-slate-500">
          Design React + Tailwind - Palette dégradés cyan/bleu & accents émeraude
        </p>
      </div>
    </footer>
  );
}
