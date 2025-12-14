import {
  BookOpen,
  CheckCircle,
  Download,
  FileSpreadsheet
} from "lucide-react";

/* =======================
   TYPES
======================= */
interface Mission {
  id: number;
  title: string;
  context: string;
  tasks: string[];
  environment: string;
  file: string;
  ciscoFile?: string;
}

/* =======================
   MISSIONS
======================= */
const missions: Mission[] = [
  {
    id: 1,
    title: "Mission 1 – Restructuration de l’infrastructure réseau",
    context:
      "Modernisation de l’infrastructure réseau avec segmentation VLAN et routage inter-VLAN.",
    tasks: [
      "Analyse du cahier des charges",
      "Création des VLANs",
      "Routage inter-VLAN",
      "Tests de connectivité"
    ],
    environment: "Cisco Packet Tracer, routeurs & switchs Cisco",
    file: "/missions/mission1.pdf",
    ciscoFile: "/missions/mission1_stadiumcompany.pkt"
  },
  {
    id: 2,
    title: "Mission 2 – Administration Active Directory",
    context:
      "Mise en place d’un domaine Active Directory avec DNS et DHCP.",
    tasks: [
      "Installation AD DS",
      "Création des OU",
      "Gestion des comptes et GPO",
      "Tests DNS/DHCP"
    ],
    environment: "Windows Server 2022, Active Directory",
    file: "/missions/mission2.pdf"
  },
  {
    id: 3,
    title: "Mission 3 – Sécurisation réseau et VPN IPsec",
    context:
      "Sécurisation de l’administration réseau et des échanges inter-sites.",
    tasks: [
      "Remplacement Telnet par SSH",
      "Génération de clés RSA",
      "Configuration VPN IPsec",
      "Tests et vérifications"
    ],
    environment: "Cisco Packet Tracer, routeurs Cisco ISR",
    file: "/missions/mission3.pdf"
  }
];

/* =======================
   COMPOSANT MISSION
======================= */
function MissionCard({ mission }: { mission: Mission }) {
  return (
    <article className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 shadow-lg">
      <div className="flex gap-3 mb-4">
        <div className="bg-cyan-500/20 p-2 rounded-xl">
          <BookOpen className="w-5 h-5 text-cyan-300" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">
            Mission E5 n°{mission.id}
          </p>
          <h3 className="text-lg font-semibold text-white">
            {mission.title}
          </h3>
        </div>
      </div>

      <p className="text-slate-200 text-sm mb-3">{mission.context}</p>

      <ul className="space-y-1 mb-3">
        {mission.tasks.map((task) => (
          <li key={task} className="flex gap-2 text-sm text-slate-100">
            <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5" />
            {task}
          </li>
        ))}
      </ul>

      <p className="text-sm text-slate-200 mb-3">
        <strong className="text-cyan-300">Environnement :</strong>{" "}
        {mission.environment}
      </p>

      <div className="flex flex-col gap-2">
        <a
          href={mission.file}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-200 underline"
        >
          📄 Ouvrir la fiche mission (PDF)
        </a>

        {mission.ciscoFile && (
          <a
            href={mission.ciscoFile}
            download
            className="flex items-center gap-1 text-emerald-300 underline"
          >
            <Download className="w-4 h-4" />
            Télécharger le scénario Cisco Packet Tracer (.pkt)
          </a>
        )}
      </div>
    </article>
  );
}

/* =======================
   TABLEAU DE SYNTHÈSE (comme ta capture)
======================= */
function TableauSynthese() {
  return (
    <section className="mt-16">
      <h3 className="text-xl font-semibold text-white mb-4">
        Tableau de synthèse – Épreuve E5
      </h3>

      {/* 🔥 BOUTON EXCEL VISIBLE */}
      <div className="flex justify-center mb-6">
        <a
          href="/e5/annexe8-1_tableau_synthese.xlsx"
          download
          className="inline-flex items-center gap-3 rounded-2xl border border-emerald-400/60 bg-emerald-500/15 px-6 py-3 text-sm font-semibold text-emerald-100 hover:bg-emerald-500/25 transition"
        >
          <FileSpreadsheet className="w-5 h-5" />
          Télécharger le tableau officiel (Excel – Annexe 8-1)
        </a>
      </div>

      <div className="overflow-x-auto bg-slate-950/70 border border-white/10 rounded-2xl p-4">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-slate-400 uppercase text-xs">
              <th className="text-left py-2">Compétences</th>
              <th className="text-center">Mission 1</th>
              <th className="text-center">Mission 2</th>
              <th className="text-center">Mission 3</th>
            </tr>
          </thead>
          <tbody>
            <tr><td colSpan={4} className="pt-4 text-cyan-300 font-semibold">A1 – Support et mise à disposition</td></tr>
            <tr><td>A1.1.1</td><td className="text-center">✓</td><td className="text-center">✓</td><td className="text-center">✓</td></tr>
            <tr><td>A1.2.1</td><td></td><td className="text-center">✓</td><td></td></tr>
            <tr><td>A1.2.3</td><td className="text-center">✓</td><td className="text-center">✓</td><td className="text-center">✓</td></tr>

            <tr><td colSpan={4} className="pt-4 text-cyan-300 font-semibold">A2 – Conception et maintenance</td></tr>
            <tr><td>A2.3.1</td><td className="text-center">✓</td><td className="text-center">✓</td><td className="text-center">✓</td></tr>

            <tr><td colSpan={4} className="pt-4 text-cyan-300 font-semibold">A3 – Cybersécurité</td></tr>
            <tr><td>A3.2.1</td><td></td><td className="text-center">✓</td><td></td></tr>

            <tr><td colSpan={4} className="pt-4 text-cyan-300 font-semibold">A4 – Gestion du patrimoine</td></tr>
            <tr><td>A4.1.1</td><td className="text-center">✓</td><td className="text-center">✓</td><td className="text-center">✓</td></tr>

            <tr><td colSpan={4} className="pt-4 text-cyan-300 font-semibold">A5 – Pilotage de projets</td></tr>
            <tr><td>A5.1.2</td><td></td><td className="text-center">✓</td><td></td></tr>
            <tr><td>A5.2.1</td><td></td><td></td><td className="text-center">✓</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* =======================
   PAGE E5
======================= */
export default function E5() {
  return (
    <section id="e5" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* TITRE COMME E6 */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-cyan-300 uppercase tracking-[0.25em]">
            Épreuve E5 – Support et mise à disposition de services informatiques
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Dossier professionnel – Épreuve E5
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm md:text-base">
            Présentation des missions réalisées et du tableau de synthèse officiel demandé par le jury.
          </p>
        </div>

        {/* MISSIONS */}
        <div className="space-y-6">
          {missions.map((m) => (
            <MissionCard key={m.id} mission={m} />
          ))}
        </div>

        {/* TABLEAU */}
        <TableauSynthese />
      </div>
    </section>
  );
}
