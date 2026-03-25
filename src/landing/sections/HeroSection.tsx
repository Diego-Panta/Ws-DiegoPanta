// src/landing/sections/HeroSection.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin,
  Code2,
  Brain,
  Database,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleProjectsClick = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Astro", icon: "🚀" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind", icon: "🎨" },
    { name: "Python", icon: "🐍" },
    { name: "Laravel", icon: "⚡" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "TensorFlow", icon: "🧠" }
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-background">
      {/* Fondo con gradientes en azul */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Columna Izquierda - Contenido */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge disponible */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Disponible para nuevos proyectos</span>
            </motion.div>

            {/* Título principal */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                <span className="text-foreground">Hola, soy</span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-2">
                  Diego Panta
                </span>
              </h1>
              <div className="mt-4 flex items-center gap-2 text-xl md:text-2xl text-muted-foreground">
                <Code2 className="h-6 w-6 text-primary" />
                <span>Desarrollador Fullstack</span>
              </div>
            </div>

            {/* Descripción */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Especializado en crear aplicaciones web escalables y de alto rendimiento. 
              Apasionado por el código limpio, las mejores prácticas y el aprendizaje continuo. 
              <span className="block mt-2 text-primary font-medium">
                +1 año transformando ideas en soluciones digitales.
              </span>
            </p>

            {/* Tecnologías principales */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Brain className="h-4 w-4 text-primary" />
                Tecnologías principales:
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 group"
                onClick={handleProjectsClick}
              >
                <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Ver Proyectos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 bg-transparent hover:bg-primary/10 text-foreground transition-all duration-300 hover:scale-105 group"
                onClick={() => window.open("/cv-diego-panta.pdf", "_blank")}
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                Descargar CV
              </Button>
            </div>

            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-6 pt-4 border-t border-border"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Lima, Perú</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:josepanta507@gmail.com" className="hover:text-primary transition-colors">
                  josepanta507@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  onClick={() => window.open("https://github.com/Diego-Panta", "_blank")}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  onClick={() => window.open("https://www.linkedin.com/in/diego-panta-piscoche/", "_blank")}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  onClick={handleContactClick}
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna Derecha - Imagen y stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Foto de perfil con efecto moderno */}
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
                <img
                  src="/images/profile.jpg"
                  alt="Diego Panta - Desarrollador Fullstack"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Badge flotante - Machine Learning */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -top-6 -left-6 bg-card border border-border p-3 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Brain className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground">Machine Learning</div>
                    <div className="text-xs text-muted-foreground">TensorFlow · Keras</div>
                  </div>
                </div>
              </motion.div>

              {/* Badge flotante - Fullstack */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.4, type: "spring" }}
                className="absolute -bottom-6 -right-6 bg-card border border-border p-3 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Database className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground">Fullstack Dev</div>
                    <div className="text-xs text-muted-foreground">React · Spring Boot · Laravel</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats rápidos */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "5+", label: "Años de estudio", icon: "📚" },
                { value: "15+", label: "Proyectos", icon: "💻" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + idx * 0.1 }}
                  className="text-center p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
                    <span>{stat.icon}</span>
                    <span>{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Descubre mi trabajo</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="h-4 w-4 rotate-90 text-muted-foreground" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}