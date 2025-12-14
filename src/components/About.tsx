import { Download, GraduationCap, Server, User, FileText } from "lucide-react";

export default function APropos() {
  return (
    <section id="apropos" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">

        {/* TITRE */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-cyan-300 uppercase tracking-[0.25em]">
            À propos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Profil, formation et projet professionnel
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm md:text-base">
            Présentation de mon parcours, de ma formation en BTS SIO et de mon
            orientation en administration systèmes et réseaux.
          </p>
        </div>

        {/* ================= PROFIL ================= */}
        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-7 mb-14 shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-cyan-300" />
            Mon profil
          </h3>

          <p className="text-slate-200 mb-5 leading-relaxed">
            Je m’appelle <strong className="text-white">Tino Franic</strong>,
            étudiant en <strong>BTS Services Informatiques aux Organisations</strong>,
            option <strong>SISR</strong>.  
            Je suis actuellement en <strong>alternance IT Support</strong>, avec
            un fort intérêt pour l’administration système, réseau et la cybersécurité.
          </p>

          {/* Bouton téléchargement */}
          <a
            href="/cv/FRANIC_TINO_CV.pdf"
            download
            className="inline-flex items-center gap-3 rounded-xl border border-emerald-400/60 bg-emerald-500/15 px-5 py-3 text-sm font-semibold text-emerald-100 hover:bg-emerald-500/25 transition"
          >
            <Download className="w-5 h-5" />
            Télécharger mon CV (PDF)
          </a>
        </div>

        {/* ================= CV INTÉGRÉ ================= */}
        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 mb-16 shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-300" />
            Aperçu de mon CV
          </h3>

          <div className="relative w-full h-[800px] rounded-xl overflow-hidden border border-white/10">
            <iframe
              src="/cv/FRANIC_TINO_CV.pdf"
              title="CV Tino Franic"
              className="w-full h-full"
            />
          </div>

          <p className="text-slate-400 text-xs mt-3">
            (Si le PDF ne s’affiche pas, utilisez le bouton de téléchargement ci-dessus.)
          </p>
        </div>

        {/* ================= FORMATION ================= */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* BTS SIO */}
          <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-7 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyan-300" />
              Le BTS SIO
            </h3>

            <p className="text-slate-200 text-sm leading-relaxed">
              Le <strong>BTS Services Informatiques aux Organisations (SIO)</strong>
              est une formation Bac+2 qui prépare aux métiers de l’informatique
              en entreprise, en répondant aux besoins des organisations en matière
              de services numériques.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-100">
              <li>• Support et assistance aux utilisateurs</li>
              <li>• Administration des systèmes et des réseaux</li>
              <li>• Cybersécurité des services informatiques</li>
              <li>• Culture économique, juridique et managériale</li>
            </ul>
          </div>

          {/* OPTION SISR */}
          <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-7 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Server className="w-5 h-5 text-emerald-300" />
              Option SISR
            </h3>

            <p className="text-slate-200 text-sm leading-relaxed">
              L’option <strong>SISR (Solutions d’Infrastructure, Systèmes et Réseaux)</strong>
              est orientée vers la mise en place, l’administration et la sécurisation
              des infrastructures informatiques.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-100">
              <li>• Administration de serveurs Windows et Linux</li>
              <li>• Gestion des réseaux (VLAN, routage, VPN)</li>
              <li>• Déploiement de services (AD, DNS, DHCP)</li>
              <li>• Sécurisation des accès et des systèmes</li>
              <li>• Support technique et résolution d’incidents</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
