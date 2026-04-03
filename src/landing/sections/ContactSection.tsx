// src/landing/sections/ContactSection.tsx
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombres: "",
    correo: "",
    telefono: "",
    mensaje: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSdEjemplo/formResponse";
  const FIELD_IDS = {
    nombres: "entry.1234567890",
    correo: "entry.1234567891",
    telefono: "entry.1234567892",
    mensaje: "entry.1234567893"
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'nombres') {
      setFormData(prev => ({
        ...prev,
        [name]: value.toUpperCase()
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const validateForm = () => {
    if (!formData.nombres.trim() || !formData.correo.trim() || !formData.mensaje.trim()) {
      alert("Por favor completa todos los campos obligatorios");
      return false;
    }

    const emailPattern = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    if (!emailPattern.test(formData.correo)) {
      alert("Por favor ingresa un correo electrónico válido");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append(FIELD_IDS.nombres, formData.nombres);
      formDataToSend.append(FIELD_IDS.correo, formData.correo);
      formDataToSend.append(FIELD_IDS.telefono, formData.telefono);
      formDataToSend.append(FIELD_IDS.mensaje, formData.mensaje);

      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors"
      });

      setFormData({
        nombres: "",
        correo: "",
        telefono: "",
        mensaje: ""
      });

      alert("¡Mensaje enviado correctamente! Te contactaré pronto.");

    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendWhatsApp = () => {
    const message = encodeURIComponent(`Hola Diego, me interesa contactarte sobre tus servicios. Mi nombre es ${formData.nombres || 'usuario'}`);
    window.open(`https://wa.me/5194802461?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "josepanta507@gmail.com",
      link: "mailto:josepanta507@gmail.com"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "(+51) 74802461",
      link: "https://wa.me/5194802461"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Lima, Perú",
      link: null
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", link: "https://github.com/Diego-Panta", handle: "@Diego-Panta" },
    { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/diego-panta-piscoche/", handle: "Diego Panta" },
    { icon: Twitter, label: "Twitter", link: "https://twitter.com/DiegoPanta", handle: "@DiegoPanta" }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Send className="h-4 w-4 text-primary" />
            <span className="text-foreground text-sm font-medium">Hablemos</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            ¿Tienes un proyecto
            <span className="block text-primary">
              en mente?
            </span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Estoy siempre abierto a nuevas oportunidades y colaboraciones. 
            <span className="text-primary font-semibold"> ¡Hablemos y hagamos realidad tus ideas!</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="bg-card border-border shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Envíame un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground font-medium">
                      Nombres Completos <span className="text-destructive">*</span>
                    </label>
                    <Input
                      name="nombres"
                      value={formData.nombres}
                      onChange={handleInputChange}
                      placeholder="DIEGO PANTA"
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground font-medium">
                        Correo electrónico <span className="text-destructive">*</span>
                      </label>
                      <Input
                        name="correo"
                        type="email"
                        value={formData.correo}
                        onChange={handleInputChange}
                        placeholder="ejemplo@email.com"
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:ring-primary/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground font-medium">
                        Teléfono
                      </label>
                      <Input
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        placeholder="+51 999 999 999"
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground font-medium">
                      Mensaje <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      placeholder="Cuéntame sobre tu proyecto, idea o propuesta..."
                      rows={5}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:ring-primary/20 resize-none"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                    </Button>
                    
                    <Button 
                      type="button"
                      size="lg"
                      variant="outline"
                      onClick={handleSendWhatsApp}
                      className="flex-1 border-2 border-primary/30 bg-transparent hover:bg-primary/10 text-foreground font-bold"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Contactar por WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Contacto Directo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      {item.link ? (
                        <a 
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground font-medium hover:text-primary transition-colors break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-foreground font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Redes Sociales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                        {social.handle}
                      </div>
                      <div className="text-xs text-muted-foreground">{social.label}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-accent/10 border-accent/20">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "La mejor manera de predecir el futuro es creándolo"
                </p>
                <p className="text-primary font-semibold mt-3">
                  ¡Espero saber de ti pronto! 🚀
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}