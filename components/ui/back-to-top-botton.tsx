"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ArrowUp, Moon, Sun } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";

export function BackToTopButton() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            if (current >= 0.95) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }
    });

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed bottom-10 right-10 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 dark:bg-black/30 dark:hover:bg-black/50 border border-white/20 dark:border-white/10 transition-all duration-300 shadow-lg hover:shadow-xl ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            aria-label="Toggle back to top"
            title={`Back to top`}
        >
            <ArrowUp className="w-6 h-6 text-primary transition-transform duration-300 hover:rotate-12" />
        </button>


    );
}