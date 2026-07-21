"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  JSX,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconChevronLeft,
  IconChevronRight,
  IconX,
} from "@tabler/icons-react";
import { FaLocationArrow } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  screenshots?: string[];
  link?: string;
};

export const CarouselContext = createContext<{
  onCardChange: (index: number) => void;
  currentIndex: number;
}>({
  onCardChange: () => { },
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(isMobile() ? scrollLeft < scrollWidth - clientWidth - 320 : scrollLeft < scrollWidth - clientWidth - 420);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: isMobile() ? -336 : -672, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: isMobile() ? 336 : 672, behavior: "smooth" });
    }
  };



  const handleCardChange = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 320;
      const gap = 16;
      const scrollPosition = (cardWidth + gap) * (index);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",

      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardChange: handleCardChange, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-1000 h-auto w-[5%] overflow-hidden bg-linear-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-[calc(50%-160px)] md:pl-4",
              "mx-auto max-w-7xl", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                  },
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { currentIndex, onCardChange } = useContext(CarouselContext);

  const modalScrollRef = useRef<HTMLDivElement>(null);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const isModalDragging = useRef(false);
  const modalStartX = useRef(0);
  const modalScrollLeftStart = useRef(0);

  useEffect(() => {
    onCardChange(index);
  }, [open]);

  useEffect(() => {
    if (open) {
      setActiveScreenIndex(0);
    }
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleModalScroll = () => {
    if (modalScrollRef.current) {
      const { scrollLeft, clientWidth } = modalScrollRef.current;
      if (clientWidth > 0) {
        const index = Math.round(scrollLeft / clientWidth);
        setActiveScreenIndex(index);
      }
    }
  };

  const handleModalMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!modalScrollRef.current) return;
    if (e.button !== 0) return; // Left click only
    isModalDragging.current = true;
    modalStartX.current = e.pageX - modalScrollRef.current.offsetLeft;
    modalScrollLeftStart.current = modalScrollRef.current.scrollLeft;
    modalScrollRef.current.style.scrollSnapType = "none";
    modalScrollRef.current.style.scrollBehavior = "auto";
  };

  const handleModalMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isModalDragging.current || !modalScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - modalScrollRef.current.offsetLeft;
    const walk = (x - modalStartX.current) * 1.5;
    modalScrollRef.current.scrollLeft = modalScrollLeftStart.current - walk;
  };

  const handleModalMouseUpOrLeave = () => {
    if (!isModalDragging.current) return;
    isModalDragging.current = false;
    if (modalScrollRef.current) {
      modalScrollRef.current.style.scrollSnapType = "";
      modalScrollRef.current.style.scrollBehavior = "smooth";
    }
  };

  const scrollModalLeft = () => {
    if (modalScrollRef.current) {
      const { scrollLeft, clientWidth } = modalScrollRef.current;
      modalScrollRef.current.scrollTo({
        left: scrollLeft - clientWidth,
        behavior: "smooth"
      });
    }
  };

  const scrollModalRight = () => {
    if (modalScrollRef.current) {
      const { scrollLeft, clientWidth } = modalScrollRef.current;
      modalScrollRef.current.scrollTo({
        left: scrollLeft + clientWidth,
        behavior: "smooth"
      });
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <motion.div
        layoutId={layout ? `card-${card.title}` : undefined}
        ref={containerRef}
        onClick={handleOpen}
        className={cn(
          "rounded-[52.5px] bg-gray-100 dark:bg-neutral-900 h-[660px] w-[320px] overflow-hidden flex flex-col items-start justify-start relative z-10 group cursor-pointer"
        )}
      >
        <div className="relative h-full w-full">
          <div className="absolute inset-0 z-30 flex flex-col justify-end h-full">
            {/* Default Overlay & Text - Hidden on Hover/Open */}
            <div className={cn(
              "absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent transition-opacity duration-500",
              open ? "opacity-0" : "group-hover:opacity-0"
            )} />
            <div className={cn(
              "relative z-40 p-8 transition-opacity duration-500",
              open ? "opacity-0" : "group-hover:opacity-0"
            )}>
              <motion.p
                layoutId={layout ? `category-${card.category}` : undefined}
                className="text-white text-sm md:text-base font-medium font-sans text-left"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left text-balance font-sans mt-2"
              >
                {card.title}
              </motion.p>
            </div>
          </div>

          <BlurImage
            src={card.src}
            alt={card.title}
            fill
            className="object-cover absolute z-10 inset-0"
          />

          {/* Hover/Active Overlay & Content */}
          <div
            className={cn(
              "absolute inset-0 z-50 bg-black/60 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-8",
              open ? "opacity-100" : "group-hover:opacity-100"
            )}
          >
            <motion.p
              layoutId={layout ? `category-${card.category}-active` : undefined}
              className="text-white text-sm md:text-base font-medium font-sans text-left"
            >
              {card.category}
            </motion.p>
            <motion.h3
              layoutId={layout ? `title-${card.title}-active` : undefined}
              className="text-white text-2xl font-bold font-sans mt-2"
            >
              {card.title}
            </motion.h3>
            <div className="prose prose-sm dark:prose-invert max-w-none text-neutral-200 mt-4">
              {card.content}
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen w-screen z-[9999] flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-xl p-4 md:p-10 cursor-default">
            {/* Backdrop click closer */}
            <div className="absolute inset-0 z-10" onClick={() => setOpen(false)} />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl bg-white dark:bg-neutral-900/95 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto max-h-[90vh] md:h-[600px] z-20"
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-neutral-100 dark:bg-black/50 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-800 dark:hover:text-white transition cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <IconX className="h-6 w-6" />
              </button>

              {/* Left Side: Screenshots Carousel */}
              <div className="relative w-full md:w-1/2 h-[480px] md:h-full bg-neutral-50 dark:bg-neutral-950 flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-800">
                {card.screenshots && card.screenshots.length > 0 ? (
                  <div className="relative w-full h-full flex flex-col items-center justify-between">
                    <div className="relative w-full flex-grow flex items-center justify-center overflow-hidden">
                      {/* Left Arrow Button */}
                      {card.screenshots.length > 1 && (
                        <button
                          onClick={scrollModalLeft}
                          disabled={activeScreenIndex === 0}
                          className="absolute left-2 z-30 p-2 rounded-full bg-neutral-200/85 dark:bg-black/60 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-800 hover:text-neutral-950 dark:hover:text-white transition disabled:opacity-30 disabled:pointer-events-none cursor-pointer shadow-sm border border-neutral-300/50 dark:border-neutral-800"
                        >
                          <IconChevronLeft className="h-5 w-5" />
                        </button>
                      )}

                      {/* Right Arrow Button */}
                      {card.screenshots.length > 1 && (
                        <button
                          onClick={scrollModalRight}
                          disabled={activeScreenIndex === card.screenshots.length - 1}
                          className="absolute right-2 z-30 p-2 rounded-full bg-neutral-200/85 dark:bg-black/60 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-800 hover:text-neutral-950 dark:hover:text-white transition disabled:opacity-30 disabled:pointer-events-none cursor-pointer shadow-sm border border-neutral-300/50 dark:border-neutral-800"
                        >
                          <IconChevronRight className="h-5 w-5" />
                        </button>
                      )}

                      <div
                        ref={modalScrollRef}
                        onScroll={handleModalScroll}
                        onMouseDown={handleModalMouseDown}
                        onMouseMove={handleModalMouseMove}
                        onMouseUp={handleModalMouseUpOrLeave}
                        onMouseLeave={handleModalMouseUpOrLeave}
                        className="w-full h-full flex overflow-x-scroll overscroll-x-auto [scrollbar-width:none] snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
                      >
                        {card.screenshots.map((src, i) => (
                          <div key={i} className="w-full h-full flex-shrink-0 flex items-center justify-center snap-center p-1 bg-neutral-50 dark:bg-neutral-950">
                            <img
                              src={src}
                              alt={`${card.title} screenshot ${i + 1}`}
                              className="w-full h-full object-contain pointer-events-none rounded-[28px]"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pagination indicators (dots) */}
                    {card.screenshots.length > 1 && (
                      <div className="flex gap-2 mt-2 justify-center">
                        {card.screenshots.map((_, i) => (
                          <button
                            key={i}
                            className={cn(
                              "w-2 h-2 rounded-full transition-all duration-300 cursor-pointer",
                              activeScreenIndex === i ? "bg-primary w-4" : "bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600"
                            )}
                            onClick={() => {
                              if (modalScrollRef.current) {
                                modalScrollRef.current.scrollTo({
                                  left: i * modalScrollRef.current.clientWidth,
                                  behavior: "smooth"
                                });
                              }
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-[240px] h-[360px] md:w-[220px] md:h-[400px] border-4 border-neutral-200 dark:border-neutral-800 rounded-[36px] overflow-hidden bg-neutral-100 dark:bg-black shadow-inner flex items-center justify-center">
                    <img
                      src={card.src}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-[28px]"
                    />
                  </div>
                )}
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between overflow-y-auto max-h-[40vh] md:max-h-full">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                    {card.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mt-2 leading-tight">
                    {card.title}
                  </h2>
                  <div className="prose prose-sm dark:prose-invert max-w-none text-black dark:text-neutral-300 mt-6 leading-relaxed">
                    {card.content}
                  </div>
                </div>

                {/* Bottom Part: Tech icons & Link button */}
                <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800/80 w-full flex flex-col gap-4">
                  {card.link && (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 dark:text-black text-white font-semibold px-6 py-2.5 rounded-xl transition duration-300 cursor-pointer text-sm shadow-md"
                    >
                      Visit Project
                      <FaLocationArrow className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  fill,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
