"use client"

import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Michael W.",
    car: "BMW M4",
    rating: 5,
    text: "Absolut beeindruckt! Mein M4 sieht aus wie am ersten Tag. Die Keramikversiegelung ist einfach perfekt. Kann GlanzWerk nur w\u00E4rmstens empfehlen!",
  },
  {
    name: "Sandra K.",
    car: "Mercedes C-Klasse",
    rating: 5,
    text: "Professioneller Service von Anfang bis Ende. Die Innenaufbereitung war sensationell \u2013 es riecht und sieht aus wie neu. Top Qualit\u00E4t!",
  },
  {
    name: "Thomas R.",
    car: "Audi RS6",
    rating: 5,
    text: "Bereits zum dritten Mal bei GlanzWerk und jedes Mal aufs Neue begeistert. Die Lackkorrektur hat alle Swirl-Marks restlos entfernt. Fantastische Arbeit!",
  },
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
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-secondary">
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
            Kundenstimmen
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
            Was unsere Kunden sagen
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="relative bg-card border border-border rounded-lg p-8 transition-colors hover:border-primary/50"
            >
              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
              </motion.div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                  >
                    <Star className="h-4 w-4 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                {`"${testimonial.text}"`}
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-xs text-primary">{testimonial.car}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
