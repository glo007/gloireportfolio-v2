import { MailOpen, FileDown, ArrowDown } from "lucide-react";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import img from "../assets/IMG_3235.jpg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const stats = [
  { value: "10+",  label: "Projets" },
  { value: "2+",  label: "Ans d'exp." },
  { value: "10+", label: "Technologies" },
];

const Home = () => {
  return (
    <section
      id="Home"
      className="hero-section min-h-screen relative flex items-center px-6 md:px-[8%] pt-24 pb-16 overflow-hidden"
    >
      {/* ── Cinematic background photo ───────────────────── */}
      <motion.div
        className="absolute inset-0"
        style={{ zIndex: 0 }}
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={img}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center top", filter: "brightness(0.55) contrast(1.12) saturate(0.8)" }}
        />

        {/* Blue-purple cinematic color grade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,30,100,0.38) 0%, rgba(70,0,140,0.18) 60%, transparent 100%)",
          }}
        />

        {/* Left-to-right readability gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(8,14,28,1) 0%, rgba(8,14,28,0.93) 28%, rgba(8,14,28,0.48) 55%, rgba(8,14,28,0.06) 80%, transparent 100%)",
          }}
        />

        {/* Top vignette */}
        <div
          className="absolute top-0 inset-x-0 h-40"
          style={{ background: "linear-gradient(to bottom, rgba(8,14,28,0.65) 0%, transparent 100%)" }}
        />

        {/* Bottom fade to site background */}
        <div
          className="absolute bottom-0 inset-x-0 h-56"
          style={{ background: "linear-gradient(to bottom, transparent 0%, var(--bg-primary) 100%)" }}
        />

        {/* Radial vignette edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 70% 40%, transparent 28%, rgba(8,14,28,0.6) 100%)",
          }}
        />
      </motion.div>

      {/* Subtle accent glow — illuminates the photo side */}
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
        style={{ zIndex: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 1 }}
      >
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse 65% 65% at 65% 38%, rgba(0,181,255,0.07) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Blobs (very subtle on top of photo) */}
      <div className="hero-blob-1" style={{ zIndex: 1 }} />
      <div className="hero-blob-2" style={{ zIndex: 1 }} />

      {/* ── Main content ─────────────────────────────────── */}
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="max-w-[600px]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
          >

            <div className="pill-badge mb-5 inline-flex">Disponible · Alternance / Stage</div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-1">
              Bonjour, je suis
            </h1>

            <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-3 gradient-text">
              Gloire Bryan<br />
              <span className="text-3xl md:text-4xl xl:text-5xl">BOUNGOU MBIMI</span>
            </h2>

            <div className="text-xl md:text-2xl font-semibold leading-tight mb-6 min-h-[2rem] flex items-center gap-2">
              <span className="text-white/40">—</span>
              <span className="text-white/75">
                <Typewriter
                  options={{
                    strings: ["Développeur Web Full-Stack", "Étudiant BTS SIO SLAM", "Ex-Apprenti chez 42Consulting"],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 30,
                  }}
                />
              </span>
            </div>

            <p className="text-white/55 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              Étudiant en BTS SIO option SLAM, ex-apprenti chez&nbsp;
              <span className="text-accent font-semibold">42Consulting</span>.
              Je conçois des solutions web innovantes — du backend robuste aux interfaces modernes et
              sécurisées.
            </p>

            {/* Stats */}
            <div className="flex gap-10 mb-8">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="stat-number">{s.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#Contact" className="btn-gradient">
                <MailOpen className="w-4 h-4" />
                Me contacter
              </a>
              <a
                href="./CV-BOUNGOU-Gloire.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-accent"
              >
                <FileDown className="w-4 h-4" />
                Mon CV
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-3">
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
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-start mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
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
