import Title from "./Title";
import img from "../assets/IMG_3235.jpg";
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

const aboutsections = [
    {
        id: 1,
        title: "À propos de moi",
        description: [
            "Je suis étudiant en BTS SIO option SLAM et passionné par le développement web.",
            "Actuellement en alternance chez 42c, un cabinet de conseil en IT, je travaille sur un projet de vérification et d’authentification des documents officiels."
        ],
        icon: <LetterText className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Ce que je fais",
        description: [
            "Développement backend & frontend avec Node.js, React, MongoDB.",
            "Sécurisation des applications et gestion des accès utilisateurs.",
            "Manipulation et intégration de bases de données (Hyperplanning, Excel).",
            "Création d’interfaces modernes et dynamiques avec un design glassmorphism."
        ],
        icon: <CalendarSync className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "Ce qui me motive",
        description: [
            "Résoudre des problèmes concrets grâce au code.",
            "Apprendre en continu et découvrir de nouvelles technologies.",
            "Travailler sur des projets ayant un impact réel."
        ],
        icon: <Paintbrush className="text-accent scale-150" />,
    },
];

const About = () => {
    return (
        <div className="bg-base-300 p-8 mb-8 md:mb-16" id="About">
            <Title title="À propos" />
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                {/* Image à gauche */}
                <div className="w-96 h-96 relative">
                    <img
                        src={img}
                        alt="Photo de profil"
                        className="w-full h-full object-cover border-8 border-accent shadow-xl transition-transform duration-500 ease-in-out hover:scale-105"
                        style={{
                            borderRadius: "53% 47% 57% 43% / 38% 44% 56% 62%",
                        }}
                    />
                </div>

                {/* Textes à droite */}
                <div className="flex flex-col space-y-4 md:w-2/3">
                    {aboutsections.map((section) => (
                        <div
                            key={section.id}
                            className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:translate-x-2 hover:translate-y-2"
                        >
                            <div className="flex items-center">
                                <div className="mr-4">{section.icon}</div>
                                <div>
                                    <h1 className="text-xl text-accent font-bold transition-opacity duration-500 ease-in-out opacity-90 hover:opacity-100">{section.title}</h1>
                                </div>
                            </div>
                            <ul className="list-disc ml-8 mt-2">
                                {section.description.map((desc, index) => (
                                    <li
                                        key={index}
                                        className="text-sm text-gray-700 transition-transform duration-300 ease-in-out hover:translate-x-1"
                                    >
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
