"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ArrowLeft,
  ArrowRight,
  Sun,
  Moon,
  MapPin,
  Calendar,
  Briefcase,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Layers,
  Award,
  Terminal,
} from "lucide-react";
import {
  LiquidGlassCard,
  LiquidGlassPill,
  LiquidGlassButton,
} from "./ui/liquid-glass";
import { ExperienceItem, getExperienceTheme } from "@/data/experiences";
import { projects } from "@/data";

interface ExperienceModalProps {
  experience: ExperienceItem | null;
  allExperiences: ExperienceItem[];
  onClose: () => void;
  onNavigate: (dir: -1 | 1) => void;
  onSelectExperience: (exp: ExperienceItem) => void;
  onSelectProject?: (project: (typeof projects)[0]) => void;
  currentTheme: string | undefined;
  toggleTheme: (e: React.MouseEvent) => void;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({
  experience,
  allExperiences,
  onClose,
  onNavigate,
  onSelectExperience,
  onSelectProject,
  currentTheme,
  toggleTheme,
}) => {
  const sheetRef = useRef<HTMLDivElement>(null);

  // Scroll to top whenever active experience changes
  useEffect(() => {
    if (experience && sheetRef.current) {
      sheetRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [experience?.id]);

  if (!experience) return null;

  const theme = getExperienceTheme(experience.id);

  const currentIndex = allExperiences.findIndex((e) => e.id === experience.id);
  const nextExperience =
    allExperiences[(currentIndex + 1) % allExperiences.length];
  const prevExperience =
    allExperiences[
    (currentIndex - 1 + allExperiences.length) % allExperiences.length
    ];

  // Helper to retrieve the official App Icon for each project
  const getAppIcon = (title: string) => {
    const t = title.toLowerCase();
    const isDark = currentTheme === "dark";

    switch (t) {
      case "fraqments":
        return isDark
          ? "/AppIcon/fraqments-dark.png"
          : "/AppIcon/fraqments-light.png";
      case "kinario":
        return "/kinario/kinario-app-icon.png";
      case "omawe":
        return "/AppIcon/omawe.png";
      case "nomi":
        return isDark ? "/AppIcon/nomi-dark.png" : "/AppIcon/nomi-light.png";
      case "bloobook":
        return "/AppIcon/bloobook.png";
      case "newblie":
        return isDark
          ? "/AppIcon/newblie-dark.png"
          : "/AppIcon/newblie-light.png";
      default:
        return null;
    }
  };

  // Related projects if available
  const relatedApps = experience.relatedAppIds
    ? projects.filter((p) =>
      experience.relatedAppIds?.includes(p.title.toLowerCase())
    )
    : [];

  return (
    <AnimatePresence>
      <motion.div
        ref={sheetRef}
        initial={{ y: "100%", opacity: 0.9 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 34,
          mass: 0.9,
        }}
        className={`fixed inset-0 z-[9999] bg-white dark:bg-[#0d0d0f] text-[#1d1d1f] dark:text-white overflow-y-auto ${theme.selection}`}
      >
        {/* ========================================================================
            Top-Right Sticky Theme Toggle & Close Button
           ======================================================================== */}
        <div className="fixed top-6 right-6 sm:top-8 sm:right-10 z-50 flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color mode"
            className="relative flex items-center justify-between w-[84px] h-11 p-1.5 rounded-full bg-white/85 dark:bg-[#18181b]/90 backdrop-blur-2xl border border-black/[0.1] dark:border-white/[0.22] shadow-[0_6px_20px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.95)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.25)] cursor-pointer transition-colors"
          >
            <span className="flex w-8 h-8 items-center justify-center text-[#6e6e73] dark:text-neutral-500 z-10">
              <Sun className="w-4 h-4" />
            </span>
            <span className="flex w-8 h-8 items-center justify-center text-[#6e6e73] dark:text-neutral-500 z-10">
              <Moon className="w-4 h-4" />
            </span>
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className={`absolute top-1 bottom-1 w-8 rounded-full bg-white dark:bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center justify-center ${currentTheme === "dark" ? "right-1.5" : "left-1.5"
                }`}
            >
              {currentTheme === "dark" ? (
                <Moon className="w-4 h-4 text-[#1d1d1f]" />
              ) : (
                <Sun className="w-4 h-4 text-[#1d1d1f]" />
              )}
            </motion.div>
          </button>

          <button
            onClick={onClose}
            aria-label="Close experience sheet"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-white/85 dark:bg-[#18181b]/90 backdrop-blur-2xl border border-black/[0.1] dark:border-white/[0.22] shadow-[0_6px_20px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.95)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.25)] text-[#1d1d1f] dark:text-white hover:scale-105 active:scale-95 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ========================================================================
            Bottom-Right Sticky Previous / Next Navigation Arrows
           ======================================================================== */}
        <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-10 z-50 flex items-center gap-2.5">
          <button
            onClick={() => onNavigate(-1)}
            aria-label="Previous experience"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-white/85 dark:bg-[#18181b]/90 backdrop-blur-2xl border border-black/[0.1] dark:border-white/[0.22] shadow-[0_6px_20px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.95)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.25)] text-[#1d1d1f] dark:text-white hover:scale-105 active:scale-95 transition cursor-pointer"
            title={`Previous: ${prevExperience.shortCompany}`}
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate(1)}
            aria-label="Next experience"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-white/85 dark:bg-[#18181b]/90 backdrop-blur-2xl border border-black/[0.1] dark:border-white/[0.22] shadow-[0_6px_20px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.95)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.25)] text-[#1d1d1f] dark:text-white hover:scale-105 active:scale-95 transition cursor-pointer"
            title={`Next: ${nextExperience.shortCompany}`}
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* ========================================================================
            CASE STUDY CONTENT CONTAINER
           ======================================================================== */}
        <div className="max-w-[780px] mx-auto px-6 pt-20 pb-28">
          {/* 1. Header Pills & Company Title */}
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <LiquidGlassPill className="px-3 py-1 text-[11px] font-medium">
                <span className={`h-2 w-2 rounded-full ${experience.dotClass}`} />
                <span>{experience.pillLabel}</span>
              </LiquidGlassPill>

              <LiquidGlassPill className="px-3 py-1 text-[11px] font-medium text-[#6e6e73] dark:text-[#86868b]">
                <Calendar className="w-3.5 h-3.5" />
                <span>{experience.period}</span>
              </LiquidGlassPill>
            </div>

            <h1 className="text-3xl sm:text-[44px] font-bold tracking-[-0.035em] text-[#1d1d1f] dark:text-white leading-[1.12]">
              {experience.company}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-[#6e6e73] dark:text-[#86868b]">
              <span className="font-semibold text-[#1d1d1f] dark:text-white text-[15px]">
                {experience.role}
              </span>
              <span>&bull;</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className={`w-3.5 h-3.5 ${theme.text}`} />
                {experience.location}
              </span>
            </div>

            <p className="text-[15px] sm:text-[17px] text-[#515154] dark:text-[#a1a1a6] mt-4 leading-relaxed font-normal">
              {experience.tagline}
            </p>
          </div>

          {/* 2. Hero Showcase Banner */}
          <div className="relative mt-8 rounded-[28px] overflow-hidden bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm aspect-16/9 sm:aspect-21/9 max-h-[380px]">
            <img
              src={experience.bannerImg}
              alt={experience.company}
              className={`w-full h-full object-cover ${
                experience.bannerPosition || "object-center"
              }`}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
          </div>

          {/* 3. Executive Lead Summary */}
          <div className="mt-9">
            <p className="text-[15.5px] sm:text-[16.5px] leading-[1.8] text-[#333336] dark:text-[#c4c4c8]">
              {experience.leadSummary}
            </p>

            {/* Skills & Tools Pills */}
            <div className="mt-5 flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1 text-[11.5px] font-medium px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.07] border border-black/[0.06] dark:border-white/[0.1] text-[#1d1d1f] dark:text-neutral-300"
                >
                  <Sparkles className={`w-3 h-3 ${theme.text}`} />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Quantitative Impact & Metrics Grid */}
          <div
            className={`my-10 grid gap-3 ${
              experience.metrics.length === 3
                ? "grid-cols-1 sm:grid-cols-3"
                : "grid-cols-2 sm:grid-cols-4"
            }`}
          >
            {experience.metrics.map((m, idx) => (
              <LiquidGlassCard
                key={idx}
                className="p-4 sm:p-5 flex flex-col justify-between"
              >
                <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${theme.text}`}>
                  {m.value}
                </span>
                <div className="mt-2">
                  <p className="text-xs sm:text-[13px] font-semibold text-[#1d1d1f] dark:text-white leading-snug">
                    {m.label}
                  </p>
                  {m.sublabel && (
                    <p className="text-[11px] text-[#6e6e73] dark:text-[#86868b] mt-0.5 leading-tight">
                      {m.sublabel}
                    </p>
                  )}
                </div>
              </LiquidGlassCard>
            ))}
          </div>

          {/* 5. Official Resume Responsibilities & Verified Achievements */}
          <LiquidGlassCard className="p-6 sm:p-7 mb-12 border-black/[0.08] dark:border-white/[0.12] bg-[#f9f9fb] dark:bg-[#141417]">
            <div className="flex items-center gap-2 mb-4">
              <Award className={`w-4 h-4 ${theme.text}`} />
              <h3 className={`text-xs font-bold uppercase tracking-[0.14em] ${theme.text}`}>
                Core Responsibilities &amp; Delivered Work
              </h3>
            </div>
            <ul className="space-y-3.5">
              {experience.officialBullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${theme.bgSubtle} ${theme.text}`}>
                    <CheckCircle2 className="h-3 w-3" />
                  </span>
                  <span className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#1d1d1f] dark:text-neutral-200">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </LiquidGlassCard>

          {/* 6. In-Depth Storytelling Chapters */}
          <div className="space-y-12">
            {experience.storySections.map((sec, sIdx) => (
              <div key={sIdx} className="space-y-4">
                <div className={`flex items-center gap-2 text-xs font-semibold ${theme.text} uppercase tracking-wider`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${theme.bg}`} />
                  <span>Chapter {sIdx + 1}</span>
                </div>

                <h2 className="text-2xl sm:text-[27px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white leading-tight">
                  {sec.title}
                </h2>

                {sec.lead && (
                  <p className="text-[14.5px] sm:text-[15.5px] font-medium text-[#1d1d1f]/85 dark:text-white/90 leading-relaxed italic">
                    &ldquo;{sec.lead}&rdquo;
                  </p>
                )}

                <div className="space-y-3.5 pt-1">
                  {sec.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-[14px] sm:text-[15px] leading-[1.8] text-[#515154] dark:text-[#a1a1a6]"
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {sec.keyPoints && sec.keyPoints.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {sec.keyPoints.map((kp, kpIdx) => (
                      <div
                        key={kpIdx}
                        className="p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]"
                      >
                        <h4 className="text-xs sm:text-[13px] font-semibold text-[#1d1d1f] dark:text-white flex items-center gap-1.5">
                          <Layers className={`w-3.5 h-3.5 ${theme.text}`} />
                          {kp.title}
                        </h4>
                        <p className="text-xs text-[#6e6e73] dark:text-[#86868b] mt-1.5 leading-relaxed">
                          {kp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 7. Related Projects Section (Especially for Apple Developer Academy) */}
          {relatedApps.length > 0 && (
            <div className="mt-14 pt-10 border-t border-black/[0.08] dark:border-white/[0.1]">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <span className={`text-[11px] font-semibold uppercase tracking-wider ${theme.text}`}>
                    Applied Outcomes
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white mt-0.5">
                    Apps Shipped During This Fellowship
                  </h3>
                </div>
                <LiquidGlassPill className="text-xs">
                  {relatedApps.length} Shipped Projects
                </LiquidGlassPill>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {relatedApps.map((app) => {
                  const iconSrc = getAppIcon(app.title) || app.img;
                  return (
                    <LiquidGlassCard
                      key={app.title}
                      interactive
                      onClick={() => {
                        if (onSelectProject) {
                          onClose();
                          onSelectProject(app);
                        }
                      }}
                      className="p-4 flex items-center gap-3.5 cursor-pointer group"
                    >
                      <div className="relative w-14 h-14 rounded-[18px] overflow-hidden shrink-0 border border-black/10 dark:border-white/15 shadow-xs bg-white dark:bg-[#1a1a1c]">
                        <Image
                          src={iconSrc}
                          alt={`${app.title} App Icon`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className={`text-sm font-bold text-[#1d1d1f] dark:text-white ${theme.hoverText} transition-colors`}>
                          {app.title}
                        </h4>
                        <ArrowUpRight className={`w-3.5 h-3.5 text-[#86868b] ${theme.hoverText} transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} />
                      </div>
                      <p className="text-[11.5px] text-[#6e6e73] dark:text-[#86868b] truncate mt-0.5">
                        {app.tag}
                      </p>
                      <p className={`text-[11px] ${theme.text} mt-1 font-medium`}>
                        View Project Case Study &rarr;
                      </p>
                    </div>
                  </LiquidGlassCard>
                );
              })}
              </div>
            </div>
          )}

          {/* 8. Photographic Moments / Visual Gallery */}
          {experience.gallery && experience.gallery.length > 0 && (
            <div className="mt-14 pt-10 border-t border-black/[0.08] dark:border-white/[0.1]">
              <div className="mb-6">
                <span className={`text-[11px] font-semibold uppercase tracking-wider ${theme.text}`}>
                  Field Documentation
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white mt-0.5">
                  Moments &amp; Working Artifacts
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {experience.gallery.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.12] bg-black/5"
                  >
                    <div className="relative aspect-4/3 w-full overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3 bg-white dark:bg-[#161618]">
                      <p className="text-xs font-semibold text-[#1d1d1f] dark:text-white truncate">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-[#6e6e73] dark:text-[#86868b] line-clamp-2 mt-0.5">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 9. Reflection Callout */}
          <div className={`mt-14 p-6 sm:p-7 rounded-[28px] bg-linear-to-br ${theme.gradient} border ${theme.border}`}>
            <span className={`text-[11px] font-semibold uppercase tracking-wider ${theme.text} block mb-2`}>
              Key Engineering Reflection
            </span>
            <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#1d1d1f] dark:text-neutral-200 italic font-medium">
              &ldquo;{experience.reflection}&rdquo;
            </p>
          </div>

          {/* Monogram Footer Logo */}
          <div className="mt-16 flex justify-center">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-black/10 dark:border-white/15 shadow-xs bg-white dark:bg-[#1a1a1c]">
              <Image
                src="/logo.png"
                alt="Bintang Logo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExperienceModal;
