// src/components/Navbar.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/core/ModeToggle";

interface NavbarProps {
  scrollToTop: () => void;
}

export default function Navbar({ scrollToTop }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", href: "#hero" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
    { label: "Sobre mí", href: "#about" },
    { label: "Contacto", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Nombre */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={scrollToTop}
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
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
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
              onClick={() => handleNavClick("#contact")}
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
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left py-2 text-foreground/70 hover:text-primary transition-colors font-medium"
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
                  onClick={() => handleNavClick("#contact")}
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