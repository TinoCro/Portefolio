import { TrendingUp, Globe, BookMarked, Zap, Download } from 'lucide-react';

export default function VeilletTechnologique() {
  const veilleItems = [
    {
      category: 'Veille 6G',
      items: [
        'Évolution des standards 3GPP vers la 6G',
        'Cas d’usage visés : très faible latence, IoT massif, XR',
        'Enjeux de sécurité et de souveraineté',
        'Impacts réseau : densification, edge et IA embarquée',
      ],
      pdf: '/veille-6g.pdf.pdf',
    },
  ];

  return (
    <section id="veille-technologique" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-cyan-300 uppercase tracking-[0.25em]">
            Veille
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Veille Technologique
          </h2>
          <p className="text-center text-slate-200/80 mt-3">
            Suivi des tendances et innovations dans les domaines clés de l'IT.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {veilleItems.map((section) => (
            <div
              key={section.category}
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">{section.category}</h3>
                {section.pdf && (
                  <a
                    href={encodeURI(section.pdf)}
                    className="inline-flex items-center gap-2 text-sm text-cyan-200 hover:text-cyan-100 underline decoration-dotted"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Download className="w-4 h-4" />
                    PDF
                  </a>
                )}
              </div>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-slate-100 text-sm flex items-start">
                    <span className="bg-cyan-400 rounded-full w-1.5 h-1.5 mr-2 mt-1.5 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-slate-900/60 border border-white/10 rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-3 text-white">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Sources de Veille
                </h3>
              </div>
              <ul className="space-y-3 text-slate-100">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Sites spécialisés et blogs techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Newsletters et flux RSS</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Réseaux professionnels et forums</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Documentation officielle</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Conférences et webinaires</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-3 text-white">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Apprentissages Récents</h3>
              </div>
              <p className="text-slate-100 mb-4">
                Décrivez les derniers sujets que vous avez explorés et les technologies
                que vous vous approprier :
              </p>
              <ul className="space-y-2">
                <li className="text-slate-100 text-sm">
                  <span className="font-medium">Exemple 1:</span> Étude approfondie de Kubernetes
                </li>
                <li className="text-slate-100 text-sm">
                  <span className="font-medium">Exemple 2:</span> Nouvelles features Python 3.12
                </li>
                <li className="text-slate-100 text-sm">
                  <span className="font-medium">Exemple 3:</span> Protocoles réseau modernes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
