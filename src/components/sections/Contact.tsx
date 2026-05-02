import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const data: Record<string, string> = { "form-name": "contact" };
    new FormData(form).forEach((value, key) => {
      data[key] = value as string;
    });

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      toast.success("¡Mensaje enviado! Te respondemos en menos de 24 h.");
      form.reset();
    } catch {
      toast.error("Hubo un error al enviar. Escribinos directamente por WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-16 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              06 — Contacto
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
              Hablemos de tu próxima landing.
            </h2>
            <p className="mt-4 text-muted-foreground text-base lg:text-lg leading-relaxed">
              Contanos tu proyecto. Respuesta con propuesta clara en menos de 24 horas.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:maufabagosgam@gmail.com"
                className="flex items-center gap-3 text-sm lg:text-base text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 shrink-0" />
                maufabagosgam@gmail.com
              </a>
              <a
                href="https://wa.me/56933685702"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm lg:text-base text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5 shrink-0" />
                WhatsApp +56 9 3368 5702
              </a>
              <div className="flex items-center gap-3 text-sm lg:text-base text-muted-foreground">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 shrink-0" />
                Chile · Trabajamos remoto
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            name="contact"
            onSubmit={onSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 p-5 sm:p-7 lg:p-10 rounded-2xl lg:rounded-3xl bg-gradient-card border border-border space-y-4"
          >
            {/* Required hidden fields for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <input name="bot-field" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name" name="name" required
                  placeholder="Tu nombre"
                  className="bg-background border-border h-11 lg:h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email" name="email" type="email" required
                  placeholder="tu@email.com"
                  className="bg-background border-border h-11 lg:h-12"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Empresa o proyecto</Label>
              <Input
                id="company" name="company"
                placeholder="Nombre de tu marca"
                className="bg-background border-border h-11 lg:h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Contanos sobre tu proyecto</Label>
              <Textarea
                id="message" name="message" required rows={4}
                placeholder="¿Qué necesitás? ¿Tenés referencias?"
                className="bg-background border-border resize-none"
              />
            </div>
            <Button
              type="submit" variant="hero" size="lg"
              disabled={loading}
              className="w-full sm:w-auto flex items-center gap-2"
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
