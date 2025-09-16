import { MailOpen, FileDown } from "lucide-react";
import img from "../assets/IMG_3235.jpg";
import Typewriter from "typewriter-effect";

const Home: React.FC = () => {
  return (
    <div
      id="Home"
      className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10"
    >
      {/* Section texte */}
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          Bonjour, <br />
          je suis
          <span className="text-accent">
            <Typewriter
              options={{
                strings: ["BOUNGOU MBIMI Gloire Bryan"],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h1>
        <p className="my-4 text-md text-center md:text-left">
          Je suis étudiant en deuxième année BTS SIO option SLAM,
          <br /> à l'Estiam Paris.
          <br /> Passionné par le développement web.
          <br /> En alternance chez 42c, je travaille sur des projets concrets
          alliant backend, frontend et sécurité des applications.
          <br /> Mon objectif ? Créer des solutions innovantes, performantes et
          sécurisées.
          <br /> Découvrez mes projets et mon parcours !
        </p>

        {/* Boutons */}
        <div className="flex space-x-4">
          <a href="mailto:contact@email.com" className="btn btn-accent">
            <MailOpen className="w-5 h-5" />
            Contactez-moi
          </a>

          {/* Bouton pour voir le CV */}
          <a
            href="public/cv-gloire-bryan-boungou-mbimi-4.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-accent"
          >
            <FileDown className="w-5 h-5" />
            Voir mon CV
          </a>

          {/* Bouton pour télécharger le CV */}
          <a
            href="public/cv-gloire-bryan-boungou-mbimi-4.pdf"
            download="cv-gloire-bryan.pdf"
            className="btn btn-outline-primary"
          >
            <FileDown className="w-5 h-5" />
            Télécharger mon CV
          </a>
        </div>
      </div>

      {/* Section image */}
      <div className="md:ml-60" data-aos="fade-up">
        <img
          src={img}
          alt="Photo de profil"
          className="w-96 h-96 object-cover border-8 border-accent shadow-xl transition-transform duration-500 ease-in-out hover:scale-105"
          style={{
            borderRadius: "53% 47% 57% 43% / 38% 44% 56% 62%",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
