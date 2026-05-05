import { FileText, Download, X, ExternalLink, BrainCircuit, CloudSun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Title from "./Title";

import mobileScreenshot from "../assets/Simulator Screenshot - iPhone 16 Pro - 2025-05-01 at 14.34.47.png";

interface ProjectE6 {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  pdf: string | null;
  fiche: string;
  image: string | null;
  color: string;
  gradient: string;
  icon: React.ReactNode;
  stats: { label: string; value: string }[];
}

const projectsE6: ProjectE6[] = [
  {
    title: "Diploma Gate Guardian",
    subtitle: "Application web de surveillance de diplômes",
    description:
      "Diploma Gate Guardian est une application numérique de vérification et d’authentification de documents officiels, conçue principalement pour les établissements scolaires et les administrations publiques.",
    longDescription:
      "Application mweb  est une application web développée en TypeScript avec React, permettant de générer et vérifier l’authenticité de documents officiels (CSV, Excel, PDF) grâce à un code unique attribué à chaque document.",
    technologies: ["React Native", "Expo", "OpenAI API", "SpeechRecognition", "TTS"],
    pdf: "/GloireBoungAI – Assistant Vocal Intelligent .pdf",
    fiche: "/fiche-de-réalisation.pdf",
    image: mobileScreenshot,
    color: "#00b5ff",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)",
    icon: <BrainCircuit className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Type", value: "Web App" },
      { label: "API", value: "React (TypeScript)" },
      { label: "Format", value: "PDF/CSV/Excel" },
    ],
  },
  {
    title: "Next Drop",
    subtitle: "plateforme de découverte de jeux vidéo",
    description:
      "Site web présentant les prochaines sorties de jeux vidéo avec une interface immersive.",
    longDescription:
      "NextDrop est une plateforme web au design rétrofuturiste inspiré du cyberpunk. Elle permet aux utilisateurs de découvrir les prochaines sorties de jeux vidéo sur différentes plateformes avec une navigation fluide et animée.",
    technologies: ["HTML", "CSS", "JavaScript"],
    pdf: null,
    fiche: "/Fiche-de-réalisation.2.pdf",
    image: null,
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
    icon: <CloudSun className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Type", value: "Web App" },
      { label: "API", value: "HTML/CSS/JavaScript" },
      { label: "Format", value: "Gaming / Cyberpunk" },
    ],
  },
];

/* ── Modal PDF ────────────────────────────────────────── */
const PdfModal = ({
  project,
  pdfUrl,
  onClose,
}: {
  project: ProjectE6;
  pdfUrl: string;
  onClose: () => void;
}) => (
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <motion.div
        className="relative w-full max-w-5xl h-[90vh] flex flex-col rounded-2xl overflow-hidden"
        style={{ background: "#0d1525", border: "1px solid rgba(255,255,255,0.1)" }}
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                 style={{ background: project.gradient }}>
              <FileText className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">{project.title}</p>
              <p className="text-white/40 text-xs">Documentation PDF</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href={pdfUrl} download
               className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg"
               style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)" }}>
              <Download className="w-3.5 h-3.5" /> Télécharger
            </a>
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg"
               style={{ background: "rgba(0,181,255,0.12)", color: "#00b5ff", border: "1px solid rgba(0,181,255,0.25)" }}>
              <ExternalLink className="w-3.5 h-3.5" /> Ouvrir
            </a>
            <button onClick={onClose}
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.06)" }}>
              <X className="w-4 h-4 text-white/60" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <iframe src={`${pdfUrl}#view=FitH`} className="w-full h-full"
                  title={`PDF — ${project.title}`} style={{ border: "none", background: "#fff" }} />
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

