import { MailOpen, FileDown, ArrowDown } from "lucide-react";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import img from "../assets/IMG_3235.jpg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const stats = [
  { value: "6+",  label: "Projets" },
  { value: "2+",  label: "Ans d'exp." },
  { value: "10+", label: "Technologies" },
];

const Home = () => {
  return (
    <section id="Home" className="hero-section min-h-screen flex items-center px-6 md:px-[8%] pt-24 pb-16">
      {/* Background blobs */}
      <div className="hero-blob-1" />
      <div className="hero-blob-2" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">

          {/* ── Text ── */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="pill-badge mb-5 inline-flex">Disponible · Alternance</div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-2">
              Bonjour, je suis
            </h1>
            <div className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight mb-6 min-h-[3rem]">
              <span className="gradient-text">
                <Typewriter
                  options={{
                    strings: ["Gloire Bryan", "Développeur Web", "Étudiant BTS SIO"],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 35,
                  }}
                />
              </span>
            </div>

            <p className="text-white/55 text-base md:text-lg max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
              Étudiant en BTS SIO option SLAM à l'Estiam Paris, en alternance chez&nbsp;
              <span className="text-accent font-semibold">42Consulting</span>.
              Je conçois des solutions web innovantes — du backend robuste aux interfaces modernes et sécurisées.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8 justify-center md:justify-start">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="stat-number">{s.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
              <a href="#Contact" className="btn-gradient">
                <MailOpen className="w-4 h-4" />
                Me contacter
              </a>
              <a
                href="/cv-gloire-bryan-boungou-mbimi-4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-accent"
              >
                <FileDown className="w-4 h-4" />
                Mon CV
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/gloire-bryan-boungou-mbimi-b31b072b9"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/gloire_bryan"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter / X"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/gloire_bryan"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* ── Photo ── */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <div className="profile-glow">
              {/* Spinning gradient ring */}
              <div
                className="absolute -inset-3 opacity-30 animate-spin-slow"
                style={{
                  background: "conic-gradient(from 0deg, #00b5ff, transparent 60%, #7c3aed, transparent 60%)",
                  borderRadius: "53% 47% 57% 43% / 38% 44% 56% 62%",
                }}
              />
              {/* Gradient border frame */}
              <div
                className="relative w-72 h-72 md:w-80 md:h-80 profile-ring"
                style={{ borderRadius: "53% 47% 57% 43% / 38% 44% 56% 62%" }}
              >
                <img
                  src={img}
                  alt="Gloire Bryan Boungou"
                  className="w-full h-full object-cover block"
                  style={{ borderRadius: "53% 47% 57% 43% / 38% 44% 56% 62%" }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <a
            href="#About"
            className="flex flex-col items-center gap-2 text-white/30 hover:text-accent transition-colors duration-300"
          >
            <span className="text-xs uppercase tracking-widest">Défiler</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
