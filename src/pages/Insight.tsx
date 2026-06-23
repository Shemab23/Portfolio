import AcademicPillars from "@/components/insight/academic"
import BeyondTheCode from "@/components/insight/extracarruculat"
import InsightHero from "@/components/insight/hero"
import LearningJourney from "@/components/insight/journey"

export default function Insight() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden text-foreground">
      <InsightHero />
      <AcademicPillars />
      <LearningJourney />
      <BeyondTheCode />
    </main>
  )
}
