"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "next-themes";
import {
  Briefcase,
  Users,
  Cpu,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  MapPin,
} from "lucide-react";
import { LiquidGlassCard, LiquidGlassPill } from "./ui/liquid-glass";
import { items as motionLabItems, experiences, ExperienceItem, getExperienceTheme } from "@/data";
import { ExperienceModal } from "./ExperienceModal";

const gdgocImages = [
  "/gdgoc1.png",
  "/gdgoc2.jpg",
  "/gdgoc5.png",
  "/gdgoc4.jpg",
  "/gdgoc3.jpg",
  "/gdgoc6.jpg",
];

const academicMoments = [
  {
    title: "Teaching & Practicum Assistant",
    subtitle: "Guided students in hands-on programming & mobile development labs",
    src: "/asprak1.jpg",
  },
  {
    title: "Practicum Lab Sessions",
    subtitle: "Mentoring code reviews, debugging, and software architecture",
    src: "/asprak2.jpg",
  },
  {
    title: "Community Service (Abdimas)",
    subtitle: "Empowering local communities through digital literacy & technology",
    src: "/abdimas1.jpg",
  },
  {
    title: "Community Workshop Delivery",
    subtitle: "Hands-on training and collaborative field implementation",
    src: "/abdimas2.jpg",
  },
];

