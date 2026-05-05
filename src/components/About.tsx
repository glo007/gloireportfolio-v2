import Title from "./Title";
import img from "../assets/IMG_3235.jpg";
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";
import { motion } from "framer-motion";

const sections = [
  {
    id: 1,
    title: "À propos de moi",
    description: [
      "Étudiant en BTS SIO option SLAM, passionné par le développement web.",
      "En alternance chez 42Consulting, je travaille sur un projet de vérification et d'authentification des documents officiels.",
    ],
    icon: <LetterText className="w-5 h-5 text-accent" />,
  },
  {
    id: 2,
    title: "Ce que je fais",
    description: [
      "Développement backend & frontend avec Node.js, React, MongoDB.",
      "Sécurisation des applications et gestion des accès utilisateurs.",
      "Création d'interfaces modernes avec glassmorphism & Tailwind.",
    ],
    icon: <CalendarSync className="w-5 h-5 text-accent" />,
  },
  {
    id: 3,
    title: "Ce qui me motive",
    description: [
      "Résoudre des problèmes concrets grâce au code.",
      "Apprendre en continu et découvrir de nouvelles technologies.",
      "Créer des solutions à impact réel.",
    ],
    icon: <Paintbrush className="w-5 h-5 text-accent" />,
  },
];

const skills = [
  "React", "Node.js", "TypeScript", "MongoDB", "Tailwind CSS",
  "Express.js", "Python", "React Native", "Git",
];

const About = () => {
  return (
    <section id="About" className="section-alt py-24 px-6 md:px-[8%]">
      <div className="max-w-7xl mx-auto">
        <Title
          title="À propos"
          subtitle="Développeur web passionné, en constante progression."
        />

        <div className="flex flex-col md:flex-row items-center gap-14">
          {/* Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <div
                className="absolute -inset-2 opacity-25 blur-xl"
                style={{
                  background: "linear-gradient(135deg, #00b5ff, #7c3aed)",
                  borderRadius: "53% 47% 57% 43% / 38% 44% 56% 62%",
                }}
              />
              <div
                className="profile-ring relative w-full h-full"
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

          {/* Cards */}
          <div className="flex-1 flex flex-col gap-4">
            {sections.map((s, i) => (
              <motion.div
                key={s.id}
                className="glass-card p-5"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                       style={{ background: "rgba(0,181,255,0.12)", border: "1px solid rgba(0,181,255,0.25)" }}>
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-white text-base">{s.title}</h3>
                </div>
                <ul className="space-y-1">
                  {s.description.map((d, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/55">
                      <span className="text-accent mt-1 flex-shrink-0">›</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Skills pills */}
            <motion.div
              className="flex flex-wrap gap-2 mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {skills.map((sk) => (
                <span key={sk} className="tech-badge">{sk}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
