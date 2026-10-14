import { GraduationCap, ShieldCheck, Code2, Server } from "lucide-react";
import { motion } from "framer-motion";
import Title from "./Title";

interface Diplome {
  title: string;
  school: string;
  period: string;
  status: "En cours" | "Obtenu" | "Terminé";
  description: string;
  topics: string[];
  icon: React.ReactNode;
  color: string;
}

const parcours: Diplome[] = [
  {
    title: "Bachelor Développeur Web & Sécurité",
    school: "ESIEE",
    period: "2026 – aujourd'hui",
    status: "En cours",
    description:
      "Formation centrée sur la conception d'applications web robustes et sécurisées : développement front-end et back-end, sécurisation des applications et des données, bonnes pratiques DevSecOps. Recherche d'une alternance pour mettre ces compétences en pratique en entreprise.",
    topics: ["Développement web", "Sécurité applicative", "OWASP", "API sécurisées", "DevSecOps"],
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
    color: "#00b5ff",
  },
  {
    title: "Bachelor Concepteur d'Applications",
    school: "ESTIAM Paris — Titre RNCP niveau 6",
    period: "2025 – 2026",
    status: "Terminé",
    description:
      "Conception et développement d'applications, gestion de projet Agile (Scrum, Kanban) et traitement de données : pipelines ETL, bases de données relationnelles, tests automatisés et intégration continue.",
    topics: ["Python", "SQL / PostgreSQL", "Pandas", "Pytest", "CI/CD", "Scrum"],
    icon: <Code2 className="w-5 h-5 text-white" />,
    color: "#7c3aed",
  },
  {
    title: "BTS SIO — Services Informatiques aux Organisations",
    school: "ESTIAM Paris",
    period: "2023 – 2025",
    status: "Terminé",
    description:
      "Développement d'applications (option SLAM) et bases de l'infrastructure réseau : développement web, support utilisateurs, administration de services réseau et cybersécurité. Alternance chez 42Consulting et stage à l'ARPCE.",
    topics: ["Développement web", "Réseau", "Support IT", "Cybersécurité"],
    icon: <Server className="w-5 h-5 text-white" />,
    color: "#4f46e5",
  },
];

const statusStyle = (status: Diplome["status"]) =>
  status === "En cours"
    ? { background: "rgba(34,197,94,0.12)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.3)" }
    : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.12)" };

const Formation = () => (
  <section id="Formation" className="section-primary py-24 px-6 md:px-[8%]">
    <div className="max-w-4xl mx-auto">
      <Title
        title="Formation"
        subtitle="Du support IT au développement web sécurisé : mon parcours académique."
      />

      <div className="relative">
        {/* Ligne verticale */}
        <div
          className="absolute left-5 top-2 bottom-2 w-px"
          style={{ background: "linear-gradient(to bottom, #00b5ff, #7c3aed, transparent)" }}
        />

        <div className="flex flex-col gap-8">
          {parcours.map((d, i) => (
            <motion.div
              key={d.title}
              className="relative pl-16"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
            >
              <div
                className="absolute left-0 top-1 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${d.color}, #7c3aed)`, boxShadow: `0 0 20px ${d.color}40` }}
              >
                {d.icon}
              </div>

              <div className="glass-card p-6">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-bold text-white text-lg">{d.title}</h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={statusStyle(d.status)}>
                    {d.status}
                  </span>
                </div>
                <p className="text-accent font-semibold text-sm">{d.school}</p>
                <p className="text-white/40 text-xs mt-0.5 mb-3 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" /> {d.period}
                </p>
                <p className="text-white/55 text-sm leading-relaxed mb-4">{d.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {d.topics.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Formation;
