import About from "./components/About";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import EpreuveE6 from "./components/EpreuveE6";
import VeilleTechnologique from "./components/VeilleTechnologique";
import EpreuveE5 from "./components/EpreuveE5";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar />

        <Home />
      </div>

      <About />

      <div className="p-5 md:px-[15%]">
        <Experiences />
      </div>

      <div className="p-5 md:px-[15%]">
        <EpreuveE5 />
      </div>

      <div className="p-5 md:px-[15%]">
        <EpreuveE6 />
      </div>

      <div className="p-5 md:px-[15%]">
        <VeilleTechnologique />
      </div>

      <div className="p-5 md:px-[15%]">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
