export default function BeyondTheCode() {
  const pillars = [
    {
      title: "Humble Leadership & Peer Coaching",
      description:
        "I believe that understanding complex concepts quickly is a blessing meant to be shared. Throughout my time at university, I have hosted free, voluntary after-class coaching sessions for my classmates. Translating dense operating system internals and programming structures into simple, digestible logic helped my peers pass their exams and reinforced my own systems architecture knowledge.",
    },
    {
      title: "Grit, Farm Labor & High Work Ethic",
      description:
        "My mindset was shaped by real physical labor. Working on a farm and acting as an operational assistant taught me deep accountability, patience, and true work ethic. Because I know what it means to get my hands dirty under demanding conditions, I bring that same resilience, focus, and stamina to a desk when debugging complex code systems for hours on end.",
    },
    {
      title: "The Practical Reconfigurer",
      description:
        "I am drawn to fixing things that break. Outside of my formal studies, I take on freelance gigs diagnosing, rebuilding, and reconfiguring crashed infrastructure, websites, and database setups for people who hit dead ends. I treat every broken system as a puzzle, bringing broken digital environments back to stable functionality cleanly and efficiently.",
    },
    {
      title: "The Future: Intuitive IoT & Real Solutions",
      description:
        "I skip fictional movies to focus on tech podcasts, AI shifts, and new systems logic. My long-term dream is to build practical IoT systems where hardware and software converge. I want to design tools so intuitive that anyone can use them without training—making technology as natural to interact with as pushing a button on a TV remote.",
    },
  ]

  return (
    <section className="mx-auto w-full max-w-5xl border-t border-foreground/5 px-6 py-12">
      {/* Component Header */}
      <div className="mb-10 space-y-1">
        <span className="text-xs font-bold tracking-widest text-copper uppercase">
          Human Mechanics
        </span>
        <h2 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
          Beyond The Code
        </h2>
        <p className="max-w-md text-sm font-light text-foreground/60">
          How personal principles, community contribution, and real-world labor
          define my approach as an engineer.
        </p>
      </div>

      {/* Balanced Responsive 2x2 Grid Layout */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="flex flex-col justify-start space-y-2 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition-all duration-300 hover:border-white/20"
          >
            <h3 className="text-base font-bold tracking-tight text-foreground">
              {pillar.title}
            </h3>
            <p className="text-xs leading-relaxed font-light text-foreground/70 md:text-sm">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
