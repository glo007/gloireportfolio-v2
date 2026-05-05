import { FileText, Download, X, ExternalLink, ShieldCheck, Braces, ScanFace, ListTodo, Rocket, Hash, Activity, Server, Network } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Title from "./Title";

/* ── Types ────────────────────────────────────────────── */
interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  pdf: string;
  color: string;
  gradient: string;
  icon: React.ReactNode;
  stats: { label: string; value: string }[];
}

/* ── Données ──────────────────────────────────────────── */
const projects: Project[] = [
  {
    title: "Diploma Gate Guardian",
    description: "Vérification d'authenticité des diplômes via un code unique.",
    longDescription:
      "Application web fullstack permettant aux établissements de vérifier l'authenticité d'un diplôme en saisissant un code unique. Le système interroge une base de données sécurisée (MongoDB) et retourne les informations du diplômé avec son statut de validité. Développé dans le cadre de mon alternance chez 42Consulting.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    pdf: "/Documentation-Diploma Gate Guardian.pdf",
    color: "#00b5ff",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)",
    icon: <ShieldCheck className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Type", value: "Web App" },
      { label: "Contexte", value: "Alternance" },
      { label: "Stack", value: "Fullstack" },
    ],
  },
  
  {
    title: "JavaScript Projects",
    description: "Collection de mini-applications web pour pratiquer JavaScript.",
    longDescription:
      "Ensemble de projets JavaScript interactifs réalisés en autonomie : calculatrice, quiz dynamique, gestionnaire de tâches, horloge analogique, convertisseur de devises. Chaque mini-projet met en pratique une notion JavaScript spécifique (DOM, événements, API fetch, LocalStorage, animations CSS).",
    technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Fetch API"],
    pdf: "/JavaScript Projects – Mini Applications Web Interactives .pdf",
    color: "#eab308",
    gradient: "linear-gradient(135deg, #eab308 0%, #f97316 100%)",
    icon: <Braces className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Type", value: "Web Apps" },
      { label: "Projets", value: "6 apps" },
      { label: "Contexte", value: "Scolaire" },
    ],
  },
  {
    title: "FaceTracking Python",
    description: "Suivi du visage en temps réel avec OpenCV et Python.",
    longDescription:
      "Programme Python utilisant la bibliothèque OpenCV pour détecter et suivre les visages en temps réel depuis la webcam. Le système identifie les points du visage (yeux, bouche, nez) via Haar Cascade Classifiers et les suit dans le flux vidéo. Projet d'introduction à la Computer Vision.",
    technologies: ["Python 3", "OpenCV", "NumPy", "Haar Cascade"],
    pdf: "/FaceTracking-Python .pdf",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
    icon: <ScanFace className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Type", value: "Vision IA" },
      { label: "Langage", value: "Python" },
      { label: "Contexte", value: "Personnel" },
    ],
  },
  {
    title: "Gloire ToDoList",
    description: "Application mobile de gestion de tâches en React Native.",
    longDescription:
      "Application mobile de gestion de tâches développée avec React Native et Expo. Fonctionnalités : ajout/suppression/édition de tâches, marquage comme terminée, filtrage par statut, persistance locale avec AsyncStorage, interface fluide avec animations. Testée sur iOS (Xcode Simulator).",
    technologies: ["React Native", "Expo", "AsyncStorage", "Xcode"],
    pdf: "/Gloire-ToDoList .pdf",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
    icon: <ListTodo className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Type", value: "Mobile App" },
      { label: "OS", value: "iOS" },
      { label: "Contexte", value: "Personnel" },
    ],
  },
  {
    title: "Bataille Aérienne",
    description: "Jeu de bataille aérienne développé en Python avec Tkinter.",
    longDescription:
      "Jeu vidéo 2D inspiré du classique Space Invaders, entièrement développé en Python avec la bibliothèque graphique Tkinter. Le joueur contrôle un avion et doit esquiver/détruire les ennemis. Implémentation du moteur de collision, du système de score, des animations et des niveaux de difficulté progressifs.",
    technologies: ["Python 3", "Tkinter", "POO", "Canvas"],
    pdf: "/Documentation du Mini Projet-Bataille Aérienne .pdf",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #0f172a 100%)",
    icon: <Rocket className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Type", value: "Jeu 2D" },
      { label: "Langage", value: "Python" },
      { label: "Contexte", value: "Scolaire" },
    ],
  },
  {
    title: "Jeu du Morpion",
    description: "Tic-Tac-Toe complet avec interface graphique Tkinter.",
    longDescription:
      "Implémentation complète du jeu de Morpion (Tic-Tac-Toe) en Python avec interface graphique Tkinter. Modes de jeu : 2 joueurs ou contre l'IA (algorithme Minimax). Détection automatique du gagnant, gestion des matchs nuls, historique des scores, reset de partie. L'IA est imbattable sur le mode difficile.",
    technologies: ["Python 3", "Tkinter", "Minimax", "POO"],
    pdf: "/Documentation Complète — Morpion Tkinter (Tic-Tac-Toe) .pdf",
    color: "#ef4444",
    gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #7f1d1d 100%)",
    icon: <Hash className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Type", value: "Jeu IA" },
      { label: "Algo", value: "Minimax" },
      { label: "Contexte", value: "Scolaire" },
    ],
  },
  {
    title: "Analyse de Trafic Réseau",
    description: "Diagnostic réseau et analyse de protocoles avec Wireshark.",
    longDescription:
      "Capture et analyse de trames réseau pour comprendre le fonctionnement des protocoles (HTTP, DNS, TCP). Identification d'anomalies de sécurité et diagnostic de problèmes de connectivité via l'inspection profonde des paquets.",
    technologies: ["Wireshark", "Protocoles TCP/IP", "Sécurité Réseau"],
    pdf: "public/6-Lab - Using Wireshark to Examine Ethernet Frames solution.pdf",
    color: "#4ade80",
    gradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
    icon: <Activity className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Outil", value: "Wireshark" },
      { label: "Contexte", value: "SISR" },
      { label: "Focus", value: "Diagnostic" },
    ],
  },
  {
    title: "Services Réseau Windows/Linux",
    description: "Installation et configuration de serveurs DHCP et DNS.",
    longDescription:
      "Mise en place de l'adressage automatique (DHCP) et de la résolution de noms (DNS) sur des environnements mixtes Windows et Linux. Optimisation de la gestion du parc informatique et de la connectivité réseau.",
    technologies: ["Windows Server", "Linux", "DHCP", "DNS"],
    pdf: "public/Lab-Configuring_Base_Switch_Settings.pdf",
    color: "#fbbf24",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    icon: <Server className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "OS", value: "Multi-plateforme" },
      { label: "Type", value: "Infrastructure" },
      { label: "Services", value: "DHCP/DNS" },
    ],
  },
  {
    title: "Maquettage d'infrastructure",
    description: "Simulation d'un réseau d'entreprise complet avec routage et adressage IP.",
    longDescription:
      "Simulation d'un réseau d'entreprise complet avec routage et adressage IP via l'outil Cisco Packet Tracer. Conception de l'architecture logique et physique d'un réseau local performant.",
    technologies: ["Cisco Packet Tracer", "Routage", "Adressage IP"],
    pdf: "public/Doc-cloisonnement-BOUNGOU-MBIMI.pdf",
    color: "#0ea5e9",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)",
    icon: <Network className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Outil", value: "Packet Tracer" },
      { label: "Réseau", value: "Entreprise" },
      { label: "Focus", value: "Routage" },
    ],
  },
  
];

