import { Outlet } from "react-router-dom"
import { GlobalProvider } from "./context/global"

export function App() {
  return (
    <div>
      <GlobalProvider>
        <Outlet />
      </GlobalProvider>
    </div>
  )
}

export default App
