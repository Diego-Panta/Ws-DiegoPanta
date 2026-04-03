// src/landing/sections/ContactSection.tsx
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombres: "",
    correo: "",
    telefono: "",
    mensaje: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Obtener Access Key de variables de entorno
  const WEB3FORMS_ACCESS_KEY = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'nombres' ? value.toUpperCase() : value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.nombres.trim()) {
      setErrorMessage("Por favor ingresa tu nombre");
      return false;
    }

    if (!formData.correo.trim()) {
      setErrorMessage("Por favor ingresa tu correo electrónico");
      return false;
    }

    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    if (!emailRegex.test(formData.correo)) {
      setErrorMessage("Por favor ingresa un correo electrónico válido");
      return false;
    }

    if (!formData.mensaje.trim()) {
      setErrorMessage("Por favor ingresa tu mensaje");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Verificar que la Access Key existe
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "") {
      setSubmitStatus("error");
      setErrorMessage("Error de configuración: Access Key no encontrada");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formData.nombres,
        email: formData.correo,
        phone: formData.telefono || "No especificado",
        message: formData.mensaje,
        subject: `Portafolio - Mensaje de ${formData.nombres}`,
        from_name: formData.nombres,
        replyto: formData.correo,
        botcheck: false,
        redirect: false
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          nombres: "",
          correo: "",
          telefono: "",
          mensaje: ""
        });
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        throw new Error(result.message || 'Error al enviar');
      }
    } catch (error) {
      console.error('Error detallado:', error);
      setSubmitStatus("error");
      setErrorMessage("Error al enviar el mensaje. Por favor, intenta nuevamente o usa WhatsApp.");
      setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendWhatsApp = () => {
    window.open(`https://wa.me/51914036960?text=Hola%20Diego,%20me%20interesa%20contactarte%20sobre%20tus%20servicios.`, '_blank');
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
      value: "(+51) 914036960",
      link: "https://wa.me/51914036960"
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
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 text-green-500 text-sm border border-green-500/20">
                      <CheckCircle className="h-4 w-4 shrink-0" />
                      <span>¡Mensaje enviado correctamente! Te responderé pronto.</span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm border border-destructive/20">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

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
                      disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
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

            <Button
              onClick={handleSendWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-lg shadow-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contáctame por WhatsApp
            </Button>

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