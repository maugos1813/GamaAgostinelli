import { useEffect, useState } from "react";

const STORAGE_KEY = "ga-dark-mode";

function applyDark(dark: boolean) {
  const root = document.documentElement;
  if (dark) {
    root.classList.remove("light");
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
    root.classList.add("light");
  }
}

function resolveInitial(): boolean {
  const saved = localStorage.getItem(STORAGE_KEY);
  // Manual override takes priority
  if (saved === "dark") return true;
  if (saved === "light") return false;
  // No override → follow system preference (default light)
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const dark = resolveInitial();
    applyDark(dark); // apply synchronously before first paint
    return dark;
  });

  // React to system theme changes (only when no manual override)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const dark = e.matches;
        applyDark(dark);
        setIsDark(dark);
        window.dispatchEvent(new CustomEvent("ga-mode-change"));
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
      applyDark(next);
      window.dispatchEvent(new CustomEvent("ga-mode-change"));
      return next;
    });
  };

  return { isDark, toggle };
}
