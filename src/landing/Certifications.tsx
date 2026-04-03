// src/landing/Certifications.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  ExternalLink,
  ArrowLeft,
  Code2,
  Shield,
  Users,
  TrendingUp,
  GraduationCap,
  Eye,
  FileText,
  ChevronRight,
  Image as ImageIcon,
  Maximize2,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/Modal";
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  category: "ml" | "development" | "cybersecurity" | "methodologies" | "events";
  score?: string;
  description: string;
  credential?: string;
  image?: string;
}

export default function CertificacionesPage() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [imageError, setImageError] = useState(false);
  const [isImageViewOpen, setIsImageViewOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const certifications: Certification[] = [
    // Machine Learning & Data
    {
      id: "ml1",
      name: "Machine Learning con Python + IA",
      issuer: "UNI PIT",
      date: "Noviembre 2025",
      category: "ml",
      score: "20/20",
      description: "Curso completo de Machine Learning con Python, incluyendo algoritmos supervisados y no supervisados, redes neuronales y aplicaciones de inteligencia artificial.",
      image: "/certificados/Machine Learning con Python + IA.jpg"
    },
    {
      id: "ml2",
      name: "Python Intermedio + IA",
      issuer: "UNI PIT",
      date: "Noviembre 2025",
      category: "ml",
      score: "20/20",
      description: "Programación avanzada en Python con enfoque en aplicaciones de inteligencia artificial y análisis de datos.",
      image: "/certificados/Python Intermedio + IA.jpg"
    },
    {
      id: "ml3",
      name: "Python Fundamentals",
      issuer: "LIMA educa",
      date: "Noviembre 2025",
      category: "ml",
      description: "Fundamentos de programación en Python, estructuras de datos y programación orientada a objetos.",
      image: "/certificados/Python Fundamentals.jpg"
    },
    {
      id: "ml4",
      name: "SQL Base de Datos",
      issuer: "UNI PIT",
      date: "Noviembre 2025",
      category: "ml",
      score: "14/20",
      description: "Fundamentos de bases de datos relacionales y SQL para gestión y consulta de datos.",
      image: "/certificados/SQL Base de Datos.jpg"
    },
    {
      id: "ml5",
      name: "Intro to SQL",
      issuer: "Kaggle",
      date: "Mayo 2025",
      category: "ml",
      description: "Introducción a SQL para análisis de datos, consultas básicas y avanzadas.",
      image: "/certificados/Intro to SQL.jpg"
    },
    // Desarrollo y herramientas
    {
      id: "dev1",
      name: "Power BI Básico",
      issuer: "UNI PIT",
      date: "Agosto 2024",
      category: "development",
      description: "Fundamentos de Power BI para visualización de datos y creación de dashboards interactivos.",
      image: "/certificados/Power BI Básico.jpg"
    },
    {
      id: "dev2",
      name: "Cursor con Python-desarrollo inteligente con IA",
      issuer: "Santander | Open Academy",
      date: "Agosto 2025",
      category: "development",
      description: "8 horas | 2 módulos | Autoevaluación. Desarrollo con IA usando Cursor y Python para optimizar flujos de trabajo.",
      image: "/certificados/Cursor con Python.jpg"
    },
    {
      id: "dev3",
      name: "Comunicación Efectiva",
      issuer: "Santander | Open Academy",
      date: "Agosto 2025",
      category: "development",
      description: "8 horas | 2 módulos | Autoevaluación. Habilidades de comunicación profesional en entornos laborales.",
      image: "/certificados/Comunicación Efectiva.jpg"
    },
    // Ciberseguridad
    {
      id: "sec1",
      name: "Ethical Hacking",
      issuer: "UNI PIT",
      date: "Septiembre 2024",
      category: "cybersecurity",
      score: "19/20",
      description: "Curso de Ethical Hacking con enfoque en seguridad informática, pruebas de penetración y vulnerabilidades.",
      image: "/certificados/Ethical Hacking.jpg"
    },
    // Metodologías
    {
      id: "met1",
      name: "Scrum Fundamentals Certified (SFC)",
      issuer: "ScrumStudy",
      date: "Diciembre 2024",
      category: "methodologies",
      description: "Certificación oficial en fundamentos de Scrum, metodologías ágiles y gestión de proyectos.",
      image: "/certificados/Scrum Fundamentals Certified (SFC).jpg"
    },
    // Eventos
    {
      id: "event1",
      name: "VII Congreso Internacional de Ingeniería de Sistemas",
      issuer: "Universidad de Lima",
      date: "Octubre 2024",
      category: "events",
      description: "Realidad extendida y juegos serios para la educación, competitividad y bienestar. 12 horas de duración.",
      credential: "Participación como asistente",
      image: "/certificados/VII Congreso Internacional de Ingeniería de Sistemas.jpg"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "ml":
        return <TrendingUp className="h-5 w-5" />;
      case "development":
        return <Code2 className="h-5 w-5" />;
      case "cybersecurity":
        return <Shield className="h-5 w-5" />;
      case "methodologies":
        return <Users className="h-5 w-5" />;
      case "events":
        return <GraduationCap className="h-5 w-5" />;
      default:
        return <Award className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "ml":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "development":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "cybersecurity":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      case "methodologies":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "events":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case "ml":
        return "Machine Learning & Data";
      case "development":
        return "Desarrollo & Herramientas";
      case "cybersecurity":
        return "Ciberseguridad";
      case "methodologies":
        return "Metodologías";
      case "events":
        return "Eventos & Congresos";
      default:
        return "Certificaciones";
    }
  };

  const groupedCertifications = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {} as Record<string, Certification[]>);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsImageViewOpen(true);
  };

  return (
    <>
      <Navbar scrollToTop={scrollToTop} />

      <main className="min-h-screen bg-background pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Button
              variant="ghost"
              className="mb-6 gap-2 text-muted-foreground hover:text-primary"
              onClick={() => window.location.href = "/"}
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Button>

            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Mis <span className="text-primary">Certificaciones</span>
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Formación continua y especialización en tecnologías modernas,
                inteligencia artificial y buenas prácticas de desarrollo
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <div className="text-center p-4 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary">{certifications.length}</div>
              <div className="text-sm text-muted-foreground">Certificaciones</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Categorías</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary">2024-25</div>
              <div className="text-sm text-muted-foreground">Período</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary">92%</div>
              <div className="text-sm text-muted-foreground">Promedio</div>
            </div>
          </motion.div>

          {/* Certificaciones por categoría */}
          {Object.entries(groupedCertifications).map(([category, certs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
              className="mb-12"
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${getCategoryColor(category)} mb-6`}>
                {getCategoryIcon(category)}
                <span className="text-sm font-semibold">{getCategoryName(category)}</span>
                <span className="text-xs ml-1">({certs.length})</span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certs.map((cert) => (
                  <button
                    key={cert.id}
                    onClick={() => {
                      setSelectedCert(cert);
                      setImageError(false);
                    }}
                    className="group text-left p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {cert.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                      </div>
                      <Eye className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </div>

                    <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {cert.date}
                      </span>
                      {cert.score && (
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                          {cert.score}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-muted-foreground mt-3 line-clamp-2">
                      {cert.description}
                    </p>
                  </button>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Footer de página */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center pt-12 border-t border-border"
          >
            <p className="text-muted-foreground text-sm">
              Formación continua para mantenerse actualizado en las últimas tecnologías
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />

      {/* Modal de Certificación con imagen clickeable */}
      <Modal
        isOpen={selectedCert !== null}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.name}
      >
        {selectedCert && (
          <div className="space-y-4">
            {/* Imagen del certificado - clickeable */}
            {selectedCert.image && (
              <div className="relative w-full rounded-lg overflow-hidden bg-muted/30 border border-border group">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="w-full h-auto object-contain max-h-64 cursor-pointer transition-transform group-hover:scale-105"
                  onError={handleImageError}
                  onClick={() => handleImageClick(selectedCert.image!)}
                />
                <button
                  onClick={() => handleImageClick(selectedCert.image!)}
                  className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
                {imageError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                    <div className="text-center">
                      <ImageIcon className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">Imagen no disponible</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="flex items-center gap-2 pb-3 border-b border-border">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{selectedCert.issuer}</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Fecha: {selectedCert.date}</span>
              </div>
              {selectedCert.score && (
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Nota: {selectedCert.score}</span>
                </div>
              )}
              {selectedCert.credential && (
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{selectedCert.credential}</span>
                </div>
              )}
            </div>

            <div className="pt-3">
              <h4 className="font-semibold text-foreground mb-2">Descripción</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {selectedCert.description}
              </p>
            </div>

            <div className="pt-3 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Haz clic en la imagen para verla en tamaño completo
              </p>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal para vista ampliada de imagen */}
      <Modal
        isOpen={isImageViewOpen}
        onClose={() => setIsImageViewOpen(false)}
        title="Certificado"
        size="large"
      >
        <div className="flex justify-center">
          <img
            src={selectedImage}
            alt="Certificado ampliado"
            className="max-w-full h-auto max-h-[70vh] object-contain"
            onError={handleImageError}
          />
        </div>
      </Modal>
    </>
  );
}