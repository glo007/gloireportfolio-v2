import Title from "./Title";
import { motion } from "framer-motion";  // Importer framer-motion pour les animations


import imgOpenAI from "../assets/techno/openai-old-logo.webp";
import imgSiri from "../assets/techno/Siri-iOS-18-1.jpeg";
import imgGemini from "../assets/techno/gemini-logo_brandlogos.net_fwajr-512x512.png";
import imgTensorFlow from "../assets/techno/Tensorflow_logo.svg.png";
import imgAlexa from "../assets/techno/logo-alexa.webp";
import imgPytorch from "../assets/techno/pytorch-logo.png";

const skills = [

    { id: 4, name: "OpenAI", image: imgOpenAI },
    { id: 5, name: "Siri", image: imgSiri },
    { id: 6, name: "Gemini", image: imgGemini },
    { id: 7, name: "TensorFlow", image: imgTensorFlow },
    { id: 8, name: "Alexa", image: imgAlexa },
    { id: 9, name: "PyTorch", image: imgPytorch },
];

const veilleDescription = [
    {
        id: 1,
        title: "Qu'est-ce que la veille technologique ?",
        content:
            "La veille technologique est une démarche proactive de recherche, d’analyse et de diffusion d’informations sur les innovations techniques dans un domaine donné. Elle permet aux professionnels de rester à jour, d’anticiper les évolutions et d’adapter leurs compétences. Dans le cadre du BTS SIO, cette veille est essentielle pour suivre l’évolution rapide du secteur informatique, notamment dans le domaine de l’intelligence artificielle.",
    },
    {
        id: 2,
        title: "Définition de l’intelligence artificielle",
        content:
            "L’intelligence artificielle (IA) désigne un ensemble de techniques visant à permettre aux machines de simuler des capacités humaines comme le raisonnement, l’apprentissage, la perception ou la prise de décision. On distingue notamment le machine learning (apprentissage automatique) et le deep learning (apprentissage profond) qui permettent aux systèmes d’évoluer à partir de données.",
    },
    {
        id: 3,
        title: "Exemples d’applications concrètes",
        content:
            "L’IA est déjà présente dans de nombreux domaines : assistants vocaux (Alexa, Siri), traduction automatique, reconnaissance faciale, voitures autonomes, détection de fraudes, recommandations sur les plateformes comme Netflix ou Amazon, ou encore dans la santé (diagnostics assistés). Dans le développement web, elle peut aussi être utilisée pour améliorer l’expérience utilisateur via des chatbots intelligents ou l’analyse de données comportementales.",
    },
    {
        id: 4,
        title: "Technologies utilisées en IA",
        content:
            "Les technologies associées à l’IA incluent les bibliothèques Python comme TensorFlow, PyTorch ou Scikit-Learn, mais aussi des outils de traitement du langage naturel comme spaCy ou OpenAI. En web, certaines API comme OpenAI API ou Google Cloud Vision permettent d’intégrer facilement de l’IA dans des projets.",
    },
    {
        id: 5,
        title: "Enjeux éthiques et limites",
        content:
            "L’IA soulève des enjeux importants : biais algorithmiques, protection des données personnelles, perte d’emplois, décisions automatisées sans transparence... Il est essentiel de développer une IA éthique et responsable, en gardant l’humain au cœur des décisions. Le RGPD, par exemple, impose un cadre à l’utilisation des données dans les systèmes d’IA en Europe.",
    },
    {
        id: 6,
        title: "Perspectives d’avenir",
        content:
            "L’IA est un domaine en constante évolution. Les prochaines avancées pourraient concerner l’IA générative (comme ChatGPT ou DALL·E), l’automatisation des tâches complexes, l’intelligence collective ou l’IA embarquée dans les objets du quotidien. Maîtriser les concepts clés de l’IA est donc un véritable atout pour tout développeur moderne.",
    },
];
const VeilleTechnologique = () => {
    return (
        <div id="VeilleTechnologique">
            <Title title="Veille Technologique :L’intelligence artificielle : Enjeux, applications et impact dans le secteur informatique" />
            <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-8">
                {/* Compétences */}
                <motion.div
                    className="flex flex-wrap gap-4 items-center justify-center md:w-1/3 mt-4 md:mt-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            className="flex justify-center items-center flex-col"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Description de la veille technologique */}
                <motion.div
                    className="md:ml-4 flex flex-col space-y-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {veilleDescription.map((description) => (
                        <motion.div
                            key={description.id}
                            className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-xl text-accent font-bold">{description.title}</h2>
                            <p className="mt-2">{description.content}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default VeilleTechnologique;
