import { FileText, ExternalLink } from "lucide-react";


const EpreuveE6 = () => {
    const projectsE6 = [
        {
            title: "GloireBoungAI - Assistante vocale intelligente",
            description: "Une application mobile développée en React Native intégrant les API d’OpenAI pour permettre à l’utilisateur d’interagir avec une intelligence artificielle via la voix.",
            technologies: ["React Native", "Expo", "OpenAI API", "SpeechRecognition", "Text-to-Speech"],
            link: "public/GloireBoungAI – Assistant Vocal Intelligent .pdf",
            report: "public/GloireBoungAI – Assistant Vocal Intelligent .pdf",
            fiche1: "public/fiche-de-réalisation.pdf",
           
        },
        {
            title: "WeatherApp - Application météo dynamique",
            description: "Application mobile affichant les conditions météo actuelles et les prévisions via OpenWeather API avec une interface moderne.",
            technologies: ["React Native", "Expo", "OpenWeatherAPI", "Tailwind Native"],
            link: "public/WeatherApp.pdf",
            report: "public/WeatherApp.pdf",
            fiche1: "public/Fiche-de-réalisation.2.pdf",
            
        },
    ];

    return (
        <div className="container mx-auto p-6" id="EpreuveE6">
            <h1 className="text-4xl font-bold text-center mb-6">Épreuve E6 - BTS SIO</h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
                Dans le cadre de l'épreuve E6 du BTS SIO, j’ai présenté deux projets réalisés en autonomie. Voici un aperçu de mes applications mobiles, leurs documentations et les fiches de situations professionnelles associées.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
                {projectsE6.map((project, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden transition hover:scale-105">
                      
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold">{project.title}</h2>
                            <p className="text-gray-600 mt-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <a href={project.link} className="text-accent flex items-center" target="_blank" rel="noopener noreferrer">
                                    Voir le projet <ExternalLink className="ml-1 w-4 h-4" />
                                </a>
                                <a href="public/BTS SIO 2025 - Annexes (2).pdf" className="text-gray-500 flex items-center" target="_blank" rel="noopener noreferrer">
                                    Télécharger le rapport <FileText className="ml-1 w-4 h-4" />
                                </a>
                                <a href={project.fiche1} className="text-gray-500 flex items-center" target="_blank" rel="noopener noreferrer">
                                    Fiche Situation  <FileText className="ml-1 w-4 h-4" />
                                </a>
                              
                            </div>
                        </div>
                    </div>
                ))}
            </div>

          
            
        </div>
    );
};

export default EpreuveE6;
