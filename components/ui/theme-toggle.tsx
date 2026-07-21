"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null
  }

  const currentTheme = resolvedTheme || theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="items-center justify-center flex w-12 h-12 flex-shrink-0 rounded-full bg-white/10 backdrop-blur-lg hover:bg-white/20 dark:bg-black/30 dark:hover:bg-black/50 border border-black/[0.08] dark:border-white/[0.08] transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
      aria-label="Toggle theme"
      title={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
    >
      {currentTheme === "dark" ? (
        <Sun className="w-6 h-6 text-primary transition-transform duration-300 hover:rotate-12" />
      ) : (
        <Moon className="w-6 h-6 text-neutral-700 dark:text-neutral-300 transition-transform duration-300 hover:rotate-12" />
      )}
    </button>
  );
}