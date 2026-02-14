"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+49 123 456 789",
    href: "tel:+49123456789",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@glanzwerk.de",
    href: "mailto:info@glanzwerk.de",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Musterstra\u00DFe 12, 10115 Berlin",
    href: "#",
  },
  {
    icon: Clock,
    label: "\u00D6ffnungszeiten",
    value: "Mo\u2013Fr: 8:00\u201318:00 | Sa: 9:00\u201314:00",
    href: "#",
  },
]

const formFieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.1 * i },
  }),
}

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
            Kontakt
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
            Termin vereinbaren
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            {"Kontaktieren Sie uns f\u00FCr ein unverbindliches Angebot oder buchen Sie direkt Ihren Termin."}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            className="bg-card border border-border rounded-lg p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
              }}
              className="flex flex-col gap-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <motion.div
                  className="flex flex-col gap-2"
                  variants={formFieldVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0}
                >
                  <Label htmlFor="name" className="text-sm text-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Ihr Name"
                    className="bg-secondary border-border"
                  />
                </motion.div>
                <motion.div
                  className="flex flex-col gap-2"
                  variants={formFieldVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={1}
                >
                  <Label htmlFor="phone" className="text-sm text-foreground">
                    Telefon
                  </Label>
                  <Input
                    id="phone"
                    placeholder="Ihre Telefonnummer"
                    className="bg-secondary border-border"
                  />
                </motion.div>
              </div>

              <motion.div
                className="flex flex-col gap-2"
                variants={formFieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
              >
                <Label htmlFor="email" className="text-sm text-foreground">
                  E-Mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="bg-secondary border-border"
                />
              </motion.div>

              <motion.div
                className="flex flex-col gap-2"
                variants={formFieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
              >
                <Label htmlFor="service" className="text-sm text-foreground">
                  {"Gew\u00FCnschte Leistung"}
                </Label>
                <Input
                  id="service"
                  placeholder="z.B. Komplettaufbereitung, Keramikversiegelung"
                  className="bg-secondary border-border"
                />
              </motion.div>

              <motion.div
                className="flex flex-col gap-2"
                variants={formFieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
              >
                <Label htmlFor="message" className="text-sm text-foreground">
                  Nachricht
                </Label>
                <Textarea
                  id="message"
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                  rows={5}
                  className="bg-secondary border-border resize-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" size="lg" className="w-full">
                    Anfrage senden
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="group flex items-start gap-4 p-6 bg-card border border-border rounded-lg transition-colors hover:border-primary/50"
              >
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-md bg-primary flex-shrink-0"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <info.icon className="h-5 w-5 text-primary-foreground" />
                </motion.div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary mb-1">
                    {info.label}
                  </p>
                  <p className="text-foreground font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
