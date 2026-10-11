import { MotionConfig } from "motion/react";
import { About } from "./components/About";
import { Activity } from "./components/Activity";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Stats } from "./components/Stats";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[56rem]">
        <div className="glow absolute inset-0" />
        <div className="bg-grid absolute inset-0" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Activity />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
