import {
  Globe,
  TrendingUp,
  Factory,
  Leaf,
  Cloud,
  ExternalLink,
  Users,
  Link2,
  Laptop
} from "lucide-react";

/* ======================
   TECHNIP ENERGIES
====================== */

const technipKpis = [
  { label: "Revenus (2024)", value: "≈ 6,9 Md€", icon: TrendingUp },
  { label: "Effectif", value: "17 000+ employés", icon: Users },
  { label: "Présence", value: "≈ 34 pays", icon: Globe }
];

const technipDomains = [
  {
    title: "LNG (GNL)",
    desc: "Conception et réalisation de projets LNG complexes à l’échelle mondiale.",
    icon: Factory
  },
  {
    title: "Hydrogène & décarbonation",
    desc: "Solutions industrielles pour l’hydrogène bas-carbone et la transition énergétique.",
    icon: Leaf
  },
  {
    title: "CO₂ management (CCUS)",
    desc: "Capture, utilisation et stockage du carbone pour réduire l’empreinte industrielle.",
    icon: Cloud
  }
];

/* ======================
   RELY SOLUTIONS
====================== */

const relyInfos = {
  name: "Rely Solutions",
  website: "https://www.relysolutions.com/",
  description:
    "Rely Solutions est une entreprise spécialisée dans les solutions intégrées d’hydrogène vert et Power-to-X. Elle accompagne les industriels dans la conception, l’ingénierie et la réalisation de projets hydrogène à grande échelle.",
  structure: "Joint-venture Technip Energies (60 %) × John Cockerill Hydrogen (40 %)",
  headquarters: "Bruxelles, Belgique",
  employees: "≈ 150 employés",
  sector: "Hydrogène vert / Power-to-X / Transition énergétique",
  positioning:
    "Solutions hydrogène industrialisées, modulaires et compétitives pour projets à grande échelle",
  missions: [
    "Ingénierie et intégration de solutions hydrogène vert",
    "Déploiement de projets Power-to-X à grande échelle",
    "Intégration de technologies d’électrolyse",
    "Accompagnement de la conception à la mise en service",
    "Contribution à la décarbonation industrielle"
  ],
  partners: [
    "Technip Energies – ingénierie et delivery de projets complexes",
    "John Cockerill Hydrogen – technologies d’électrolyse"
  ]
};

/* ======================
   TON RÔLE CHEZ RELY
====================== */

const myRole = {
  title: "Alternant IT Support",
  context:
    "Dans le cadre de mon alternance chez Rely Solutions, j’interviens au sein de l’équipe IT afin d’assurer le support informatique auprès des utilisateurs et le bon fonctionnement du système d’information.",
  tasks: [
    "Support utilisateurs niveau 1 et 2 (incidents matériels et logiciels)",
    "Gestion des postes de travail (Windows, configurations, mises à jour)",
    "Gestion des comptes utilisateurs et des accès",
    "Installation et maintenance du matériel informatique",
    "Participation à l’amélioration des procédures IT"
  ],
  tools: [
    "Windows",
    "Microsoft 365",
    "Outils de ticketing",
    "Active Directory (notions)",
    "Réseaux (bases)"
  ]
};

/* ======================
   PAGE ENTREPRISE
====================== */

export default function Entreprise() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ================= TECHNIP ENERGIES ================= */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-cyan-300 uppercase tracking-[0.25em]">
            Entreprise de référence
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Technip Energies
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Technip Energies est une entreprise d’ingénierie et de technologies
            spécialisée dans la transition énergétique, avec une expertise
            reconnue dans le LNG, l’hydrogène, la chimie durable et la gestion
            du CO₂.
          </p>

          <a
            href="https://www.ten.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100 hover:border-cyan-300 transition"
          >
            Site officiel Technip Energies <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* KPI Technip */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {technipKpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <div
                key={kpi.label}
                className="bg-slate-900/80 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="rounded-xl bg-cyan-500/20 p-2">
                    <Icon className="w-5 h-5 text-cyan-300" />
                  </div>
                  <p className="text-slate-300 text-sm">{kpi.label}</p>
                </div>
                <p className="text-white text-2xl font-semibold">
                  {kpi.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Domaines Technip */}
        <div className="grid md:grid-cols-3 gap-4 mb-20">
          {technipDomains.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="bg-slate-900/80 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-emerald-500/15 p-2">
                    <Icon className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{d.title}</h3>
                    <p className="text-slate-300 text-sm mt-1">{d.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= RELY SOLUTIONS ================= */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-emerald-300 uppercase tracking-[0.25em]">
            Joint-venture & employeur
          </p>
          <h2 className="text-3xl font-bold text-white mt-3 mb-4">
            {relyInfos.name}
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            {relyInfos.description}
          </p>

          <a
            href={relyInfos.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-100 hover:border-emerald-300 transition"
          >
            Site officiel Rely Solutions <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid lg:grid-cols-[2fr,1fr] gap-8 items-start mb-16">

          {/* Missions RELY */}
          <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Activités principales de Rely
            </h3>
            <ul className="space-y-2 text-sm text-slate-100">
              {relyInfos.missions.map((m) => (
                <li key={m} className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Infos employeur RELY */}
          <aside className="bg-gradient-to-b from-slate-900/80 via-slate-950/90 to-slate-900/80 border border-emerald-500/40 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Link2 className="w-5 h-5 text-emerald-300" />
              Informations employeur
            </h3>

            <ul className="space-y-2 text-sm text-slate-100">
              <li><strong>Structure :</strong> {relyInfos.structure}</li>
              <li><strong>Secteur :</strong> {relyInfos.sector}</li>
              <li><strong>Effectif :</strong> {relyInfos.employees}</li>
              <li><strong>Siège :</strong> {relyInfos.headquarters}</li>
              <li><strong>Positionnement :</strong> {relyInfos.positioning}</li>
            </ul>
          </aside>

        </div>

        {/* ================= TON RÔLE ================= */}
        <div className="bg-slate-900/80 border border-cyan-500/40 rounded-2xl p-7 shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
            <Laptop className="w-6 h-6 text-cyan-300" />
            Mon rôle chez Rely Solutions
          </h3>

          <p className="text-slate-300 mb-4">
            <strong className="text-white">{myRole.title}</strong> – {myRole.context}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-cyan-300 font-semibold mb-2">
                Missions principales
              </h4>
              <ul className="space-y-2 text-sm text-slate-100">
                {myRole.tasks.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-cyan-300 font-semibold mb-2">
                Outils & technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {myRole.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs rounded-full border border-cyan-400/50 px-3 py-1 bg-cyan-500/10 text-cyan-100"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
