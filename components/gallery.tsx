"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const galleryImages = [
  {
    src: "/images/hero-car.jpg",
    alt: "Professionell aufbereiteter schwarzer Sportwagen",
    category: "Au\u00DFen",
  },
  {
    src: "/images/detail-interior.jpg",
    alt: "Makellose Innenraumaufbereitung",
    category: "Innen",
  },
  {
    src: "/images/detail-exterior.jpg",
    alt: "Lackpolitur und Korrektur",
    category: "Lackpflege",
  },
  {
    src: "/images/detail-ceramic.jpg",
    alt: "Keramikversiegelung Anwendung",
    category: "Versiegelung",
  },
  {
    src: "/images/gallery-1.jpg",
    alt: "Fertiges Ergebnis nach Komplettaufbereitung",
    category: "Au\u00DFen",
  },
  {
    src: "/images/about.jpg",
    alt: "Unser Team bei der Arbeit",
    category: "Studio",
  },
]

const categories = ["Alle", "Au\u00DFen", "Innen", "Lackpflege", "Versiegelung", "Studio"]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Alle")

  const filteredImages =
    activeCategory === "Alle"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-4">
            Unsere Arbeit
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
            Galerie
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            {"\u00DCberzeugen Sie sich selbst von unserer Arbeit. Jedes Fahrzeug wird mit Liebe zum Detail aufbereitet."}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-md text-sm uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.src + image.category}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 flex items-end"
                  initial={false}
                  whileHover={{ backgroundColor: "rgba(10,10,10,0.65)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs uppercase tracking-widest text-primary">
                      {image.category}
                    </span>
                    <p className="text-foreground font-medium mt-1">{image.alt}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
