import { FileText, ExternalLink } from "lucide-react";

const EpreuveE5 = () => {
  const projects = [
    {
      title: "Diploma Gate Guardian",
      description:
        "Une application permettant de vérifier l'authenticité des diplômes grâce à un code unique.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "public/Documentation-Diploma Gate Guardian.pdf",
      report: "public/Documentation-Diploma Gate Guardian.pdf",
    },
    {
      title: "JavaScript Projects",
      description:
        "Un ensemble de mini Projets servant à mettre en pratique les notions JavaScripts apprises en Classe",
      technologies: ["HTML", "CSS", "javaScript"],
      link: "public/JavaScript Projects – Mini Applications Web Interactives .pdf",
      report:
        "public/JavaScript Projects – Mini Applications Web Interactives .pdf",
    },
    {
      title: "FaceTracking-Python",
      description:
        "Un projet de suivi du visage en temps réel utilisant OpenCV et Python.",
      technologies: ["Python"],
      link: "public/FaceTracking-Python .pdf",
      report: "public/FaceTracking-Python .pdf",
    },
    {
      title: "Gloire-ToDoList",
      description: "Une application de gestion de tâches avec React Native.",
      technologies: ["React Native", "Xcode", "Expo"],
      link: "public/Gloire-ToDoList .pdf",
      report: "public/Gloire-ToDoList .pdf",
    },
    {
      title: "Python Project-Bataille Aérienne",
      description: "Un jeu de bataille aérienne développé en Python.",
      technologies: ["Python", "Tkinter"],
      link: "public/Documentation du Mini Projet-Bataille Aérienne .pdf",
      report: "public/Documentation du Mini Projet-Bataille Aérienne .pdf",
    },
    {
      title: "Jeu du Morpion-Tkinter",
      description: "Jeu du Morpion développé avec Tkinter.",
      technologies: ["Python", "Tkinter"],
      link: "public/Documentation Complète — Morpion Tkinter (Tic-Tac-Toe) .pdf",
      report:
        "public/Documentation Complète — Morpion Tkinter (Tic-Tac-Toe) .pdf",
    },
  ];

  return (
    <div className="container mx-auto p-6" id="EpreuveE5">
      <h1 className="text-4xl font-bold text-center mb-6">
        Épreuve E5 - BTS SIO
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        L'épreuve E5 consiste à présenter deux projets informatiques réalisés en
        entreprise ou en autonomie. Voici mes projets détaillés ainsi que mon
        dossier téléchargeable.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 transition hover:scale-105"
          >
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <a href={project.link} className="text-accent flex items-center">
                Voir le projet <ExternalLink className="ml-1 w-4 h-4" />
              </a>
              <a
                href={project.report}
                className="text-gray-500 flex items-center"
              >
                Télécharger le rapport <FileText className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="public/BTS SIO - 2025 - Epreuve E5 - Tableau de synthese-BOUNGOU Gloire.pdf"
          className="btn btn-accent"
        >
          Tableau de Synthèse
        </a>
      </div>
    </div>
  );
};

export default EpreuveE5;
