"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

const packages = [
  {
    name: "Basis",
    description: "Die essenzielle Pflege fuer Ihr Fahrzeug.",
    price: "89",
    popular: false,
    features: [
      "Handwaesche aussen",
      "Felgenreinigung",
      "Reifenpflege",
      "Fensterreinigung",
      "Trocknung & Kontrollcheck",
    ],
  },
  {
    name: "Premium",
    description: "Unser beliebtestes Paket fuer anspruchsvolle Fahrer.",
    price: "189",
    popular: true,
    features: [
      "Komplette Aussenwaesche",
      "Innenreinigung & Staubsaugen",
      "Leder- / Polsterpflege",
      "Kunststoffpflege innen",
      "Felgen & Reifen Detailing",
      "Fenster innen & aussen",
      "Duftauffrischung",
    ],
  },
  {
    name: "Exklusiv",
    description: "Das Rundum-Sorglos-Paket auf hoechstem Niveau.",
    price: "349",
    popular: false,
    features: [
      "Alles aus Premium",
      "1-Stufen Lackpolitur",
      "Lackversiegelung (6 Monate)",
      "Motorwaesche",
      "Scheinwerferaufbereitung",
      "Tiefenreinigung Interieur",
      "Lederimpraegnierung",
      "Nano-Glasversiegelung",
    ],
  },
]

const extras = [
  { name: "Keramikversiegelung", price: "ab 499" },
  { name: "Lackkorrektur (2-Stufen)", price: "ab 299" },
  { name: "Nano-Versiegelung", price: "ab 149" },
  { name: "Ozonbehandlung", price: "ab 79" },
  { name: "Cabriodach-Impraegnierung", price: "ab 89" },
  { name: "Steinschlag-Ausbesserung", price: "ab 49" },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-secondary/50">
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
            Preise
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
            Transparente Preisgestaltung
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            {"Waehlen Sie das passende Paket fuer Ihr Fahrzeug. Alle Preise gelten fuer PKW \u2013 fuer SUV, Van und Transporter auf Anfrage."}
          </p>
        </motion.div>

        {/* Packages */}
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative flex flex-col rounded-lg border bg-card p-8 ${
                pkg.popular
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border"
              }`}
            >
              {pkg.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground"
                >
                  Beliebteste Wahl
                </motion.div>
              )}

              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">
                  {pkg.price}
                </span>
                <span className="text-lg text-muted-foreground">{"\u20AC"}</span>
              </div>

              <ul className="mb-8 flex flex-col gap-3 flex-1">
                {pkg.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border bg-secondary text-foreground hover:bg-secondary/80 hover:border-primary/50"
                }`}
              >
                Jetzt buchen
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Extras */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">
            Zusatzleistungen
          </h3>
          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {extras.map((extra) => (
              <motion.div
                key={extra.name}
                variants={cardVariants}
                whileHover={{
                  x: 4,
                  borderColor: "hsl(217, 91%, 50%)",
                  transition: { duration: 0.2 },
                }}
                className="flex items-center justify-between rounded-lg border border-border bg-card px-6 py-4"
              >
                <span className="text-sm font-medium text-foreground">
                  {extra.name}
                </span>
                <span className="text-sm font-bold text-primary whitespace-nowrap ml-4">
                  {extra.price} {"\u20AC"}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
