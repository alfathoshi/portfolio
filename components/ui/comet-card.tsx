"use client";
import React, { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "motion/react";
import { cn } from "@/lib/utils";

export const CometCard = ({
  rotateDepth = 17.5,
  translateDepth = 20,
  className,
  children,
}: {
  rotateDepth?: number;
  translateDepth?: number;
  className?: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`-${rotateDepth}deg`, `${rotateDepth}deg`]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`${rotateDepth}deg`, `-${rotateDepth}deg`]
  );

  const translateX = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${translateDepth}px`, `${translateDepth}px`]
  );
  const translateY = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${translateDepth}px`, `-${translateDepth}px`]
  );

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

  const glareBackground = useMotionTemplate`
    radial-gradient(circle at ${glareX}% ${glareY}%,
    rgba(255,255,255,0.9) 10%,
    rgba(255,255,255,0.75) 20%,
    rgba(255,255,255,0) 80%)
  `;

  useEffect(() => {
    x.set(-0.3);
    y.set(0.3);

    const timeout = setTimeout(() => {
      x.set(0);
      y.set(0);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  const handleMove = (clientX: number, clientY: number) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleTouchEnd = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={cn("perspective-distant transform-3d", className)}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchMove}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{
          scale: 1.05,
          z: 50,
          transition: { duration: 0.2 },
        }}
        whileTap={{
          scale: 1.05,
          z: 50,
          transition: { duration: 0.2 },
        }}
        style={{
          rotateX,
          rotateY,
          translateX,
          translateY,
        }}
        className="relative rounded-2xl touch-none"
      >
        {children}

        <motion.div
          className="pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[16px] mix-blend-overlay"
          style={{
            background: glareBackground,
            opacity: 0.3,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </div>
  );
};
