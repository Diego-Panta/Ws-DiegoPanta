// src/landing/Landing.tsx
import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import HeroSection from "@/landing/sections/HeroSection";
import ExperienceSection from "@/landing/sections/ExperienceSection";
import ProjectsSection from "@/landing/sections/ProjectsSection";
import AboutSection from "@/landing/sections/AboutSection";
import ContactSection from "@/landing/sections/ContactSection";
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function Landing() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState({}, "", window.location.pathname);
  };

  // Manejar hash en la URL al cargar la página
  useEffect(() => {
    // Verificar si hay un hash en la URL
    const hash = window.location.hash;
    if (hash && hash !== "#") {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar scrollToTop={scrollToTop} />

      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-40"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}