const Experience = () => {
  const [motionIdx, setMotionIdx] = useState(0);
  const [academicIdx, setAcademicIdx] = useState(0);
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceItem | null>(null);

  const { theme, setTheme, resolvedTheme } = useTheme();

  const adaExp = experiences.find((e) => e.id === "ada-bali") || experiences[0];
  const telkomselExp =
    experiences.find((e) => e.id === "telkomsel") || experiences[1];
  const motionExp =
    experiences.find((e) => e.id === "motion-lab") || experiences[2];
  const gdgocExp = experiences.find((e) => e.id === "gdgoc") || experiences[3];

  const adaTheme = getExperienceTheme(adaExp.id);
  const telkomselTheme = getExperienceTheme(telkomselExp.id);
  const motionTheme = getExperienceTheme(motionExp.id);
  const gdgocTheme = getExperienceTheme(gdgocExp.id);

  const activeMotion = motionLabItems[motionIdx] || motionLabItems[0];
  const activeAcademic = academicMoments[academicIdx] || academicMoments[0];

  const navigateExperience = (dir: -1 | 1) => {
    if (!selectedExperience) return;
    const currentIndex = experiences.findIndex(
      (e) => e.id === selectedExperience.id
    );
    if (currentIndex === -1) return;
    const nextIndex =
      (currentIndex + dir + experiences.length) % experiences.length;
    setSelectedExperience(experiences[nextIndex]);
  };

  useEffect(() => {
    if (!selectedExperience) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedExperience(null);
      } else if (e.key === "ArrowLeft") {
        navigateExperience(-1);
      } else if (e.key === "ArrowRight") {
        navigateExperience(1);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedExperience]);

  return (
    <section className="py-10 md:py-14" id="experience">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <LiquidGlassPill className="mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#0071e3] dark:text-[#0a84ff]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">
              Career &amp; Community
            </span>
          </LiquidGlassPill>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-[42px] tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] leading-tight">
            Work Experience.{" "}
            <span className="text-[#6e6e73] dark:text-[#86868b] font-semibold">
              Proven in the field.
            </span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#6e6e73] dark:text-[#86868b] max-w-xs md:text-right">
          Click any card to read in-depth case studies, engineering decisions, and
          verified outcomes.
        </p>
      </div>

      {/* Apple Keynote Bento Grid for Experience */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* CARD 1: Apple Developer Academy @ BINUS (12 cols) */}
        <LiquidGlassCard
          interactive
          onClick={() => setSelectedExperience(adaExp)}
          className="lg:col-span-12 p-6 sm:p-7 flex flex-col md:flex-row gap-6 justify-between cursor-pointer group"
        >
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6e6e73] dark:text-[#98989d]">
                  Featured Fellowship
                </span>
                <LiquidGlassPill className="text-[10px]">
                  <span className={`h-1.5 w-1.5 rounded-full ${adaTheme.dotClass}`} />
                  <span>March 2026 – Present</span>
                </LiquidGlassPill>
                <span className="text-xs text-[#6e6e73] dark:text-[#86868b] inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#6e6e73] dark:text-[#98989d]" />
                  Kuta, Bali
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] mt-1 group-hover:text-[#6e6e73] dark:group-hover:text-[#98989d] transition-colors">
                Apple Developer Academy @ Binus - Bali
              </h3>
              <p className="text-xs sm:text-sm text-[#515154] dark:text-[#a1a1a6] mt-2 max-w-2xl leading-relaxed">
                Completed 6+ project-based challenges progressing from user research
                and ideation to production-oriented iOS development and independent
                product delivery. Built and shipped 4 iOS applications to the App
                Store using Swift, SwiftUI, ActivityKit, and Go/PostgreSQL.
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#6e6e73] dark:text-[#98989d] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Explore Academy Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>
              <div className="flex items-center gap-2 text-xs text-[#6e6e73] dark:text-[#86868b]">
                <span className="px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 font-medium">
                  6+ Challenges
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 font-medium">
                  4 App Store Apps
                </span>
              </div>
            </div>
          </div>

          <div className="relative h-56 sm:h-64 md:w-80 rounded-2xl overflow-hidden border border-black/[0.06] dark:border-white/[0.1] shrink-0">
            <img
              src="/ada_bali.jpg"
              alt="Apple Developer Academy Bali"
              className={`h-full w-full object-cover ${adaExp.bannerPosition || "object-center"} transition-transform duration-700 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="rounded-full px-3 py-1 bg-black/60 backdrop-blur-md text-[11px] font-medium text-white border border-white/20">
                Learner Cohort
              </span>
            </div>
          </div>
        </LiquidGlassCard>

        {/* CARD 2: Telkomsel R&D Intern (7 cols) */}
        <LiquidGlassCard
          interactive
          onClick={() => setSelectedExperience(telkomselExp)}
          className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between cursor-pointer group"
        >
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#ed0226] dark:text-[#ff3b30]">
                Omnichannel Experience Design
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] mt-1 group-hover:text-[#ed0226] dark:group-hover:text-[#ff3b30] transition-colors">
                Telkomsel — Hacker Enthusiast
              </h3>
              <p className="text-xs sm:text-sm text-[#6e6e73] dark:text-[#98989d] mt-1 max-w-xl">
                Collaborated in a Hustler-Hipster-Hacker team to enhance 4 GraPARI
                Online features. Synthesized 319 survey responses and 15 interviews,
                achieving a 77.5 SUS score.
              </p>
            </div>
            <LiquidGlassPill className="text-[11px] shrink-0">
              <span className={`h-1.5 w-1.5 rounded-full mr-1 ${telkomselTheme.dotClass}`} />
              77.5 SUS Score
            </LiquidGlassPill>
          </div>

          <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-black/[0.06] dark:border-white/[0.1] group">
            <img
              src="/telkomsel.jpg"
              alt="Telkomsel Research & Development Intern"
              className={`h-full w-full object-cover ${telkomselExp.bannerPosition || "object-[center_28%]"} transition-transform duration-700 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />
            <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between">
              <div className="rounded-full px-3.5 py-1.5 bg-white/80 dark:bg-black/65 backdrop-blur-xl border border-white/40 dark:border-white/15 text-xs font-medium text-[#ed0226] dark:text-[#ff3b30] flex items-center gap-1.5">
                <span>Read Telkomsel Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </LiquidGlassCard>

        {/* CARD 3: GDGoC Leadership & Community (5 cols) */}
        <LiquidGlassCard
          interactive
          onClick={() => setSelectedExperience(gdgocExp)}
          className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between cursor-pointer group"
        >
          <div className="mb-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1a73e8] dark:text-[#60a5fa]">
                Leadership &amp; Community
              </span>
              <LiquidGlassPill className="px-2.5 py-1 text-[10px]">
                <Users className="w-3 h-3 text-[#1a73e8] dark:text-[#60a5fa]" />
                <span>GDGoC</span>
              </LiquidGlassPill>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] mt-1 group-hover:text-[#1a73e8] dark:group-hover:text-[#60a5fa] transition-colors">
              Mentor &amp; Curriculum Lead
            </h3>
            <p className="text-xs sm:text-sm text-[#6e6e73] dark:text-[#98989d] mt-1">
              Google Developer Group on Campus — Structured progressive mobile
              learning paths, Hackfest 2024 Strategist, and mentored junior devs.
            </p>
          </div>

          {/* Interactive Photo Collage Grid */}
          <div className="grid grid-cols-3 gap-2.5 my-auto pt-2">
            {gdgocImages.map((img, idx) => (
              <motion.div
                key={img}
                whileHover={{ scale: 1.05, y: -3, zIndex: 20 }}
                className="relative aspect-square rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.12] bg-black/5 shadow-xs"
              >
                <img
                  src={img}
                  alt={`GDGoC activity ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-xs">
            <span className="font-semibold text-[#1a73e8] dark:text-[#60a5fa] flex items-center gap-1">
              <span>Read GDGoC Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
            <span className="text-[#6e6e73] dark:text-[#86868b]">2023 – 2025</span>
          </div>
        </LiquidGlassCard>

        {/* CARD 4: Mobile Innovation Lab (Motion Lab) (6 cols) */}
        <LiquidGlassCard
          interactive
          onClick={() => setSelectedExperience(motionExp)}
          className="lg:col-span-6 p-6 sm:p-7 flex flex-col justify-between cursor-pointer group"
        >
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#991b1b] dark:text-[#f87171]">
                Technical Lab Experience
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] mt-1 group-hover:text-[#991b1b] dark:group-hover:text-[#f87171] transition-colors">
                Mobile Programming Member
              </h3>
              <p className="text-xs sm:text-sm text-[#6e6e73] dark:text-[#98989d] mt-1">
                Motion Lab — Engineered cross-platform Flutter applications for
                university research outputs, nominated as Best Hacker.
              </p>
            </div>
            <LiquidGlassPill className="px-2.5 py-1 text-[10px] shrink-0">
              <Cpu className="w-3 h-3 text-[#991b1b] dark:text-[#f87171]" />
              <span>Motion Lab</span>
            </LiquidGlassPill>
          </div>

          <div className="relative h-60 sm:h-64 w-full rounded-2xl overflow-hidden border border-black/[0.06] dark:border-white/[0.1] bg-black/5">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeMotion.image}
                src={activeMotion.image}
                alt={activeMotion.title}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="h-full w-full object-cover object-center"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />

            <div className="absolute bottom-3 inset-x-3 flex items-center justify-between gap-2 rounded-2xl px-3.5 py-2.5 bg-white/80 dark:bg-black/65 backdrop-blur-2xl border border-white/40 dark:border-white/15">
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider font-semibold text-[#991b1b] dark:text-[#f87171]">
                  Highlight {motionIdx + 1} of {motionLabItems.length}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-[#1d1d1f] dark:text-white truncate">
                  {activeMotion.title}
                </p>
              </div>
              <div
                className="flex items-center gap-1.5 shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() =>
                    setMotionIdx((prev) =>
                      prev === 0 ? motionLabItems.length - 1 : prev - 1
                    )
                  }
                  className="p-1.5 rounded-full bg-black/[0.06] dark:bg-white/[0.12] hover:bg-black/[0.12] dark:hover:bg-white/[0.2] text-[#1d1d1f] dark:text-white transition cursor-pointer"
                  aria-label="Previous highlight"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setMotionIdx((prev) =>
                      prev === motionLabItems.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="p-1.5 rounded-full bg-black/[0.06] dark:bg-white/[0.12] hover:bg-black/[0.12] dark:hover:bg-white/[0.2] text-[#1d1d1f] dark:text-white transition cursor-pointer"
                  aria-label="Next highlight"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </LiquidGlassCard>

        {/* CARD 5: Academic & Community Engagement (6 cols) */}
        <LiquidGlassCard
          interactive
          className="lg:col-span-6 p-6 sm:p-7 flex flex-col justify-between"
        >
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0071e3] dark:text-[#0a84ff]">
                Academic &amp; Community
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] mt-1">
                Teaching Assistant &amp; Abdimas
              </h3>
              <p className="text-xs sm:text-sm text-[#6e6e73] dark:text-[#98989d] mt-1">
                Practicum instruction and community service programs focused on
                applied software engineering.
              </p>
            </div>
            <LiquidGlassPill className="px-2.5 py-1 text-[10px] shrink-0">
              <GraduationCap className="w-3 h-3 text-[#0071e3] dark:text-[#0a84ff]" />
              <span>Academic</span>
            </LiquidGlassPill>
          </div>

          <div className="relative h-60 sm:h-64 w-full rounded-2xl overflow-hidden border border-black/[0.06] dark:border-white/[0.1] bg-black/5">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeAcademic.src}
                src={activeAcademic.src}
                alt={activeAcademic.title}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="h-full w-full object-cover object-center"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />

            <div className="absolute bottom-3 inset-x-3 flex items-center justify-between gap-2 rounded-2xl px-3.5 py-2.5 bg-white/80 dark:bg-black/65 backdrop-blur-2xl border border-white/40 dark:border-white/15">
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-[#1d1d1f] dark:text-white truncate">
                  {activeAcademic.title}
                </p>
                <p className="text-[11px] text-[#6e6e73] dark:text-neutral-300 truncate">
                  {activeAcademic.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() =>
                    setAcademicIdx((prev) =>
                      prev === 0 ? academicMoments.length - 1 : prev - 1
                    )
                  }
                  className="p-1.5 rounded-full bg-black/[0.06] dark:bg-white/[0.12] hover:bg-black/[0.12] dark:hover:bg-white/[0.2] text-[#1d1d1f] dark:text-white transition cursor-pointer"
                  aria-label="Previous academic moment"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setAcademicIdx((prev) =>
                      prev === academicMoments.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="p-1.5 rounded-full bg-black/[0.06] dark:bg-white/[0.12] hover:bg-black/[0.12] dark:hover:bg-white/[0.2] text-[#1d1d1f] dark:text-white transition cursor-pointer"
                  aria-label="Next academic moment"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </LiquidGlassCard>
      </div>

      {/* Experience Case Study Bottom Sheet Modal */}
      <ExperienceModal
        experience={selectedExperience}
        allExperiences={experiences}
        onClose={() => setSelectedExperience(null)}
        onNavigate={navigateExperience}
        onSelectExperience={(exp) => setSelectedExperience(exp)}
        currentTheme={resolvedTheme || theme}
        toggleTheme={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      />
    </section>
  );
};

export default Experience;
