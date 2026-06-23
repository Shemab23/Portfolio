export default function LearningJourney() {
  const stats = [
    {
      label: "Core Languages",
      amount: 5,
      description: "TypeScript, Python, Java, C++, and SQL.",
    },
    {
      label: "Git Repositories",
      amount: 19,
      description: "Academic systems, internal tools, and internship logic.",
    },
    {
      label: "Years Engineering",
      amount: 3,
      description: "Continuous development across complex software layers.",
    },
  ]

  return (
    <section className="mx-auto w-full max-w-5xl border-t border-foreground/5 px-6 py-12">
      {/* Component Header */}
      <div className="mb-10 space-y-1">
        <span className="text-xs font-bold tracking-widest text-copper uppercase">
          The Trajectory
        </span>
        <h2 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
          My Learning Journey
        </h2>
      </div>

      {/* Re-Housed Counter Metrics */}
      <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col justify-between rounded-xl border border-foreground/10 bg-foreground/5 p-5"
          >
            <div>
              <div className="mb-1 text-3xl font-black text-copper">
                {stat.amount}+
              </div>
              <div className="mb-2 text-sm font-bold text-foreground">
                {stat.label}
              </div>
            </div>
            <p className="text-xs leading-relaxed font-light text-foreground/50">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Narrative Timeline */}
      <div className="relative space-y-8 before:absolute before:inset-y-0 before:left-3 before:w-[1px] before:bg-foreground/10">
        {/* Stage 1: The Analytical Roots */}
        <div className="group relative pl-8">
          <div className="absolute top-1.5 left-1.5 h-3 w-3 rounded-full bg-foreground/20 transition-colors group-hover:bg-copper" />
          <h3 className="text-sm font-bold text-foreground">
            Analytical Foundations &bull; Rwanda
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed font-light text-foreground/60">
            Trained my logical reasoning through high school Physics, Chemistry,
            and Advanced Mathematics. I originally intended to pursue mechanical
            systems to build tangible things, establishing a foundational
            approach that values hands-on, practical execution.
          </p>
        </div>

        {/* Stage 2: The Pivot to Systems */}
        <div className="group relative pl-8">
          <div className="absolute top-1.5 left-1.5 h-3 w-3 rounded-full bg-foreground/20 transition-colors group-hover:bg-copper" />
          <h3 className="text-sm font-bold text-foreground">
            Accelerated Software Adaptation &bull; 2022 - Present
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed font-light text-foreground/60">
            Moved to Cyprus to pursue a BSc in Software Engineering, refusing to
            wait around idle. I adapted quickly to digital architectures,
            learning to grasp programming concepts efficiently while maintaining
            a High Honor standing.
          </p>
        </div>

        {/* Stage 3: Commercial Verification */}
        <div className="group relative pl-8">
          <div className="absolute top-1.5 left-1.5 h-3 w-3 rounded-full bg-copper" />
          <h3 className="text-sm font-bold text-copper">
            Commercial Engineering Vetting &bull; Summer 2025
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed font-light text-foreground/80">
            Validated my university training under real-world commercial
            conditions during my engineering placement at Fidalix, building and
            optimizing asynchronous logistics tracking applications.
          </p>
        </div>
      </div>
    </section>
  )
}
