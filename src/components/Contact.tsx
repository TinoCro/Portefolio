import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-cyan-300 uppercase tracking-[0.25em]">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Entrons en contact
          </h2>
          <p className="text-slate-200/80 mt-3">
            Une opportunité, une question ou un projet ? Discutons-en.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-white/10 rounded-2xl shadow-lg shadow-black/40 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Restons en contact
              </h3>
              <p className="text-slate-100 mb-6">
                Je suis à la recherche d'opportunités professionnelles. N'hésitez pas à me contacter pour discuter de projets ou d'opportunités.
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-slate-100">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span>franictino@gmail.com</span>
                </div>
                <div className="flex items-center text-slate-100">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span>06 25 30 27 81</span>
                </div>
                <div className="flex items-center text-slate-100">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Île-de-France</span>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-lg flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-blue-500/30"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-slate-800/40"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white/5 text-white placeholder:text-slate-400"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white/5 text-white placeholder:text-slate-400"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white/5 text-white placeholder:text-slate-400 resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:-translate-y-0.5 transition-transform shadow-lg shadow-cyan-500/30"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
