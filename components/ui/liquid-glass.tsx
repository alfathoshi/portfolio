"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LiquidGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  spotlight?: boolean;
  intensity?: "subtle" | "medium" | "strong";
}

/**
 * Minimalist Bento Card (Dousan Miao / Apple Keynote style).
 * Renders children directly inside the card container so flex/grid utilities
 * passed via className work directly on children without layout collapse.
 */
export const LiquidGlassCard = ({
  children,
  className,
  interactive = false,
  spotlight = true,
  intensity = "medium",
  ...props
}: LiquidGlassCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!spotlight || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    props.onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(false);
    props.onMouseLeave?.(e);
  };

  return (
    <div
      ref={cardRef}
      {...props}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-[28px] sm:rounded-[32px]",
        "bg-white dark:bg-[#121212]",
        "border border-black/[0.06] dark:border-white/[0.08]",
        "shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]",
        "transition-all duration-300 ease-out",
        interactive &&
          "hover:border-black/[0.14] dark:hover:border-white/[0.16]",
        className
      )}
      data-intensity={intensity}
    >
      {spotlight && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 65%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

interface LiquidGlassPillProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Dousan Miao / iOS 26 Liquid Glass Pill Badge (e.g. "• App Store", "• TestFlight").
 * Features the signature diagonal glass reflection sheen and crisp rim border.
 */
export const LiquidGlassPill = ({
  children,
  className,
  ...props
}: LiquidGlassPillProps) => {
  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 overflow-hidden",
        "bg-white/75 dark:bg-[#1a1a1c]/85 backdrop-blur-xl backdrop-saturate-[180%]",
        "border border-black/[0.12] dark:border-white/[0.22]",
        "shadow-[0_4px_12px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.9)]",
        "dark:shadow-[0_4px_16px_rgba(0,0,0,0.6),inset_0_1px_1px_0_rgba(255,255,255,0.35),inset_0_-1px_1px_0_rgba(255,255,255,0.1)]",
        "text-xs font-medium text-[#1d1d1f] dark:text-[#f5f5f7]",
        className
      )}
      {...props}
    >
      {/* Signature diagonal metallic/liquid glass reflection sheen */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,transparent_20%,rgba(255,255,255,0.45)_45%,rgba(255,255,255,0.08)_55%,transparent_80%)] dark:bg-[linear-gradient(125deg,transparent_25%,rgba(255,255,255,0.18)_48%,rgba(255,255,255,0.04)_56%,transparent_80%)]"
      />
      <span className="relative z-10 inline-flex items-center gap-1.5">
        {children}
      </span>
    </div>
  );
};

interface LiquidGlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "glass";
  className?: string;
}

/**
 * Dousan Miao / iOS 26 Liquid Glass Capsule Button (e.g. "Copy email", "Let's talk").
 * Features a 3D specular border and diagonal glass refraction streak.
 */
export const LiquidGlassButton = ({
  children,
  variant = "glass",
  className,
  ...props
}: LiquidGlassButtonProps) => {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium overflow-hidden cursor-pointer",
        "bg-white/80 dark:bg-[#141416]/90 backdrop-blur-2xl backdrop-saturate-[190%]",
        "text-[#1d1d1f] dark:text-white",
        "border border-black/[0.14] dark:border-white/[0.24]",
        "shadow-[0_6px_20px_rgba(0,0,0,0.07),inset_0_1px_1px_0_rgba(255,255,255,0.95),inset_0_-1px_1px_0_rgba(0,0,0,0.05)]",
        "dark:shadow-[0_8px_24px_rgba(0,0,0,0.7),inset_0_1px_1px_0_rgba(255,255,255,0.35),inset_0_-1px_2px_0_rgba(255,255,255,0.12)]",
        "transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:border-black/[0.22] dark:hover:border-white/[0.38]",
        className
      )}
      {...props}
    >
      {/* Diagonal glass streak reflection */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_25%,rgba(255,255,255,0.55)_48%,rgba(255,255,255,0.12)_55%,transparent_75%)] dark:bg-[linear-gradient(120deg,transparent_28%,rgba(255,255,255,0.22)_48%,rgba(255,255,255,0.05)_55%,transparent_75%)] transition-transform duration-500 group-hover:translate-x-2"
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};
