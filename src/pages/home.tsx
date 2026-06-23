import Contact from "@/components/home/contact"
import CoreStack from "@/components/home/CoreStack"
import Hero from "@/components/home/Hero"
import Projects from "@/components/home/Projects"

export default function Home() {
  return (
    <div className="z-0 h-auto w-full">
      <Hero />
      <CoreStack />
      <Projects />
      <Contact />
    </div>
  )
}
