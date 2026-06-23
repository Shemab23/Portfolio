import { Button } from "../ui/button"

export default function Hero() {
  return (
    <div className="z-10 mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-12 md:flex-row md:py-20">
      {/* High-Impact Value Proposition */}
      <div className="flex w-full flex-col justify-center text-center md:w-[60%] md:text-left">
        <div className="space-y-2">
          <span className="mx-auto w-fit rounded-full bg-copper/10 px-3 py-1 text-xs font-bold tracking-widest text-copper uppercase md:mx-0">
            Available for Opportunities
          </span>
          <h1 className="text-4xl font-black tracking-tight text-foreground md:text-6xl">
            BRUNO SHEMA
          </h1>
          <p className="text-lg font-medium text-foreground/60 md:text-xl">
            Bachelors in{" "}
            <span className="font-semibold text-copper">
              Software Engineering
            </span>
          </p>
        </div>
        <div className="flex w-fit items-center gap-2 self-center rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-bold tracking-wider text-gold uppercase">
          <span>🎓 CGPA: 3.78 / 4.00</span>
          <span className="text-white/20">•</span>
          <span>High Honor Graduate</span>
        </div>
        <p className="mx-auto mt-6 w-full max-w-xl text-base leading-relaxed font-light text-foreground/80 md:mx-0 md:text-lg">
          I design and engineer production-grade full-stack applications.
          Focused on architecting rock-solid reliability, high uptime
          parameters, and effortless horizontal scaling.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-8 md:justify-start">
          <Button
            variant="gold"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-xl px-8 py-6 text-sm font-semibold shadow-lg shadow-gold/20 transition-transform active:scale-95"
          >
            View My Work
          </Button>
          <Button
            variant="default"
            onClick={() => window.open("mailto:your-email@example.com")}
            className="rounded-xl border border-white/10 bg-white/5 px-8 py-6 text-sm font-semibold text-foreground transition-all hover:bg-white/10"
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Clean, Uncluttered Image Frame */}
      <div className="flex w-full flex-col items-center md:w-[35%]">
        <div className="group relative aspect-4/5 w-full max-w-[320px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <div className="absolute inset-0 z-20 bg-linear-to-t from-background via-transparent to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-20" />
          <img
            src="images/heroImage.png"
            alt="Bruno Shema Headshot"
            className="z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  )
}
