import Title from "./Title";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, ChevronDown, FileText, Download, X } from "lucide-react";
// ExternalLink used in PdfModal only

import imgHTML     from "../assets/techno/html.png";
import imgCSS      from "../assets/techno/css.png";
import imgJS       from "../assets/techno/js.png";
import imgREACT    from "../assets/techno/react.png";
import imgNODE     from "../assets/techno/node-js.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgVSCODE   from "../assets/techno/Visual_Studio_Code.png";
import imgTS       from "../assets/techno/typescript.svg";
import imgMONGO    from "../assets/techno/mongodb .webp";
import imgNEXT     from "../assets/techno/next-js.webp";

import consulting from "../assets/companies/42c.png";
import arpce      from "../assets/companies/Logo_arpce.png";

const skills = [
  { id: 1,  name: "HTML",        image: imgHTML },
  { id: 2,  name: "CSS",         image: imgCSS },
  { id: 3,  name: "JavaScript",  image: imgJS },
  { id: 4,  name: "TypeScript",  image: imgTS },
  { id: 5,  name: "React",       image: imgREACT },
  { id: 6,  name: "Next.js",     image: imgNEXT },
  { id: 7,  name: "Node.js",     image: imgNODE },
  { id: 8,  name: "MongoDB",     image: imgMONGO },
  { id: 9,  name: "Tailwind",    image: imgTAILWIND },
  { id: 10, name: "VS Code",     image: imgVSCODE },
];

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  type: string;
  description: string[];
  longDescription: string;
  technologies: string[];
  relatedSection: string;
  relatedLabel: string;
  rapport: string;
  image: string;
  color: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Apprenti Développeur",
    company: "42Consulting",
    period: "Déc. 2024 – présent",
    type: "Alternance",
    description: [
      "Développement d'une application de vérification et d'authentification de documents officiels.",
      "Intégration de bases de données Hyperplanning et Excel.",
      "Système d'authentification sécurisé pour écoles et étudiants.",
      "Interfaces glassmorphism modernes et responsive.",
      "Collaboration avec l'équipe IT sur la scalabilité et la sécurité.",
    ],
    longDescription:
      "Au sein de 42Consulting, j'interviens en tant qu'apprenti développeur full-stack. Mon rôle principal est la conception et le développement d'une plateforme d'authentification de documents officiels (diplômes, attestations) destinée aux établissements scolaires. J'utilise React + TypeScript pour le front-end, Node.js/Express pour l'API, et MongoDB pour la persistance. J'ai également développé deux applications mobiles autonomes dans le cadre de l'épreuve E6 du BTS SIO : GloireBoungAI (assistant vocal IA) et WeatherApp (météo en temps réel). Ce contexte d'alternance m'a permis de confronter mes compétences à des problématiques réelles : sécurité, scalabilité, UX et contraintes métier.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "React Native", "OpenAI API"],
    relatedSection: "EpreuveE6",
    relatedLabel: "Projets E6",
    rapport: "/rapport-alternance-42consulting.pdf",
    image: consulting,
    color: "#00b5ff",
  },
  {
    id: 2,
    role: "Technicien Support",
    company: "ARPCE",
    period: "Juil. – Août 2024",
    type: "Stage",
    description: [
      "Assistance utilisateurs sur les problèmes matériels & logiciels.",
      "Installation et configuration des postes de travail.",
      "Dépannage réseau (Internet, ressources internes).",
      "Gestion et mise à jour des logiciels courants.",
      "Documentation des interventions dans un registre technique.",
    ],
    longDescription:
      "Stage de deux mois à l'ARPCE (Agence de Régulation des Postes et Communications Électroniques). J'ai intégré l'équipe support informatique et assuré le quotidien du parc informatique : installation de postes Windows, configuration réseau (LAN/WiFi), dépannage logiciel, gestion des comptes utilisateurs Active Directory. Ce stage m'a offert une vision concrète de l'infrastructure IT en entreprise et renforcé mes compétences en diagnostic système. Les interventions étaient documentées dans un registre technique pour assurer la traçabilité.",
    technologies: ["Windows", "Active Directory", "Réseau LAN", "Support N1/N2", "Documentation technique"],
    relatedSection: "EpreuveE5",
    relatedLabel: "Projets E5",
    rapport: "/rapport-stage-arpce.pdf",
    image: arpce,
    color: "#7c3aed",
  },
];

