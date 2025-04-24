import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  )
}
