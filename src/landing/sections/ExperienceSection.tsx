// src/landing/sections/ExperienceSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award, 
  GraduationCap,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Practicante de Ingeniería de Sistemas",
      company: "GICA INGENIEROS E.I.R.L.",
      location: "Lima, Perú",
      period: "Febrero 2025 - Mayo 2025",
      description: [
        "Desarrollo de sitio web en WordPress con funcionalidades e-commerce para la venta de cursos en línea.",
        "Implementación de chatbot en PHP integrado en WordPress para atención a usuarios.",
        "Trabajo en equipo bajo metodologías ágiles."
      ],
      technologies: ["WordPress", "PHP", "Chatbot", "E-commerce"]
    }
  ];

  const education = [
    {
      degree: "Ingeniería de Sistemas e Informática",
      institution: "Universidad Nacional del Santa",
      location: "Nuevo Chimbote, Perú",
      period: "2021 - 2026",
      description: "Especialización en Desarrollo de Software. Participación en proyectos colaborativos con tecnologías emergentes."
    }
  ];

  const featuredCertifications = [
    {
      name: "Machine Learning con Python + IA",
      issuer: "UNI PIT",
      date: "2025",
      score: "20/20",
      category: "Machine Learning"
    },
    {
      name: "Scrum Fundamentals Certified (SFC)",
      issuer: "ScrumStudy",
      date: "2024",
      category: "Metodologías Ágiles"
    },
    {
      name: "Ethical Hacking",
      issuer: "UNI PIT",
      date: "2024",
      score: "19/20",
      category: "Ciberseguridad"
    },
    {
      name: "VII Congreso Internacional de Ingeniería de Sistemas",
      issuer: "Universidad de Lima",
      date: "2024",
      category: "Evento Académico"
    }
  ];

  const handleViewAllCertifications = () => {
    window.location.href = "/certificaciones";
  };

  return (
    <section className="py-20 bg-muted/30">
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
            Experiencia <span className="text-primary">Profesional</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Mi trayectoria profesional y formación académica
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experiencia Laboral */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Experiencia Laboral</h3>
            </div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-6 pb-8 border-l-2 border-primary/30 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
                  <h4 className="text-xl font-bold text-foreground mb-2">{exp.title}</h4>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Formación Académica */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Formación</h3>
            </div>

            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 mb-6"
              >
                <h4 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h4>
                <p className="text-primary font-medium mb-2">{edu.institution}</p>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {edu.location}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{edu.description}</p>
              </div>
            ))}

            {/* Certificaciones Destacadas */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <h4 className="text-lg font-semibold">Certificaciones Destacadas</h4>
                </div>
                <Button
                  variant="link"
                  className="text-primary gap-1 p-0 h-auto hover:gap-2 transition-all"
                  onClick={handleViewAllCertifications}
                >
                  Ver todas
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                {featuredCertifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div>
                      <p className="font-medium text-foreground text-sm">{cert.name}</p>
                      <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.date}</p>
                    </div>
                    {cert.score && (
                      <span className="text-xs font-semibold text-primary px-2 py-1 rounded-full bg-primary/10">
                        {cert.score}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}