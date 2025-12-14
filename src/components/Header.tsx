import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Accueil' },
    { path: '/a-propos', label: 'À propos' },
    { path: '/competences', label: 'Compétences' },
    { path: '/entreprise', label: 'Entreprise' },
    { path: '/e5', label: 'E5' },
    { path: '/e6', label: 'E6' },
    { path: '/veille-technologique', label: 'Veille technologique' },
    { path: '/contact', label: 'Contact' },
  ];

  const linkBaseClasses =
    'text-sm font-medium transition-colors hover:text-blue-600';

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-950/70 backdrop-blur-md shadow-sm z-50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-white">
            Portfolio BTS SIO
          </div>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `${linkBaseClasses} ${isActive ? 'text-cyan-300' : 'text-slate-200'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-slate-600" />
            ) : (
              <Menu className="h-6 w-6 text-slate-600" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-left py-2 ${linkBaseClasses} ${
                    isActive ? 'text-blue-600' : 'text-slate-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
