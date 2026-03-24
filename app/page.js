import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import AnimateOnScroll from "./components/helper/animate-on-scroll";

export default async function Home() {
  return (
    <div suppressHydrationWarning>
      <AnimateOnScroll delay={0}>
        <HeroSection />
      </AnimateOnScroll>
      <AnimateOnScroll delay={40}>
        <AboutSection />
      </AnimateOnScroll>
      <AnimateOnScroll delay={80}>
        <Experience />
      </AnimateOnScroll>
      <AnimateOnScroll delay={120}>
        <Skills />
      </AnimateOnScroll>
      <AnimateOnScroll delay={160}>
        <Projects />
      </AnimateOnScroll>
      <AnimateOnScroll delay={200}>
        <Education />
      </AnimateOnScroll>
      <AnimateOnScroll delay={240}>
        <ContactSection />
      </AnimateOnScroll>
    </div>
  );
}