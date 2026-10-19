"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";

export function BackToTopButton() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      setVisible(current >= 0.85);
    }
  });

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-white/70 dark:bg-[#1c1c1e]/75 backdrop-blur-2xl backdrop-saturate-[190%] border border-black/[0.08] dark:border-white/[0.15] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.12),inset_0_1px_0_0_rgba(255,255,255,0.9)] dark:shadow-[0_12px_36px_-6px_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(255,255,255,0.22)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="w-4 h-4 text-[#1d1d1f] dark:text-[#f5f5f7]" />
    </button>
  );
}