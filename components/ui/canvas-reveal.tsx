"use client";
import React from "react";
import { cn } from "@/lib/utils";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { div } from "three/src/nodes/TSL.js";
import MagicButton from "./magic-button";
import { FaLocationArrow } from "react-icons/fa";
import { useTheme } from "next-themes";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="Understand Deeply"
          icon={<AceternityIcon order="Phase 1" />}
          des="I analyze user needs, system constraints, and product goals before writing a single line of code."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            // add these classed for the border rounded overflowing -> rounded-3xl overflow-hidden
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Design Intentionally"
          icon={<AceternityIcon order="Phase 2" />}
          des="I craft scalable architectures and thoughtful flows that balance performance and usability."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            // change bg-black to bg-pink-900
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              // change the colors of the
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          {/* remove this one */}
          {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
        </Card>
        <Card
          title="Build with Precision"
          icon={<AceternityIcon order="Phase 3" />}
          des="I develop, test, and refine to deliver reliable and seamless digital experiences."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const isTouchRef = React.useRef(false);

  const isActive = hovered || clicked;

  return (
    <div
      onMouseEnter={() => {
        if (!isTouchRef.current) setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => {
        isTouchRef.current = true;
      }}
      onClick={() => {
        if (isTouchRef.current) {
          setClicked(!clicked);
        }
      }}
      // change h-[30rem] to h-[35rem], add rounded-3xl
      className="border border-black/20 group/canvas-card flex items-center justify-center
       dark:border-white/20  max-w-sm w-full mx-auto p-4 relative lg:h-140 rounded-3xl dark:bg-black bg-white dark:linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%) bg-linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)"
    >
      {/* change to h-10 w-10 , add opacity-30  */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className={cn(
            "text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition duration-200 min-w-40 mx-auto flex items-center justify-center",
            isActive ? "-translate-y-4 opacity-0" : "opacity-100"
          )}
        >
          {icon}
        </div>
        <h2
          // change text-3xl, add text-center
          className={cn(
            "dark:text-white text-center text-3xl opacity-0 relative z-10 text-black mt-4 font-bold transition duration-200",
            isActive ? "text-white opacity-100 -translate-y-2" : ""
          )}
        >
          {title}
        </h2>
        {/* add this one for the description */}
        <p
          className={cn(
            "text-sm opacity-0 relative z-10 mt-4 text-center transition duration-200",
            isActive ? "text-white opacity-100 -translate-y-2" : ""
          )}
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
}; // add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-px ">
        <span
          className="absolute inset-[-1000%] dark:animate-[spin_8s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E1FF01_0%,#000000_50%,#E1FF01_100%)] bg-primary"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-primary/50 px-5 py-2 dark:text-black text-background backdrop-blur-3xl font-bold"
        >
          {order}
        </span>
      </button>
    </div>
    // remove the svg and add the button
    // <svg
    //   width="66"
    //   height="65"
    //   viewBox="0 0 66 65"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    // >
    //   <path
    //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    //     stroke="currentColor"
    //     strokeWidth="15"
    //     strokeMiterlimit="3.86874"
    //     strokeLinecap="round"
    //     style={{ mixBlendMode: "darken" }}
    //   />
    // </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
