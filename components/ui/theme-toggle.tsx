"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-10 right-10 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 dark:bg-black/30 dark:hover:bg-black/50 border border-white/20 dark:border-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
      aria-label="Toggle theme"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6 text-yellow-400 transition-transform duration-300 hover:rotate-12" />
      ) : (
        <Moon className="w-6 h-6 text-slate-700 transition-transform duration-300 hover:rotate-12" />
      )}
    </button>
  );
}