import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { MainLayout } from "./layout/mainLayout.tsx"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Home from "./pages/home.tsx"
import Insight from "./pages/Insight.tsx"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Navigate to="/home" replace />,
          },
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/insight",
            element: <Insight />,
          },
        ],
      },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
