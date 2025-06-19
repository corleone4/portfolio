import { motion, useScroll } from "motion/react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Contact from "./Contact";

export default function ScrollLinked() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "#00BCD4",
          zIndex: 10
        }}
      />
      <Content />
    </>
  );
}

function Content() {
  return (
    <>
      <div style={{ fontFamily: 'Roboto, sans-serif' }} className="bg-gray-100 dark:bg-[#121212]">
        <Header />
        <HeroSection />
        <AboutMe />
        <Projects/>
        <Certificates/>
        <Contact/>
      </div>
    </>
  );
}