/* ── Modal PDF ────────────────────────────────────────── */
const PdfModal = ({ exp, onClose }: { exp: Experience; onClose: () => void }) => (
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      />
      <motion.div
        className="relative w-full max-w-5xl h-[90vh] flex flex-col rounded-2xl overflow-hidden"
        style={{ background: "#0d1525", border: "1px solid rgba(255,255,255,0.1)" }}
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between px-6 py-4 flex-shrink-0"
             style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                 style={{ background: `linear-gradient(135deg, ${exp.color}, ${exp.color === "#00b5ff" ? "#7c3aed" : "#4f46e5"})` }}>
              <FileText className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">{exp.company}</p>
              <p className="text-white/40 text-xs">Rapport de {exp.type.toLowerCase()}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href={exp.rapport} download
               className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg"
               style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)" }}>
              <Download className="w-3.5 h-3.5" /> Télécharger
            </a>
            <a href={exp.rapport} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg"
               style={{ background: `${exp.color}20`, color: exp.color, border: `1px solid ${exp.color}40` }}>
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
          <iframe src={`${exp.rapport}#view=FitH`} className="w-full h-full"
                  title={`Rapport — ${exp.company}`} style={{ border: "none", background: "#fff" }} />
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

/* ── Carte expérience ─────────────────────────────────── */
const ExperienceCard = ({ exp, i }: { exp: Experience; i: number }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  const handleViewProjects = () => {
    document.getElementById(exp.relatedSection)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {showPdf && <PdfModal exp={exp} onClose={() => setShowPdf(false)} />}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
      >
      <div className="glass-card p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <img
            src={exp.image}
            alt={exp.company}
            className="w-11 h-11 rounded-xl object-contain flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.06)", padding: "4px" }}
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center flex-wrap gap-2 mb-1">
              <h3 className="font-bold text-white text-base">{exp.role}</h3>
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ background: `${exp.color}20`, color: exp.color, border: `1px solid ${exp.color}40` }}
              >
                {exp.type}
              </span>
            </div>
            <p className="text-accent font-semibold text-sm">{exp.company}</p>
            <p className="text-white/40 text-xs mt-0.5">{exp.period}</p>
          </div>
        </div>

        {/* Description courte */}
        <ul className="space-y-1.5 mb-4">
          {exp.description.map((d, j) => (
            <li key={j} className="flex items-start gap-2 text-sm text-white/55">
              <span className="text-accent mt-0.5 flex-shrink-0">›</span>
              {d}
            </li>
          ))}
        </ul>

        {/* Badges techno */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {exp.technologies.map((t, j) => (
            <span
              key={j}
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{ background: `${exp.color}12`, border: `1px solid ${exp.color}30`, color: exp.color }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Description longue accordéon */}
        <AnimatePresence initial={false}>
          {showDetails && (
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-white/45 text-xs leading-relaxed mb-4 overflow-hidden"
            >
              {exp.longDescription}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="mt-auto pt-4 border-t border-white/6 flex flex-col gap-2">
          {/* Rapport */}
          <button
            onClick={() => setShowPdf(true)}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
            style={{ background: `linear-gradient(135deg, ${exp.color}, ${exp.color === "#00b5ff" ? "#7c3aed" : "#4f46e5"})` }}
          >
            <FileText className="w-4 h-4" />
            Voir le rapport
          </button>
          {/* Détails uniquement */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition-colors"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}
          >
            <ChevronDown
              className="w-3.5 h-3.5 transition-transform duration-300"
              style={{ transform: showDetails ? "rotate(180deg)" : "rotate(0deg)" }}
            />
            {showDetails ? "Masquer les détails" : "Voir les détails"}
          </button>
        </div>
      </div>
      </motion.div>
    </>
  );
};

/* ── Section ─────────────────────────────────────────── */
const Experiences = () => {
  return (
    <section id="Experiences" className="section-primary py-24 px-6 md:px-[8%]">
      <div className="max-w-7xl mx-auto">
        <Title
          title="Expériences"
          subtitle="Mon parcours professionnel et mes compétences techniques."
        />

        <div className="flex flex-col gap-10">
          {/* Timeline */}
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} i={i} />
            ))}
          </div>

          {/* Skills — horizontal strip */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4 text-center">
              Stack technique
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((sk, i) => (
                <motion.div
                  key={sk.id}
                  className="skill-chip flex-row px-4 py-2.5"
                  style={{ flexDirection: "row", gap: "8px" }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                >
                  <img src={sk.image} alt={sk.name} className="w-6 h-6 object-contain flex-shrink-0" />
                  <span className="text-xs text-white/65 font-medium whitespace-nowrap">{sk.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
