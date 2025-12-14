import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Entreprise from './components/Entreprise';
import E5 from './components/E5';
import E6 from './components/E6';
import VeilletTechnologique from './components/VeilletTechnologique';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/competences" element={<Skills />} />
            <Route path="/entreprise" element={<Entreprise />} />
            <Route path="/e5" element={<E5 />} />
            <Route path="/e6" element={<E6 />} />
            <Route path="/veille-technologique" element={<VeilletTechnologique />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
