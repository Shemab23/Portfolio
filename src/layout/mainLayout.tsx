import Footer from "@/components/home/Footer"
import { Navbar } from "@/components/Navbar"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
  return (
    <div className="bgframe flex h-auto flex-col gap-y-2">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
