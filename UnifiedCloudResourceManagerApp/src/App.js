import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

/**
 * PUBLIC_INTERFACE
 * App is the top-level component, setting up routing and applying prefers-reduced-motion
 * and theme attributes to the document element.
 */
function App() {
  useEffect(() => {
    // Apply user or system theme preferences (default light)
    const saved = window.localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return (
    <BrowserRouter>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
