import {
  FileText, Download, X, ExternalLink, ShieldCheck, Braces, ScanFace, ListTodo, Rocket, Hash,
  Activity, Server, Network, Gamepad2, Globe, Database, BarChart3, Router,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";
import Title from "./Title";

/* ── Types ────────────────────────────────────────────── */
type Category = "Web & Sécurité" | "Data" | "Logiciel & Mobile" | "Réseau & Systèmes";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: Category;
  context: string;
  docs: { label: string; url: string }[];
  color: string;
  gradient: string;
  icon: React.ReactNode;
  stats: { label: string; value: string }[];
}

/* ── Données ──────────────────────────────────────────── */
const projects: Project[] = [
  {
    title: "Diploma Gate Guardian",
    description: "Génération et vérification de l'authenticité de documents officiels via un code unique sécurisé.",
    longDescription:
      "Application web fullstack développée en alternance chez 42Consulting. Les établissements génèrent des documents authentifiés (diplômes, attestations) dotés d'un code unique, et les vérificateurs confirment leur validité en temps réel via une API sécurisée (JWT, contrôle des habilitations). Import des données depuis Hyperplanning et Excel, export PDF/CSV/Excel.",
    technologies: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "JWT"],
    category: "Web & Sécurité",
    context: "Alternance 42Consulting",
    docs: [
      { label: "Documentation", url: "./Documentation-Diploma Gate Guardian.pdf" },
      { label: "Fiche E6", url: "./Fiche de situation professionnelle SLAM_1.pdf" },
    ],
    color: "#00b5ff",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)",
    icon: <ShieldCheck className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Type", value: "Web App" },
      { label: "Stack", value: "Fullstack" },
      { label: "Focus", value: "Authentification" },
    ],
  },
  {
    title: "Next Drop",
    description: "Plateforme de découverte des prochaines sorties de jeux vidéo au design rétrofuturiste cyberpunk.",
    longDescription:
      "Site web immersif présentant les prochaines sorties de jeux vidéo par plateforme (PC, PS5, Xbox, Switch), avec navigation fluide et animations CSS avancées. Entièrement développé en HTML/CSS/JavaScript vanilla.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    category: "Web & Sécurité",
    context: "BTS SIO",
    docs: [{ label: "Fiche E6", url: "./Fiche de situation professionnelle SLAM-2.pdf" }],
    color: "#a78bfa",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
    icon: <Gamepad2 className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Type", value: "Site Web" },
      { label: "Stack", value: "Vanilla JS" },
      { label: "Style", value: "Cyberpunk" },
    ],
  },
  {
    title: "JavaScript Projects",
    description: "Collection de mini-applications web interactives pour maîtriser JavaScript.",
    longDescription:
      "Ensemble de projets JavaScript réalisés en autonomie : calculatrice, quiz dynamique, gestionnaire de tâches, horloge analogique, convertisseur de devises. Chaque mini-projet met en pratique une notion spécifique (DOM, événements, API fetch, LocalStorage, animations CSS).",
    technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Fetch API"],
    category: "Web & Sécurité",
    context: "Personnel",
    docs: [{ label: "Documentation", url: "./JavaScript Projects – Mini Applications Web Interactives .pdf" }],
    color: "#eab308",
    gradient: "linear-gradient(135deg, #eab308 0%, #f97316 100%)",
    icon: <Braces className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Type", value: "Web Apps" },
      { label: "Projets", value: "6 apps" },
      { label: "Contexte", value: "Personnel" },
    ],
  },
  {
    title: "Site web de voyage",
    description: "Interface vitrine responsive pour la présentation de destinations.",
    longDescription:
      "Conception d'un site vitrine responsive présentant des destinations de voyage : structure sémantique HTML, mise en page CSS adaptée mobile/desktop et mise en valeur visuelle du contenu.",
    technologies: ["HTML5", "CSS3", "Responsive"],
    category: "Web & Sécurité",
    context: "BTS SIO",
    docs: [],
    color: "#38bdf8",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)",
    icon: <Globe className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Type", value: "Site vitrine" },
      { label: "Stack", value: "HTML/CSS" },
      { label: "Contexte", value: "BTS SIO" },
    ],
  },
  {
    title: "ETL — Salaires de Boston",
    description: "Pipeline ETL complet d'analyse des écarts de salaires municipaux à Boston (2018).",
    longDescription:
      "Extraction des données depuis une API publique, transformation (nettoyage, typage, agrégation) et génération de rapports statistiques par département. Tests unitaires automatisés avec Pytest et intégration continue via GitHub Actions. Projet mené en Agile DataOps : sprints, backlog, daily meetings et livrables documentés.",
    technologies: ["Python", "Pandas", "NumPy", "Pytest", "GitHub Actions"],
    category: "Data",
    context: "Bachelor CDA",
    docs: [],
    color: "#f472b6",
    gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    icon: <Database className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Type", value: "Pipeline ETL" },
      { label: "CI/CD", value: "GH Actions" },
      { label: "Contexte", value: "CDA" },
    ],
  },
  {
    title: "DataTrack",
    description: "Pipeline DataOps d'analyse des performances scolaires avec tableau de bord interactif.",
    longDescription:
      "Pipeline DataOps construit à partir du dataset Students Performance (Kaggle) : extraction, nettoyage et stockage dans PostgreSQL, puis visualisation via un dashboard Streamlit. Méthodologie Scrum (user stories, story points, sprint review, rétrospective) et suivi Kanban sur GitHub Projects.",
    technologies: ["Python", "Pandas", "PostgreSQL", "Streamlit", "GitHub Projects"],
    category: "Data",
    context: "Bachelor CDA",
    docs: [],
    color: "#34d399",
    gradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
    icon: <BarChart3 className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Type", value: "Dashboard" },
      { label: "BDD", value: "PostgreSQL" },
      { label: "Contexte", value: "CDA" },
    ],
  },
  {
    title: "Gloire ToDoList",
    description: "Application mobile de gestion de tâches en React Native.",
    longDescription:
      "Application mobile développée avec React Native et Expo : ajout/suppression/édition de tâches, marquage comme terminée, filtrage par statut, persistance locale avec AsyncStorage et interface animée. Testée sur iOS (Xcode Simulator).",
    technologies: ["React Native", "Expo", "AsyncStorage", "Xcode"],
    category: "Logiciel & Mobile",
    context: "Personnel",
    docs: [{ label: "Documentation", url: "./Gloire-ToDoList .pdf" }],
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
    title: "FaceTracking Python",
    description: "Détection et suivi du visage en temps réel avec OpenCV.",
    longDescription:
      "Programme Python détectant et suivant les visages en temps réel depuis la webcam. Identification des points du visage (yeux, bouche, nez) via Haar Cascade Classifiers et suivi dans le flux vidéo. Introduction à la Computer Vision.",
    technologies: ["Python 3", "OpenCV", "NumPy", "Haar Cascade"],
    category: "Logiciel & Mobile",
    context: "Personnel",
    docs: [{ label: "Documentation", url: "./FaceTracking-Python .pdf" }],
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
    title: "Bataille Aérienne",
    description: "Jeu 2D de bataille aérienne développé en Python avec Tkinter.",
    longDescription:
      "Jeu inspiré de Space Invaders, entièrement développé en Python/Tkinter. Le joueur contrôle un avion et doit esquiver/détruire les ennemis. Moteur de collision, système de score, animations et niveaux de difficulté progressifs.",
    technologies: ["Python 3", "Tkinter", "POO", "Canvas"],
    category: "Logiciel & Mobile",
    context: "BTS SIO",
    docs: [{ label: "Documentation", url: "./Documentation du Mini Projet-Bataille Aérienne .pdf" }],
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #0f172a 100%)",
    icon: <Rocket className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Type", value: "Jeu 2D" },
      { label: "Langage", value: "Python" },
      { label: "Contexte", value: "BTS SIO" },
    ],
  },
  {
    title: "Jeu du Morpion",
    description: "Tic-Tac-Toe complet avec IA Minimax et interface Tkinter.",
    longDescription:
      "Morpion en Python avec interface Tkinter. Modes 2 joueurs ou contre l'IA (algorithme Minimax), détection automatique du gagnant, gestion des matchs nuls, historique des scores. L'IA est imbattable en mode difficile.",
    technologies: ["Python 3", "Tkinter", "Minimax", "POO"],
    category: "Logiciel & Mobile",
    context: "BTS SIO",
    docs: [{ label: "Documentation", url: "./Documentation Complète — Morpion Tkinter (Tic-Tac-Toe) .pdf" }],
    color: "#ef4444",
    gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #7f1d1d 100%)",
    icon: <Hash className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Type", value: "Jeu IA" },
      { label: "Algo", value: "Minimax" },
      { label: "Contexte", value: "BTS SIO" },
    ],
  },
  {
    title: "Cloisonnement réseau",
    description: "Segmentation d'un réseau d'entreprise en cinq sous-réseaux interconnectés par trois routeurs.",
    longDescription:
      "Mission de cloisonnement pour une entreprise dont serveurs, salariés et clients partageaient le même réseau IP (congestion, conflits d'adresses, failles de sécurité). Conception du schéma, plan d'adressage, configuration des routeurs et commutateurs sous Cisco Packet Tracer, puis tests de connectivité.",
    technologies: ["Cisco Packet Tracer", "Routage", "Adressage IP", "Sécurité réseau"],
    category: "Réseau & Systèmes",
    context: "BTS SIO",
    docs: [{ label: "Documentation", url: "./Doc-cloisonnement-BOUNGOU-MBIMI.pdf" }],
    color: "#0ea5e9",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)",
    icon: <Network className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Outil", value: "Packet Tracer" },
      { label: "Réseau", value: "5 sous-réseaux" },
      { label: "Focus", value: "Sécurité" },
    ],
  },
  {
    title: "Configuration d'un commutateur",
    description: "Paramétrage de base d'un switch Cisco : VLAN d'administration, accès distant et table MAC.",
    longDescription:
      "Câblage et vérification de la configuration par défaut, configuration des paramètres de base du commutateur (SVI sur VLAN 99, mots de passe, bannière), tests de connectivité (ping, Telnet), sauvegarde de la configuration et analyse de la table des adresses MAC.",
    technologies: ["Cisco IOS", "VLAN", "Telnet", "Table MAC"],
    category: "Réseau & Systèmes",
    context: "BTS SIO",
    docs: [{ label: "Compte rendu", url: "./Lab-Configuring_Base_Switch_Settings.pdf" }],
    color: "#818cf8",
    gradient: "linear-gradient(135deg, #6366f1 0%, #1e40af 100%)",
    icon: <Router className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Matériel", value: "Cisco" },
      { label: "Type", value: "Lab" },
      { label: "Focus", value: "Switching" },
    ],
  },
  {
    title: "Analyse de trafic réseau",
    description: "Capture et analyse de trames Ethernet et de protocoles avec Wireshark.",
    longDescription:
      "Capture et analyse de trames réseau pour comprendre le fonctionnement des protocoles (Ethernet, HTTP, DNS, TCP). Identification d'anomalies et diagnostic de problèmes de connectivité par inspection des paquets.",
    technologies: ["Wireshark", "TCP/IP", "Ethernet"],
    category: "Réseau & Systèmes",
    context: "BTS SIO",
    docs: [{ label: "Compte rendu", url: "./6-Lab - Using Wireshark to Examine Ethernet Frames solution.pdf" }],
    color: "#4ade80",
    gradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
    icon: <Activity className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "Outil", value: "Wireshark" },
      { label: "Contexte", value: "BTS SIO" },
      { label: "Focus", value: "Diagnostic" },
    ],
  },
  {
    title: "Services réseau DHCP/DNS",
    description: "Installation et configuration de serveurs DHCP et DNS sous Windows et Linux.",
    longDescription:
      "Mise en place de l'adressage automatique (DHCP) et de la résolution de noms (DNS) sur des environnements mixtes Windows Server et Linux, pour faciliter la gestion du parc et la connectivité réseau.",
    technologies: ["Windows Server", "Linux", "DHCP", "DNS"],
    category: "Réseau & Systèmes",
    context: "BTS SIO",
    docs: [],
    color: "#fbbf24",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    icon: <Server className="w-12 h-12 text-white/90" />,
    stats: [
      { label: "OS", value: "Win / Linux" },
      { label: "Type", value: "Infrastructure" },
      { label: "Services", value: "DHCP/DNS" },
    ],
  },
];

