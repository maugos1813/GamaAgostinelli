import { useEffect, useState } from "react";

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

export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Always start from system preference (light by default)
    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyDark(dark);
    return dark;
  });

  // Auto-update when system theme changes
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      applyDark(e.matches);
      setIsDark(e.matches);
      window.dispatchEvent(new CustomEvent("ga-mode-change"));
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev;
      applyDark(next);
      window.dispatchEvent(new CustomEvent("ga-mode-change"));
      return next;
    });
  };

  return { isDark, toggle };
}
