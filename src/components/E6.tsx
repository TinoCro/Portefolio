import { Server, ShieldCheck, Network, FileText } from "lucide-react";

export default function E6() {
  return (
    <section id="e6" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-cyan-300 uppercase tracking-[0.25em]">
            Épreuve E6 – Administration des systèmes et des réseaux
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Projet technique – Mise en place d’une solution GLPI
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Cette section présente un projet mené dans le cadre de ma formation
            BTS SIO option SISR, portant sur la mise en place d’une solution de
            gestion de parc informatique et de support IT.
          </p>
        </div>

        {/* Contexte */}
        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-cyan-300 mb-3 flex items-center gap-2">
            <Server className="w-5 h-5" />
            Contexte et besoins
          </h3>
          <p className="text-slate-200 text-sm leading-relaxed">
            Dans un contexte d’entreprise disposant de nombreux postes,
            utilisateurs et équipements réseau, il est nécessaire de disposer
            d’un outil centralisé permettant la gestion du parc informatique,
            le suivi des incidents et l’assistance aux utilisateurs.
            <br /><br />
            L’objectif était de déployer une solution fiable, sécurisée et
            utilisée en milieu professionnel afin de répondre à ces besoins.
          </p>
        </div>

        {/* Solution */}
        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-cyan-300 mb-3 flex items-center gap-2">
            <Network className="w-5 h-5" />
            Solution retenue
          </h3>
          <p className="text-slate-200 text-sm leading-relaxed">
            La solution choisie est <strong>GLPI</strong>, un outil open-source
            largement utilisé pour la gestion de parc informatique et le support IT.
            <br /><br />
            GLPI a été déployé sur un serveur Linux avec une architecture LAMP
            (Linux, Apache, MariaDB, PHP) et intégré à un annuaire Active Directory
            afin de centraliser l’authentification des utilisateurs.
          </p>
        </div>

        {/* Mise en œuvre */}
        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-cyan-300 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" />
            Mise en œuvre technique
          </h3>
          <ul className="space-y-2 text-slate-200 text-sm">
            <li>• Installation et configuration d’un serveur Linux</li>
            <li>• Mise en place de la pile LAMP (Apache, MariaDB, PHP)</li>
            <li>• Installation et configuration de GLPI</li>
            <li>• Sécurisation des accès via HTTPS (certificat SSL)</li>
            <li>• Intégration de l’authentification LDAP (Active Directory)</li>
            <li>• Mise en place de l’inventaire automatique (FusionInventory)</li>
            <li>• Gestion des tickets, des utilisateurs et des équipements</li>
            <li>• Configuration des notifications par mail</li>
          </ul>
        </div>

        {/* Compétences */}
        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-cyan-300 mb-3">
            Compétences mobilisées
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "A1.1.1",
              "A1.2.1",
              "A1.2.3",
              "A1.3.1",
              "A1.3.2",
              "A2.3.1",
              "A3.2.1",
              "A4.1.1",
            ].map((skill) => (
              <span
                key={skill}
                className="text-xs rounded-full border border-cyan-400/50 px-3 py-1 bg-cyan-500/10 text-cyan-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Livrables */}
        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-cyan-300 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Documents et livrables
          </h3>
          <p className="text-slate-200 text-sm mb-4">
            Une documentation complète du projet a été rédigée, comprenant
            l’architecture, les étapes d’installation, la configuration et les
            procédures d’utilisation.
          </p>

          <a
            href="/documents/projet-glpi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/60 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-500/20 transition"
          >
            📄 Consulter la documentation du projet GLPI
          </a>
        </div>
      </div>
    </section>
  );
}
