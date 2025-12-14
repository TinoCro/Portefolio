import { Users, CheckCircle, Presentation } from 'lucide-react';

export default function E6() {
  const e6Topics = [
    'Accompagnement et communication',
    'Assistance à l\'utilisateur',
    'Documentation technique',
    'Gestion du changement',
    'Support utilisateur',
  ];

  return (
    <section id="e6" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-emerald-300 uppercase tracking-[0.25em]">
            E6
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            E6 - Accompagnement et Aide à l'Utilisateur
          </h2>
          <p className="text-slate-200/80 mt-3">
            Épreuve professionnelle : Assistance aux Utilisateurs
          </p>
        </div>

        <div className="bg-slate-900/60 border border-white/10 rounded-2xl shadow-lg shadow-black/40 p-8 md:p-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4 text-white shadow-lg shadow-emerald-500/30">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Contexte et Objectifs</h3>
          </div>

          <p className="text-slate-100 mb-8 leading-relaxed">
            L'épreuve E6 évalue votre capacité à accompagner les utilisateurs, les assister dans l'utilisation des systèmes informatiques et communiquer efficacement dans un environnement professionnel.
          </p>

          <div className="mb-8">
            <h4 className="text-lg font-bold text-white mb-4">Points Clés Abordés</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {e6Topics.map((topic, index) => (
                <div key={index} className="flex items-center bg-slate-800/60 border border-white/10 rounded-xl px-3 py-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-slate-100">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900/60 border border-white/10 p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                <Presentation className="w-5 h-5 mr-2 text-emerald-400" />
                Présentations
              </h4>
              <p className="text-slate-100 text-sm">
                Décrivez vos expériences de présentations, de formation aux utilisateurs, et de communication technique.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-white/10 p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2 text-emerald-400" />
                Support Utilisateur
              </h4>
              <p className="text-slate-100 text-sm">
                Décrivez votre expérience en support utilisateur, les problèmes résolus, et votre approche pour assister les utilisateurs.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-white/10 p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-white mb-3">
              Mon Dossier E6
            </h4>
            <p className="text-slate-100 mb-3">
              Décrivez votre projet E6 : cas d'usage d'assistance, documentation créée, formations dispensées et méthodes de communication.
            </p>
            <p className="text-slate-100">
              Mettez en avant votre capacité à écouter, expliquer clairement et résoudre les problèmes des utilisateurs finaux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
