import { useState } from "react";

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
    // Always start in light mode
    applyDark(false);
    return false;
  });

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
