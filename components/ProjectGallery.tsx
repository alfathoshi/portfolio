"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type GalleryScreenshotItem = {
  src: string;
  badge: string;
  title: string;
  caption: string;
};

export interface ProjectGalleryProps {
  items: GalleryScreenshotItem[];
  color?: "emerald" | "purple" | "sky" | "amber";
  layout?: "landscape" | "portrait" | "mixed-nomi";
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  items,
  color = "emerald",
  layout = "portrait",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const clampedIndex = Math.max(0, Math.min(index, items.length - 1));
    scrollRef.current.scrollTo({
      left: clampedIndex * scrollRef.current.clientWidth,
      behavior: "smooth",
    });
    setCurrentIndex(clampedIndex);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    if (container.clientWidth > 0) {
      const newIndex = Math.round(container.scrollLeft / container.clientWidth);
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < items.length) {
        setCurrentIndex(newIndex);
      }
    }
  };

  const badgeColorClass =
    color === "purple"
      ? "text-purple-600 dark:text-purple-400"
      : color === "sky"
        ? "text-sky-600 dark:text-sky-400"
        : color === "amber"
          ? "text-amber-600 dark:text-amber-400"
          : "text-emerald-600 dark:text-emerald-400";

  const activeDotClass =
    color === "purple"
      ? "bg-purple-600 dark:bg-purple-400"
      : color === "sky"
        ? "bg-sky-600 dark:bg-sky-400"
        : color === "amber"
          ? "bg-amber-600 dark:bg-amber-400"
          : "bg-emerald-600 dark:bg-emerald-400";

  return (
    <div className="relative group">
      {/* Slide Container (1 item fits in container) */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory scroll-smooth overscroll-x-contain"
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="w-full min-w-full shrink-0 snap-center snap-always flex flex-col gap-3 select-none"
          >
            {layout === "landscape" ? (
              <div className="rounded-[20px] overflow-hidden aspect-[2760/1350] relative flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.title}
                  draggable={false}
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>
            ) : layout === "mixed-nomi" ? (
              <div className="h-[340px] sm:h-[460px] w-full flex items-center justify-center">
                <div
                  className={`rounded-[22px] overflow-hidden relative flex items-center justify-center p-2 max-w-full max-h-full ${item.src === "/nomi_6.webp" || item.src === "/nomi_6.png"
                    ? "w-full aspect-[2642/1300] h-auto max-h-[340px] sm:max-h-[460px]"
                    : "h-full aspect-[1300/2642]"
                    }`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    draggable={false}
                    className="w-full h-full object-contain drop-shadow-sm pointer-events-none"
                  />
                </div>
              </div>
            ) : (
              <div className="h-[380px] sm:h-[460px] w-full flex items-center justify-center">
                <div className="h-full aspect-[1300/2642] rounded-[22px] overflow-hidden relative flex items-center justify-center p-2">
                  <img
                    src={item.src}
                    alt={item.title}
                    draggable={false}
                    className="w-full h-full object-contain drop-shadow-sm pointer-events-none"
                  />
                </div>
              </div>
            )}
            <div>
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`text-[11px] font-semibold uppercase tracking-wider ${badgeColorClass}`}
                >
                  Screen {idx + 1} &bull; {item.badge}
                </span>
              </div>
              <h4 className="text-[15px] font-medium text-[#1d1d1f] dark:text-white leading-snug mt-0.5">
                {item.title}
              </h4>
              <p className="text-[12.5px] text-[#6e6e73] dark:text-[#86868b] mt-0.5 leading-relaxed">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Pagination Bar: Dots & Arrow Controls */}
      <div className="mt-4 pt-3 flex items-center justify-between border-t border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-1.5 flex-wrap">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to screen ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === i
                ? `w-6 ${activeDotClass}`
                : "w-1.5 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40"
                }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            aria-label="Previous screen"
            className="p-1.5 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 disabled:opacity-25 disabled:pointer-events-none transition-colors cursor-pointer text-[#1d1d1f] dark:text-white"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono font-medium text-[#6e6e73] dark:text-[#86868b] min-w-[42px] text-center">
            {currentIndex + 1} / {items.length}
          </span>
          <button
            type="button"
            onClick={() => scrollTo(currentIndex + 1)}
            disabled={currentIndex === items.length - 1}
            aria-label="Next screen"
            className="p-1.5 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 disabled:opacity-25 disabled:pointer-events-none transition-colors cursor-pointer text-[#1d1d1f] dark:text-white"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
