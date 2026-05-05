import Title from "./Title";
import { motion } from "framer-motion";

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

const experiences = [
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
    image: arpce,
    color: "#7c3aed",
  },
];

const Experiences = () => {
  return (
    <section id="Experiences" className="py-24 px-6 md:px-[8%]" style={{ background: "#080e1c" }}>
      <div className="max-w-7xl mx-auto">
        <Title
          title="Expériences"
          subtitle="Mon parcours professionnel et mes compétences techniques."
        />

        <div className="flex flex-col lg:flex-row gap-14">
          {/* Timeline */}
          <div className="flex-1">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              >
                <div className="timeline-dot" />
                {i < experiences.length - 1 && <div className="timeline-line" />}

                <div className="glass-card p-6">
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
                  <ul className="space-y-1.5">
                    {exp.description.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-white/55">
                        <span className="text-accent mt-0.5 flex-shrink-0">›</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills grid */}
          <motion.div
            className="lg:w-72"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-6 text-center lg:text-left">
              Stack technique
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 gap-3">
              {skills.map((sk, i) => (
                <motion.div
                  key={sk.id}
                  className="skill-chip"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <img
                    src={sk.image}
                    alt={sk.name}
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-xs text-white/55 text-center leading-tight">{sk.name}</span>
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
