import { useEffect, useState } from "react";

export type ColorThemeId = "cyan" | "mint" | "orange" | "purple";

export interface ColorTheme {
  id: ColorThemeId;
  label: string;
  hex: string;
  vars: Record<string, string>;
  lightVars: Record<string, string>;
}

export const COLOR_THEMES: ColorTheme[] = [
  {
    id: "cyan",
    label: "Cyan",
    hex: "#09d0f9",
    vars: {
      "--primary": "190 95% 50%",
      "--primary-foreground": "215 40% 8%",
      "--primary-glow": "180 100% 65%",
      "--accent": "190 95% 50%",
      "--accent-foreground": "215 40% 8%",
      "--ring": "190 95% 50%",
      "--sidebar-primary": "190 95% 50%",
      "--sidebar-primary-foreground": "215 40% 8%",
      "--sidebar-ring": "190 95% 50%",
      "--gradient-primary": "linear-gradient(135deg, hsl(190 95% 50%), hsl(220 90% 60%))",
      "--gradient-radial": "radial-gradient(circle at 50% 0%, hsl(190 95% 50% / 0.18), transparent 60%)",
      "--shadow-glow": "0 0 80px hsl(190 95% 50% / 0.35)",
    },
    lightVars: {
      "--primary": "190 82% 28%",
      "--primary-foreground": "0 0% 100%",
      "--primary-glow": "190 95% 50%",
      "--accent": "190 82% 28%",
      "--accent-foreground": "0 0% 100%",
      "--ring": "190 82% 28%",
      "--sidebar-primary": "190 82% 28%",
      "--sidebar-primary-foreground": "0 0% 100%",
      "--sidebar-ring": "190 82% 28%",
      "--gradient-primary": "linear-gradient(135deg, hsl(190 82% 28%), hsl(220 78% 34%))",
      "--gradient-radial": "radial-gradient(circle at 50% 0%, hsl(190 95% 50% / 0.09), transparent 60%)",
      "--shadow-glow": "0 0 60px hsl(190 95% 50% / 0.18)",
    },
  },
  {
    id: "mint",
    label: "Mint",
    hex: "#58f6b3",
    vars: {
      "--primary": "155 88% 65%",
      "--primary-foreground": "155 60% 8%",
      "--primary-glow": "155 95% 75%",
      "--accent": "155 88% 65%",
      "--accent-foreground": "155 60% 8%",
      "--ring": "155 88% 65%",
      "--sidebar-primary": "155 88% 65%",
      "--sidebar-primary-foreground": "155 60% 8%",
      "--sidebar-ring": "155 88% 65%",
      "--gradient-primary": "linear-gradient(135deg, hsl(155 88% 65%), hsl(175 80% 48%))",
      "--gradient-radial": "radial-gradient(circle at 50% 0%, hsl(155 88% 65% / 0.15), transparent 60%)",
      "--shadow-glow": "0 0 80px hsl(155 88% 65% / 0.35)",
    },
    lightVars: {
      "--primary": "155 72% 32%",
      "--primary-foreground": "0 0% 100%",
      "--primary-glow": "155 88% 55%",
      "--accent": "155 72% 32%",
      "--accent-foreground": "0 0% 100%",
      "--ring": "155 72% 32%",
      "--sidebar-primary": "155 72% 32%",
      "--sidebar-primary-foreground": "0 0% 100%",
      "--sidebar-ring": "155 72% 32%",
      "--gradient-primary": "linear-gradient(135deg, hsl(155 72% 32%), hsl(175 65% 28%))",
      "--gradient-radial": "radial-gradient(circle at 50% 0%, hsl(155 88% 65% / 0.09), transparent 60%)",
      "--shadow-glow": "0 0 60px hsl(155 88% 55% / 0.18)",
    },
  },
  {
    id: "orange",
    label: "Naranja",
    hex: "#fe6a07",
    vars: {
      "--primary": "24 99% 51%",
      "--primary-foreground": "24 80% 8%",
      "--primary-glow": "30 100% 65%",
      "--accent": "24 99% 51%",
      "--accent-foreground": "24 80% 8%",
      "--ring": "24 99% 51%",
      "--sidebar-primary": "24 99% 51%",
      "--sidebar-primary-foreground": "24 80% 8%",
      "--sidebar-ring": "24 99% 51%",
      "--gradient-primary": "linear-gradient(135deg, hsl(24 99% 51%), hsl(38 96% 56%))",
      "--gradient-radial": "radial-gradient(circle at 50% 0%, hsl(24 99% 51% / 0.18), transparent 60%)",
      "--shadow-glow": "0 0 80px hsl(24 99% 51% / 0.35)",
    },
    lightVars: {
      "--primary": "24 90% 38%",
      "--primary-foreground": "0 0% 100%",
      "--primary-glow": "30 100% 55%",
      "--accent": "24 90% 38%",
      "--accent-foreground": "0 0% 100%",
      "--ring": "24 90% 38%",
      "--sidebar-primary": "24 90% 38%",
      "--sidebar-primary-foreground": "0 0% 100%",
      "--sidebar-ring": "24 90% 38%",
      "--gradient-primary": "linear-gradient(135deg, hsl(24 90% 38%), hsl(38 85% 44%))",
      "--gradient-radial": "radial-gradient(circle at 50% 0%, hsl(24 99% 51% / 0.09), transparent 60%)",
      "--shadow-glow": "0 0 60px hsl(24 90% 44% / 0.20)",
    },
  },
  {
    id: "purple",
    label: "Violeta",
    hex: "#714285",
    vars: {
      "--primary": "282 36% 57%",
      "--primary-foreground": "200 20% 96%",
      "--primary-glow": "282 50% 72%",
      "--accent": "282 36% 57%",
      "--accent-foreground": "200 20% 96%",
      "--ring": "282 36% 57%",
      "--sidebar-primary": "282 36% 57%",
      "--sidebar-primary-foreground": "200 20% 96%",
      "--sidebar-ring": "282 36% 57%",
      "--gradient-primary": "linear-gradient(135deg, hsl(282 36% 57%), hsl(300 42% 62%))",
      "--gradient-radial": "radial-gradient(circle at 50% 0%, hsl(282 36% 57% / 0.18), transparent 60%)",
      "--shadow-glow": "0 0 80px hsl(282 36% 57% / 0.35)",
    },
    lightVars: {
      "--primary": "282 40% 38%",
      "--primary-foreground": "0 0% 100%",
      "--primary-glow": "282 50% 58%",
      "--accent": "282 40% 38%",
      "--accent-foreground": "0 0% 100%",
      "--ring": "282 40% 38%",
      "--sidebar-primary": "282 40% 38%",
      "--sidebar-primary-foreground": "0 0% 100%",
      "--sidebar-ring": "282 40% 38%",
      "--gradient-primary": "linear-gradient(135deg, hsl(282 40% 38%), hsl(300 38% 44%))",
      "--gradient-radial": "radial-gradient(circle at 50% 0%, hsl(282 36% 57% / 0.09), transparent 60%)",
      "--shadow-glow": "0 0 60px hsl(282 40% 44% / 0.18)",
    },
  },
];

const STORAGE_KEY = "ga-color-theme";

function applyTheme(id: ColorThemeId) {
  const theme = COLOR_THEMES.find((t) => t.id === id);
  if (!theme) return;
  const isLight = document.documentElement.classList.contains("light");
  const vars = isLight ? theme.lightVars : theme.vars;
  const root = document.documentElement;
  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

export function useColorTheme() {
  const [colorTheme, setColorThemeState] = useState<ColorThemeId>(
    () => (localStorage.getItem(STORAGE_KEY) as ColorThemeId) ?? "mint"
  );

  useEffect(() => {
    applyTheme(colorTheme);
  }, [colorTheme]);

  // Reapply when dark/light mode changes
  useEffect(() => {
    const handler = () => applyTheme(colorTheme);
    window.addEventListener("ga-mode-change", handler);
    return () => window.removeEventListener("ga-mode-change", handler);
  }, [colorTheme]);

  const setColorTheme = (id: ColorThemeId) => {
    setColorThemeState(id);
    localStorage.setItem(STORAGE_KEY, id);
  };

  return { colorTheme, setColorTheme, themes: COLOR_THEMES };
}
