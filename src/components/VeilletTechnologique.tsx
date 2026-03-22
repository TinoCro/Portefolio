import { FileText, Shield, Radio, CalendarDays, ExternalLink } from "lucide-react";

const veilles = [
  {
    title: "L’Intelligence Artificielle dans la Cybersécurité",
    subtitle: "Une technologie à double tranchant : arme de défense et vecteur d'attaque",
    description:
      "Cette veille présente l’usage de l’intelligence artificielle dans la cybersécurité, à la fois comme outil de défense pour les équipes de sécurité et comme levier d’attaque pour les cybercriminels.",
    date: "Mars 2026",
    icon: Shield,
    href: "/veille/veille_ia_cybersecurite.pdf",
  },
  {
    title: "La 6G",
    subtitle: "Réseaux mobiles de 6ème génération",
    description:
      "Cette veille technologique présente les objectifs, les technologies clés, les cas d’usage et les enjeux stratégiques liés au développement des futurs réseaux 6G.",
    date: "Mars 2026",
    icon: Radio,
    href: "/veille/veille_6g.pdf",
  },
];

export default function VeilletTechnologique() {
  return (
    <section id="veille-technologique" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-cyan-300 uppercase tracking-[0.25em]">
            Veille technologique
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Mes travaux de veille
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm md:text-base">
            Dans le cadre de mon BTS SIO option SISR, je réalise une veille technologique
            afin de suivre l’évolution des innovations, des usages et des enjeux dans les
            domaines des réseaux, des systèmes et de la cybersécurité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {veilles.map((veille) => {
            const Icon = veille.icon;

            return (
              <article
                key={veille.title}
                className="bg-slate-900/70 border border-white/10 rounded-3xl p-7 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-cyan-500/15 p-3 rounded-2xl">
                    <Icon className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-sm text-cyan-300 font-semibold">Veille technologique</p>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <CalendarDays className="w-4 h-4" />
                      {veille.date}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {veille.title}
                </h3>

                <p className="text-cyan-200 font-medium mb-4">
                  {veille.subtitle}
                </p>

                <p className="text-slate-200 leading-relaxed mb-6">
                  {veille.description}
                </p>

                <a
                  href={veille.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:opacity-95 transition"
                >
                  <FileText className="w-5 h-5" />
                  Ouvrir la veille
                  <ExternalLink className="w-4 h-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}