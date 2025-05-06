import Title from "./Title";

import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgNODE from "../assets/techno/node-js.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgVSCODE from "../assets/techno/Visual_Studio_Code.png";

import consulting from "../assets/companies/42c.png";
import arpce from "../assets/companies/Logo_arpce.png";

const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.Js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "VS code", image: imgVSCODE },
];

const experiences = [
    {
        id: 1,
        role: "Alternant en tant qu'Apprenti Développeur",
        company: "42Consulting",
        period: "Décembre 2024- présent",
        description: [
            "Développement et maintenance d’une application de vérification et d’authentification des documents officiels",
            "Intégration et manipulation de bases de données (Hyperplanning pour les documents récents, Excel pour les plus anciens)",
            "Mise en place d’un système d’authentification sécurisé pour les écoles et les étudiants",
            "Conception d’interfaces modernes et ergonomiques avec un design inspiré du glassmorphism",
            "Collaboration avec les consultants IT pour assurer la scalabilité et la sécurité du projet",
        ],
        image: consulting,
    },
    {
        id: 2,
        role: "Stagiaire en tant que Technicien support",
        company: "ARPCE",
        period: "Juillet 2024- Août 2024",
        description: [
            "Assistance aux utilisateurs pour les problèmes informatiques (matériel & logiciel)",
            "Installation et configuration des postes de travail (PC, imprimantes, périphériques)",
            "Dépannage des problèmes réseau de base (connexion Internet, accès aux ressources internes)",
            "Gestion et mise à jour des logiciels courants (Office, antivirus, outils métiers)",
            "Suivi et documentation des interventions dans un registre technique",
        ],
        image: arpce,
    },
];

const Experiences = () => {
    return (
        <div id ="Experiences" className="bg-gray-100 py-20">
            <Title title="Expériences" />
            <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-8">
                
                {/* Skills Section */}
                <div className="flex flex-wrap gap-4 items-center justify-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="flex justify-center items-center flex-col transition-all duration-500 ease-in-out hover:scale-110 hover:translate-y-2 transform"
                        >
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent transition-transform duration-300 ease-in-out">
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="object-cover rounded-full h-full w-full transition-transform duration-300 ease-in-out transform hover:scale-125"
                                />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>

                {/* Experiences Section */}
                <div className="md:ml-4 flex flex-col space-y-8">
                    {experiences.map((exp) => (
                        <div
                            key={exp.id}
                            className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-2"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={exp.image}
                                    alt={exp.company}
                                    className="object-cover h-10 w-10 rounded-full border-2 border-accent"
                                />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {exp.role}, {exp.company}
                                    </h1>
                                    <span className="text-sm">{exp.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-8 space-y-2">
                                {exp.description.map((desc, index) => (
                                    <li key={index} className="text-sm text-gray-700">
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

export default Experiences;
