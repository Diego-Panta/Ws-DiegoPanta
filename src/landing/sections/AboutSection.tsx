// src/landing/sections/AboutSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Code2, 
  Target, 
  Award,
  Heart,
  Coffee,
  ChevronRight
} from "lucide-react";

export default function AboutSection() {
  const specializations = [
    {
      title: "Frontend",
      description: "React, Astro, TypeScript, Tailwind CSS",
      icon: "⚛️"
    },
    {
      title: "Backend",
      description: "Spring Boot, Laravel, APIs RESTful",
      icon: "⚙️"
    },
    {
      title: "Machine Learning",
      description: "TensorFlow, Keras, Modelos predictivos",
      icon: "🧠"
    },
    {
      title: "Bases de Datos",
      description: "PostgreSQL, MySQL, BigQuery",
      icon: "🗄️"
    }
  ];

  const achievements = [
    { value: "20/20", label: "Machine Learning" },
    { value: "20/20", label: "Python Intermedio" },
    { value: "19/20", label: "Ethical Hacking" },
    { value: "SFC", label: "Scrum Certified" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-primary">Mí</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ingeniero de Sistemas | Desarrollador Fullstack | Apasionado por la IA
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Columna Izquierda - Historia y Fortalezas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Perfil */}
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Mi Perfil</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ingeniero de Sistemas con especialización en Desarrollo de Software. 
                  Experiencia en backend con Spring Boot y Laravel, y frontend con React. 
                  Apasionado por Machine Learning y el código limpio.
                </p>
              </div>
            </div>

            {/* Fortalezas */}
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fortalezas</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Capacidad de adaptación, pensamiento analítico y enfoque en calidad de código. 
                  Busco contribuir en soluciones escalables que generen impacto real.
                </p>
              </div>
            </div>

            {/* Logros */}
            <div className="pt-4">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h4 className="font-semibold">Logros Destacados</h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="text-center p-3 rounded-lg bg-muted/50 border border-border"
                  >
                    <div className="text-lg font-bold text-primary">{achievement.value}</div>
                    <div className="text-xs text-muted-foreground">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha - Especialización y Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Especialización */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Especialización</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {specializations.map((spec, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-muted/30 border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="text-2xl mb-1">{spec.icon}</div>
                    <h4 className="font-medium text-sm">{spec.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{spec.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Idiomas */}
            <div>
              <h4 className="font-semibold mb-3">Idiomas</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50 border border-border">
                  <span>Español</span>
                  <span className="text-sm text-primary">Nativo</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50 border border-border">
                  <span>Inglés</span>
                  <span className="text-sm text-primary">Intermedio B1</span>
                </div>
              </div>
            </div>

            {/* Cuando no trabajo */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Heart className="h-5 w-5 text-primary" />
                <h4 className="font-semibold">Cuando no trabajo</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Open Source", "Ajedrez", "Caminar", "Café", "Tech Talks"].map((hobby, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm"
                  >
                    <Coffee className="h-3 w-3" />
                    {hobby}
                  </span>
                ))}
              </div>
            </div>

            {/* Intereses */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-3">
                <ChevronRight className="h-4 w-4 text-primary" />
                <h4 className="font-semibold">Intereses</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Automatización con IA",
                  "Microservicios",
                  "Open Source",
                  "Arquitectura escalable"
                ].map((interest, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Frase de cierre */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground italic">
            "Transformando ideas en soluciones digitales con código limpio y pasión por la tecnología"
          </p>
        </motion.div>
      </div>
    </section>
  );
}