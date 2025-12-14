import { Server, Network, Shield, Database, Cloud, Code } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Server,
      title: 'Systèmes',
      color: 'blue',
      skills: ['Windows Server', 'Linux (Debian, Ubuntu)', 'Active Directory', 'PowerShell', 'Bash'],
    },
    {
      icon: Network,
      title: 'Réseaux',
      color: 'green',
      skills: ['TCP/IP', 'Routage et Commutation', 'VLAN', 'VPN', 'Cisco/PacketTracer'],
    },
    {
      icon: Shield,
      title: 'Sécurité',
      color: 'red',
      skills: ['Firewall', 'Proxy', 'Détection d\'intrusion', 'Politique de sécurité', 'Sauvegarde'],
    },
    {
      icon: Database,
      title: 'Bases de données',
      color: 'purple',
      skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'Conception BDD', 'Administration'],
    },
    {
      icon: Cloud,
      title: 'Virtualisation',
      color: 'cyan',
      skills: ['VMware', 'VirtualBox', 'Hyper-V', 'Docker', 'Proxmox'],
    },
    {
      icon: Code,
      title: 'Développement',
      color: 'orange',
      skills: ['Python', 'PHP', 'HTML/CSS', 'JavaScript', 'Git'],
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string; dot: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', dot: 'bg-blue-500' },
    green: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100', dot: 'bg-emerald-500' },
    red: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100', dot: 'bg-rose-500' },
    purple: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100', dot: 'bg-indigo-500' },
    cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-100', dot: 'bg-cyan-500' },
    orange: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', dot: 'bg-amber-500' },
  };

  return (
    <section id="competences" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-cyan-300 uppercase tracking-[0.25em]">
            Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Compétences Techniques
          </h2>
          <p className="text-slate-200/80 mt-3 max-w-2xl mx-auto">
            Systèmes, réseaux, sécurité et outils pour bâtir et maintenir des infrastructures fiables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color];

            return (
              <div
                key={category.title}
                className={`bg-slate-900/60 p-6 rounded-2xl border border-white/10 shadow-sm hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center mb-4">
                  <Icon className={`w-8 h-8 ${colors.text} mr-3`} />
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-slate-100 flex items-center"
                    >
                      <span className={`w-1.5 h-1.5 ${colors.dot} rounded-full mr-2`}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
