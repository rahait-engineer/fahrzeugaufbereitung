"use client"

import Image from "next/image"
import { Sparkles, Car, ShieldCheck, Droplets, Sun, Wrench } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Car,
    title: "Au\u00DFenaufbereitung",
    description:
      "Professionelle Handw\u00E4sche, Lackpolitur, Felgenreinigung und Versiegelung f\u00FCr einen showroom-w\u00FCrdigen Glanz.",
    image: "/images/detail-exterior.jpg",
  },
  {
    icon: Sparkles,
    title: "Innenaufbereitung",
    description:
      "Tiefenreinigung von Polstern, Leder, Armaturenbrett und allen Oberfl\u00E4chen f\u00FCr ein makelloses Interieur.",
    image: "/images/detail-interior.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Keramikversiegelung",
    description:
      "Langanhaltender Schutz und brillanter Glanz durch professionelle Keramikbeschichtung.",
    image: "/images/detail-ceramic.jpg",
  },
  {
    icon: Wrench,
    title: "Lackkorrektur",
    description:
      "Entfernung von Kratzern, Swirl-Marks und Lackdefekten f\u00FCr ein makelloses Finish.",
    image: "/images/detail-exterior.jpg",
  },
  {
    icon: Droplets,
    title: "Nano-Versiegelung",
    description:
      "Innovative Nanotechnologie f\u00FCr langanhaltenden Schutz gegen Schmutz, Wasser und UV-Strahlung.",
    image: "/images/detail-ceramic.jpg",
  },
  {
    icon: Sun,
    title: "Komplettaufbereitung",
    description:
      "Das Rundum-Sorglos-Paket: Innen- und Au\u00DFenaufbereitung f\u00FCr Ihr Fahrzeug in Premium-Qualit\u00E4t.",
    image: "/images/hero-car.jpg",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
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
            Unsere Leistungen
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
            Exzellenz in jeder Leistung
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            {"Von der Innenreinigung bis zur Keramikversiegelung \u2013 wir bieten Ihnen das komplette Spektrum der professionellen Fahrzeugaufbereitung."}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/50"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60" />
                <motion.div
                  className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <service.icon className="h-5 w-5 text-primary-foreground" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
