import { FileText, ExternalLink, Archive } from "lucide-react";
import { motion } from "framer-motion";
import Title from "./Title";

const documents = [
  {
    title: "Tableau de synthèse E5",
    description: "Récapitulatif des réalisations professionnelles et des compétences mobilisées.",
    url: "./BTS-SIO-2026-BOUNGOU GLOIRE.pdf",
  },
  {
    title: "Fiche situation pro E6 n°1",
    description: "Diploma Gate Guardian — authentification de documents officiels.",
    url: "./Fiche de situation professionnelle SLAM_1.pdf",
  },
  {
    title: "Fiche situation pro E6 n°2",
    description: "Next Drop — plateforme de découverte de jeux vidéo.",
    url: "./Fiche de situation professionnelle SLAM-2.pdf",
  },
];

const BtsSio = () => (
  <section id="BtsSio" className="section-primary py-24 px-6 md:px-[8%]">
    <div className="max-w-5xl mx-auto">
      <Title
        title="Archives BTS SIO"
        subtitle="Documents officiels de mes épreuves E5 et E6 (session 2026). Les projets associés sont présentés dans la section Projets."
      />

      <div className="grid md:grid-cols-3 gap-5">
        {documents.map((d, i) => (
          <motion.a
            key={d.url}
            href={d.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 flex flex-col gap-3 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                   style={{ background: "rgba(0,181,255,0.12)", border: "1px solid rgba(0,181,255,0.25)" }}>
                {i === 0 ? <Archive className="w-4 h-4 text-accent" /> : <FileText className="w-4 h-4 text-accent" />}
              </div>
              <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-accent transition-colors" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm mb-1">{d.title}</h3>
              <p className="text-white/45 text-xs leading-relaxed">{d.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default BtsSio;
