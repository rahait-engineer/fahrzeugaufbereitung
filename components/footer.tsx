"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const footerLinks = [
  { label: "Startseite", href: "#hero" },
  { label: "Leistungen", href: "#services" },
  { label: "\u00DCber uns", href: "#about" },
  { label: "Galerie", href: "#gallery" },
  { label: "Kontakt", href: "#contact" },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="font-serif text-2xl font-bold tracking-tight text-primary">
                  Glanz
                </span>
                <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
                  Werk
                </span>
              </Link>
            </motion.div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {"Premium Fahrzeugaufbereitung in Berlin. Wir bringen den Glanz zur\u00FCck \u2013 mit Pr\u00E4zision, Leidenschaft und h\u00F6chster Qualit\u00E4t."}
            </p>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <motion.div key={link.href} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
              Kontakt
            </h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>{"Musterstra\u00DFe 12"}</p>
              <p>10115 Berlin</p>
              <motion.a
                href="tel:+49123456789"
                className="hover:text-primary transition-colors"
                whileHover={{ x: 4 }}
              >
                +49 123 456 789
              </motion.a>
              <motion.a
                href="mailto:info@glanzwerk.de"
                className="hover:text-primary transition-colors"
                whileHover={{ x: 4 }}
              >
                info@glanzwerk.de
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 border-t border-border pt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} GlanzWerk. Alle Rechte vorbehalten.`}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Impressum
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Datenschutz
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
