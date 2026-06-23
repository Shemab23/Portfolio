import { Button } from "@/components/ui/button"

export default function InsightHero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-16 pb-12 md:pt-24">
      {/* Narrative Context Tag */}
      <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-copper/20 bg-copper/10 px-3 py-1 text-xs font-bold tracking-widest text-copper uppercase">
        <span>The Practical Engineer</span>
      </div>

      <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
        {/* Core Identity & Trajectory Introduction */}
        <div className="w-full space-y-6 md:w-[65%]">
          <h1 className="text-4xl leading-tight font-black tracking-tight text-foreground md:text-5xl">
            I build software to solve actual human problems. No fluff, no hype.
          </h1>

          <div className="space-y-4 text-base leading-relaxed font-light text-foreground/80 md:text-lg">
            <p>
              I am Bruno Shema—a 23-year-old Software Engineering student
              originally from{" "}
              <span className="font-semibold text-foreground">Rwanda</span>,
              currently executing systems design at the European University of
              Lefke in Cyprus.
            </p>
            <p>
              My journey didn't start with coding. Back in high school, my eyes
              were set on Physics and Chemistry. I wanted to be a mechanical
              engineer—to build tangible, physical machines and get my hands
              dirty. When the opportunity came to study software in Cyprus, I
              didn't hesitate. I refused to sit around at home waiting for
              things to happen. I chose action.
            </p>
            <p>
              Because of that physical foundation, I don't look at software as
              just abstract syntax on a screen. To me, code is a digital tool
              that must serve the physical world. If a piece of software or an
              AI system doesn't solve a concrete, real-life problem for a real
              human being, it isn't worth building.
            </p>
          </div>

          {/* Action Call for Technical Recruiters */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              variant="default"
              onClick={() => window.open("mailto:your-email@example.com")}
              className="rounded-xl border border-foreground/10 bg-foreground/5 px-6 py-5 text-xs font-bold tracking-wide text-foreground hover:bg-foreground/10"
            >
              Reach Out to Bruno
            </Button>
          </div>
        </div>

        {/* Quick Snapshot Profile Sidebar Container */}
        <div className="w-full space-y-4 rounded-2xl border border-foreground/10 bg-foreground/5 p-6 shadow-xl backdrop-blur-md md:w-[30%]">
          <h3 className="text-sm font-bold tracking-wider text-copper uppercase">
            Quick Snapshot
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-foreground/5 pb-2">
              <span className="text-foreground/40">Age</span>
              <span className="font-medium text-foreground">23 Years Old</span>
            </div>
            <div className="flex justify-between border-b border-foreground/5 pb-2">
              <span className="text-foreground/40">Origin</span>
              <span className="font-medium text-foreground">
                Kigali, Rwanda 🇷🇼
              </span>
            </div>
            <div className="flex justify-between border-b border-foreground/5 pb-2">
              <span className="text-foreground/40">Current Location</span>
              <span className="font-medium text-foreground">
                Lefke, Cyprus 🇨🇾
              </span>
            </div>
            <div className="flex justify-between pb-1">
              <span className="text-foreground/40">Philosophy</span>
              <span className="font-bold text-gold">Intuitive & Pragmatic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
