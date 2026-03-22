import {
  BookOpen,
  CheckCircle,
  Download,
  FileSpreadsheet,
  FileText,
  Building2,
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
   MISSIONS E5
======================= */
const missions: Mission[] = [
  {
    id: 1,
    title: "Mission 1 – Restructuration de l’infrastructure réseau",
    context:
      "Modernisation de l’infrastructure réseau avec segmentation VLAN et routage inter-VLAN afin d’améliorer la sécurité et la communication entre les services.",
    tasks: [
      "Analyse du cahier des charges et de l’architecture existante",
      "Création et configuration des VLANs",
      "Mise en place du routage inter-VLAN",
      "Tests de connectivité et validation",
    ],
    environment: "Cisco Packet Tracer, routeurs et switchs Cisco",
    file: "/missions/Mission1_complet.pdf",
    ciscoFile: "/missions/mission1_stadiumcompany.pkt",
  },
  {
    id: 2,
    title: "Mission 2 – Administration Active Directory",
    context:
      "Déploiement et administration d’un domaine Active Directory avec les services DNS et DHCP afin de centraliser la gestion des utilisateurs et des ressources.",
    tasks: [
      "Installation des rôles AD DS, DNS et DHCP",
      "Création du domaine et des unités d’organisation",
      "Gestion des comptes utilisateurs et groupes",
      "Mise en place de stratégies GPO",
    ],
    environment: "Windows Server 2022, Active Directory",
    file: "/missions/mission2.pdf",
  },
  {
    id: 3,
    title: "Mission 3 – Sécurisation réseau et VPN IPsec",
    context:
      "Sécurisation de l’administration réseau et des échanges inter-sites par la mise en place de SSH et d’un tunnel VPN IPsec.",
    tasks: [
      "Analyse des risques liés à Telnet",
      "Activation de l’administration sécurisée via SSH",
      "Configuration d’un tunnel VPN IPsec site-à-site",
      "Tests et vérifications de la sécurité",
    ],
    environment: "Cisco Packet Tracer, routeurs Cisco ISR",
    file: "/missions/mission3.pdf",
  },
];

/* =======================
   CARTE MISSION
======================= */
function MissionCard({ mission }: { mission: Mission }) {
  const isWholeCardClickable = [1, 2, 3].includes(mission.id);

  const cardContent = (
    <article className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 shadow-lg transition hover:border-cyan-400/50 hover:bg-slate-900">
      <div className="flex gap-3 mb-4">
        <div className="bg-cyan-500/20 p-2 rounded-xl">
          <BookOpen className="w-5 h-5 text-cyan-300" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">
            Mission E5 n°{mission.id}
          </p>

          {isWholeCardClickable ? (
            <h3 className="text-lg font-semibold text-white">{mission.title}</h3>
          ) : (
            <a
              href={mission.file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-white hover:text-cyan-300 transition"
            >
              {mission.title}
            </a>
          )}
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
          className="text-cyan-200 underline hover:text-cyan-100 transition"
          onClick={(e) => e.stopPropagation()}
        >
          📄 Ouvrir la fiche mission (PDF)
        </a>

        {mission.ciscoFile && (
          <a
            href={mission.ciscoFile}
            download
            className="flex items-center gap-1 text-emerald-300 underline"
            onClick={(e) => e.stopPropagation()}
          >
            <Download className="w-4 h-4" />
            Télécharger le scénario Cisco Packet Tracer (.pkt)
          </a>
        )}
      </div>
    </article>
  );

  if (isWholeCardClickable) {
    return (
      <a
        href={mission.file}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

/* =======================
   PAGE E5
======================= */
export default function E5() {
  return (
    <section id="e5" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* TITRE */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-cyan-300 uppercase tracking-[0.25em]">
            Épreuve E5 – Support et mise à disposition de services informatiques
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Dossier professionnel – Épreuve E5
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm md:text-base">
            Présentation des missions principales, de l’alternance et du tableau
            de synthèse officiel.
          </p>
        </div>

        {/* TABLEAU DE SYNTHÈSE */}
        <section className="mb-20">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Tableau de synthèse – Annexe 8-1 (Épreuve E5)
          </h3>

          <div className="flex flex-col items-center gap-4 mb-6">
            <a
              href="/e5/annexe8-1_tableau_synthese.xlsx"
              download
              className="inline-flex items-center gap-3 rounded-2xl border border-emerald-400/60 bg-emerald-500/15 px-6 py-3 text-sm font-semibold text-emerald-100 hover:bg-emerald-500/25 transition"
            >
              <FileSpreadsheet className="w-5 h-5" />
              Télécharger le tableau officiel (Excel – Annexe 8-1)
            </a>

            <a
              href="/e5/annexe8-1_tableau_synthese.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-cyan-400/60 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-100 hover:bg-cyan-500/15 transition"
            >
              <FileText className="w-5 h-5" />
              Ouvrir le tableau de synthèse (PDF)
            </a>
          </div>

          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
            <div className="relative w-full h-[800px] rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="/e5/annexe8-1_tableau_synthese.pdf"
                title="Tableau de synthèse E5"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* MISSIONS */}
        <div className="space-y-6 mb-20">
          {missions.map((m) => (
            <MissionCard key={m.id} mission={m} />
          ))}
        </div>

        {/* ENTREPRISE / ALTERNANCE */}
        <section className="mb-20">
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-cyan-300" />
            Entreprise / Alternance
          </h3>

          <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-7 shadow-lg">
            <p className="text-slate-200 mb-4 leading-relaxed">
              Dans le cadre de mon <strong>BTS SIO option SISR</strong>, je
              réalise mon alternance au sein de l’entreprise{" "}
              <strong>Rely</strong>, joint-venture entre{" "}
              <strong>Technip Energies</strong> et
              <strong> John Cockerill Hydrogen</strong>, en tant que
              <strong> IT Support</strong>.
            </p>

            <h4 className="text-cyan-300 font-semibold mb-2">
              Activités professionnelles réalisées
            </h4>

            <ul className="space-y-2 text-sm text-slate-100 mb-6">
              <li>• Support utilisateurs niveau 1 et 2</li>
              <li>• Gestion de comptes et accès Active Directory / SharePoint</li>
              <li>• Installation et configuration de logiciels métier</li>
              <li>• Gestion des licences et du parc matériel</li>
              <li>• Formation et accompagnement des utilisateurs</li>
            </ul>

            <div className="border-t border-white/10 pt-6 mb-6">
              <h4 className="text-cyan-300 font-semibold mb-2">
                Procédure d’onboarding IT – Rely
              </h4>

              <p className="text-slate-200 text-sm mb-4 leading-relaxed">
                J’ai rédigé une procédure d’onboarding IT destinée à accompagner
                l’arrivée des nouveaux collaborateurs. Elle permet de
                standardiser l’accès aux services informatiques et de réduire
                les demandes récurrentes adressées au support IT.
              </p>

              <a
                href="/entreprise/rely_onboarding_it.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/60 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-500/20 transition"
              >
                📄 Consulter la procédure d’onboarding IT (PDF)
              </a>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h4 className="text-cyan-300 font-semibold mb-2">
                Formation à l’utilisation du paperboard numérique Samsung
              </h4>

              <p className="text-slate-200 text-sm mb-4 leading-relaxed">
                J’ai également animé une formation à destination de plusieurs
                utilisateurs sur l’utilisation du paperboard numérique Samsung,
                afin de faciliter son adoption et son usage lors des réunions et
                sessions collaboratives.
              </p>

              <a
                href="/entreprise/rely_formation_paperboard_samsung.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/60 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-500/20 transition"
              >
                📄 Consulter le support de formation (PDF)
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}