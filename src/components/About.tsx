import { FileText, Linkedin, GraduationCap } from "lucide-react";

export default function APropos() {
  return (
    <section id="apropos" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">

        {/* TITRE */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-cyan-300 uppercase tracking-[0.25em]">
            À propos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Présentation & parcours
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Étudiant en BTS SIO option SISR, orienté administration systèmes,
            réseaux et cybersécurité.
          </p>
        </div>

        {/* PRÉSENTATION */}
        <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-8 shadow-lg mb-16">
          <p className="text-slate-200 leading-relaxed mb-4">
            Je m’appelle <strong>Tino Franic</strong>, étudiant en{" "}
            <strong>BTS Services Informatiques aux Organisations (SIO)</strong>,
            option <strong>SISR</strong>. Je me forme à l’administration des
            systèmes et des réseaux, à la sécurisation des infrastructures et au
            support informatique.
          </p>

          <p className="text-slate-200 leading-relaxed mb-4">
            Je réalise actuellement mon alternance au sein de l’entreprise{" "}
            <strong>Rely</strong>, joint-venture entre{" "}
            <strong>Technip Energies</strong> et{" "}
            <strong>John Cockerill Hydrogen</strong>, en tant que{" "}
            <strong>IT Support</strong>. Cette expérience me permet de
            développer des compétences techniques et professionnelles en
            environnement réel.
          </p>

          <p className="text-slate-200 leading-relaxed">
            Mon objectif est de poursuivre dans les domaines des{" "}
            <strong>systèmes, réseaux et de la cybersécurité</strong>, avec une
            approche rigoureuse, orientée sécurité et qualité de service.
          </p>
        </div>

        {/* CV + LINKEDIN */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          {/* CV */}
          <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-300" />
              Curriculum Vitae
            </h3>

            <p className="text-slate-200 text-sm mb-4">
              Mon CV présente mon parcours scolaire, mes expériences
              professionnelles et mes compétences techniques.
            </p>

            <a
              href="/cv/FRANIC_TINO_BTS_SIO.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/60 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-500/20 transition mb-4"
            >
              📄 Télécharger mon CV (PDF)
            </a>

            <div className="relative w-full h-[500px] rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="/cv/FRANIC_TINO_BTS_SIO.pdf"
                title="CV Tino Franic"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* LINKEDIN */}
          <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-cyan-300" />
              Profil LinkedIn
            </h3>

            <p className="text-slate-200 text-sm mb-4">
              J’utilise LinkedIn comme outil de développement professionnel afin
              de valoriser mon parcours, suivre l’actualité du secteur
              informatique et maintenir un réseau professionnel.
            </p>

            <a
              href="https://www.linkedin.com/in/tinofranic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/60 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-500/20 transition"
            >
              🔗 Consulter mon profil LinkedIn
            </a>
          </div>
        </div>

        {/* BTS SIO */}
        <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-cyan-300" />
            BTS SIO – Option SISR
          </h3>

          <p className="text-slate-200 leading-relaxed mb-4">
            Le <strong>BTS Services Informatiques aux Organisations</strong> forme
            des professionnels capables de gérer, maintenir et sécuriser des
            infrastructures informatiques au sein des entreprises.
          </p>

          <p className="text-slate-200 leading-relaxed mb-4">
            L’option <strong>SISR (Solutions d’Infrastructure, Systèmes et
            Réseaux)</strong> est orientée vers l’administration des systèmes,
            la gestion des réseaux, la virtualisation, la cybersécurité et le
            support informatique.
          </p>

          <p className="text-slate-200 leading-relaxed">
            Cette formation me permet d’acquérir des compétences solides en
            environnements Windows et Linux, en réseaux Cisco, ainsi qu’en
            sécurisation des systèmes d’information.
          </p>
        </div>

      </div>
    </section>
  );
}
