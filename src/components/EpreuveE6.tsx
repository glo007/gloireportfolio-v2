import { FileText, ExternalLink, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import Title from "./Title";

import mobileScreenshot from "../assets/Simulator Screenshot - iPhone 16 Pro - 2025-05-01 at 14.34.47.png";

const projectsE6 = [
  {
    title: "GloireBoungAI",
    subtitle: "Assistant vocal intelligent",
    description:
      "Application mobile React Native intégrant l'API OpenAI — l'utilisateur interagit avec une IA via la voix, avec reconnaissance vocale et synthèse text-to-speech.",
    technologies: ["React Native", "Expo", "OpenAI API", "SpeechRecognition", "TTS"],
    pdf: "/GloireBoungAI – Assistant Vocal Intelligent .pdf",
    fiche: "/fiche-de-réalisation.pdf",
    image: mobileScreenshot,
    color: "#00b5ff",
  },
  {
    title: "WeatherApp",
    subtitle: "Application météo dynamique",
    description:
      "Application mobile affichant les conditions météo actuelles et les prévisions à 7 jours via l'API OpenWeather, avec une interface moderne et animée.",
    technologies: ["React Native", "Expo", "OpenWeather API", "Tailwind Native"],
    pdf: null,
    fiche: "/Fiche-de-réalisation.2.pdf",
    image: null,
    color: "#7c3aed",
  },
];

const EpreuveE6 = () => {
  return (
    <section id="EpreuveE6" className="py-24 px-6 md:px-[8%]" style={{ background: "#080e1c" }}>
      <div className="max-w-7xl mx-auto">
        <Title
          title="Épreuve E6 — BTS SIO"
          subtitle="Applications mobiles réalisées en autonomie dans le cadre du BTS SIO."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projectsE6.map((p, i) => (
            <motion.div
              key={i}
              className="glass-card overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
            >
              {/* Image or placeholder */}
              <div className="h-52 relative overflow-hidden flex items-center justify-center"
                   style={{ background: `linear-gradient(135deg, ${p.color}18, ${p.color}08)` }}>
                {p.image ? (
                  <>
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full object-contain"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(180deg, transparent 50%, #0d1525 100%)`,
                      }}
                    />
                  </>
                ) : (
                  <Smartphone className="w-20 h-20 opacity-20" style={{ color: p.color }} />
                )}

                <div
                  className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: `${p.color}20`,
                    border: `1px solid ${p.color}40`,
                    color: p.color,
                  }}
                >
                  <Smartphone className="w-3 h-3" />
                  Mobile
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-bold text-white text-xl">{p.title}</h3>
                  <p className="gradient-text text-sm font-semibold">{p.subtitle}</p>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.technologies.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{
                        background: `${p.color}12`,
                        border: `1px solid ${p.color}30`,
                        color: p.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                  {p.pdf && (
                    <a
                      href={p.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Documentation
                    </a>
                  )}
                  <a
                    href={p.fiche}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-white/40 hover:text-white transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Fiche de situation
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpreuveE6;
