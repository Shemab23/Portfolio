import { useGlobalContext } from "@/context/global"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"

const tabs = [
  {
    name: "home",
    label: "Home",
    path: "/home",
  },
  {
    name: "insight",
    label: "Insight",
    path: "/insight",
  },
]

export const Navbar = () => {
  const { logo, tab, setTab } = useGlobalContext()
  const navigate = useNavigate()

  const handleClick = (t: (typeof tabs)[number]) => {
    navigate(t.path)
    setTab(t.name)
  }
  return (
    <div className="gte sticky top-0 z-50 flex w-full items-center justify-between self-center bg-accent/80 px-2 py-2 text-txt sm:px-10">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-8 w-8 md:h-12 md:w-12" />
        <h1 className="text-xl font-bold text-gold">BRUNO SHEMA</h1>
      </div>
      <nav className="flex list-none gap-4">
        {tabs.map((t) => (
          <Button
            variant={tab === t.name ? "default" : "outline"}
            size={"default"}
            key={t.name}
            className="cursor-pointer"
            onClick={() => handleClick(t)}
          >
            {t.label}
          </Button>
        ))}
      </nav>
    </div>
  )
}
