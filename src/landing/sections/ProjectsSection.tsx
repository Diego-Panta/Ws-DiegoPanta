// src/landing/sections/ProjectsSection.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Brain, 
  MessageCircle, 
  GraduationCap,
  Eye,
  Code2
} from "lucide-react";

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Sistema LMS en la nube",
      description: "Sistema de gestión de aprendizaje (LMS) desarrollado en colaboración universitaria. Arquitectura frontend moderna con React y Astro.",
      technologies: ["React", "Astro", "TypeScript", "Laravel"],
      features: [
        "Arquitectura frontend moderna",
        "Gestión de cursos y usuarios",
        "Sistema de evaluación en línea"
      ],
      icon: GraduationCap,
      github: "https://github.com/Diego-Panta/lms-system",
      demo: "#",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Chatbot con Gemini y analítica educativa",
      description: "Chatbot inteligente con API de Gemini para asistencia académica, integrado con analítica educativa usando BigQuery y Machine Learning.",
      technologies: ["Python", "Gemini API", "BigQuery", "ML", "Google Cloud"],
      features: [
        "Asistencia académica automatizada",
        "Análisis de rendimiento estudiantil",
        "Predicción de deserción"
      ],
      icon: MessageCircle,
      github: "https://github.com/Diego-Panta/gemini-chatbot",
      demo: "#",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Clasificador de imágenes con CNN",
      description: "Red neuronal convolucional diseñada con TensorFlow y Keras para clasificación de imágenes, alcanzando 92% de precisión.",
      technologies: ["Python", "TensorFlow", "Keras", "CNN", "Data Augmentation"],
      features: [
        "92% de precisión en clasificación",
        "Técnicas de data augmentation",
        "Optimización de hiperparámetros"
      ],
      icon: Brain,
      github: "https://github.com/Diego-Panta/cnn-image-classifier",
      demo: "#",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Chatbot para Asistencia al Cliente",
      description: "Chatbot en PHP integrado en WordPress para asistencia a usuarios con preguntas sobre cursos y servicios de la empresa.",
      technologies: ["PHP", "WordPress", "MySQL", "API REST"],
      features: [
        "Integración con WordPress",
        "Respuestas automáticas",
        "Base de conocimiento"
      ],
      icon: MessageCircle,
      github: "https://github.com/Diego-Panta/wordpress-chatbot",
      demo: "#",
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section className="relative overflow-hidden py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Proyectos <span className="text-primary">Destacados</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Proyectos que demuestran mi experiencia en desarrollo fullstack, machine learning e inteligencia artificial
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isHovered = hoveredProject === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl opacity-50 group-hover:opacity-75`} />
                <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 h-full">
                  {/* Icono y título */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                  {/* Características */}
                  <ul className="space-y-1 mb-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium border border-border group-hover:border-primary/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Animación hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-2xl pointer-events-none"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Botón Ver más */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Diego-Panta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-medium"
          >
            <Code2 className="h-4 w-4" />
            Ver más proyectos en GitHub
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}