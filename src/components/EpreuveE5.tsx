import { FileText, ExternalLink, Download } from "lucide-react";
import { motion } from "framer-motion";
import Title from "./Title";

import proj1 from "../assets/projects/1.png";
import proj2 from "../assets/projects/2.png";
import proj3 from "../assets/projects/3.png";
import proj4 from "../assets/projects/4.png";
import proj5 from "../assets/projects/5.png";
import proj6 from "../assets/projects/6.png";

const projects = [
  {
    title: "Diploma Gate Guardian",
    description: "Application de vérification d'authenticité des diplômes via un code unique.",
    technologies: ["React", "Node.js", "MongoDB"],
    pdf: "/Documentation-Diploma Gate Guardian.pdf",
    image: proj1,
    color: "#00b5ff",
  },
  {
    title: "JavaScript Projects",
    description: "Collection de mini-applications web pour pratiquer JavaScript en classe.",
    technologies: ["HTML", "CSS", "JavaScript"],
    pdf: "/JavaScript Projects – Mini Applications Web Interactives .pdf",
    image: proj2,
    color: "#7c3aed",
  },
  {
    title: "FaceTracking Python",
    description: "Suivi du visage en temps réel avec OpenCV et Python.",
    technologies: ["Python", "OpenCV"],
    pdf: "/FaceTracking-Python .pdf",
    image: proj3,
    color: "#10b981",
  },
  {
    title: "Gloire ToDoList",
    description: "Application mobile de gestion de tâches développée en React Native.",
    technologies: ["React Native", "Expo", "Xcode"],
    pdf: "/Gloire-ToDoList .pdf",
    image: proj4,
    color: "#f59e0b",
  },
  {
    title: "Bataille Aérienne",
    description: "Jeu de bataille aérienne entièrement codé en Python avec Tkinter.",
    technologies: ["Python", "Tkinter"],
    pdf: "/Documentation du Mini Projet-Bataille Aérienne .pdf",
    image: proj5,
    color: "#ef4444",
  },
  {
    title: "Jeu du Morpion",
    description: "Implémentation complète du Tic-Tac-Toe avec interface graphique Tkinter.",
    technologies: ["Python", "Tkinter"],
    pdf: "/Documentation Complète — Morpion Tkinter (Tic-Tac-Toe) .pdf",
    image: proj6,
    color: "#8b5cf6",
  },
];

const EpreuveE5 = () => {
  return (
    <section id="EpreuveE5" className="section-alt py-24 px-6 md:px-[8%]">
      <div className="max-w-7xl mx-auto">
        <Title
          title="Épreuve E5 — BTS SIO"
          subtitle="Projets informatiques réalisés en entreprise et en autonomie."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            >
              {/* Image */}
              <div className="project-img-wrapper">
                <img src={p.image} alt={p.title} />
                <div className="project-img-overlay" />
                <div
                  className="absolute top-3 left-3 w-2 h-2 rounded-full"
                  style={{ background: p.color, boxShadow: `0 0 8px ${p.color}` }}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-white text-base mb-2">{p.title}</h3>
                <p className="text-white/50 text-sm mb-3 leading-relaxed">{p.description}</p>

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

                <div className="flex gap-3">
                  <a
                    href={p.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Voir
                  </a>
                  <a
                    href={p.pdf}
                    download
                    className="flex items-center gap-1.5 text-xs font-semibold text-white/40 hover:text-white transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Rapport
                  </a>
                </div>
              </div>
            </motion.div>
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
            href="/BTS SIO - 2025 - Epreuve E5 - Tableau de synthese-BOUNGOU Gloire.pdf"
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
};

export default EpreuveE5;
