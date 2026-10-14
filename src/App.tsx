import { useEffect, useState } from "react";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import VeilleTechnologique from "./components/VeilleTechnologique";
import Formation from "./components/Formation";
import Projets from "./components/Projets";
import BtsSio from "./components/BtsSio";
import Contact from "./components/Contact";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: "#080e1c" }}>
      <div className="scroll-bar" style={{ width: `${scrollProgress}%` }} />
      <Navbar />
      <Home />
      <About />
      <Formation />
      <Projets />
      <Experiences />
      <VeilleTechnologique />
      <BtsSio />
      <Contact />
      <Footer />
    </div>
  );
}
