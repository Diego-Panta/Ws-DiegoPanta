// src/components/Footer.tsx
import React, { useState, useEffect } from "react";
import {
  Heart,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Code2,
  Sparkles,
  ExternalLink,
  ArrowUpRight
} from "lucide-react";

export default function Footer() {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const scrollToTop = () => {
    if (currentPath !== "/") {
      window.location.href = "/";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState({}, "", window.location.pathname);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Si estamos en la página de certificaciones, primero navegamos al inicio
    if (currentPath !== "/") {
      window.location.href = `/${href}`;
      return;
    }
    
    // Si ya estamos en la página principal, hacemos scroll suave
    const id = href.replace("#", "");
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
    }
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Inicio", href: "#hero", id: "hero" },
    { label: "Experiencia", href: "#experience", id: "experience" },
    { label: "Proyectos", href: "#projects", id: "projects" },
    { label: "Sobre mí", href: "#about", id: "about" },
    { label: "Contacto", href: "#contact", id: "contact" }
  ];

  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* Grid principal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

          {/* Columna 1: Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="cursor-pointer group"
                onClick={scrollToTop}
              >
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Diego Panta
                </span>
              </div>
              <Sparkles className="h-5 w-5 text-primary/60" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Desarrollador Fullstack especializado en crear soluciones web modernas,
              escalables y con inteligencia artificial.
            </p>
            <div className="flex items-center gap-1 text-accent text-sm">
              <Heart className="h-3 w-3" />
              <span>Código limpio · Innovación · Calidad</span>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group cursor-pointer"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto y Redes */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <a
                  href="mailto:josepanta507@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  josepanta507@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">Lima, Perú</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold text-foreground mb-3 text-sm">Sígueme</h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Diego-Panta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/diego-panta-piscoche/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/DiegoPanta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Columna 4: Tech Stack */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Tech Stack</h3>

            <div className="pt-4 border-t border-border">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="h-4 w-4 text-primary" />
                <h4 className="font-semibold text-foreground text-sm">Desarrollador FullStack</h4>
              </div>
              <p className="text-muted-foreground text-xs">
                Ingeniero de Sistemas | Machine Learning | IA Automatization
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria inferior */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Diego Panta. Todos los derechos reservados.
            </p>
            <p className="text-center md:text-right text-muted-foreground/60 text-xs">
              Construyendo soluciones digitales con pasión y código limpio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}