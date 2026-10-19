"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious() ?? 0;
      const direction = current - previous;

      if (current < 0.05) {
        setVisible(true);
      } else if (current > 0.96) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-5 inset-x-0 mx-auto z-5000 flex items-center justify-center gap-2.5 max-w-fit px-4"
      >
        <nav
          className={cn(
            "relative flex max-w-fit items-center justify-center gap-1 rounded-full p-1.5",
            "bg-white/65 dark:bg-[#1c1c1e]/70 backdrop-blur-2xl backdrop-saturate-[190%]",
            "border border-black/[0.07] dark:border-white/[0.14]",
            "shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.9)]",
            "dark:shadow-[0_12px_36px_-6px_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(255,255,255,0.22)]",
            className
          )}
        >
          {/* Specular top rim */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-4 top-0 h-px bg-linear-to-r from-transparent via-white/90 dark:via-white/35 to-transparent"
          />
          {navItems.map((navItem, idx) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-medium tracking-tight transition-all duration-200",
                "text-[#1d1d1f]/80 hover:text-[#1d1d1f] hover:bg-black/[0.05]",
                "dark:text-[#f5f5f7]/80 dark:hover:text-[#f5f5f7] dark:hover:bg-white/[0.1]"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="cursor-pointer">{navItem.name}</span>
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </motion.div>
    </AnimatePresence>
  );
};
