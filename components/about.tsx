"use client"

import Image from "next/image"
import { Award, Clock, Users, CheckCircle2 } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  { icon: Award, value: 10, suffix: "+", label: "Jahre Erfahrung" },
  { icon: Users, value: 3000, suffix: "+", label: "Zufriedene Kunden" },
  { icon: Clock, value: 100, suffix: "%", label: "Termintreue" },
]

const highlights = [
  "Zertifizierte Premium-Produkte",
  "Modernste Ausstattung & Technik",
  "Individuelle Beratung",
  "Hol- & Bringservice verf\u00FCgbar",
]

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number
  suffix: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString("de-DE")}
      {suffix}
    </span>
  )
}

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/about.png"
                alt="\u00DCber GlanzWerk - Professionelle Fahrzeugaufbereitung"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 h-full w-full rounded-lg border-2 border-primary/30 -z-10"
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
              {"\u00DCber uns"}
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance mb-6">
              {"Leidenschaft f\u00FCr Perfektion seit \u00FCber 10 Jahren"}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {"Bei GlanzWerk verbinden wir modernste Technik mit handwerklicher Pr\u00E4zision. Unser erfahrenes Team behandelt jedes Fahrzeug mit der Sorgfalt und Aufmerksamkeit, die es verdient."}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {"Wir verwenden ausschlie\u00DFlich zertifizierte Premium-Produkte und modernste Ausstattung, um Ihrem Fahrzeug den bestm\u00F6glichen Schutz und Glanz zu verleihen."}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * i }}
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-serif text-2xl font-bold text-foreground">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
