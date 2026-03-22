import { FileText, FolderOpen, ExternalLink } from "lucide-react";

interface RealisationLink {
  label: string;
  href: string;
}

interface Realisation {
  title: string;
  links: RealisationLink[];
}

const realisations: Realisation[] = [
  {
    title: "Réalisation Professionnelle 1",
    links: [
      {
        label: "Mise en place d’une zone d’échange logistique sécurisée",
        href: "/e6/Fiche_Descriptive_1.pdf",
      },
      {
        label: "Fiche technique Réalisation professionnelle 1",
        href: "/e6/fiche-technique-rp1.pdf",
      },
    ],
  },
  {
    title: "Réalisation Professionnelle 2",
    links: [
      {
        label: "Suivi, inventaire et supervision des équipements logistiques",
        href: "/e6/Fiche_Descriptive_2.pdf",
      },
      {
        label: "Fiche technique Réalisation professionnelle 2",
        href: "/e6/fiche-technique-rp2.pdf",
      },
    ],
  },
];

export default function E6() {
  return (
    <section id="e6" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-900/70 border border-white/10 rounded-3xl p-8 md:p-10 shadow-xl">
          <div className="mb-12">
            <p className="text-sm font-semibold text-cyan-300 uppercase tracking-[0.25em] mb-3">
              Épreuve E6
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Dossier professionnel – Épreuve E6
            </h2>

            <h3 className="text-2xl font-semibold text-cyan-300 mb-5">
              Résumé de l'épreuve :
            </h3>

            <div className="space-y-5 text-slate-200 leading-relaxed">
              <p>
                L'épreuve E6 (Conduite d'un projet, mise en œuvre et présentation
                des solutions) du BTS SIO spécialité SISR évalue la capacité du
                candidat à gérer et à réaliser un projet lié à l'administration
                des systèmes et réseaux. Elle repose sur un projet réel ou simulé,
                souvent basé sur une problématique professionnelle, développé au
                cours des stages ou dans le cadre de travaux pratiques.
              </p>

              <p>
                Cette épreuve est composée d'un dossier technique présenté par le
                candidat, qui documente le contexte, les solutions techniques mises
                en œuvre, ainsi que la méthodologie utilisée. Lors de l'oral, le
                candidat doit démontrer ses compétences techniques,
                organisationnelles et sa capacité à collaborer en équipe tout en
                argumentant ses choix.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="/e6/cahier-des-charges-stadiumcompany.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:opacity-95 transition"
              >
                <FileText className="w-5 h-5" />
                Cahier des charges StadiumCompany
              </a>
            </div>
          </div>

          <div className="space-y-12">
            {realisations.map((realisation, index) => (
              <div key={realisation.title}>
                <h3 className="text-2xl font-bold text-cyan-300 mb-6">
                  {realisation.title} :
                </h3>

                <div className="space-y-3 ml-0 md:ml-8">
                  {realisation.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-100 hover:text-cyan-300 transition"
                    >
                      <FolderOpen className="w-4 h-4 text-cyan-300" />
                      <span className="underline">{link.label}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ))}
                </div>

                {index < realisations.length - 1 && (
                  <div className="mt-10 border-b border-white/10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}