const categories: ("Tous" | Category)[] = ["Tous", "Web & Sécurité", "Data", "Logiciel & Mobile", "Réseau & Systèmes"];

/* ── Modal PDF ────────────────────────────────────────── */
const PdfModal = ({
  project,
  doc,
  onClose,
}: {
  project: Project;
  doc: { label: string; url: string };
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
        <div
          className="flex items-center justify-between gap-3 px-4 sm:px-6 py-4 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                 style={{ background: project.gradient }}>
              <FileText className="w-4 h-4 text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-white font-bold text-sm truncate">{project.title}</p>
              <p className="text-white/40 text-xs">{doc.label}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a href={doc.url} download
               className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg"
               style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)" }}>
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Télécharger</span>
            </a>
            <a href={doc.url} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg"
               style={{ background: "rgba(0,181,255,0.12)", color: "#00b5ff", border: "1px solid rgba(0,181,255,0.25)" }}>
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ouvrir</span>
            </a>
            <button onClick={onClose}
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                    aria-label="Fermer">
              <X className="w-4 h-4 text-white/60" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <iframe src={`${doc.url}#view=FitH`} className="w-full h-full"
                  title={`${doc.label} — ${project.title}`} style={{ border: "none", background: "#fff" }} />
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

/* ── Carte Projet ─────────────────────────────────────── */
const ProjectCard = ({ p, index }: { p: Project; index: number }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [activeDoc, setActiveDoc] = useState<{ label: string; url: string } | null>(null);

  return (
    <>
      {activeDoc && createPortal(
        <PdfModal project={p} doc={activeDoc} onClose={() => setActiveDoc(null)} />,
        document.body
      )}

      <motion.div
        layout
        className="project-card flex flex-col"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: Math.min(index, 6) * 0.05 }}
      >
        {/* Cover */}
        <div
          className="relative h-44 flex flex-col items-center justify-center overflow-hidden"
          style={{ background: p.gradient }}
        >
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

          <div className="relative z-10 flex flex-col items-center gap-2">
            {p.icon}
            <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">
              {p.stats[0].value}
            </span>
          </div>

          <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full text-[11px] font-semibold"
               style={{ background: "rgba(0,0,0,0.45)", color: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)" }}>
            {p.context}
          </div>
        </div>

        {/* Contenu */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="font-bold text-white text-base mb-1.5">{p.title}</h3>
          <p className="text-white/50 text-sm mb-3 leading-relaxed">{p.description}</p>

          <div className="flex gap-4 mb-3">
            {p.stats.map((s, i) => (
              <div key={i}>
                <div className="text-xs font-bold text-white/80">{s.value}</div>
                <div className="text-[10px] text-white/35 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.technologies.map((t, j) => (
              <span
                key={j}
                className="text-xs font-medium px-2.5 py-1 rounded-full"
                style={{ background: `${p.color}15`, border: `1px solid ${p.color}35`, color: p.color }}
              >
                {t}
              </span>
            ))}
          </div>

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
            {p.docs.map((d) => (
              <button
                key={d.url}
                onClick={() => setActiveDoc(d)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                style={{ background: p.gradient }}
              >
                <FileText className="w-4 h-4" />
                {d.label}
              </button>
            ))}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="w-full py-2 rounded-xl text-xs font-semibold transition-colors"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              {showDetails ? "Masquer les détails" : "Voir les détails"}
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

/* ── Section ──────────────────────────────────────────── */
const Projets = () => {
  const [filter, setFilter] = useState<"Tous" | Category>("Tous");
  const visible = filter === "Tous" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="Projets" className="section-alt py-24 px-6 md:px-[8%]">
      <div className="max-w-7xl mx-auto">
        <Title
          title="Projets"
          subtitle="Tous mes projets : en alternance, en formation (BTS SIO, Bachelor CDA) et en autonomie."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => {
            const count = c === "Tous" ? projects.length : projects.filter((p) => p.category === c).length;
            const active = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
                style={
                  active
                    ? { background: "linear-gradient(135deg,#00b5ff,#7c3aed)", color: "#fff", border: "1px solid transparent" }
                    : { background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.1)" }
                }
              >
                {c} <span className="opacity-60 ml-1">{count}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visible.map((p, i) => (
              <ProjectCard key={p.title} p={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projets;
