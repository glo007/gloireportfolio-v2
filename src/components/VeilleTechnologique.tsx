import Title from "./Title";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import imgOpenAI    from "../assets/techno/openai-old-logo.webp";
import imgSiri      from "../assets/techno/Siri-iOS-18-1.jpeg";
import imgGemini    from "../assets/techno/gemini-logo_brandlogos.net_fwajr-512x512.png";
import imgTensorFlow from "../assets/techno/Tensorflow_logo.svg.png";
import imgAlexa     from "../assets/techno/logo-alexa.webp";
import imgPytorch   from "../assets/techno/pytorch-logo.png";

const aiTools = [
  { name: "OpenAI",      image: imgOpenAI },
  { name: "Gemini",      image: imgGemini },
  { name: "TensorFlow",  image: imgTensorFlow },
  { name: "PyTorch",     image: imgPytorch },
  { name: "Siri",        image: imgSiri },
  { name: "Alexa",       image: imgAlexa },
];

const topics = [
  {
    title: "Qu'est-ce que la veille technologique ?",
    content:
      "La veille technologique est une démarche proactive de recherche, d'analyse et de diffusion d'informations sur les innovations dans un domaine donné. Elle permet de rester à jour, d'anticiper les évolutions et d'adapter ses compétences. Dans le cadre du BTS SIO, elle est essentielle pour suivre l'évolution rapide du secteur informatique.",
  },
  {
    title: "Définition de l'intelligence artificielle",
    content:
      "L'IA désigne un ensemble de techniques permettant aux machines de simuler des capacités humaines : raisonnement, apprentissage, perception, prise de décision. On distingue le machine learning (apprentissage automatique) et le deep learning (apprentissage profond), qui permettent aux systèmes d'évoluer à partir de données.",
  },
  {
    title: "Exemples d'applications concrètes",
    content:
      "L'IA est présente partout : assistants vocaux (Alexa, Siri), traduction automatique, reconnaissance faciale, voitures autonomes, détection de fraudes, recommandations Netflix ou Amazon, diagnostics médicaux. En développement web, elle améliore l'UX via des chatbots intelligents et l'analyse comportementale.",
  },
  {
    title: "Technologies utilisées en IA",
    content:
      "TensorFlow, PyTorch, Scikit-Learn pour le machine learning ; spaCy, Transformers pour le NLP ; OpenAI API, Google Cloud Vision pour l'intégration web. Ces outils permettent d'ajouter des capacités d'IA dans n'importe quel projet moderne.",
  },
  {
    title: "Enjeux éthiques et limites",
    content:
      "L'IA soulève des questions importantes : biais algorithmiques, protection des données personnelles, impact sur l'emploi, manque de transparence. Le RGPD impose un cadre légal. Il est essentiel de développer une IA éthique en gardant l'humain au cœur des décisions.",
  },
  {
    title: "Perspectives d'avenir",
    content:
      "L'IA générative (ChatGPT, DALL·E), l'automatisation de tâches complexes, l'IA embarquée (IoT), l'intelligence collective — ce domaine évolue à une vitesse inédite. Maîtriser ces concepts est un atout décisif pour tout développeur moderne.",
  },
];

const VeilleTechnologique = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="VeilleTechnologique" className="section-alt py-24 px-6 md:px-[8%]">
      <div className="max-w-7xl mx-auto">
        <Title
          title="Veille Technologique"
          subtitle="L'intelligence artificielle — enjeux, applications et impact dans le secteur informatique."
        />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Accordion */}
          <div className="flex-1 flex flex-col gap-3">
            {topics.map((t, i) => (
              <motion.div
                key={i}
                className={`veille-item ${openIndex === i ? "open" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <button
                  className="veille-header w-full text-left"
                  onClick={() => toggle(i)}
                >
                  <span className="font-semibold text-sm text-white/80 pr-4">{t.title}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-4 h-4 text-accent" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm text-white/50 leading-relaxed">
                        {t.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* AI Tools grid */}
          <motion.div
            className="lg:w-72"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-5 text-center lg:text-left">
              Outils & Modèles IA
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {aiTools.map((tool, i) => (
                <motion.div
                  key={i}
                  className="skill-chip"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-9 h-9 object-contain rounded-lg"
                  />
                  <span className="text-xs text-white/50 text-center">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VeilleTechnologique;
