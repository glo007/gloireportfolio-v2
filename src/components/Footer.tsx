import { Code2, ArrowUp } from "lucide-react";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

const navLinks = [
  { label: "Accueil",        id: "Home" },
  { label: "À propos",       id: "About" },
  { label: "Expériences",    id: "Experiences" },
  { label: "Épreuve E5",     id: "EpreuveE5" },
  { label: "Épreuve E6",     id: "EpreuveE6" },
  { label: "Veille Tech",    id: "VeilleTechnologique" },
  { label: "Contact",        id: "Contact" },
];

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer-bg pt-14 pb-8 px-6 md:px-[8%]">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="md:w-64">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                   style={{ background: "linear-gradient(135deg,#00b5ff,#7c3aed)" }}>
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                Gloire<span className="gradient-text">.</span>
              </span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed">
              Développeur Web Full Stack · BTS SIO SLAM.
              Passionné par la création de solutions numériques innovantes.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navLinks.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-white/40 text-sm hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">Réseaux</h4>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/gloire-bryan-boungou-mbimi-b31b072b9"
                 target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://x.com/gloire_bryan?s=21"
                 target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X">
                <FaXTwitter />
              </a>
              <a href="https://www.instagram.com/gloire_bryan"
                 target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="gradient-divider mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Gloire Bryan Boungou Mbimi — Tous droits réservés.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-xs text-white/35 hover:text-accent transition-colors"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-4 h-4" />
            Haut de page
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
