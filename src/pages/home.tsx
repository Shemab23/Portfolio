import About from "@/components/About"
import Contact from "@/components/contact"
import CoreStack from "@/components/CoreStack"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Tool from "@/components/Tool"

export default function Home() {
  return (
    <div className="z-0 h-auto w-full">
      <Hero />
      <CoreStack />
      <About />
      <Tool />
      <Projects />
      <Contact />
    </div>
  )
}
