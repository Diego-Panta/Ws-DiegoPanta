// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/core/ModeToggle";

interface NavbarProps {
  scrollToTop: () => void;
}

export default function Navbar({ scrollToTop }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#hero", id: "hero", path: "/" },
    { label: "Experiencia", href: "#experience", id: "experience", path: "/" },
    { label: "Proyectos", href: "#projects", id: "projects", path: "/" },
    { label: "Sobre mí", href: "#about", id: "about", path: "/" },
    { label: "Contacto", href: "#contact", id: "contact", path: "/" }
  ];

  // Detectar sección activa solo en la página principal
  useEffect(() => {
    if (currentPath !== "/") return;

    const handleScroll = () => {
      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPath]);

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, href: string, id: string, targetPath: string) => {
    e.preventDefault();
    
    // Si estamos en la página de certificaciones, primero navegamos al inicio
    if (currentPath !== "/") {
      window.location.href = `/${href}`;
      return;
    }
    
    // Si ya estamos en la página principal, hacemos scroll suave
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      window.history.pushState({}, "", href);
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    if (currentPath !== "/") {
      window.location.href = "/";
    } else {
      scrollToTop();
      window.history.pushState({}, "", "/");
      setActiveSection("hero");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Nombre */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={handleLogoClick}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Diego Panta
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id, link.path)}
                className={`text-sm font-medium transition-colors ${
                  currentPath === "/" && activeSection === link.id
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ModeToggle />
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:border-primary hover:text-primary transition-all duration-300"
              onClick={() => window.open("https://github.com/Diego-Panta", "_blank")}
            >
              <Github className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border hover:border-primary hover:text-primary transition-all duration-300"
              onClick={() => window.open("https://www.linkedin.com/in/diego-panta-piscoche/", "_blank")}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              onClick={(e) => handleNavClick(e, "#contact", "contact", "/")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contáctame
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
            <button
              className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/30"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? 
                <X className="h-5 w-5 text-foreground" /> : 
                <Menu className="h-5 w-5 text-foreground" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <nav className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id, link.path)}
                  className={`block w-full text-left py-2 transition-colors font-medium ${
                    currentPath === "/" && activeSection === link.id
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              {/* Botones en móvil */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-border hover:border-primary hover:text-primary"
                    onClick={() => window.open("https://github.com/Diego-Panta", "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-border hover:border-primary hover:text-primary"
                    onClick={() => window.open("https://www.linkedin.com/in/diego-panta-piscoche/", "_blank")}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </div>
                
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={(e) => handleNavClick(e, "#contact", "contact", "/")}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contáctame
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}