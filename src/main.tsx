import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Clear stale dark-mode override so system preference takes effect
localStorage.removeItem("ga-dark-mode");

createRoot(document.getElementById("root")!).render(<App />);
