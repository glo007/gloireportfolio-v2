import { Menu, X, Code2 } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Accueil",          id: "Home" },
  { name: "À propos",         id: "About" },
  { name: "Expériences",      id: "Experiences" },
  { name: "Épreuve E5",       id: "EpreuveE5" },
  { name: "Épreuve E6",       id: "EpreuveE6" },
  { name: "Veille Tech",      id: "VeilleTechnologique" },
  { name: "Contact",          id: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
        scrolled ? "navbar-glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("Home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg flex items-center justify-center"
               style={{ background: "linear-gradient(135deg,#00b5ff,#7c3aed)" }}>
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg text-white">
            Gloire<span className="gradient-text">.</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {navItems.map(({ name, id }) => (
            <li key={id}>
              <button
                onClick={() => handleNav(id)}
                className={`nav-link bg-transparent border-none cursor-pointer ${active === id ? "active" : ""}`}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden overflow-hidden navbar-glass border-t border-white/5"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navItems.map(({ name, id }) => (
                <li key={id}>
                  <button
                    onClick={() => handleNav(id)}
                    className={`w-full text-left py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 bg-transparent border-none cursor-pointer ${
                      active === id
                        ? "text-accent bg-accent/10"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
