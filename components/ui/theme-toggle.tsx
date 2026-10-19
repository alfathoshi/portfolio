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
    return null;
  }

  const currentTheme = resolvedTheme || theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="relative flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-white/65 dark:bg-[#1c1c1e]/70 backdrop-blur-2xl backdrop-saturate-[190%] border border-black/[0.07] dark:border-white/[0.14] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.9)] dark:shadow-[0_12px_36px_-6px_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(255,255,255,0.22)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
      aria-label="Toggle theme"
      title={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
    >
      {currentTheme === "dark" ? (
        <Sun className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#f5f5f7] transition-transform duration-300 hover:rotate-12" />
      ) : (
        <Moon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#1d1d1f] transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}