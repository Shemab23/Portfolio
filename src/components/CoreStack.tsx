import { InfiniteScrollWraper } from "@/lib/motion/InfiniteXScroll"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const tools: Record<string, { title: string; url: string }[]> = {
  frontend: [
    {
      title: "React",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      title: "React Native (Expo)",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      title: "Next.js",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      title: "Tailwind CSS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      title: "shadcn/ui",
      url: "https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png",
    },
    {
      title: "Framer Motion",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
    },
  ],
  backend: [
    {
      title: "Express",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
      title: "Node.js",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      title: "FastAPI",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    },
    {
      title: "Hono",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qoqPqu-j4CT2q-iArZGAM8LAyYZrfPLmBtVmMOUJGw&s",
    },
  ],
  orm: [
    {
      title: "Drizzle",
      url: "https://avatars.githubusercontent.com/u/108468352?v=4",
    },
    {
      title: "SQLAlchemy",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
    },
  ],
  database: [
    {
      title: "PostgreSQL",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      title: "MySQL",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
      title: "Oracle Express",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
    },
    {
      title: "SQL",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
    },
  ],
  languages: [
    {
      title: "C/C++",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    },
    {
      title: "Java",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      title: "Python",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      title: "JavaScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      title: "TypeScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      title: "HTML",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      title: "CSS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      title: "Haskell",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/haskell/haskell-original.svg",
    },
    {
      title: "Prolog",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prolog/prolog-original.svg",
    },
  ],
  infrastructure: [
    {
      title: "Git",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      title: "Docker",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      title: "Vercel",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    },
    {
      title: "Cloudflare R2",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg",
    },
    {
      title: "Cloudinary",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE0JlAmNx78o2D0_reHuWC8jM3Y_ow4-yUvCFOjneP71e7UCnSmI-6wLSt&s=10",
    },
    {
      title: "Hostinger",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9vYk6i5-cdTBXLdAgc3kavQrtVqvBKfNBBixXlQfa3Q&s=10",
    },
    {
      title: "Cisco Packet Tracer",
      url: "https://hurbad.com/wp-content/uploads/2021/12/Cisco-Packet-Tracer.png",
    },
  ],
}

const flags = [
  "all",
  "frontend",
  "backend",
  "orm",
  "database",
  "languages",
  "infrastructure",
] as const
type FlagType = (typeof flags)[number]

export default function CoreStack() {
  const [filter, setFilter] = useState<FlagType>("all")
  const [search, setSearch] = useState("")

  // 1. Get filtered list by Category
  const categoryList =
    filter === "all" ? Object.values(tools).flat() : tools[filter] || []

  // 2. Further filter the list down by Search Query
  const currentList = categoryList.filter((tool) =>
    tool.title.toLowerCase().includes(search.toLowerCase())
  )

  const isSearching = search.trim().length > 0

  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 py-6 text-foreground">
      {/* Search and Category Control panel */}
      <div className="flex w-[90%] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Input
          type="text"
          placeholder="Search exact tool (e.g. Next.js)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border-white/10 bg-foreground/5 placeholder:text-foreground/40 sm:max-w-xs"
        />

        <Select
          value={filter}
          onValueChange={(val) => setFilter(val as FlagType)}
        >
          <SelectTrigger className="w-full border-foreground/10 bg-foreground/5 sm:max-w-45">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            {flags.map((flag) => (
              <SelectItem key={flag} value={flag}>
                {flag.charAt(0).toUpperCase() + flag.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Dynamic Viewport Display */}
      <div className="w-[90%] overflow-hidden">
        {isSearching ? (
          /* Recruiter search view: Static, easy to see and click grid */
          currentList.length > 0 ? (
            <div className="flex flex-wrap justify-start gap-4">
              {currentList.map((tool) => (
                <div
                  key={tool.title}
                  className="flex w-28 animate-in flex-col items-center justify-center rounded bg-foreground/10 p-2 duration-200 zoom-in-95 fade-in"
                >
                  <img
                    src={tool.url}
                    alt={tool.title}
                    className="h-6 w-6 object-contain"
                  />
                  <p className="mt-1 w-full truncate text-center text-xs">
                    {tool.title}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="py-4 text-center text-sm text-foreground/40">
              No matching tools found.
            </p>
          )
        ) : (
          /* Normal portfolio view: Loops seamlessly */
          <InfiniteScrollWraper direction="left" className="z-30 flex gap-4">
            {[...currentList, ...currentList].map((tool, i) => (
              <div
                key={`${tool.title}-${i}`}
                className="flex min-w-25 flex-col items-center justify-center rounded bg-foreground/10 p-2"
              >
                <img
                  src={tool.url}
                  alt={tool.title}
                  className="h-6 w-6 object-contain"
                />
                <p className="mt-1 w-full truncate text-center text-xs">
                  {tool.title}
                </p>
              </div>
            ))}
          </InfiniteScrollWraper>
        )}
      </div>
    </div>
  )
}
