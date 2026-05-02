import { useState } from "react";

const STORAGE_KEY = "ga-dark-mode";

export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const dark = saved !== "light";
    // Apply class synchronously before first paint
    const root = document.documentElement;
    if (dark) {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    return dark;
  });

  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
      const root = document.documentElement;
      if (next) {
        root.classList.remove("light");
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
        root.classList.add("light");
      }
      // Tell useColorTheme to reapply vars for the new mode
      window.dispatchEvent(new CustomEvent("ga-mode-change"));
      return next;
    });
  };

  return { isDark, toggle };
}
