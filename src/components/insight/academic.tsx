import { Badge } from "@/components/ui/badge"

const pillars = [
  {
    title: "The Graduation Project: Supply & Farm Logistics",
    description:
      "Instead of chasing abstract AI hype, I engineered a highly practical, production-ready system inspired by my real-world farm boss. It solves a critical marketplace gap: direct, fluid communication between agricultural suppliers and commercial retail shops.",
    courses: [
      { code: "SENG451", name: "Graduation Project I", grade: "Grade: A" },
      {
        code: "SENG212",
        name: "Software Requirements Analysis",
        grade: "Grade: A",
      },
    ],
  },
  {
    title: "Low-Level Systems & Networking",
    description:
      "My roots are in tangible engineering. These courses prove I understand exactly what happens to physical hardware and packets when software is executed.",
    courses: [
      { code: "COMP214", name: "Operating Systems", grade: "Grade: A" },
      { code: "COMP339", name: "Systems Programming", grade: "Grade: A" },
      { code: "COMP342", name: "Computer Networks", grade: "Grade: B+" },
      {
        code: "SENG305",
        name: "Software Design & Architecture",
        grade: "Grade: B+",
      },
    ],
  },
  {
    title: "Data Integrity & Validation",
    description:
      "Systems must be reliable and secure. This coursework validates my ability to model robust data structures and implement hard relational database constraints.",
    courses: [
      {
        code: "COMP337",
        name: "Database Management Systems",
        grade: "Grade: A",
      },
      { code: "COMP440", name: "Database Security", grade: "Grade: A" },
      {
        code: "SENG308",
        name: "Software Quality Assurance & Testing",
        grade: "Grade: A",
      },
      { code: "COMP335", name: "Analysis of Algorithms", grade: "Grade: A-" },
    ],
  },
]

export default function AcademicPillars() {
  return (
    <section className="mx-auto w-full max-w-5xl border-t border-foreground/5 px-6 py-12">
      {/* Component Header */}
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="space-y-1">
          <span className="text-xs font-bold tracking-widest text-gold uppercase">
            Rigorous Foundations
          </span>
          <h2 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
            Academic Pillars & Execution
          </h2>
          <p className="max-w-xl text-sm font-light text-foreground/60">
            Theoretical knowledge is useless unless it solves an actual human
            problem. Here is how my{" "}
            <span className="font-semibold text-foreground">3.78 CGPA</span>{" "}
            directly translates to real-world impact.
          </p>
        </div>

        {/* GPA Display Block */}
        <div className="shrink-0 rounded-xl border border-gold/20 bg-gold/10 px-4 py-2 text-center md:text-right">
          <div className="text-xs font-bold tracking-wider text-gold uppercase">
            Cumulative GPA
          </div>
          <div className="text-xl font-black text-foreground">3.78 / 4.00</div>
        </div>
      </div>

      {/* 3-Column Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="bg-white/60d flex flex-col justify-between rounded-2xl border border-foreground/10 p-6 shadow-xl transition-all duration-300 hover:border-foreground/20"
          >
            <div className="space-y-3">
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                {pillar.title}
              </h3>
              <p className="text-xs leading-relaxed font-light text-foreground/60">
                {pillar.description}
              </p>
            </div>

            {/* Course Render List */}
            <div className="mt-6 space-y-2 border-t border-foreground/5 pt-4">
              {pillar.courses.map((course) => (
                <div
                  key={course.code}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-black/20 px-2.5 py-1.5 text-xs"
                >
                  <div className="flex max-w-[75%] flex-col">
                    <span className="font-mono text-[10px] tracking-wider text-foreground/40">
                      {course.code}
                    </span>
                    <span className="truncate font-medium text-foreground/90">
                      {course.name}
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    className="rounded border-gold/30 bg-gold/5 px-1.5 py-0 text-[10px] font-bold text-gold"
                  >
                    {course.grade}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
