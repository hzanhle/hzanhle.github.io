import { MotionConfig } from "motion/react";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { LoyaltyCase } from "./components/LoyaltyCase";
import { MedilabCase } from "./components/MedilabCase";
import { PmHero } from "./components/PmHero";
import { ProductExercise } from "./components/ProductExercise";
import { About, AiWorkflow, Experience, Toolkit } from "./components/Sections";
import { pmProfile } from "./data";

const links = [
  { href: "#about", label: "About" },
  { href: "#loyalty", label: "Work" },
  { href: "#exercise", label: "Exercise" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function PmApp() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-[56rem]" />
      <Navbar links={links} resumeUrl={pmProfile.resumeUrl} crossLink={{ href: "/", label: "Dev portfolio" }} />
      <main>
        <PmHero />
        <About />
        <Toolkit />
        <LoyaltyCase />
        <ProductExercise />
        <MedilabCase />
        <AiWorkflow />
        <Experience />
        <Contact
          eyebrow="08 · Contact"
          blurb="I'm looking for a Product Management Trainee role where understanding users, writing clear requirements and reading the numbers all matter. My inbox is open."
        />
      </main>
      <Footer />
    </MotionConfig>
  );
}
