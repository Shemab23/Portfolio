import { useTheme } from "@/components/theme-provider"
import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react"

interface ContextType {
  logo: string
  tab: string
  setTab: Dispatch<SetStateAction<string>>
}

interface props {
  children: ReactNode
}

const GlobalContext = createContext<ContextType | undefined>(undefined)

export const GlobalProvider = ({ children }: props) => {
  const { theme } = useTheme()

  const logo =
    theme === "dark" ? "images/logo-bright.png" : "images/logo-dark.png"

  const [tab, setTab] = useState("home")

  return (
    <GlobalContext.Provider
      value={{
        logo,
        tab,
        setTab,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = (): ContextType => {
  return useContext(GlobalContext) ?? ({} as ContextType)
}
