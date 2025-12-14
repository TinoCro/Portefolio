import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center px-4 text-white"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-cyan-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Disponible pour de nouvelles opportunités
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
              Tino Franic
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400">
                Étudiant BTS SIO SISR
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200/90 max-w-2xl">
              Passionné par les réseaux, les systèmes et la cybersécurité. Je recherche une opportunité pour mettre en pratique mes compétences et développer mon expertise technique.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/competences"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 transition-transform"
              >
                Voir mes projets
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/15 transition-colors"
              >
                Me contacter
              </Link>
            </div>
            <div className="flex gap-6 text-sm text-slate-200/80">
              <div>
                <p className="text-2xl font-bold text-white">E5 & E6</p>
                <p>Dossiers prêts</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">SISR</p>
                <p>Réseau & Systèmes</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-emerald-300/30 via-cyan-400/25 to-blue-500/30"></div>
            <div className="relative bg-white/10 border border-white/15 rounded-3xl p-8 backdrop-blur shadow-2xl shadow-blue-900/40">
              <div className="w-full flex justify-center mb-6">
                <img
                  src="/tino-portrait.jpeg"
                  alt="Tino Franic"
                  className="w-40 h-40 rounded-2xl object-cover border border-white/20 shadow-lg shadow-black/40"
                />
              </div>
              <ul className="space-y-3 text-slate-100">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Sécurité & supervision réseau
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  Virtualisation & Cloud
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  Documentation et accompagnement utilisateur
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-slate-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
