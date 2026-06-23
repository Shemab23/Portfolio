import { Badge } from "@/components/ui/badge"

// 1. Structured JSON-style array containing your top 3 heavy-hitting projects
const featuredProjects = [
  {
    id: "fidalix-internship",
    title: "Fidalix Delivery Logistics",
    category: "Commercial Internship",
    image:
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    summary:
      "Production delivery tracking application handling real-world asynchronous operations.",
    description:
      "Developed during a formalized summer engineering placement. Built to stream location metrics, handle complex state variations, and manage concurrent driver status payloads under rigorous production parameters.",
    tags: ["JavaScript", "State Management", "REST APIs", "Async Flow"],
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: "ab-radio",
    title: "AB Radio Ecosystem",
    category: "Full-Stack Architecture",
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    summary:
      "Decoupled full-stack system engineered for rapid broadcast management.",
    description:
      "Practical implementation of network and system architecture concepts. Features a decoupled environment with a robust TypeScript backend working in harmony with a responsive frontend to stream media resources efficiently.",
    tags: ["TypeScript", "Node.js", "Express", "Backend Architecture"],
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: "edusphere",
    title: "Edusphere Management",
    category: "System Design & Databases",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    summary:
      "Educational resource platform enforcing strict relational data modeling.",
    description:
      "An advanced application utilizing Python backend structures. Designed to handle deep data-driven architectures, utilizing robust relational constraints, data separation, and optimized query processing.",
    tags: ["Python", "Database Design", "Relational Modeling", "System Design"],
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24"
    >
      {/* Section Header */}
      <div className="mb-12 flex flex-col space-y-2">
        <span className="text-md font-bold tracking-widest text-copper uppercase">
          Featured Work
        </span>
        <h2 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">
          Production-Grade Systems
        </h2>
        <p className="max-w-xl text-sm font-light text-foreground/60 md:text-base">
          A curated selection of real-world commercial software and
          architecturally rigorous systems.
        </p>
      </div>

      {/* Responsive Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative flex h-[420px] flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 shadow-xl transition-all duration-300 hover:border-foreground/20 hover:shadow-2xl"
          >
            {/* Project Image & Category Pill */}
            <div className="relative h-48 w-full overflow-hidden bg-muted">
              <span className="top-0.3 absolute left-3 z-30 rounded-md border border-copper/20 bg-background/70 px-2 py-1 text-[10px] font-bold tracking-wider text-copper uppercase backdrop-blur-sm">
                {project.category}
              </span>
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Default Content Area (Visible initially) */}
            <div className="flex flex-grow flex-col justify-between bg-gradient-to-b from-transparent to-black/20 p-5">
              <div className="space-y-2">
                <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-copper">
                  {project.title}
                </h3>
                <p className="line-clamp-3 text-xs leading-relaxed font-light text-foreground/70">
                  {project.summary}
                </p>
              </div>

              {/* Technical Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[10px] font-medium tracking-wide text-foreground/80"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Smooth Animated Interaction Overlay */}
            <div className="pointer-events-none absolute inset-0 z-20 flex translate-y-4 transform flex-col justify-between rounded-2xl border border-white/10 bg-neutral-950/95 p-6 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <div className="space-y-2">
                <div className="space-y-1">
                  <h4 className="text-xl font-bold tracking-tight text-foreground">
                    {project.title}
                  </h4>
                </div>
                <p className="max-h-[180px] scrollbar-thin overflow-y-auto pr-1 text-xs leading-relaxed font-light text-foreground/80">
                  {project.description}
                </p>
              </div>

              {/* Operational Call To Actions */}
              <div className="flex items-center gap-3 border-t border-foreground/10 pt-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 py-2.5 text-center text-xs font-semibold text-foreground transition-colors hover:bg-white/10"
                >
                  Source Code
                </a>
                <a
                  href={project.liveUrl}
                  className="flex-1 rounded-xl bg-copper py-2.5 text-center text-xs font-bold tracking-wide text-black transition-colors hover:bg-copper/90"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