/* ── Carte projet E6 ──────────────────────────────────── */
const ProjectCardE6 = ({ p, index }: { p: ProjectE6; index: number }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [activePdf, setActivePdf] = useState<string | null>(null);

  return (
    <>
      {activePdf && <PdfModal project={p} pdfUrl={activePdf} onClose={() => setActivePdf(null)} />}

      <motion.div
        className="project-card flex flex-col"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
      >
        {/* Cover */}
        <div className="relative h-52 overflow-hidden flex items-center justify-center"
             style={{ background: p.gradient }}>
          <div className="absolute inset-0 opacity-10"
               style={{
                 backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 1px, transparent 1px),
                                   radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                 backgroundSize: "30px 30px",
               }} />
          <div className="absolute top-3 right-3 w-24 h-24 rounded-full opacity-20"
               style={{ background: "rgba(255,255,255,0.3)", filter: "blur(24px)" }} />

          {p.image ? (
            <>
              <img src={p.image} alt={p.title}
                   className="relative z-10 h-full object-contain drop-shadow-2xl" />
              <div className="absolute inset-0"
                   style={{ background: `linear-gradient(180deg, transparent 50%, ${p.color}80 100%)` }} />
            </>
          ) : (
            <div className="relative z-10 flex flex-col items-center gap-2">
              {p.icon}
              <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">{p.stats[0].value}</span>
            </div>
          )}

          {/* Badge Mobile */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
               style={{ background: "rgba(0,0,0,0.45)", color: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)" }}>
            📱 Mobile
          </div>
        </div>

        {/* Contenu */}
        <div className="flex flex-col flex-1 p-6">
          <div className="mb-3">
            <h3 className="font-bold text-white text-xl">{p.title}</h3>
            <p className="text-sm font-semibold mt-0.5" style={{ color: p.color }}>{p.subtitle}</p>
          </div>

          <p className="text-white/50 text-sm leading-relaxed mb-3">{p.description}</p>

          {/* Stats */}
          <div className="flex gap-4 mb-3">
            {p.stats.map((s, i) => (
              <div key={i}>
                <div className="text-xs font-bold text-white/80">{s.value}</div>
                <div className="text-[10px] text-white/35 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.technologies.map((t, j) => (
              <span key={j} className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{ background: `${p.color}12`, border: `1px solid ${p.color}30`, color: p.color }}>
                {t}
              </span>
            ))}
          </div>

          {/* Description longue */}
          <AnimatePresence initial={false}>
            {showDetails && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-white/45 text-xs leading-relaxed mb-4 overflow-hidden"
              >
                {p.longDescription}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-white/6">
            {/* Boutons rapports */}
            <div className="flex flex-col gap-2">
              {p.pdf && (
                <button
                  onClick={() => setActivePdf(p.pdf!)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                  style={{ background: p.gradient }}
                >
                  <FileText className="w-4 h-4" />
                  Voir la documentation
                </button>
              )}
              <button
                onClick={() => setActivePdf(p.fiche)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                style={{
                  background: `${p.color}10`,
                  border: `1px solid ${p.color}30`,
                  color: p.color,
                }}
              >
                <FileText className="w-4 h-4" />
                Fiche de situation professionnelle
              </button>
            </div>

            {/* Secondaires */}
            <div className="flex gap-2">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex-1 py-2 rounded-xl text-xs font-semibold transition-colors"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}
              >
                {showDetails ? "Masquer" : "Détails"}
              </button>
              {p.pdf && (
                <a href={p.pdf} download
                   className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition-colors"
                   style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}>
                  <Download className="w-3.5 h-3.5" /> Télécharger
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

/* ── Section ──────────────────────────────────────────── */
const EpreuveE6 = () => (
  <section id="EpreuveE6" className="py-24 px-6 md:px-[8%]" style={{ background: "#080e1c" }}>
    <div className="max-w-7xl mx-auto">
      <Title
        title="Épreuve E6 — BTS SIO"
        subtitle="Applications mobiles réalisées en autonomie. Consultez les rapports et fiches directement en ligne."
      />
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projectsE6.map((p, i) => (
          <ProjectCardE6 key={i} p={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default EpreuveE6;