/* ── Composant Modal PDF ──────────────────────────────── */
const PdfModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => (
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Panel */}
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
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: project.gradient }}
            >
              <FileText className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">{project.title}</p>
              <p className="text-white/40 text-xs">Documentation PDF</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.pdf}
              download
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg"
              style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)" }}
            >
              <Download className="w-3.5 h-3.5" />
              Télécharger
            </a>
            <a
              href={project.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg"
              style={{ background: "rgba(0,181,255,0.12)", color: "#00b5ff", border: "1px solid rgba(0,181,255,0.25)" }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Ouvrir
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <X className="w-4 h-4 text-white/60" />
            </button>
          </div>
        </div>

        {/* PDF iframe */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src={`${project.pdf}#view=FitH`}
            className="w-full h-full"
            title={`Rapport — ${project.title}`}
            style={{ border: "none", background: "#fff" }}
          />
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

/* ── Carte Projet ─────────────────────────────────────── */
const ProjectCard = ({ p, index }: { p: Project; index: number }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  return (
    <>
      {showPdf && <PdfModal project={p} onClose={() => setShowPdf(false)} />}

      <motion.div
        className="project-card flex flex-col"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
      >
        {/* ── Cover visuel ── */}
        <div
          className="relative h-44 flex flex-col items-center justify-center overflow-hidden"
          style={{ background: p.gradient }}
        >
          {/* Pattern décoratif */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 1px, transparent 1px),
                               radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />
          <div className="absolute top-3 right-3 w-20 h-20 rounded-full opacity-20"
               style={{ background: "rgba(255,255,255,0.3)", filter: "blur(20px)" }} />
          <div className="absolute bottom-3 left-3 w-16 h-16 rounded-full opacity-15"
               style={{ background: "rgba(255,255,255,0.4)", filter: "blur(16px)" }} />

          {/* Icône centrale */}
          <div className="relative z-10 flex flex-col items-center gap-2">
            {p.icon}
            <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">
              {p.stats[0].value}
            </span>
          </div>
        </div>

        {/* ── Contenu ── */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="font-bold text-white text-base mb-1.5">{p.title}</h3>
          <p className="text-white/50 text-sm mb-3 leading-relaxed">{p.description}</p>

          {/* Stats rapides */}
          <div className="flex gap-3 mb-3">
            {p.stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-xs font-bold text-white/80">{s.value}</div>
                <div className="text-[10px] text-white/35 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Badges techno */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.technologies.map((t, j) => (
              <span
                key={j}
                className="text-xs font-medium px-2.5 py-1 rounded-full"
                style={{
                  background: `${p.color}15`,
                  border: `1px solid ${p.color}35`,
                  color: p.color,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Description longue (accordéon) */}
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
          <div className="mt-auto flex flex-col gap-2 pt-3 border-t border-white/6">
            {/* Bouton principal — voir le rapport */}
            <button
              onClick={() => setShowPdf(true)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
              style={{ background: p.gradient }}
            >
              <FileText className="w-4 h-4" />
              Voir le rapport
            </button>

            <div className="flex gap-2">
              {/* Détails */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition-colors"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                {showDetails ? "Moins" : "Détails"}
              </button>
              {/* Télécharger */}
              <a
                href={p.pdf}
                download
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition-colors"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <Download className="w-3.5 h-3.5" />
                Télécharger
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

/* ── Section principale ───────────────────────────────── */
const EpreuveE5 = () => (
  <section id="EpreuveE5" className="section-alt py-24 px-6 md:px-[8%]">
    <div className="max-w-7xl mx-auto">
      <Title
        title="Épreuve E5 — BTS SIO"
        subtitle="Projets informatiques réalisés en entreprise et en autonomie. Cliquez sur un projet pour lire son rapport."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} p={p} index={i} />
        ))}
      </div>

      {/* Tableau de synthèse */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="/BTS-SIO-2026-BOUNGOU GLOIRE.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient inline-flex"
        >
          <Download className="w-4 h-4" />
          Tableau de Synthèse E5
        </a>
      </motion.div>
    </div>
  </section>
);

export default EpreuveE5;
