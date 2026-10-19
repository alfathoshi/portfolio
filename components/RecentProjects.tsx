"use client";

import { projects } from "@/data";
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import { LiquidGlassPill } from "./ui/liquid-glass";
import { Smartphone } from "lucide-react";

const RecentProjects = () => {
  return (
    <section className="py-10 md:py-14" id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
        <div>
          <LiquidGlassPill className="mb-3">
            <Smartphone className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#0a84ff]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">
              App Showcase
            </span>
          </LiquidGlassPill>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-[42px] tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] leading-tight">
            Selected Projects.{" "}
            <span className="text-[#6e6e73] dark:text-[#86868b] font-semibold">
              Built for touch.
            </span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#6e6e73] dark:text-[#86868b] max-w-xs md:text-right">
          Click any device to explore interactive screenshots, tech stack, and
          live TestFlight builds.
        </p>
      </div>

      <div className="w-full h-full">
        <Carousel
          items={projects.map((project, index) => (
            <Card
              key={project.id}
              card={{
                src: project.img,
                title: project.title,
                category: project.tag,
                screenshots: project.screenshots,
                link: project.link,
                privacyPolicy:
                  "privacyPolicy" in project
                    ? (project as { privacyPolicy?: string }).privacyPolicy
                    : undefined,
                content: (
                  <div className="flex flex-col gap-4 w-full">
                    <p className="text-xs sm:text-sm font-sans leading-relaxed text-[#6e6e73] dark:text-neutral-300 max-w-sm">
                      {project.des}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center">
                        {project.iconLists.map((icon, idx) => (
                          <div
                            key={icon}
                            className="border border-black/10 dark:border-white/20 rounded-full bg-white dark:bg-neutral-800 lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center shadow-xs"
                            style={{
                              transform: `translateX(-${5 * idx * 2}px)`,
                            }}
                          >
                            <img src={icon} alt={icon} className="p-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ),
              }}
              index={index}
            />
          ))}
        />
      </div>
    </section>
  );
};

export default RecentProjects;
