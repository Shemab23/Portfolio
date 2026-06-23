import { Button } from "./ui/button"

const Items = [
  { label: "Languages", amount: 5 },
  { label: "Projects", amount: 19 },
  { label: "Experience", amount: 3 },
]

export default function Hero() {
  return (
    // 1. Swapped flex layout to stacked-column on mobile and side-by-side on desktop
    <div className="z-10 mx-auto flex h-auto w-full max-w-7xl flex-col-reverse items-center justify-between gap-10 px-6 py-10 md:flex-row md:p-14">
      {/* Text Context Area */}
      <div className="flex w-full flex-col justify-center md:w-[60%]">
        <div className="py-4">
          <h1 className="text-4xl font-extrabold tracking-tight">
            BRUNO SHEMA
          </h1>
          <p className="mt-1 text-lg text-muted-foreground">
            Bachelors in{" "}
            <span className="text-xl font-semibold text-copper">
              Software Engineering
            </span>
          </p>
        </div>

        <p className="w-full max-w-xl pb-6 text-lg leading-relaxed font-light text-foreground/80">
          Production-grade full-stack apps built for rock-solid reliability,
          high uptime, and effortless scaling.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Button
            variant="gold"
            onClick={() => alert("view projects CTA")}
            className="text-md px-6 py-5"
          >
            View projects
          </Button>
          <Button
            variant="default"
            onClick={() => alert("view contact CTA")}
            className="text-md px-6 py-5"
          >
            Get in touch
          </Button>
        </div>
      </div>

      {/* Visual Content Area */}
      <div className="flex w-full flex-col items-center gap-6 md:w-[35%]">
        {/* 2. Fixed custom layout values to use responsive Tailwind framework sizing */}
        <div className="relative aspect-3/4 w-full max-w-70 overflow-hidden rounded-2xl shadow-2xl md:max-w-sm">
          <div className="absolute inset-0 z-20 bg-gray-500/10 backdrop-blur-[1px] hover:backdrop-blur-none" />
          <img
            src="images/heroImage.png"
            alt="Bruno Shema Profile"
            className="z-10 h-full w-full rounded-2xl object-cover"
          />
        </div>

        {/* 3. Replaced <li> layout wrapper with a clean semantic div layout and added React tracking keys */}
        <div className="flex w-full justify-center gap-6 pt-2">
          {Items.map((item) => (
            <div
              key={item.label}
              className="flex min-w-17.5 flex-1 flex-col items-center gap-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/5 bg-white/10 p-2 font-bold text-foreground shadow-inner backdrop-blur-md">
                {item.amount}
              </div>
              <span className="w-full truncate text-center text-xs font-medium text-foreground/60 capitalize">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
