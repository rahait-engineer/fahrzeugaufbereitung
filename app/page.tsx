import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Pricing } from "@/components/pricing"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
