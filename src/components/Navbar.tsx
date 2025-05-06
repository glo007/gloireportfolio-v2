import { PackageOpen, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo aligné à gauche avec effet dynamique */}
        <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
          <motion.div
            className="flex justify-center items-center"
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <PackageOpen className="mr-2 text-gradient" />
          </motion.div>
          <span className="text-gradient">
            Gloire<span className="text-accent">PORTFOLIO</span>
          </span>
        </a>

        {/* Menu mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6 transition-all duration-300 ease-in-out ml-auto">
          {[
            { name: "Accueil", id: "Home" },
            { name: "À propos", id: "About" },
            { name: "Mes expériences", id: "Experiences" },
            { name: "Épreuve E5", id: "EpreuveE5" },
            { name: "Épreuve E6", id: "Épreuve E6" },
            { name: "Veille Technologique", id: "VeilleTechnologique" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                className="btn btn-sm btn-ghost hover:text-accent transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu Mobile avec animation fluide */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4"
        >
          {[
            "Accueil",
            "À propos",
            "Mes expériences",
            "Épreuve E5",
            "Épreuve E6",
            "Veille Technologique",
          ].map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="block p-4 text-center hover:bg-gray-200 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                {item}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
