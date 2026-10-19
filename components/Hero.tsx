"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "next-themes";
import {
  Mail,
  Check,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Globe,
  Home,
  User,
  Folder,
  Briefcase,
  X,
  Sparkles,
  Mic,
  Layers,
  Smartphone,
  Users,
  Radio,
  ArrowLeft,
  ArrowRight,
  Navigation,
  MapPin,
  BookOpen,
  Heart,
  Lock,
  Volume2,
  Camera,
  Palette,
  Scissors,
  Languages,
} from "lucide-react";
import {
  LiquidGlassCard,
  LiquidGlassPill,
  LiquidGlassButton,
} from "./ui/liquid-glass";
import {
  projects,
  socialMedia,
  experiences,
  ExperienceItem,
  getExperienceTheme,
} from "@/data";
import { ContactDrawer } from "./ContactDrawer";
import { ProjectGallery } from "./ProjectGallery";
import { ExperienceModal } from "./ExperienceModal";

// Short, punchy 1-line captions for the 6 iOS apps
const shortTaglines: Record<string, string> = {
  fraqments: "3D spatial moments journal & Live Activities",
  Kinario: "Scenario-based puzzle game on handling children",
  Omawe: "Live group trip awareness & Lock Screen tracking",
  Nomi: "Interactive body safety education for kids",
  BlooBook: "Digital polaroid & stamp memory scrapbook",
  Newblie: "Learn conversational Balinese words & phrases",
};

// 10 Landscape in-game screenshots for Kinario
const kinarioScreenshots = [
  {
    src: "/kinario/kinario_mainmenu.PNG",
    badge: "Main Menu",
    title: "Interactive Hub & Audio Settings",
    caption:
      "Vibrant animated main menu providing instant navigation to Start, Guidebook, and custom SFX/BGM controls.",
  },
  {
    src: "/kinario/kinario_levelselect.PNG",
    badge: "Level Select",
    title: "Chapter Progression & Star Ratings",
    caption:
      "Overview across School, Playground, and Swimming Pool chapters with unlocked star badges and upcoming stories.",
  },
  {
    src: "/kinario/kinario_uncompletedlevel.PNG",
    badge: "Gameplay",
    title: "Active Scenario Puzzle",
    caption:
      "Drag-and-drop empathetic dialogue and action tokens into drop zones while the attempt meter tracks choices.",
  },
  {
    src: "/kinario/kinario_completedlevel.PNG",
    badge: "Resolution",
    title: "Successful Scenario Completion",
    caption:
      "Visualizing character emotional shifts from distress to relief as empathetic responses calm the situation.",
  },
  {
    src: "/kinario/kinario_result.PNG",
    badge: "Summary",
    title: "Chapter Result & Empathy Tips",
    caption:
      "Performance evaluation awarding 1-3 stars with actionable Whole-Brain Child parenting and childcare takeaways.",
  },
  {
    src: "/kinario/kinario_helpjojohint.PNG",
    badge: "Hint System",
    title: "Contextual Guidance & Emotional Needs",
    caption:
      "In-game guidance modal detailing Rhodey or Jojo's emotional state and providing hints when a choice is mismatched.",
  },
  {
    src: "/kinario/kinario_helpjojominigame.PNG",
    badge: "Mini-Game",
    title: "Save Jojo Arcade Water Rescue",
    caption:
      "Aim and throw the lifebuoy within 3 attempts, then rapidly tap the tension bar to pull Jojo safely out of the pool.",
  },
  {
    src: "/kinario/kinario_guidebook.PNG",
    badge: "Guidebook",
    title: "Illustrated Whole-Brain Child Handbook",
    caption:
      "Visual handbook breaking down 'Connect and Redirect', 'Name it to Tame it', and 'Engage, Don't Enrage'.",
  },
  {
    src: "/kinario/kinario_reference.PNG",
    badge: "References",
    title: "Scientific Citations & Literature",
    caption:
      "Academic foundation acknowledging Dr. Daniel J. Siegel, M.D. and Dr. Tina Payne Bryson, Ph.D.'s clinical research.",
  },
  {
    src: "/kinario/kinario_aboutus.PNG",
    badge: "About Us",
    title: "Team Vision & Origin Mission",
    caption:
      "The story of why the Apple Developer Academy team built Kinario to prepare first-time child-community volunteers.",
  },
];

// 10 Curated in-app screenshots for Omawe
const omaweScreenshots = [
  {
    src: "/omawe_1.png",
    badge: "Invitation",
    title: "Wax-Sealed Envelope & Deep-Link Onboarding",
    caption:
      "Digital invitation envelope displaying the shared destination, organizer details, and 1-tap join code without forced sign-ups.",
  },
  {
    src: "/omawe_2.png",
    badge: "Roster",
    title: "Participant List & Convergence Status",
    caption:
      "Real-time group roster tracking member readiness, departure timestamps, and live en-route states across the convoy.",
  },
  {
    src: "/omawe_3.png",
    badge: "Live Tracking",
    title: "Interactive MapKit Group Radar",
    caption:
      "Dynamic MapKit canvas rendering real-time member coordinates, customized member pins, and convergence paths toward the destination.",
  },
  {
    src: "/omawe_4.png",
    badge: "Convergence",
    title: "Normalized Journey Progress Bar",
    caption:
      "Visual journey completion line showing normalized road distance and relative positioning toward the shared finish line.",
  },
  {
    src: "/omawe_5.png",
    badge: "Live Activity",
    title: "Lock Screen & Dynamic Island Awareness",
    caption:
      "Sub-2-second glanceable status powered by ActivityKit, delivering ambient ETA updates without unlocking the device.",
  },
  {
    src: "/omawe_8.png",
    badge: "Real-Time ETA",
    title: "Live Navigation & Traffic Alerts",
    caption:
      "Calculated arrival metrics factoring in traffic delays, live speed changes, and one-tap 'Gonna be late' delay broadcasting.",
  },
  {
    src: "/omawe_7.png",
    badge: "Member State",
    title: "Individual Speed & Status Badges",
    caption:
      "Granular participant cards detailing current travel speed, remaining distance, and customized driver delay notifications.",
  },
  {
    src: "/omawe_8.png",
    badge: "Trip Summary",
    title: "Trip-End Completion & Overview",
    caption:
      "Post-trip debrief summarizing overall group travel duration, total convoy distance, and average transit speed.",
  },
  {
    src: "/omawe_9.png",
    badge: "Performance",
    title: "2x2 Performance Metrics Dashboard",
    caption:
      "Permanent trip stats featuring group top speed, individual driving contributions, and Douglas-Peucker simplified route polylines.",
  },
  {
    src: "/omawe_10.png",
    badge: "Social Share",
    title: "9:16 Story Card & Animated Route Replay",
    caption:
      "Exportable animated video replay and Instagram Story cards to commemorate the shared road trip.",
  },
];

// 9 Curated in-app screenshots for Nomi
const nomiScreenshots = [
  {
    src: "/nomi_1.png",
    badge: "Welcome",
    title: "Warm Mascot Introduction & Accessible UI",
    caption:
      "Nomi the friendly hedgehog welcomes young learners with cheerful audio greetings, soft pastel palettes, and accessible rounded typography designed for early readers.",
  },
  {
    src: "/nomi_2.png",
    badge: "Profile Setup",
    title: "Personalized Child Profile & Zero-PII Setup",
    caption:
      "On-device child profile customization allowing kids to pick avatars and names without collecting emails, tracking IDs, or personal identifiers.",
  },
  {
    src: "/nomi_3.png",
    badge: "Character Voice",
    title: "Personalized Audio Narration & Emotional Safety",
    caption:
      "Dynamic voice greeting addressing the child by name with gentle pacing, establishing an empathetic, reassuring tone before entering sensitive learning chapters.",
  },
  {
    src: "/nomi_4.png",
    badge: "Adventure Hub",
    title: "Topic Modules & Boundary Curriculum",
    caption:
      "Structured learning paths spanning Body Parts & Boundaries, Personal Hygiene, and Saying No, tracked via child-friendly completion badges.",
  },
  {
    src: "/nomi_5.png",
    badge: "Roadmap",
    title: "5-Level Winding Progression Journey",
    caption:
      "Gamified winding path guiding children through 5 bite-sized interactive milestones, transforming abstract safety rules into an encouraging adventure.",
  },
  {
    src: "/nomi_6.png",
    badge: "Storybook",
    title: "Landscape Storybook: The Swimsuit Rule",
    caption:
      "Illustrated 16:9 interactive storybook introducing the fundamental Swimsuit Rule: 'The parts your swimsuit covers belong only to you' with synchronized tap-to-read audio.",
  },
  {
    src: "/nomi_7.png",
    badge: "Body Anatomy",
    title: "Level 2: Flip-Card Anatomy & Body Autonomy",
    caption:
      "Child-friendly illustrated body map with interactive flip cards explaining private vs. public parts in anatomically accurate, shame-free terms.",
  },
  {
    src: "/nomi_8.png",
    badge: "Tactile Sorting",
    title: "Level 3: Safe vs. Unsafe Touch Sorting Game",
    caption:
      "Tactile drag-and-drop gameplay training children to identify comfortable touches (comforting high-fives) versus unsafe touches, backed by immediate audio feedback.",
  },
  {
    src: "/nomi_9.png",
    badge: "Trust Contract",
    title: "Level 5: Digital Pinky Promise & Parent Safety Pact",
    caption:
      "Interactive bonding ritual sealing a mutual trust contract between child and caregiver, reinforcing that uncomfortable touches are never the child's fault.",
  },
];

// 6 Curated in-app screenshots for BlooBook
const bloobookScreenshots = [
  {
    src: "/bloobook_1.png",
    badge: "Branding",
    title: "Minimalist Brand Identity & Splash Screen",
    caption:
      "Gentle pastel blue launch screen featuring BlooBook's custom embossed journal emblem and ocean wave motif.",
  },
  {
    src: "/bloobook_2.png",
    badge: "Library",
    title: "Collection Hub & Memory Carousel",
    caption:
      "Dual-tiered overview showing recent polaroid memory carousels, customizable album covers, and categorized trip binders.",
  },
  {
    src: "/bloobook_3.png",
    badge: "Camera Studio",
    title: "Real-Time Stamp & Polaroid Viewfinder",
    caption:
      "Custom camera overlay framing live camera streams directly within perforated stamp edges and retro polaroid viewfinders.",
  },
  {
    src: "/bloobook_4.png",
    badge: "Framing & Notes",
    title: "Interactive Crop, Aspect Framing & Story Notes",
    caption:
      "Precision pan/zoom adjustments inside 6 stamp and polaroid frames, pairing visual memories with titles and 30-word personal notes.",
  },
  {
    src: "/bloobook_5.png",
    badge: "Memories Grid",
    title: "Chronological Showcase & Inspection Sheet",
    caption:
      "Visual grid of all captured memories with high-resolution inspection sheets, date stamps, and instant deletion management.",
  },
  {
    src: "/bloobook_6.png",
    badge: "Scrapbook Canvas",
    title: "Free-Form Multi-Touch Scrapbook Workspace",
    caption:
      "Tactile canvas editor supporting simultaneous pan, pinch, and rotation, draggable stickers, layered text, and vintage paper textures.",
  },
];

// Curated in-app screenshots for Newblie
const newblieScreenshots = [
  {
    src: "/project5.png",
    badge: "Flashcard Deck",
    title: "3D Stack & Gesture-Driven Flashcards",
    caption:
      "Physics-based flashcard stack with dynamic scaling, negative vertical offsets, and drag-momentum rotation for tactile Balinese vocabulary practice.",
  },
];

const getProjectStatus = (project: (typeof projects)[0]) => {
  // fraqments, Kinario, and Omawe are live on the App Store
  if (
    project.title.toLowerCase() === "fraqments" ||
    project.link.includes("apps.apple.com")
  ) {
    return {
      label: "App Store",
      dotClass: "bg-emerald-500 shadow-[0_0_8px_#10b981]",
      ctaLabel: "View on App Store",
    };
  }
  if (project.link.includes("testflight")) {
    return {
      label: "TestFlight",
      dotClass: "bg-sky-400 shadow-[0_0_8px_#38bdf8]",
      ctaLabel: "Join TestFlight",
    };
  }
  return {
    label: "Shipped",
    dotClass: "bg-emerald-500 shadow-[0_0_8px_#10b981]",
    ctaLabel: "View on GitHub",
  };
};

// Reusable Bento App Showcase Card supporting XL (780px), Large (520px), Medium-Large (480px), Medium (430px), and Small (240px)
const AppBentoCard = ({
  project,
  onSelect,
  size = "large",
}: {
  project: (typeof projects)[0];
  onSelect: (project: (typeof projects)[0]) => void;
  size?: "xl" | "large" | "medium-large" | "medium" | "small";
}) => {
  const status = getProjectStatus(project);
  const isFraqments = project.title.toLowerCase() === "fraqments";
  const isKinario = project.title.toLowerCase() === "kinario";
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (!isFraqments && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => { });
      }
    }
  };

  const handleMouseLeave = () => {
    if (!isFraqments && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Small compact horizontal Bento card (BlooBook & Newblie — h-[240px])
  if (size === "small") {
    return (
      <LiquidGlassCard
        interactive
        onClick={() => onSelect(project)}
        className="p-4 sm:p-5 h-[240px] flex flex-row items-center justify-between gap-4 cursor-pointer group select-none"
      >
        <div className="flex flex-col justify-between h-full min-w-0 flex-1 z-20">
          <div>
            <LiquidGlassPill className="px-3 py-1 text-[11px]">
              <span className={`h-2 w-2 rounded-full ${status.dotClass}`} />
              <span>{status.label}</span>
            </LiquidGlassPill>
          </div>

          <div>
            <span className="text-[11px] font-medium text-[#6e6e73] dark:text-[#86868b] block">
              {project.tag}
            </span>
            <h3 className="text-[16px] font-semibold text-[#1d1d1f] dark:text-white leading-snug mt-0.5">
              {project.title}
            </h3>
            <p className="text-[13px] text-[#6e6e73] dark:text-[#86868b] mt-0.5 line-clamp-2">
              {shortTaglines[project.title] || project.tag}
            </p>
          </div>
        </div>

        {/* Right-side image container — strict boundary so image and shadow stay inside */}
        <div className="relative h-full w-[130px] sm:w-[150px] shrink-0 flex items-center justify-center z-10 p-1">
          <img
            src={project.img}
            alt={project.title}
            className="max-h-[82%] max-w-full w-auto h-auto object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_10px_22px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out group-hover:scale-[1.03] pointer-events-none"
          />
        </div>
      </LiquidGlassCard>
    );
  }

  // XL (fraqments — h-[780px]), Large (Kinario, Omawe, Nomi — h-[520px]), Medium-Large (h-[480px]) & Medium (h-[430px])
  const heightClass =
    size === "xl"
      ? "h-[780px]"
      : size === "large"
        ? "h-[520px]"
        : size === "medium-large"
          ? "h-[480px]"
          : "h-[430px]";

  return (
    <LiquidGlassCard
      interactive
      onClick={() => onSelect(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`p-4 sm:p-5 flex flex-col justify-between cursor-pointer group select-none ${heightClass}`}
    >
      {/* Top Bar: Tag + Status Pill */}
      <div className="relative z-20 flex items-center justify-between shrink-0">
        <span className="text-[11px] font-medium text-[#6e6e73] dark:text-[#86868b]">
          {project.tag}
        </span>
        <LiquidGlassPill>
          <span className={`h-2 w-2 rounded-full ${status.dotClass}`} />
          <span>{status.label}</span>
        </LiquidGlassPill>
      </div>

      {/* Center: Media Frame */}
      <div className="relative flex-1 min-h-0 w-full my-2 px-2 py-1 flex items-center justify-center z-10">
        {isFraqments ? (
          <video
            src="/fraqments.MOV"
            poster="/fraqments-poster.png"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="max-h-[92%] max-w-[92%] w-auto h-full object-contain rounded-[22px] drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)] transition-transform duration-500 ease-out group-hover:scale-[1.03] pointer-events-none"
          />
        ) : isKinario ? (
          <video
            ref={videoRef}
            src="/kinario.MOV#t=0.001"
            poster="/kinario-poster.png"
            loop
            muted
            playsInline
            preload="none"
            className="max-h-[92%] max-w-[94%] w-full h-auto object-contain rounded-[20px] drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)] transition-transform duration-500 ease-out group-hover:scale-[1.03] pointer-events-none"
          />
        ) : (
          <img
            src={project.img}
            alt={project.title}
            className="max-h-[86%] max-w-[90%] w-auto h-auto object-contain drop-shadow-[0_10px_22px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_14px_28px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out group-hover:scale-[1.025] pointer-events-none"
          />
        )}
      </div>

      {/* Minimal 2-Line Bottom Caption */}
      <div className="relative z-20 flex items-end justify-between gap-2 shrink-0">
        <div>
          <h3 className="text-[15px] font-semibold text-[#1d1d1f] dark:text-white leading-snug">
            {project.title}
          </h3>
          <p className="text-[13px] text-[#6e6e73] dark:text-[#86868b] mt-0.5 line-clamp-1">
            {shortTaglines[project.title] || project.tag}
          </p>
        </div>
      </div>
    </LiquidGlassCard>
  );
};

// Reusable Experience Photo Bento Card
const ExperienceBentoCard = ({
  img,
  alt,
  pillLabel,
  dotClass,
  title,
  subtitle,
  heightClass = "h-[280px]",
  hoverTextColor = "group-hover:text-white",
  objectPosition = "object-center",
  onClick,
}: {
  img: string;
  alt: string;
  pillLabel: string;
  dotClass: string;
  title: string;
  subtitle: string;
  heightClass?: string;
  hoverTextColor?: string;
  objectPosition?: string;
  onClick?: () => void;
}) => (
  <LiquidGlassCard
    interactive
    onClick={onClick}
    className={`relative ${heightClass} p-4 sm:p-5 flex flex-col justify-between overflow-hidden group cursor-pointer select-none`}
  >
    <img
      src={img}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`absolute inset-0 h-full w-full object-cover ${objectPosition} transition-transform duration-700 group-hover:scale-105`}
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-black/20 group-hover:from-black/90 group-hover:via-black/45 transition-colors" />

    <div className="relative z-20 flex items-center justify-between">
      <span className="text-[10.5px] font-semibold uppercase tracking-wider text-white/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 drop-shadow-sm">
        <span>View Story</span>
        <ArrowUpRight className="w-3 h-3" />
      </span>
      <LiquidGlassPill className="dark:bg-black/55 bg-white/80">
        <span className={`h-2 w-2 rounded-full ${dotClass}`} />
        <span>{pillLabel}</span>
      </LiquidGlassPill>
    </div>

    <div className="relative z-20">
      <h3 className={`text-[15px] font-semibold text-white leading-snug ${hoverTextColor} transition-colors`}>
        {title}
      </h3>
      <p className="text-[13px] text-white/80 mt-0.5 line-clamp-1">{subtitle}</p>
    </div>
  </LiquidGlassCard>
);

type NavSectionId = "home" | "about" | "projects" | "experience" | "contact";

const navSections: {
  id: NavSectionId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Folder },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ];

const Hero = () => {
  // Filter the 6 iOS apps in order: fraqments, Kinario, Omawe, Nomi, BlooBook, Newblie
  const appOrder = [
    "fraqments",
    "Kinario",
    "Omawe",
    "Nomi",
    "BlooBook",
    "Newblie",
  ];
  const iosApps = appOrder
    .map((title) => projects.find((p) => p.title === title))
    .filter((p): p is (typeof projects)[0] => Boolean(p));

  const fraqmentsApp =
    iosApps.find((p) => p.title === "fraqments") || iosApps[0];
  const kinarioApp = iosApps.find((p) => p.title === "Kinario") || iosApps[1];
  const omaweApp = iosApps.find((p) => p.title === "Omawe") || iosApps[2];
  const nomiApp = iosApps.find((p) => p.title === "Nomi") || iosApps[3];
  const bloobookApp = iosApps.find((p) => p.title === "BlooBook") || iosApps[4];
  const newblieApp = iosApps.find((p) => p.title === "Newblie") || iosApps[5];

  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const modalScrollRef = useRef<HTMLDivElement>(null);
  const projectSheetRef = useRef<HTMLDivElement>(null);

  // Specific experience objects
  const adaExp = experiences.find((e) => e.id === "ada-bali") || experiences[0];
  const telkomselExp = experiences.find((e) => e.id === "telkomsel") || experiences[1];
  const motionExp = experiences.find((e) => e.id === "motion-lab") || experiences[2];
  const gdgocExp = experiences.find((e) => e.id === "gdgoc") || experiences[3];

  // Copy email, About sheet & Contact drawer state
  const [copied, setCopied] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<NavSectionId>("home");
  const isManualScrollingRef = useRef(false);
  const manualScrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  // Theme & Live Clock state
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setMounted(true);
    setNow(new Date());
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isAboutOpen && !selectedProject && !selectedExperience) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsAboutOpen(false);
        setSelectedProject(null);
        setSelectedExperience(null);
      } else if (e.key === "ArrowLeft") {
        if (selectedProject) navigateProject(-1);
        else if (selectedExperience) navigateExperience(-1);
      } else if (e.key === "ArrowRight") {
        if (selectedProject) navigateProject(1);
        else if (selectedExperience) navigateExperience(1);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAboutOpen, selectedProject, selectedExperience]);

  // Track scroll position to highlight active tab in the floating navbar
  useEffect(() => {
    const handleScroll = () => {
      if (isManualScrollingRef.current) return;

      const isDesktop = window.innerWidth >= 1024;
      const prefix = isDesktop ? "desktop-" : "mobile-";
      const scrollY = window.scrollY;

      if (scrollY < 180) {
        setActiveSection("home");
        return;
      }

      if (
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection("contact");
        return;
      }

      const ids: NavSectionId[] = [
        "contact",
        "experience",
        "projects",
        "about",
        "home",
      ];
      for (const id of ids) {
        const el = document.getElementById(`${prefix}${id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.42) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: NavSectionId) => {
    isManualScrollingRef.current = true;
    if (manualScrollTimeoutRef.current) {
      clearTimeout(manualScrollTimeoutRef.current);
    }
    setActiveSection(id);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const isDesktop = window.innerWidth >= 1024;
      const prefix = isDesktop ? "desktop-" : "mobile-";
      const el = document.getElementById(`${prefix}${id}`);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 24;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }

    manualScrollTimeoutRef.current = setTimeout(() => {
      isManualScrollingRef.current = false;
    }, 750);
  };

  const currentTheme = mounted ? resolvedTheme || theme : "dark";

  // Two-stage expanding wave theme transition state
  const bentoCardRef = useRef<HTMLDivElement>(null);
  const isThemeTransitioningRef = useRef(false);
  const [bentoSpread, setBentoSpread] = useState<{
    active: boolean;
    targetTheme: string;
    localX: number;
    localY: number;
  } | null>(null);
  const [pageSpread, setPageSpread] = useState<{
    active: boolean;
    targetTheme: string;
    x: number;
    y: number;
    radius: number;
  } | null>(null);

  const toggleThemeWithTransition = (
    e?: React.MouseEvent,
    source: "bento" | "generic" = "bento"
  ) => {
    if (isThemeTransitioningRef.current) return;
    isThemeTransitioningRef.current = true;

    const targetTheme = currentTheme === "dark" ? "light" : "dark";

    // Coordinates of click origin
    let clickX = window.innerWidth / 2;
    let clickY = window.innerHeight / 2;
    if (e && e.currentTarget) {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      clickX = rect.left + rect.width / 2;
      clickY = rect.top + rect.height / 2;
    }

    const maxRadius =
      Math.hypot(
        Math.max(clickX, window.innerWidth - clickX),
        Math.max(clickY, window.innerHeight - clickY)
      ) + 80;

    if (source === "bento") {
      // Calculate origin relative to the Bento switch card
      const bentoRect = bentoCardRef.current?.getBoundingClientRect();
      const localX = bentoRect ? clickX - bentoRect.left : 90;
      const localY = bentoRect ? clickY - bentoRect.top : 90;

      // STAGE 1: Spread inside the Bento switch card first
      setBentoSpread({
        active: true,
        targetTheme,
        localX,
        localY,
      });

      // STAGE 2: Hold (~180ms), then STAGE 3: Spread to the entire page
      setTimeout(() => {
        setPageSpread({
          active: true,
          targetTheme,
          x: clickX,
          y: clickY,
          radius: maxRadius,
        });

        // Switch theme shortly after full-page wave starts expanding
        setTimeout(() => {
          setTheme(targetTheme);
        }, 70);

        // Cleanup after wave finishes
        setTimeout(() => {
          setBentoSpread(null);
          setPageSpread(null);
          isThemeTransitioningRef.current = false;
        }, 750);
      }, 480); // 300ms bento expansion + 180ms hold
    } else {
      // Direct full-page spread for generic buttons (mobile/modals)
      setPageSpread({
        active: true,
        targetTheme,
        x: clickX,
        y: clickY,
        radius: maxRadius,
      });

      setTimeout(() => {
        setTheme(targetTheme);
      }, 70);

      setTimeout(() => {
        setPageSpread(null);
        isThemeTransitioningRef.current = false;
      }, 750);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("alfathbintangmuhammad@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Compute Bali (WITA / UTC+8) time for analog & digital clock
  const getBaliTime = () => {
    if (!now) {
      return {
        digital: "00:00:00",
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
    const bali = new Date(utcMs + 8 * 3600000);
    const hours = bali.getHours();
    const minutes = bali.getMinutes();
    const seconds = bali.getSeconds();
    const pad = (n: number) => String(n).padStart(2, "0");
    return {
      digital: `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`,
      hours,
      minutes,
      seconds,
    };
  };

  const { digital, hours, minutes, seconds } = getBaliTime();
  const hourAngle = ((hours % 12) + minutes / 60) * 30;
  const minuteAngle = (minutes + seconds / 60) * 6;
  const secondAngle = seconds * 6;

  // Modal helpers
  const openModal = (project: (typeof projects)[0]) => {
    setActiveScreenIndex(0);
    setSelectedProject(project);
  };

  const navigateProject = (dir: -1 | 1) => {
    if (!selectedProject) return;
    const currentIndex = iosApps.findIndex(
      (p) => p.title === selectedProject.title
    );
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + dir + iosApps.length) % iosApps.length;
    setActiveScreenIndex(0);
    setSelectedProject(iosApps[nextIndex]);
    if (projectSheetRef.current) {
      projectSheetRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleModalScroll = () => {
    if (modalScrollRef.current) {
      const { scrollLeft, clientWidth } = modalScrollRef.current;
      if (clientWidth > 0) {
        setActiveScreenIndex(Math.round(scrollLeft / clientWidth));
      }
    }
  };

  const scrollModalBy = (dir: -1 | 1) => {
    if (modalScrollRef.current) {
      const { scrollLeft, clientWidth } = modalScrollRef.current;
      modalScrollRef.current.scrollTo({
        left: scrollLeft + dir * clientWidth,
        behavior: "smooth",
      });
    }
  };

  const openExperienceModal = (exp: ExperienceItem) => {
    setSelectedExperience(exp);
  };

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

  // Reusable Time in Bali Card
  const renderTimeInBaliCard = () => (
    <LiquidGlassCard className="p-4 sm:p-5 h-[240px] flex items-center justify-between gap-4">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-full bg-black/[0.04] dark:bg-[#1a1a1c] border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center shadow-inner z-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = i * 30;
            return (
              <line
                key={i}
                x1="50"
                y1="8"
                x2="50"
                y2={i % 3 === 0 ? "15" : "12"}
                stroke="currentColor"
                strokeWidth={i % 3 === 0 ? "2" : "1"}
                className="text-black/30 dark:text-white/30"
                transform={`rotate(${angle} 50 50)`}
              />
            );
          })}
          <text
            x="50"
            y="24"
            textAnchor="middle"
            className="fill-[#1d1d1f] dark:fill-white text-[8px] font-semibold"
          >
            12
          </text>
          <text
            x="79"
            y="53"
            textAnchor="middle"
            className="fill-[#1d1d1f] dark:fill-white text-[8px] font-semibold"
          >
            3
          </text>
          <text
            x="50"
            y="82"
            textAnchor="middle"
            className="fill-[#1d1d1f] dark:fill-white text-[8px] font-semibold"
          >
            6
          </text>
          <text
            x="21"
            y="53"
            textAnchor="middle"
            className="fill-[#1d1d1f] dark:fill-white text-[8px] font-semibold"
          >
            9
          </text>

          {/* Hour Hand */}
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="28"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="text-[#1d1d1f] dark:text-white"
            transform={`rotate(${hourAngle} 50 50)`}
          />
          {/* Minute Hand */}
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-[#1d1d1f] dark:text-white"
            transform={`rotate(${minuteAngle} 50 50)`}
          />
          {/* Red Second Hand */}
          <line
            x1="50"
            y1="56"
            x2="50"
            y2="14"
            stroke="#ef4444"
            strokeWidth="1.2"
            strokeLinecap="round"
            transform={`rotate(${secondAngle} 50 50)`}
          />
          <circle
            cx="50"
            cy="50"
            r="2.5"
            className="fill-[#1d1d1f] dark:fill-white"
          />
        </svg>
      </div>

      <div className="text-right flex flex-col justify-between h-full py-2 z-20">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[#6e6e73] dark:text-[#86868b]">
            TIME ZONE • WITA (UTC+8)
          </p>
          <p className="text-base font-semibold text-[#1d1d1f] dark:text-white mt-1">
            Time in Bali
          </p>
        </div>
        <p className="text-3xl sm:text-4xl font-bold tracking-tight tabular-nums text-[#1d1d1f] dark:text-white">
          {digital}
        </p>
      </div>
    </LiquidGlassCard>
  );

  // Reusable Socials & GitHub Card
  const renderSocialsCard = () => (
    <LiquidGlassCard
      interactive
      className="p-4 sm:p-5 h-[180px] flex items-center justify-between gap-4"
    >
      <div className="min-w-0 z-20">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/15 text-sky-600 dark:text-sky-400 px-2.5 py-0.5 text-[11px] font-medium">
          Connect
        </span>
        <h3 className="text-[16px] font-semibold text-[#1d1d1f] dark:text-white mt-2">
          Socials
        </h3>
        <p className="text-xs text-[#6e6e73] dark:text-[#86868b] mt-0.5">
          Explore repositories &amp; updates
        </p>
      </div>
      <div className="flex items-center gap-2.5 shrink-0 z-20">
        {socialMedia.map((profile) => (
          <a
            key={profile.id}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social profile"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.05] hover:bg-black/[0.1] dark:bg-white/[0.08] dark:hover:bg-white/[0.16] border border-black/[0.08] dark:border-white/[0.16] transition hover:scale-105"
          >
            <div
              className="w-4 h-4 bg-[#1d1d1f] dark:bg-white"
              style={{
                WebkitMaskImage: `url(${profile.img})`,
                maskImage: `url(${profile.img})`,
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />
          </a>
        ))}
      </div>
    </LiquidGlassCard>
  );

  // Reusable Collaborate / Contact Card
  const renderContactCard = () => (
    <LiquidGlassCard
      interactive
      className="p-4 sm:p-5 h-[180px] flex items-center justify-between gap-4"
    >
      <div className="min-w-0 z-20">
        {/* <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 text-[11px] font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Open for Mobile Developer roles
        </span> */}
        <h3 className="text-[16px] font-semibold text-[#1d1d1f] dark:text-white mt-2">
          Start a project together
        </h3>
        <p className="text-xs text-[#6e6e73] dark:text-[#86868b] mt-0.5">
          Mobile Developer • Product Designer • UX Designer
        </p>
      </div>
      <LiquidGlassButton
        onClick={() => setIsDrawerOpen(true)}
        className="px-4 py-2 text-xs shrink-0 z-20"
      >
        <span>Message</span>
      </LiquidGlassButton>
    </LiquidGlassCard>
  );

  return (
    <section className="w-full pb-24 lg:pb-0">
      {/* ========================================================================
          1. RESPONSIVE NARROW VIEWPORT (< lg) — Full-screen Hero + Grouped Sections
         ======================================================================== */}
      <div className="relative z-10 flex flex-col gap-10 lg:hidden">
        {/* SECTION 1: HOME — Full 100dvh Viewport Hero (No next section peeking) */}
        <div
          id="mobile-home"
          className="min-h-[calc(100dvh-24px)] flex flex-col justify-between px-2 pt-3 pb-20"
        >
          {/* Top Bar: Circular Logo on Left + Liquid Glass Theme Switch on Right */}
          <div className="flex items-center justify-between w-full">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-black/10 dark:border-white/15 shadow-xs bg-white dark:bg-[#1a1a1c]">
              <Image
                src="/logo.png"
                alt="Bintang Logo"
                fill
                className="object-cover"
              />
            </div>

            {/* Standalone Liquid Glass Theme Switch (Dousan Miao Reference Style) */}
            <button
              onClick={(e) => toggleThemeWithTransition(e, "generic")}
              aria-label="Toggle color mode"
              className="relative flex items-center justify-between w-[88px] h-12 p-1.5 rounded-full bg-white/80 dark:bg-[#18181b]/90 backdrop-blur-2xl border border-black/[0.1] dark:border-white/[0.22] shadow-[0_6px_20px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.95)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.25)] cursor-pointer transition-colors"
            >
              <span className="flex w-9 h-9 items-center justify-center text-[#6e6e73] dark:text-neutral-500 z-10">
                <Sun className="w-4 h-4" />
              </span>
              <span className="flex w-9 h-9 items-center justify-center text-[#6e6e73] dark:text-neutral-500 z-10">
                <Moon className="w-4 h-4" />
              </span>
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={`absolute top-1.5 bottom-1.5 w-9 rounded-full bg-white dark:bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center justify-center ${currentTheme === "dark" ? "right-1.5" : "left-1.5"
                  }`}
              >
                {currentTheme === "dark" ? (
                  <Moon className="w-4 h-4 text-[#1d1d1f]" />
                ) : (
                  <Sun className="w-4 h-4 text-[#1d1d1f]" />
                )}
              </motion.div>
            </button>
          </div>

          {/* Center Hero Headline & CTAs */}
          <div className="my-auto py-8">
            <h1 className="text-[38px] sm:text-5xl font-bold tracking-[-0.035em] text-[#1d1d1f] dark:text-white leading-[1.08]">
              Hi, I&apos;m Bintang.
              <br />
              An iOS Developer building thoughtful experiences.
            </h1>

            <div className="flex flex-wrap items-center gap-2.5 mt-6 text-sm text-[#6e6e73] dark:text-[#86868b]">
              <span>Currently at</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-white text-[#1d1d1f] px-3.5 py-1.5 text-xs font-semibold shadow-xs border border-black/10">
                <span></span>
                <span>Apple Developer Academy Bali</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 mt-7">
              <LiquidGlassButton
                onClick={handleCopyEmail}
                className="px-6 py-3.5 text-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Copied email</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    <span>Copy email</span>
                  </>
                )}
              </LiquidGlassButton>

              <LiquidGlassButton
                onClick={() => setIsDrawerOpen(true)}
                className="px-6 py-3.5 text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Let&apos;s talk</span>
              </LiquidGlassButton>
            </div>
          </div>

          {/* Bottom spacer to balance vertical centering */}
          <div className="h-4" />
        </div>

        {/* SECTION 2: ABOUT ME / PROFILE (Directly displayed on mobile) */}
        <div id="mobile-about" className="flex flex-col gap-3.5 scroll-mt-6">
          <div className="px-1 mb-0.5">
            <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
              About
            </h2>
          </div>

          <LiquidGlassCard className="p-6 sm:p-8 flex flex-col items-start">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border border-black/10 dark:border-white/15 shadow-sm mb-6">
              <Image
                src="/portrait2.jpg"
                alt="Muhammad Bintang Al-Fath"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white leading-[1.2]">
              Bintang Al-Fath is an iOS Developer crafting thoughtful,
              human-centered mobile experiences.
            </h3>

            <div className="mt-5 space-y-4 text-[13.5px] sm:text-sm leading-relaxed text-[#515154] dark:text-[#a1a1a6]">
              <p>
                Based in Bali, Bintang is an iOS Developer
                currently at{" "}
                <span className="font-medium text-[#1d1d1f] dark:text-white">
                  Apple Developer Academy @ BINUS — Bali
                </span>{" "}
                and a Software Engineering student at Telkom University. He
                excels at turning everyday human problems into intuitive,
                tactile native iOS applications that feel thoughtful to use.
              </p>
              <p>
                He has designed and shipped multiple apps to the App Store and
                TestFlight—including{" "}
                <span className="font-medium text-[#1d1d1f] dark:text-white">
                  fraqments
                </span>{" "}
                (an interactive 3D spatial moments journal with Dynamic Island
                &amp; Live Activities),{" "}
                <span className="font-medium text-[#1d1d1f] dark:text-white">
                  Omawe
                </span>{" "}
                (a real-time group trip planner &amp; tracker),{" "}
                <span className="font-medium text-[#1d1d1f] dark:text-white">
                  Nomi
                </span>
                ,{" "}
                <span className="font-medium text-[#1d1d1f] dark:text-white">
                  BlooBook
                </span>
                , and{" "}
                <span className="font-medium text-[#1d1d1f] dark:text-white">
                  Newblie
                </span>
                .
              </p>
              <p>
                Previously, he contributed to product prototyping as an{" "}
                <span className="font-medium text-[#1d1d1f] dark:text-white">
                  R&amp;D Intern at Telkomsel
                </span>
                , guided campus developers as a{" "}
                <span className="font-medium text-[#1d1d1f] dark:text-white">
                  Mentor &amp; Curriculum Developer at GDGoC
                </span>
                , and mentored study groups using Flutter at{" "}
                <span className="font-medium text-[#1d1d1f] dark:text-white">
                  Mobile Innovation Lab
                </span>
                .
              </p>
            </div>

            {/* Skill & Craft Pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                " Native iOS & SwiftUI",
                "🚀 Delivering 0-to-1 apps",
                "✨ Spatial & WidgetKit craft",
                "🤝 Cross-functional collaboration",
                "📱 Flutter & Mobile R&D",
              ].map((skill) => (
                <LiquidGlassPill
                  key={skill}
                  className="px-3 py-1 text-[11px] font-medium"
                >
                  <span>{skill}</span>
                </LiquidGlassPill>
              ))}
            </div>
          </LiquidGlassCard>
        </div>

        {/* SECTION 3: PROJECTS (All 5 iOS Apps Grouped Together) */}
        <div id="mobile-projects" className="flex flex-col gap-3.5 scroll-mt-6">
          <div className="px-1 mb-0.5">
            <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
              Projects
            </h2>
          </div>

          {fraqmentsApp && (
            <AppBentoCard
              project={fraqmentsApp}
              onSelect={openModal}
              size="xl"
            />
          )}
          {kinarioApp && (
            <AppBentoCard
              project={kinarioApp}
              onSelect={openModal}
              size="large"
            />
          )}
          {omaweApp && (
            <AppBentoCard
              project={omaweApp}
              onSelect={openModal}
              size="large"
            />
          )}
          {nomiApp && (
            <AppBentoCard
              project={nomiApp}
              onSelect={openModal}
              size="large"
            />
          )}
          {bloobookApp && (
            <AppBentoCard
              project={bloobookApp}
              onSelect={openModal}
              size="small"
            />
          )}
          {newblieApp && (
            <AppBentoCard
              project={newblieApp}
              onSelect={openModal}
              size="small"
            />
          )}
        </div>

        {/* SECTION 4: EXPERIENCE (All Experiences Grouped Together) */}
        <div
          id="mobile-experience"
          className="flex flex-col gap-3.5 scroll-mt-6"
        >
          <div className="px-1 mb-0.5 flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
              Experience
            </h2>
            <span className="text-xs text-[#6e6e73] dark:text-[#86868b]">
              Tap any card for case study
            </span>
          </div>

          <ExperienceBentoCard
            img="/ada_bali.jpg"
            alt="Apple Developer Academy Bali"
            pillLabel="Learner"
            dotClass={adaExp.dotClass}
            title="Apple Developer Academy @ BINUS — Bali"
            subtitle="Learner • 6+ challenges & 4 App Store apps"
            heightClass="h-[300px]"
            hoverTextColor="group-hover:text-neutral-300"
            onClick={() => openExperienceModal(adaExp)}
          />
          <ExperienceBentoCard
            img="/telkomsel.jpg"
            alt="Telkomsel R&D"
            pillLabel="Hacker Enthusiast"
            dotClass={telkomselExp.dotClass}
            title="Telkomsel — Omnichannel Experience Design"
            subtitle="Enhanced 4 GraPARI Online features • 77.5 SUS score"
            heightClass="h-[300px]"
            hoverTextColor="group-hover:text-[#ff453a]"
            objectPosition={telkomselExp.bannerPosition}
            onClick={() => openExperienceModal(telkomselExp)}
          />
          <ExperienceBentoCard
            img="/gdgoc2.jpg"
            alt="Google Developer Group on Campus"
            pillLabel="Core Team"
            dotClass={gdgocExp.dotClass}
            title="Google Developer Group on Campus"
            subtitle="Mobile Dev Member & Curriculum Lead • Hackfest '24"
            heightClass="h-[280px]"
            hoverTextColor="group-hover:text-[#60a5fa]"
            onClick={() => openExperienceModal(gdgocExp)}
          />
          <ExperienceBentoCard
            img="/motion2.jpeg"
            alt="Mobile Innovation Lab"
            pillLabel="Lab Assistant"
            dotClass={motionExp.dotClass}
            title="Mobile Innovation Laboratory"
            subtitle="Cross-platform Flutter apps for university R&D"
            heightClass="h-[280px]"
            hoverTextColor="group-hover:text-[#f87171]"
            onClick={() => openExperienceModal(motionExp)}
          />
        </div>

        {/* SECTION 5: CONTACT */}
        <div id="mobile-contact" className="flex flex-col gap-3.5 scroll-mt-6">
          <div className="px-1 mb-0.5">
            <h2 className="text-xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
              Contact
            </h2>
          </div>

          {renderTimeInBaliCard()}
          {renderSocialsCard()}
          {renderContactCard()}
        </div>
      </div>

      {/* ========================================================================
          2. DESKTOP 3-COLUMN SYMMETRICAL BENTO GRID (lg and up)
         ======================================================================== */}
      <div
        id="desktop-home"
        className="relative z-10 hidden lg:grid lg:grid-cols-12 gap-3.5 items-start"
      >
        {/* ==================== LEFT COLUMN (4 cols) ==================== */}
        <div id="desktop-projects" className="lg:col-span-4 flex flex-col gap-3.5">
          {/* APP 1 (XL — 780px): fraqments (Largest Bento Card) */}
          {fraqmentsApp && (
            <AppBentoCard
              project={fraqmentsApp}
              onSelect={openModal}
              size="xl"
            />
          )}

          {/* APP 3 (LARGE — 520px): Nomi */}
          {nomiApp && (
            <AppBentoCard
              project={nomiApp}
              onSelect={openModal}
              size="large"
            />
          )}

          {/* EXPERIENCE 2 (250px): GDGoC */}
          <div id="desktop-experience">
            <ExperienceBentoCard
              img="/gdgoc2.jpg"
              alt="Google Developer Group on Campus"
              pillLabel="Core Team"
              dotClass={gdgocExp.dotClass}
              title="Google Developer Group on Campus"
              subtitle="Mobile Dev Member & Curriculum Lead • Hackfest '24"
              heightClass="h-[250px]"
              hoverTextColor="group-hover:text-[#60a5fa]"
              onClick={() => openExperienceModal(gdgocExp)}
            />
          </div>

          {/* EXPERIENCE 3 (250px): Mobile Innovation Lab */}
          <ExperienceBentoCard
            img="/motion2.jpeg"
            alt="Mobile Innovation Lab"
            pillLabel="Lab Assistant"
            dotClass={motionExp.dotClass}
            title="Mobile Innovation Laboratory"
            subtitle="Cross-platform Flutter apps for university R&D"
            heightClass="h-[250px]"
            hoverTextColor="group-hover:text-[#f87171]"
            onClick={() => openExperienceModal(motionExp)}
          />
        </div>

        {/* ==================== CENTER COLUMN (4 cols) ==================== */}
        <div className="lg:col-span-4 flex flex-col gap-3.5">
          {/* Apple Developer Academy Bali Photo Bento (290px — /ada_bali.jpg) */}
          <ExperienceBentoCard
            img="/ada_bali.jpg"
            alt="Apple Developer Academy Bali"
            pillLabel="Learner"
            dotClass={adaExp.dotClass}
            title="Apple Developer Academy @ BINUS — Bali"
            subtitle="Learner • 6+ challenges & 4 App Store apps"
            heightClass="h-[290px]"
            hoverTextColor="group-hover:text-neutral-300"
            onClick={() => openExperienceModal(adaExp)}
          />

          {/* Center Open Hero Bio (320px) */}
          <div className="h-[320px] py-2 px-1 flex flex-col justify-center items-start">
            <div className="mb-3.5">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-black/10 dark:border-white/15 shadow-xs bg-white dark:bg-[#1a1a1c]">
                <Image
                  src="/logo.png"
                  alt="Bintang Logo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="text-3xl sm:text-[36px] font-bold tracking-[-0.03em] text-[#1d1d1f] dark:text-white leading-[1.1]">
              Hi, I&apos;m Bintang.
              <br />
              An iOS Developer building thoughtful experiences.
            </h2>

            <div className="flex flex-wrap items-center gap-2 mt-4 text-xs text-[#6e6e73] dark:text-[#86868b]">
              <span>Currently at</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-white text-[#1d1d1f] px-3 py-1 font-semibold shadow-2xs border border-black/10">
                <span></span>
                <span>Apple Developer Academy Bali</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-5">
              <LiquidGlassButton onClick={handleCopyEmail}>
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Copied email</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    <span>Copy email</span>
                  </>
                )}
              </LiquidGlassButton>

              <LiquidGlassButton onClick={() => setIsDrawerOpen(true)}>
                <MessageSquare className="w-4 h-4" />
                <span>Let&apos;s talk</span>
              </LiquidGlassButton>
            </div>
          </div>

          {/* APP 3 (LARGE — 520px): Omawe */}
          {omaweApp && (
            <AppBentoCard
              project={omaweApp}
              onSelect={openModal}
              size="large"
            />
          )}

          {/* APP 4 (SMALL — 240px): BlooBook */}
          {bloobookApp && (
            <AppBentoCard
              project={bloobookApp}
              onSelect={openModal}
              size="small"
            />
          )}

          {/* APP 5 (SMALL — 240px): Newblie */}
          {newblieApp && (
            <AppBentoCard
              project={newblieApp}
              onSelect={openModal}
              size="small"
            />
          )}
        </div>

        {/* ==================== RIGHT COLUMN (4 cols) ==================== */}
        <div id="desktop-about" className="lg:col-span-4 flex flex-col gap-3.5">
          {/* Top 2 Equal Square Mini-Cards (185px): About Me + Dark/Light Mode */}
          <div className="grid grid-cols-2 gap-3.5">
            {/* Square 1: About me (Click opens full-screen About bottom-sheet modal on web) */}
            <LiquidGlassCard
              interactive
              onClick={() => setIsAboutOpen(true)}
              className="relative h-[185px] p-4 flex items-center justify-center cursor-pointer group select-none"
            >
              <span className="absolute top-4 left-4 text-xs font-medium text-[#6e6e73] dark:text-[#86868b] z-20">
                About me
              </span>
              <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden border border-black/10 dark:border-white/15 shadow-inner z-20 mt-3 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/portrait2.jpg"
                  alt="Bintang Al-Fath"
                  fill
                  className="object-cover"
                />
              </div>
            </LiquidGlassCard>

            {/* Square 2: Dark Mode / Light Mode Toggle (Switch centered dead-middle with 2-stage ripple transition) */}
            <div ref={bentoCardRef} className="relative h-[185px]">
              <LiquidGlassCard
                interactive
                className="relative h-full w-full p-4 flex items-center justify-center overflow-hidden"
              >
                {/* Stage 1: Expanding ripple inside the Bento switch card */}
                {bentoSpread?.active && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0.95 }}
                    animate={{ scale: 4.2, opacity: 1 }}
                    transition={{
                      duration: 0.32,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      left: bentoSpread.localX,
                      top: bentoSpread.localY,
                      width: 90,
                      height: 90,
                      marginLeft: -45,
                      marginTop: -45,
                    }}
                    className={`absolute rounded-full pointer-events-none z-10 shadow-2xl ${bentoSpread.targetTheme === "dark"
                      ? "bg-[#121212] border border-white/10"
                      : "bg-white border border-black/10"
                      }`}
                  />
                )}

                <span className="absolute top-4 left-4 text-xs font-medium text-[#6e6e73] dark:text-[#86868b] z-20">
                  {(bentoSpread ? bentoSpread.targetTheme : currentTheme) === "dark"
                    ? "Dark Mode"
                    : "Light Mode"}
                </span>
                <button
                  onClick={(e) => toggleThemeWithTransition(e, "bento")}
                  aria-label="Toggle color mode"
                  className="relative z-20 mt-3 flex items-center justify-between w-20 h-11 p-1.5 rounded-full bg-black/[0.06] dark:bg-[#1a1a1c] border border-black/[0.12] dark:border-white/[0.22] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] cursor-pointer transition-colors"
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
                    className={`absolute top-1 bottom-1 w-9 rounded-full bg-white dark:bg-white shadow-md flex items-center justify-center ${(bentoSpread ? bentoSpread.targetTheme : currentTheme) === "dark"
                      ? "right-1"
                      : "left-1"
                      }`}
                  >
                    {(bentoSpread ? bentoSpread.targetTheme : currentTheme) === "dark" ? (
                      <Moon className="w-4 h-4 text-[#1d1d1f]" />
                    ) : (
                      <Sun className="w-4 h-4 text-[#1d1d1f]" />
                    )}
                  </motion.div>
                </button>
              </LiquidGlassCard>
            </div>
          </div>

          {/* APP 2 (LARGE — 520px): Kinario (App Store - Video Showcase) */}
          {kinarioApp && (
            <AppBentoCard
              project={kinarioApp}
              onSelect={openModal}
              size="large"
            />
          )}

          {/* EXPERIENCE 1 (455px): Telkomsel R&D */}
          <ExperienceBentoCard
            img="/telkomsel.jpg"
            alt="Telkomsel R&D"
            pillLabel="Hacker Enthusiast"
            dotClass={telkomselExp.dotClass}
            title="Telkomsel — Omnichannel Experience Design"
            subtitle="Enhanced 4 GraPARI Online features • 77.5 SUS score"
            heightClass="h-[455px]"
            hoverTextColor="group-hover:text-[#ff453a]"
            objectPosition={telkomselExp.bannerPosition}
            onClick={() => openExperienceModal(telkomselExp)}
          />

          {/* LIVE ANALOG & DIGITAL TIME IN BALI CARD (240px) */}
          {renderTimeInBaliCard()}

          {/* Compact Socials & GitHub Card (180px) */}
          <div id="desktop-contact" className="flex flex-col gap-3.5">
            {renderSocialsCard()}
            {renderContactCard()}
          </div>
        </div>
      </div>

      {/* Minimal Bottom Centered Copyright (No Bento) */}
      <p className="relative z-10 mt-6 mb-2 text-center text-xs text-[#6e6e73] dark:text-[#86868b]">
        &copy; 2026 Bintang Al-Fath
      </p>

      {/* ========================================================================
          FLOATING BOTTOM LIQUID GLASS NAVBAR (Dousan Miao Reference Style)
         ======================================================================== */}
      <nav
        aria-label="Section navigation"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 lg:hidden"
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.8 }}
          className="relative flex items-center gap-1 rounded-full p-1.5 bg-white/85 dark:bg-[#18181b]/90 backdrop-blur-2xl backdrop-saturate-[190%] border border-black/[0.1] dark:border-white/[0.2] shadow-[0_10px_30px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.95)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.28)]"
        >
          {navSections.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <motion.button
                layout
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                aria-label={item.label}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 34,
                  mass: 0.8,
                }}
                className={`relative flex items-center justify-center rounded-full cursor-pointer select-none transition-colors duration-200 ${isActive
                  ? "px-3.5 py-2 text-xs font-semibold text-white dark:text-[#1d1d1f]"
                  : "p-2.5 text-[#6e6e73] dark:text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFloatingNavPill"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 34,
                      mass: 0.8,
                    }}
                    className="absolute inset-0 rounded-full bg-[#1d1d1f] dark:bg-white shadow-xs"
                  />
                )}
                <motion.span
                  layout="position"
                  className="relative z-10 flex items-center justify-center shrink-0"
                >
                  <Icon className="w-4 h-4" />
                </motion.span>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.span
                      key="label"
                      initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                      animate={{ width: "auto", opacity: 1, marginLeft: 6 }}
                      exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 34,
                        mass: 0.8,
                      }}
                      className="relative z-10 overflow-hidden whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </motion.div>
      </nav>

      {/* ========================================================================
          FULL-SCREEN ABOUT ME BOTTOM SHEET MODAL (Dousan Miao Web Reference Style)
         ======================================================================== */}
      <AnimatePresence>
        {isAboutOpen && (
          <motion.div
            initial={{ y: "100%", opacity: 0.9 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 34,
              mass: 0.9,
            }}
            className="fixed inset-0 z-[9999] bg-[#f5f5f7] dark:bg-[#0a0a0c] text-[#1d1d1f] dark:text-white overflow-y-auto"
          >
            {/* Top-Right Sticky Theme Toggle & Close Button (Exact Dousan Miao Layout) */}
            <div className="fixed top-6 right-6 sm:top-8 sm:right-10 z-50 flex items-center gap-3">
              {/* Liquid Glass Theme Switch */}
              <button
                onClick={(e) => toggleThemeWithTransition(e, "generic")}
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

              {/* Liquid Glass Circular Close Button */}
              <button
                onClick={() => setIsAboutOpen(false)}
                aria-label="Close About Me"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/85 dark:bg-[#18181b]/90 backdrop-blur-2xl border border-black/[0.1] dark:border-white/[0.22] shadow-[0_6px_20px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.95)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.25)] text-[#1d1d1f] dark:text-white hover:scale-105 active:scale-95 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Centered Single-Column Editorial Content */}
            <div className="max-w-[640px] mx-auto px-6 pt-20 pb-24">
              {/* Circular Portrait Avatar */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden border border-black/10 dark:border-white/15 shadow-sm mb-8">
                <Image
                  src="/portrait2.jpg"
                  alt="Muhammad Bintang Al-Fath"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Editorial Headline */}
              <h1 className="text-3xl sm:text-[38px] font-bold tracking-[-0.03em] text-[#1d1d1f] dark:text-white leading-[1.15]">
                Bintang Al-Fath is an iOS Developer crafting
                thoughtful, human-centered mobile experiences.
              </h1>

              {/* Editorial Narrative Paragraphs */}
              <div className="mt-7 space-y-5 text-[14.5px] leading-[1.7] text-[#515154] dark:text-[#a1a1a6]">
                <p>
                  Based in Bali, Bintang is an iOS Developer
                  currently at{" "}
                  <span className="font-medium text-[#1d1d1f] dark:text-white">
                    Apple Developer Academy @ BINUS — Bali
                  </span>{" "}
                  and a Software Engineering student at Telkom University. He
                  excels at navigating product ambiguity, collaborating across
                  design and engineering, and transforming everyday problems
                  into intuitive, tactile native iOS apps.
                </p>
                <p>
                  Currently, Bintang builds and ships native iOS products end to
                  end—including{" "}
                  <span className="font-medium text-[#1d1d1f] dark:text-white">
                    fraqments
                  </span>{" "}
                  (a 3D spatial moments journal featuring Dynamic Island &amp;
                  Live Activities),{" "}
                  <span className="font-medium text-[#1d1d1f] dark:text-white">
                    Omawe
                  </span>{" "}
                  (a shared group trip planner &amp; real-time location tracker
                  live on the App Store),{" "}
                  <span className="font-medium text-[#1d1d1f] dark:text-white">
                    Nomi
                  </span>
                  ,{" "}
                  <span className="font-medium text-[#1d1d1f] dark:text-white">
                    BlooBook
                  </span>
                  , and{" "}
                  <span className="font-medium text-[#1d1d1f] dark:text-white">
                    Newblie
                  </span>
                  .
                </p>
                <p>
                  His background includes a tenure as an{" "}
                  <span className="font-medium text-[#1d1d1f] dark:text-white">
                    R&amp;D Intern at Telkomsel
                  </span>{" "}
                  prototyping digital product initiatives, serving as a{" "}
                  <span className="font-medium text-[#1d1d1f] dark:text-white">
                    Mentor &amp; Curriculum Developer at GDGoC
                  </span>
                  , and mentoring study groups in Flutter mobile development at{" "}
                  <span className="font-medium text-[#1d1d1f] dark:text-white">
                    Mobile Innovation Lab
                  </span>
                  . Outside of shipping code, he enjoys sharing knowledge with
                  developer communities and is always open to a thoughtful
                  conversation.
                </p>
              </div>

              {/* Skill / Craft Pills */}
              <div className="flex flex-wrap gap-2.5 mt-7">
                {[
                  " Native iOS & SwiftUI",
                  "🚀 Delivering 0-to-1 apps",
                  "✨ Spatial & WidgetKit craft",
                  "🤝 Cross-functional collaboration",
                  "📱 Flutter & Mobile R&D",
                ].map((skill) => (
                  <LiquidGlassPill
                    key={skill}
                    className="px-3.5 py-1.5 text-xs font-medium"
                  >
                    <span>{skill}</span>
                  </LiquidGlassPill>
                ))}
              </div>

              {/* Copy Email Action Button */}
              <div className="mt-7">
                <LiquidGlassButton
                  onClick={handleCopyEmail}
                  className="px-6 py-3"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Copied email</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      <span>Copy email</span>
                    </>
                  )}
                </LiquidGlassButton>
              </div>

              {/* Experience Vertical Timeline (Dousan Miao Screenshot 2 Style) */}
              <div className="mt-14 space-y-6">
                {experiences.map((exp, idx, arr) => {
                  const expTheme = getExperienceTheme(exp.id);
                  return (
                    <div
                      key={exp.id}
                      onClick={() => {
                        setIsAboutOpen(false);
                        openExperienceModal(exp);
                      }}
                      className="group relative pl-6 cursor-pointer -mx-3 p-3 rounded-2xl hover:bg-black/[0.04] dark:hover:bg-white/[0.05] transition-all"
                    >
                      {/* Timeline Dot */}
                      <span className={`absolute left-3 top-4.5 w-2.5 h-2.5 rounded-full ${exp.dotClass} transition-transform group-hover:scale-125`} />
                      {/* Timeline Connecting Line */}
                      {idx !== arr.length - 1 && (
                        <span className="absolute left-[16.5px] top-7 -bottom-6 w-[1px] bg-black/[0.08] dark:bg-white/[0.1]" />
                      )}

                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className={`text-[15px] font-semibold text-[#1d1d1f] dark:text-white ${expTheme.hoverText} transition-colors flex items-center gap-1.5`}>
                          <span>{exp.company}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                        </h3>
                        <span className="text-xs text-[#6e6e73] dark:text-[#86868b] shrink-0 tabular-nums">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-[13px] font-medium text-[#1d1d1f]/80 dark:text-white/80 mt-0.5">
                        {exp.role} &bull; <span className="text-xs text-[#6e6e73] dark:text-[#86868b]">{exp.location}</span>
                      </p>
                      <p className="text-[13.5px] leading-relaxed text-[#515154] dark:text-[#a1a1a6] mt-2">
                        {exp.tagline}
                      </p>
                      <div className={`mt-2 text-xs font-semibold ${expTheme.text} opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1`}>
                        <span>View Experience Case Study</span>
                        <span>&rarr;</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Centered Monogram Logo */}
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
        )}
      </AnimatePresence>

      {/* ========================================================================
          FULL-SCREEN PROJECT CASE STUDY BOTTOM SHEET MODAL (Dousan Miao Reference Style)
         ======================================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            ref={projectSheetRef}
            initial={{ y: "100%", opacity: 0.9 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 34,
              mass: 0.9,
            }}
            className="fixed inset-0 z-[9999] bg-white dark:bg-[#0d0d0f] text-[#1d1d1f] dark:text-white overflow-y-auto"
          >
            {/* Top-Right Sticky Theme Toggle & Close Button */}
            <div className="fixed top-6 right-6 sm:top-8 sm:right-10 z-50 flex items-center gap-3">
              {/* Liquid Glass Theme Switch */}
              <button
                onClick={(e) => toggleThemeWithTransition(e, "generic")}
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

              {/* Liquid Glass Circular Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project sheet"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/85 dark:bg-[#18181b]/90 backdrop-blur-2xl border border-black/[0.1] dark:border-white/[0.22] shadow-[0_6px_20px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.95)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.25)] text-[#1d1d1f] dark:text-white hover:scale-105 active:scale-95 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom-Right Sticky Previous / Next Project Arrows (Dousan Miao Reference) */}
            <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-10 z-50 flex items-center gap-2.5">
              <button
                onClick={() => navigateProject(-1)}
                aria-label="Previous project"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/85 dark:bg-[#18181b]/90 backdrop-blur-2xl border border-black/[0.1] dark:border-white/[0.22] shadow-[0_6px_20px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.95)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.25)] text-[#1d1d1f] dark:text-white hover:scale-105 active:scale-95 transition cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigateProject(1)}
                aria-label="Next project"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/85 dark:bg-[#18181b]/90 backdrop-blur-2xl border border-black/[0.1] dark:border-white/[0.22] shadow-[0_6px_20px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.95)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.25)] text-[#1d1d1f] dark:text-white hover:scale-105 active:scale-95 transition cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {selectedProject.title.toLowerCase() === "fraqments" ? (
              /* ==================== FRAQMENTS FULL EDITORIAL CASE STUDY ==================== */
              <div className="max-w-[760px] mx-auto px-6 pt-20 pb-28">
                {/* 1. Title Row + Shipped Status Pill */}
                <div>
                  {/* HStack: App Icon + Title on left, App Store Pill on right */}
                  <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] sm:rounded-[20px] overflow-hidden border border-black/10 dark:border-white/15 shadow-md bg-white dark:bg-[#1a1a1c] shrink-0">
                        <Image
                          src={currentTheme === "dark" ? "/AppIcon/fraqments-dark.png" : "/AppIcon/fraqments-light.png"}
                          alt="fraqments App Icon"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h1 className="text-4xl sm:text-[50px] font-bold tracking-[-0.035em] text-[#1d1d1f] dark:text-white leading-[1.08]">
                        fraqments
                      </h1>
                    </div>

                    <LiquidGlassPill className="px-3.5 py-1.5 text-xs font-medium shrink-0">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                      <span>App Store</span>
                    </LiquidGlassPill>
                  </div>

                  {/* Subtitle underneath full-width */}
                  <p className="text-[14.5px] sm:text-[16px] text-[#6e6e73] dark:text-[#86868b] mt-3 sm:mt-3.5 leading-relaxed">
                    Spatial Memory &amp; Moments — Capturing and reliving
                    memories in an interactive 3D constellation
                  </p>
                </div>

                {/* 2. Hero Showcase Video Banner */}
                <div className="mt-10 rounded-[28px] overflow-hidden bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm">
                  <video
                    src="/fraqments_21x9.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto block mx-auto"
                  />
                </div>

                {/* 3. Intro Lead Paragraph & Action Pills */}
                <div className="mt-10">
                  <p className="text-[14.5px] sm:text-[15px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    I designed and engineered{" "}
                    <span className="font-medium text-[#1d1d1f] dark:text-white">
                      fraqments
                    </span>{" "}
                    — a native iOS spatial memory journal that transforms how
                    people capture, curate, and revisit everyday moments.
                    Instead of burying memories inside a flat chronological
                    camera roll, fraqments turns photos, short videos, voice
                    memos, and written notes into tactile fragments floating in
                    an interactive 3D sphere, complete with Live Activities and
                    collaborative Shared Rooms.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LiquidGlassButton className="px-4 py-2 text-xs">
                        <span>View on App Store</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </LiquidGlassButton>
                    </a>
                    <Link href="/privacy/fraqments" target="_blank">
                      <LiquidGlassButton className="px-4 py-2 text-xs">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Privacy Policy</span>
                      </LiquidGlassButton>
                    </Link>
                  </div>
                </div>

                {/* 4. Metadata Grid (Product, My role, Timeline, Skills, Architecture) */}
                <div className="my-10 py-7 border-y border-black/[0.08] dark:border-white/[0.1] space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
                    <div>
                      <span className="text-[#86868b] block mb-1">Product</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                        iOS App
                      </span>
                    </div>
                    <div>
                      <span className="text-[#86868b] block mb-1">My role</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                        Product Designer &amp; iOS Engineer
                      </span>
                    </div>
                    <div>
                      <span className="text-[#86868b] block mb-1">Timeline</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                        Sep 2026 - Oct 2026
                      </span>
                    </div>
                    <div>
                      <span className="text-[#86868b] block mb-1">Skills</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px] leading-relaxed block">
                        SwiftUI, SwiftData, 3D Spatial Math, ActivityKit &amp;
                        WidgetKit, Supabase Realtime
                      </span>
                    </div>
                  </div>

                  <div className="text-xs">
                    <span className="text-[#86868b] block mb-1">
                      Architecture &amp; Context
                    </span>
                    <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                      Apple Developer Academy @ BINUS — Bali &bull; Offline-first
                      SwiftData + Collaborative Supabase Cloud Rooms + Sign in
                      with Apple
                    </span>
                  </div>
                </div>

                {/* 5. Problem Section */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    Problem: Stopping the &lsquo;Camera Roll Graveyard&rsquo;
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    People capture thousands of photos, fleeting video clips,
                    voice recordings, and quick thoughts every year—yet almost
                    all of them end up buried in a linear grid between
                    screenshots, receipts, and duplicates. While traditional
                    journaling apps exist on the market, they demand long blocks
                    of text and manual formatting that feel like homework in the
                    middle of a real experience.
                  </p>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Recognizing this gap, I saw an opportunity to reimagine
                    memory-keeping from a static archive into a living,
                    multi-sensory spatial canvas that preserves how a moment
                    actually felt.
                  </p>
                </div>

                {/* 6. Research & Key Insights + Quote Banner */}
                <div className="mt-12 space-y-5">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    Research
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Exploring how people naturally document trips, hangouts, and
                    daily milestones on their iPhones revealed three core
                    friction points across existing tools:
                  </p>

                  <div className="space-y-4 pt-1">
                    <div>
                      <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        Memories are multi-sensory, not single-medium
                      </h3>
                      <p className="text-[14px] leading-[1.7] text-[#515154] dark:text-[#a1a1a6] mt-0.5">
                        A single memory at the beach is often a sunset photo, a
                        5-second video clip, the ambient sound of waves, and a
                        short quote—yet iOS splits them into separate Photos,
                        Voice Memos, and Notes apps.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        High capture friction breaks the moment
                      </h3>
                      <p className="text-[14px] leading-[1.7] text-[#515154] dark:text-[#a1a1a6] mt-0.5">
                        Stopping an ongoing hangout or trip to write a structured
                        diary entry pulls users out of the very moment they want
                        to remember.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        Shared experiences get lost in chat threads
                      </h3>
                      <p className="text-[14px] leading-[1.7] text-[#515154] dark:text-[#a1a1a6] mt-0.5">
                        When traveling or celebrating with friends, everyone
                        captures pieces of the same event on their own phones
                        with no unified, real-time space to collect them
                        together.
                      </p>
                    </div>
                  </div>

                  {/* Atmospheric Quote Banner (Dousan Miao Image 3 Style) */}
                  <div className="relative mt-8 h-[320px] sm:h-[380px] rounded-[28px] overflow-hidden flex items-center px-8 sm:px-14">
                    <Image
                      src="/fraqments_problem.jpg"
                      alt="Memory reflection quote background"
                      fill
                      className="object-cover brightness-[0.45] scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/30" />
                    <blockquote className="relative z-10 max-w-[520px] text-2xl sm:text-[32px] font-bold tracking-[-0.025em] text-white leading-[1.22]">
                      &ldquo;My camera roll has 15,000 photos, yet the moments
                      that actually mattered feel buried like handing over a
                      forgotten archive...&rdquo;
                    </blockquote>
                  </div>
                </div>

                {/* 7. Solution: 3D Memory Sphere + 2x2 Feature Pill Grid (Dousan Miao Image 4 Style) */}
                <div className="mt-14 space-y-5">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    Solution: Your Spatial Mind in 3D
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    fraqments replaces the endless flat scroll with an
                    interactive{" "}
                    <span className="font-medium text-[#1d1d1f] dark:text-white">
                      3D Memory Sphere
                    </span>
                    . Every photo, video clip, voice memo waveform, and note
                    floats as a spatial node arranged on a Fibonacci sphere with
                    real 3D perspective projection, rotational inertia physics,
                    and CoreMotion gyroscope tilt—so exploring your memories
                    feels tactile and alive.
                  </p>

                  {/* Phone Mockup Container */}
                  <div className="rounded-[28px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.05] dark:border-white/[0.07] p-6 sm:p-10 flex items-center justify-center">
                    <video
                      src="/fraqments.MOV"
                      poster="/fraqments-poster.png"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-150 block"
                    />
                  </div>

                  {/* 2x2 Feature Pill Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    <div className="rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.04] dark:border-white/[0.06] px-5 py-4.5 flex items-center gap-3.5">
                      <Sparkles className="w-4 h-4 text-[#1d1d1f] dark:text-white shrink-0" />
                      <span className="text-[13px] font-semibold text-[#1d1d1f] dark:text-white leading-snug">
                        Interactive 3D Fibonacci sphere with gyroscope parallax
                      </span>
                    </div>

                    <div className="rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.04] dark:border-white/[0.06] px-5 py-4.5 flex items-center gap-3.5">
                      <Mic className="w-4 h-4 text-[#1d1d1f] dark:text-white shrink-0" />
                      <span className="text-[13px] font-semibold text-[#1d1d1f] dark:text-white leading-snug">
                        Multi-modal capture: Photo, Video, Voice Memo &amp; Note
                      </span>
                    </div>

                    <div className="rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.04] dark:border-white/[0.06] px-5 py-4.5 flex items-center gap-3.5">
                      <Radio className="w-4 h-4 text-[#1d1d1f] dark:text-white shrink-0" />
                      <span className="text-[13px] font-semibold text-[#1d1d1f] dark:text-white leading-snug">
                        Live Activities &amp; Dynamic Island for active sessions
                      </span>
                    </div>

                    <div className="rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.04] dark:border-white/[0.06] px-5 py-4.5 flex items-center gap-3.5">
                      <Users className="w-4 h-4 text-[#1d1d1f] dark:text-white shrink-0" />
                      <span className="text-[13px] font-semibold text-[#1d1d1f] dark:text-white leading-snug">
                        Offline SwiftData + real-time Supabase Shared Rooms
                      </span>
                    </div>
                  </div>
                </div>

                {/* 8. Deep Dive 1: Instant Spatial Capture & Live Session Tracking (Dousan Miao Image 5 Style) */}
                <div className="mt-14 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <Smartphone className="w-4 h-4 text-[#1d1d1f] dark:text-white shrink-0" />
                    <h3 className="text-base sm:text-[17px] font-bold text-[#1d1d1f] dark:text-white">
                      Instant Spatial Capture &amp; Live Session Tracking
                    </h3>
                  </div>
                  <p className="text-[14px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Whether you want to snap a single thought or record an
                    entire outing, fraqments stays out of your way. Starting an{" "}
                    <span className="font-medium text-[#1d1d1f] dark:text-white">
                      Active Moment Session
                    </span>{" "}
                    pins a live counter and quick-capture triggers directly to
                    your iPhone&apos;s Dynamic Island and Lock Screen via
                    ActivityKit—allowing you to capture up to 15 fragments
                    (photos, 5-second videos, voice waveforms, or pastel notes)
                    continuously as the moment unfolds.
                  </p>

                  <div className="rounded-[28px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.05] dark:border-white/[0.07] p-6 sm:p-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-items-center">
                      <div className="w-[230px] sm:w-[260px] rounded-[24px] overflow-hidden shadow-xl border border-black/[0.06] dark:border-white/[0.08]">
                        <img
                          src="/fragments_2.png"
                          alt="Instant Spatial Capture"
                          className="w-full h-auto block"
                        />
                      </div>
                      <div className="w-[230px] sm:w-[260px] rounded-[24px] overflow-hidden shadow-xl border border-black/[0.06] dark:border-white/[0.08]">
                        <img
                          src="/fragments_5.png"
                          alt="Live Session Tracking"
                          className="w-full h-auto block"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-[11.5px] text-[#86868b] flex items-center gap-1.5">
                    <span>&#9432;</span>
                    <span>
                      Custom camera, voice memo recorder, and Live Activity
                      session tracking work seamlessly in one unified capture
                      sheet.
                    </span>
                  </p>
                </div>

                {/* 9. Deep Dive 2: Curated Moment Folders & Interactive Bento Grid */}
                <div className="mt-14 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-[#1d1d1f] dark:text-white shrink-0" />
                    <h3 className="text-base sm:text-[17px] font-bold text-[#1d1d1f] dark:text-white">
                      Curated Moment Folders, Widget Grid &amp; Shared Rooms
                    </h3>
                  </div>
                  <p className="text-[14px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Saved sessions become tactile{" "}
                    <span className="font-medium text-[#1d1d1f] dark:text-white">
                      Moment Folders
                    </span>{" "}
                    with customizable glassmorphic pockets and color palettes.
                    Opening a Moment reveals an interactive widget grid where
                    you can play audio waveforms inline, watch looping video
                    fragments, read notes, and drag to rearrange cards freely.
                    With{" "}
                    <span className="font-medium text-[#1d1d1f] dark:text-white">
                      Shared Rooms
                    </span>
                    , friends can join via a secure 6-character code using Sign
                    in with Apple to contribute fragments to the same space in
                    real time.
                  </p>

                  <div className="rounded-[28px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.05] dark:border-white/[0.07] p-6 sm:p-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-items-center">
                      <div className="w-[230px] sm:w-[260px] rounded-[24px] overflow-hidden shadow-xl border border-black/[0.06] dark:border-white/[0.08]">
                        <img
                          src="/fragments_3.png"
                          alt="Curated Moments Folders"
                          className="w-full h-auto block"
                        />
                      </div>
                      <div className="w-[230px] sm:w-[260px] rounded-[24px] overflow-hidden shadow-xl border border-black/[0.06] dark:border-white/[0.08]">
                        <img
                          src="/fragments_4.png"
                          alt="Interactive Widget Grid & Shared Rooms"
                          className="w-full h-auto block"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-[11.5px] text-[#86868b] flex items-center gap-1.5">
                    <span>&#9432;</span>
                    <span>
                      Personal Moments stay 100% offline on-device via
                      SwiftData, while Shared Rooms sync instantaneously via
                      Supabase Realtime.
                    </span>
                  </p>
                </div>

                {/* 10. Impact Section + Footer Monogram */}
                <div className="mt-14 pt-10 border-t border-black/[0.08] dark:border-white/[0.1] space-y-4">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    Impact: Privacy-First Spatial Craft
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Shipping fraqments brought together custom 3D spatial
                    rendering, native iOS system extensions (WidgetKit &amp;
                    ActivityKit), and a transparent dual-storage architecture.
                    Every personal memory remains strictly on-device with zero
                    third-party tracking, while collaborative rooms use
                    cryptographically random 6-character join codes and verified
                    Apple credentials.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LiquidGlassButton className="px-4 py-2 text-xs">
                        <span>View on App Store</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </LiquidGlassButton>
                    </a>
                    <Link href="/privacy/fraqments" target="_blank">
                      <LiquidGlassButton className="px-4 py-2 text-xs">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Privacy Policy</span>
                      </LiquidGlassButton>
                    </Link>
                  </div>
                </div>

                {/* Bottom Centered Logo Monogram */}
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
            ) : selectedProject.title.toLowerCase() === "kinario" ? (
              /* ==================== KINARIO FULL EDITORIAL CASE STUDY ==================== */
              <div className="max-w-[760px] mx-auto px-6 pt-20 pb-28">
                {/* 1. Title Row + Shipped Status Pill */}
                <div>
                  {/* HStack: App Icon + Title on left, App Store Pill on right */}
                  <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] sm:rounded-[20px] overflow-hidden border border-black/10 dark:border-white/15 shadow-md bg-white dark:bg-[#1a1a1c] shrink-0">
                        <Image
                          src="/kinario/kinario-app-icon.png"
                          alt="Kinario App Icon"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <img
                        src="/kinario/kinario-app-title.png"
                        alt="Kinario Title"
                        className="h-12 sm:h-18 w-auto object-contain block dark:brightness-110"
                      />
                    </div>

                    <LiquidGlassPill className="px-3.5 py-1.5 text-xs font-medium shrink-0">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                      <span>App Store</span>
                    </LiquidGlassPill>
                  </div>

                  {/* Subtitle underneath full-width */}
                  <p className="text-[14.5px] sm:text-[16px] text-[#6e6e73] dark:text-[#86868b] mt-3 sm:mt-3.5 leading-relaxed">
                    Scenario-Based Puzzle Game — Teaching empathetic child emotional regulation through interactive storytelling
                  </p>
                </div>

                <div className="mt-10 rounded-[28px] overflow-hidden bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm">
                  <img
                    src="/kinario/kinario-poster-promotional-16-9.png"
                    alt="kinario-poster"
                    className="w-full h-full object-contain pointer-events-none"
                  />
                </div>

                {/* 3. Intro Lead Paragraph & Action Pills */}
                <div className="mt-10">
                  <p className="text-[14.5px] sm:text-[15px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Developed at{" "}
                    <span className="font-medium text-[#1d1d1f] dark:text-white">
                      Apple Developer Academy @ BINUS — Bali
                    </span>
                    , <span className="font-medium text-[#1d1d1f] dark:text-white">Kinario</span> is a scenario-based puzzle game designed to prepare first-time volunteers, educators, and caregivers to respond empathetically to children experiencing overwhelming emotions. Grounded in neurodevelopmental research from <em>The Whole-Brain Child</em>, players step into the Kinario Foundation to guide two distinct children—Rhodey and Jojo—through everyday emotional hurdles across School, Playground, and Swimming Pool environments.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LiquidGlassButton className="px-4 py-2 text-xs">
                        <span>View on App Store</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </LiquidGlassButton>
                    </a>
                  </div>
                </div>

                {/* 4. Metadata Grid */}
                <div className="my-10 py-7 border-y border-black/[0.08] dark:border-white/[0.1] space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
                    <div>
                      <span className="text-[#86868b] block mb-1">Product</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                        iPadOS &amp; iOS Game
                      </span>
                    </div>
                    <div>
                      <span className="text-[#86868b] block mb-1">My role</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                        iOS Engineer &amp; Game Designer
                      </span>
                    </div>
                    <div>
                      <span className="text-[#86868b] block mb-1">Timeline</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                        Aug 2026 – Sep 2026
                      </span>
                    </div>
                    <div>
                      <span className="text-[#86868b] block mb-1">Skills</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px] leading-relaxed block">
                        SwiftUI, GameKit, AVFoundation, Drag &amp; Drop (CoreTransferable), Combine
                      </span>
                    </div>
                  </div>

                  <div className="text-xs">
                    <span className="text-[#86868b] block mb-1">
                      Scientific Framework &amp; Platform Support
                    </span>
                    <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                      Grounded in <em>The Whole-Brain Child</em> by Daniel J. Siegel, M.D. &amp; Tina Payne Bryson, Ph.D. &bull; Apple Vision Pro Compatible
                    </span>
                  </div>
                </div>

                {/* 5. Problem Section */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    The Challenge: First-Time Volunteers Facing Emotional Meltdowns
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    The idea for Kinario was born from our team&apos;s firsthand experience working alongside first-time volunteers in child-focused communities. We noticed a consistent pattern: passionate individuals stepped into mentorship and volunteering roles they cared deeply about, but without the foundational child-psychology knowledge to feel prepared.
                  </p>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    When children experienced sudden tantrums, fear of swimming pools, or conflicts over playground equipment, volunteers instinctively responded with authoritarian commands (&ldquo;stop crying&rdquo;, &ldquo;give it back right now&rdquo;) or premature logic. Rather than calming the child, these reactions trigger the primitive &ldquo;downstairs brain&rdquo; (the amygdala&apos;s fight-or-flight response), escalating emotional meltdowns into complete standoffs.
                  </p>
                </div>

                {/* 6. Whole-Brain Child Framework */}
                <div className="mt-12 space-y-5">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    The Whole-Brain Child Methodology
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Instead of presenting dry clinical literature, Kinario transforms the proven child-psychology strategies formulated by neuropsychiatrist Dr. Daniel J. Siegel and pediatric specialist Dr. Tina Payne Bryson into interactive game choices:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        1. Connect and Redirect
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6] mt-1">
                        When a child is intensely upset, logic won&apos;t work until their emotional right brain feels heard. Validate their emotions with soothing gestures and active listening before introducing solutions.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        2. Name it to Tame it
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6] mt-1">
                        Help the child narrate what happened and label what they feel. Converting overwhelming visceral emotions into story words recruits the left brain, restoring a sense of safety and control.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        3. Engage, Don&apos;t Enrage
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6] mt-1">
                        In high-stress moments, invite the child to pause, reflect, and choose among alternatives rather than barking orders. Reframe commands into collaborative questions that engage the upstairs executive brain.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        4. Connect through Conflict
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6] mt-1">
                        Peer disagreements are not behavioral failures to be punished, but valuable opportunities for social empathy. Practicing mutual listening, amends, and genuine forgiveness models healthy relationships.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 7. Characters & 3 Chapters */}
                <div className="mt-14 space-y-5">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    The World of Kinario: Rhodey, Jojo &amp; 3 Story Chapters
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Players spend their shift guiding two distinct, relatable children at the Kinario Foundation:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                        Character Profile
                      </span>
                      <h3 className="text-[16px] font-semibold text-[#1d1d1f] dark:text-white">
                        Rhodey
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6] mt-1">
                        Expressive, energetic, and imaginative. He loves drawing but experiences sudden emotional overwhelm when his artwork tears, when his surroundings are too loud, or when he feels misunderstood.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-1">
                        Character Profile
                      </span>
                      <h3 className="text-[16px] font-semibold text-[#1d1d1f] dark:text-white">
                        Jojo
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6] mt-1">
                        Cautious, sensitive, and protective of his space. He becomes defensive during peer conflicts, has deep anxieties around swimming pools and high slides, and requires gentle reassurance.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] space-y-4">
                    <div className="rounded-[18px] overflow-hidden border border-black/10 dark:border-white/10 shadow-sm bg-black/5">
                      <img
                        src="/kinario/kinario-levels.png"
                        alt="Kinario Multi-Chapter Level Map"
                        className="w-full h-auto object-contain block"
                      />
                    </div>
                    <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                      Multi-Chapter Progressive Scenarios
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-white dark:bg-[#1f1f23] border border-black/[0.05] dark:border-white/[0.05]">
                        <span className="font-bold text-[#1d1d1f] dark:text-white block text-[13px]">
                          Story 1: School
                        </span>
                        <span className="text-[#6e6e73] dark:text-[#86868b] mt-1 block">
                          Art classroom dynamics, sensory overload, and handling frustration over damaged drawings.
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-white dark:bg-[#1f1f23] border border-black/[0.05] dark:border-white/[0.05]">
                        <span className="font-bold text-[#1d1d1f] dark:text-white block text-[13px]">
                          Story 2: Playground
                        </span>
                        <span className="text-[#6e6e73] dark:text-[#86868b] mt-1 block">
                          Slide territorialism, physical pushing incidents, and mediating peer apologies with care.
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-white dark:bg-[#1f1f23] border border-black/[0.05] dark:border-white/[0.05]">
                        <span className="font-bold text-[#1d1d1f] dark:text-white block text-[13px]">
                          Story 3: Swimming Pool
                        </span>
                        <span className="text-[#6e6e73] dark:text-[#86868b] mt-1 block">
                          Water phobia, overcoming fear of heights, and learning to share floaties generously.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 8. Gameplay Mechanics & Engineering Highlights */}
                <div className="mt-14 space-y-5">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    Key Gameplay Mechanics &amp; Engineering
                  </h2>

                  {/* Scenario Puzzle Overview Banner */}
                  <div className="rounded-[28px] overflow-hidden bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm">
                    <img
                      src="/kinario/kinario-scenario-based-puzzle-game.png"
                      alt="Kinario Scenario-Based Puzzle Gameplay Overview"
                      className="w-full h-auto object-contain block"
                    />
                  </div>

                  {/* 2. Hero Showcase Video Banner */}
                  <div className="mt-10 rounded-[28px] overflow-hidden bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm">
                    <video
                      src="/kinario.MOV"
                      poster="/kinario-poster.png"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full max-h-[520px] object-contain mx-auto"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <h3 className="text-[15px] font-semibold text-[#1d1d1f] dark:text-white">
                        Tactile Drag &amp; Drop Frames
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6] mt-1.5">
                        Leveraging SwiftUI and CoreTransferable, players drag empathetic actions, toys, dialogue, and gestures directly onto interactive scene drop zones. Characters respond with dynamic facial illustrations and voice overs.
                      </p>
                    </div>

                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <h3 className="text-[15px] font-semibold text-[#1d1d1f] dark:text-white">
                        Real-Time Empathy &amp; Attempt Meter
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6] mt-1.5">
                        A responsive gauge tracks player decisions. Reaching the empathetic outcome on the first try awards 3 stars. Sub-optimal attempts reduce the meter, unlocking the in-game Hint drawer before requiring a cool-off break.
                      </p>
                    </div>

                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <h3 className="text-[15px] font-semibold text-[#1d1d1f] dark:text-white">
                        &ldquo;Save Jojo&rdquo; Arcade Rescue Mini-Game
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6] mt-1.5">
                        Integrated before the water chapter, players test quick reflexes: aim and throw the lifebuoy within 3 attempts, then rapidly tap to maintain balance on the rope tension bar and pull Jojo safely out of the pool.
                      </p>
                    </div>

                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <h3 className="text-[15px] font-semibold text-[#1d1d1f] dark:text-white">
                        Apple GameKit &amp; In-App Guidebook
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6] mt-1.5">
                        Integrated GameKit supporting achievements, Game Mode, and Control Center dashboard overlay. Includes an illustrated reference guidebook with bilingual English/Indonesian localization and Dynamic Text scaling.
                      </p>
                    </div>
                  </div>

                  {/* 3-Step How to Play Guidebook Cards */}
                  <div className="mt-8 space-y-4">
                    <div>
                      <h3 className="text-[18px] font-bold text-[#1d1d1f] dark:text-white tracking-tight">
                        How to Play — Core Interaction Flow
                      </h3>
                      <p className="text-[13.5px] text-[#6e6e73] dark:text-[#86868b] mt-0.5">
                        3-step tactile walkthrough introducing players to empathetic problem-solving
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                      {/* Step 1 */}
                      <div className="flex flex-col gap-3 p-4 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                        <div className="rounded-[16px] overflow-hidden border border-black/10 dark:border-white/10 shadow-xs bg-black/5 aspect-[2688/1242] relative flex items-center justify-center">
                          <img
                            src="/kinario/kinario-how-to-play-1.png"
                            alt="Kinario Step 1 - Choose Action"
                            className="w-full h-full object-contain block"
                          />
                        </div>
                        <div>
                          <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                            Step 1 &bull; Observe
                          </span>
                          <h4 className="text-[14px] font-semibold text-[#1d1d1f] dark:text-white mt-0.5">
                            Read the Situation
                          </h4>
                          <p className="text-[12px] text-[#6e6e73] dark:text-[#86868b] mt-1 leading-relaxed">
                            Observe the child&apos;s distress and emotional cues in the room before making any moves.
                          </p>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="flex flex-col gap-3 p-4 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                        <div className="rounded-[16px] overflow-hidden border border-black/10 dark:border-white/10 shadow-xs bg-black/5 aspect-[2688/1242] relative flex items-center justify-center">
                          <img
                            src="/kinario/kinario-how-to-play-2.png"
                            alt="Kinario Step 2 - Drag & Drop Response"
                            className="w-full h-full object-contain block"
                          />
                        </div>
                        <div>
                          <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                            Step 2 &bull; Respond
                          </span>
                          <h4 className="text-[14px] font-semibold text-[#1d1d1f] dark:text-white mt-0.5">
                            Drag &amp; Drop Tokens
                          </h4>
                          <p className="text-[12px] text-[#6e6e73] dark:text-[#86868b] mt-1 leading-relaxed">
                            Drag empathetic actions, calming toys, or listening phrases into the active target zones.
                          </p>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="flex flex-col gap-3 p-4 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                        <div className="rounded-[16px] overflow-hidden border border-black/10 dark:border-white/10 shadow-xs bg-black/5 aspect-[2688/1242] relative flex items-center justify-center">
                          <img
                            src="/kinario/kinario-how-to-play-3.png"
                            alt="Kinario Step 3 - Reflect & Resolve"
                            className="w-full h-full object-contain block"
                          />
                        </div>
                        <div>
                          <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                            Step 3 &bull; Resolve
                          </span>
                          <h4 className="text-[14px] font-semibold text-[#1d1d1f] dark:text-white mt-0.5">
                            Reflect &amp; Star Rating
                          </h4>
                          <p className="text-[12px] text-[#6e6e73] dark:text-[#86868b] mt-1 leading-relaxed">
                            Watch the child de-escalate and review actionable Whole-Brain Child parenting tips.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 9. Visual Showcase: All 10 Uploaded Screenshots */}
                <div className="mt-14 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                      <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                        Interface &amp; Gameplay Gallery
                      </h2>
                      <p className="text-[14.5px] text-[#6e6e73] dark:text-[#86868b] mt-1">
                        Explore all 10 in-game screens demonstrating Kinario&apos;s story puzzles, rescue mini-game, guidebook, and result evaluation.
                      </p>
                    </div>
                    <span className="text-xs text-[#86868b] shrink-0 hidden sm:inline">
                      Swipe or use arrows &rarr;
                    </span>
                  </div>

                  <div className="rounded-[28px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] p-5 sm:p-7">
                    <ProjectGallery items={kinarioScreenshots} color="emerald" layout="landscape" />
                  </div>
                </div>

                {/* 10. Outro Action Pills */}
                <div className="mt-14 space-y-4">
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Kinario proves that serious social-emotional education can be delivered as an engaging, tactile mobile game. By placing users in the shoes of a compassionate volunteer, players develop real-world empathy instincts that translate outside the screen.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LiquidGlassButton className="px-4 py-2 text-xs">
                        <span>View on App Store</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </LiquidGlassButton>
                    </a>
                  </div>
                </div>

                {/* Bottom Centered Logo Monogram */}
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
            ) : selectedProject.title.toLowerCase() === "omawe" ? (
              /* ==================== OMAWE FULL EDITORIAL CASE STUDY ==================== */
              <div className="max-w-[760px] mx-auto px-6 pt-20 pb-28">
                {/* 1. Title Row + Shipped Status Pill */}
                <div>
                  {/* HStack: App Icon + Title on left, App Store Pill on right */}
                  <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] sm:rounded-[20px] overflow-hidden border border-black/10 dark:border-white/15 shadow-md bg-white dark:bg-[#1a1a1c] shrink-0">
                        <Image
                          src="/AppIcon/omawe.png"
                          alt="Omawe App Icon"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h1 className="text-4xl sm:text-[50px] font-bold tracking-[-0.035em] text-[#1d1d1f] dark:text-white leading-[1.08]">
                        Omawe
                      </h1>
                    </div>

                    <LiquidGlassPill className="px-3.5 py-1.5 text-xs font-medium shrink-0">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                      <span>App Store</span>
                    </LiquidGlassPill>
                  </div>

                  {/* Subtitle underneath full-width */}
                  <p className="text-[14.5px] sm:text-[16px] text-[#6e6e73] dark:text-[#86868b] mt-3 sm:mt-3.5 leading-relaxed">
                    Live Group Trip Awareness — Real-time progress, glanceable Lock Screen awareness, and collective travel memories
                  </p>
                </div>

                {/* 2. Hero Showcase Banner */}
                <div className="mt-10 rounded-[28px] overflow-hidden bg-gradient-to-b from-[#0a0a0c] via-[#052d26]/40 to-[#08564d]/30 border border-emerald-500/20 shadow-md p-6 sm:p-10 flex items-center justify-center">
                  <div className="max-w-[280px] sm:max-w-[320px] w-full">
                    <img
                      src="/omawe_8.png"
                      alt="Omawe Live Navigation & Convergence Interface"
                      className="w-full h-auto object-contain rounded-[24px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                </div>

                {/* 3. Intro Lead Paragraph & Action Pills */}
                <div className="mt-10">
                  <p className="text-[14.5px] sm:text-[15px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    I co-founded, designed the distributed system architecture, and led both the Go backend and core iOS engineering for{" "}
                    <span className="font-medium text-[#1d1d1f] dark:text-white">
                      Omawe
                    </span>{" "}
                    — an award-winning native iOS application built at the Apple Developer Academy Bali that transforms group travel coordination. Instead of drivers frantically texting &ldquo;Where are you?&rdquo; or relying on the universal &ldquo;I&apos;m 5 minutes away&rdquo; fallacy, Omawe delivers ambient, glanceable Lock Screen awareness in under two seconds via ActivityKit and a high-throughput Go and PostGIS cloud engine.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LiquidGlassButton className="px-4 py-2 text-xs">
                        <span>View on App Store</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </LiquidGlassButton>
                    </a>
                    <a
                      href="https://omaweapp.my.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LiquidGlassButton className="px-4 py-2 text-xs">
                        <Globe className="w-3.5 h-3.5" />
                        <span>Visit Website</span>
                      </LiquidGlassButton>
                    </a>
                  </div>
                </div>

                {/* 4. Metadata Grid (Product, My role, Timeline, Skills, Architecture) */}
                <div className="my-10 py-7 border-y border-black/[0.08] dark:border-white/[0.1] space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
                    <div>
                      <span className="text-[#86868b] block mb-1">Product</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                        iOS App
                      </span>
                    </div>
                    <div>
                      <span className="text-[#86868b] block mb-1">My role</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                        iOS Engineer &amp; Backend Architect
                      </span>
                    </div>
                    <div>
                      <span className="text-[#86868b] block mb-1">Timeline</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                        Jul 2026 - Aug 2026
                      </span>
                    </div>
                    <div>
                      <span className="text-[#86868b] block mb-1">Skills</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px] leading-relaxed block">
                        SwiftUI, ActivityKit, CoreLocation, MapKit, Go (Gin), PostgreSQL 17 + PostGIS, Redis 8
                      </span>
                    </div>
                  </div>

                  <div className="text-xs">
                    <span className="text-[#86868b] block mb-1">
                      Architecture &amp; Context
                    </span>
                    <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                      Apple Developer Academy @ BINUS — Bali &bull; Clean Architecture Go REST API + PostGIS spatial indexing + ActivityKit Dynamic Island road progress + Douglas-Peucker route compression + Offline SwiftData sync
                    </span>
                  </div>
                </div>

                {/* 5. Problem Section */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    Problem: The &lsquo;Where Are You?&rsquo; Chaos &amp; The &lsquo;5 Minutes Away&rsquo; Lie
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Coordinating a group road trip, weekend getaway, or convoy meetup with more than two people is traditionally a high-friction, stressful experience. Drivers constantly toggle back and forth between navigation apps and group chat threads, texting &ldquo;Where are you?&rdquo;, &ldquo;Did you get caught by the red light?&rdquo;, or &ldquo;Have you actually left yet?&rdquo;
                  </p>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Meanwhile, participants notoriously self-report inaccurate estimates—the universal &ldquo;I&apos;m 5 minutes away&rdquo; lie—when in reality they haven&apos;t even walked out of their front door. The cost compounds as group size increases: continuous driver distraction, dangerous phone handling in traffic, fragmented arrival schedules, and anxious organizers left stranded at the meetup destination wondering whether to order food, wait, or leave.
                  </p>

                  {/* Problem Illustration Showcase Banner */}

                  <div className="mt-6 rounded-[28px] overflow-hidden bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] shadow-sm p-4 sm:p-6 flex items-center justify-center">
                    <div className="w-[230px] sm:w-[260px] rounded-[22px] overflow-hidden shadow-xl border border-black/[0.06] dark:border-white/[0.08]">

                      <img
                        src="/omawe-ss-1-end-the-endless-where-are-you.png"
                        alt="End the endless Where are you? illustration"
                        className="w-full h-auto object-contain rounded-[22px] drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_16px_32px_rgba(0,0,0,0.5)]"
                      />
                    </div>
                  </div>
                </div>

                {/* 6. Research & Field Insights */}
                <div className="mt-12 space-y-5">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    Field Research &amp; Insights
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Conducting real-world convoy testing across Bali&apos;s congested roads and winding mountain routes (Denpasar, Sanur, Ubud, and Kintamani) revealed three fundamental architectural principles that existing consumer apps completely overlook:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        Glanceable &lt; 2s, Never App-Bound
                      </h3>
                      <p className="text-[12.5px] leading-[1.65] text-[#6e6e73] dark:text-[#86868b] mt-2">
                        Drivers cannot unlock their phone and decode multiple map pins while driving. Status must be absorbed at a glance directly from the Lock Screen and Dynamic Island.
                      </p>
                    </div>

                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                        <Navigation className="w-4 h-4" />
                      </div>
                      <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        Journey Progress &gt; Distance
                      </h3>
                      <p className="text-[12.5px] leading-[1.65] text-[#6e6e73] dark:text-[#86868b] mt-2">
                        Knowing a friend is &ldquo;10 km away&rdquo; is deceptive if their total trip was 60 km (83% done), while someone &ldquo;5 km away&rdquo; just left (0% done). Progress requires a normalized route baseline.
                      </p>
                    </div>

                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        Strict Time-Boxed Consent
                      </h3>
                      <p className="text-[12.5px] leading-[1.65] text-[#6e6e73] dark:text-[#86868b] mt-2">
                        Users reject invasive 24/7 friend tracking (Life360 stigma). Location sharing must be strictly time-boxed to the active trip duration, with automated teardown on arrival.
                      </p>
                    </div>
                  </div>

                  {/* Pull Quote Card */}
                  <div className="mt-8 p-6 rounded-[24px] bg-gradient-to-br from-emerald-500/[0.08] to-teal-500/[0.03] border border-emerald-500/20">
                    <p className="text-[15px] sm:text-[16px] italic leading-[1.7] text-[#1d1d1f] dark:text-[#e5e5e7]">
                      &ldquo;Group road trips should feel like an exciting adventure with close friends, not an administrative ordeal of constantly polling and texting everyone&apos;s whereabouts.&rdquo;
                    </p>
                  </div>
                </div>

                {/* 7. The Solution: Live Activities & Seamless Convergence */}
                <div className="mt-12 space-y-4">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    The Solution: Glanceable Convergence
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Omawe replaces chaotic texting with ambient, glanceable computing. By integrating Apple&apos;s ActivityKit into a streamlined convoy interface, every traveler stays synchronized effortlessly:
                  </p>
                  <ul className="space-y-3 pt-2 text-[14px] text-[#515154] dark:text-[#a1a1a6]">
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-500 font-bold shrink-0 mt-0.5">&bull;</span>
                      <span>
                        <strong className="text-[#1d1d1f] dark:text-white">Lock Screen &amp; Dynamic Island Live Activity:</strong> A real-time horizontal convergence line displays individualized member avatar pins advancing toward the checkered destination flag. Drivers check progress at a glance without unlocking.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-500 font-bold shrink-0 mt-0.5">&bull;</span>
                      <span>
                        <strong className="text-[#1d1d1f] dark:text-white">One-Tap Delay &amp; Hazard Reporting:</strong> Drivers can broadcast one-tap status updates (&ldquo;Gonna be late&rdquo;, &ldquo;Stuck in traffic&rdquo;, &ldquo;Need help&rdquo;) with zero typing, instantly alerting all convoy members via ambient banners.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-500 font-bold shrink-0 mt-0.5">&bull;</span>
                      <span>
                        <strong className="text-[#1d1d1f] dark:text-white">Wax-Sealed Digital Invitations:</strong> Organizers generate elegant invitation cards with 6-character short codes and Universal Links. Friends join in seconds without mandatory account registration hurdles.
                      </span>
                    </li>
                  </ul>

                  {/* 2-Column Showcase: Trip Invitation & Crew Management */}
                  <div className="mt-6 rounded-[28px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.05] dark:border-white/[0.07] p-6 sm:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-items-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-[230px] sm:w-[260px] rounded-[22px] overflow-hidden shadow-xl border border-black/[0.06] dark:border-white/[0.08]">
                          <img
                            src="/omawe-ss-3-trip-invitation.png"
                            alt="Gather Your Crew - Trip Invitation"
                            className="w-full h-auto block"
                          />
                        </div>
                        <span className="text-xs font-semibold text-[#1d1d1f] dark:text-white">
                          Gather Your Crew &bull; Tap-to-Invite
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-[230px] sm:w-[260px] rounded-[22px] overflow-hidden shadow-xl border border-black/[0.06] dark:border-white/[0.08]">
                          <img
                            src="/omawe-ss-7-track-crew-seamless.png"
                            alt="Manage Your Crew - Seamless Roster"
                            className="w-full h-auto block"
                          />
                        </div>
                        <span className="text-xs font-semibold text-[#1d1d1f] dark:text-white">
                          Track Crew Seamlessly in One Place
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 8. Technical Architecture & Engineering Deep-Dive */}
                <div className="mt-14 space-y-5">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    Technical Architecture &amp; Engineering
                  </h2>
                  <p className="text-[14.5px] text-[#6e6e73] dark:text-[#86868b]">
                    Engineered from first principles with a high-concurrency Go REST API, PostGIS spatial indexing, and resilient iOS client architecture.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <h3 className="text-[15px] font-semibold text-[#1d1d1f] dark:text-white">
                        Go 1.24 &amp; PostGIS Backend
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6] mt-1.5">
                        Clean Architecture REST API built with Gin, pgx/v5 connection pool, and sqlc for 100% type-safe queries. Uses PostgreSQL 17 with PostGIS extensions for spatial coordinates, radius computation, and geofencing.
                      </p>
                    </div>

                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <h3 className="text-[15px] font-semibold text-[#1d1d1f] dark:text-white">
                        Redis 8 Ephemeral Caching
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6] mt-1.5">
                        Ingests and caches latest participant coordinates with sub-millisecond read latency. Offloads high-frequency polling traffic from PostgreSQL, ensuring instant multi-device synchronization across active convoys.
                      </p>
                    </div>

                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <h3 className="text-[15px] font-semibold text-[#1d1d1f] dark:text-white">
                        ActivityKit Progress Smoothing
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6] mt-1.5">
                        Engineered mathematical normalization: immutable road-distance baselines (1 - remaining_road / baseline_road) with directional hysteresis, preventing erratic jumping when toggling between MapKit and straight-line fallbacks.
                      </p>
                    </div>

                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <h3 className="text-[15px] font-semibold text-[#1d1d1f] dark:text-white">
                        Douglas-Peucker &amp; SwiftData Offline Sync
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6] mt-1.5">
                        CoreLocation batches GPS fixes locally via SwiftData during cellular blindspots. On trip completion, raw GPS points are simplified into compact polylines using the Douglas-Peucker algorithm, reducing database payload by 90%.
                      </p>
                    </div>
                  </div>

                  {/* Deep Dive 1: Glanceable ActivityKit Lock Screen & Dynamic Island */}
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <Smartphone className="w-4 h-4 text-[#1d1d1f] dark:text-white shrink-0" />
                      <h3 className="text-base sm:text-[17px] font-bold text-[#1d1d1f] dark:text-white">
                        Live Activity: Glance &amp; Go Without Unlocking
                      </h3>
                    </div>
                    <p className="text-[14px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                      Powered by ActivityKit and WidgetKit, Omawe renders real-time convoy convergence onto the Lock Screen and Dynamic Island. Drivers absorb individual member ETAs and distance markers in under two seconds, while custom fluid sliding bars allow instant status updates.
                    </p>

                    <div className="rounded-[28px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.05] dark:border-white/[0.07] p-6 sm:p-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-items-center">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-[230px] sm:w-[260px] rounded-[22px] overflow-hidden shadow-xl border border-black/[0.06] dark:border-white/[0.08]">
                            <img
                              src="/omawe-ss-4-live-activity-lockscreen.png"
                              alt="Lock Screen Live Activity"
                              className="w-full h-auto block"
                            />
                          </div>
                          <span className="text-xs font-semibold text-[#1d1d1f] dark:text-white">
                            Lock Screen &bull; Glance &amp; Go Status
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-[230px] sm:w-[260px] rounded-[22px] overflow-hidden shadow-xl border border-black/[0.06] dark:border-white/[0.08]">
                            <img
                              src="/omawe-ss-5-live-activity-dynamic-island.png"
                              alt="Dynamic Island & Fluid Control Bar"
                              className="w-full h-auto block"
                            />
                          </div>
                          <span className="text-xs font-semibold text-[#1d1d1f] dark:text-white">
                            Dynamic Island &amp; Fluid Delay Control
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Deep Dive 2: Real-Time MapKit Group Radar */}
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-2.5">
                      <Navigation className="w-4 h-4 text-[#1d1d1f] dark:text-white shrink-0" />
                      <h3 className="text-base sm:text-[17px] font-bold text-[#1d1d1f] dark:text-white">
                        Real-Time MapKit Radar &amp; Convergence View
                      </h3>
                    </div>
                    <p className="text-[14px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                      When drivers require the complete tactical overview, Omawe opens a high-refresh MapKit canvas rendering real-time member coordinates, customized member pins, and convergence paths heading to the shared destination.
                    </p>

                    <div className="rounded-[28px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.05] dark:border-white/[0.07] p-6 sm:p-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-items-center">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-[230px] sm:w-[260px] rounded-[22px] overflow-hidden shadow-xl border border-black/[0.06] dark:border-white/[0.08]">
                            <img
                              src="/omawe-ss-2-spot-everyone-realtime.png"
                              alt="Spot Everyone Realtime"
                              className="w-full h-auto block"
                            />
                          </div>
                          <span className="text-xs font-semibold text-[#1d1d1f] dark:text-white">
                            Spot Everyone on a Real-Time Map
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-[230px] sm:w-[260px] rounded-[22px] overflow-hidden shadow-xl border border-black/[0.06] dark:border-white/[0.08]">
                            <img
                              src="/omawe-ss-6-map-view.png"
                              alt="Tactical Map View with Participant ETA"
                              className="w-full h-auto block"
                            />
                          </div>
                          <span className="text-xs font-semibold text-[#1d1d1f] dark:text-white">
                            Tactical Convergence &amp; Delay Status
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 9. Post-Trip Celebration: Strava-Style Replay & Social Share */}
                <div className="mt-14 space-y-4">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    Post-Trip Celebration: Social Share
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    When an organizer ends a trip, Omawe locks and aggregates all participant data into a permanent 2x2 performance dashboard: total group distance, transit duration, convoy top speed, and personal route polylines.
                  </p>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    To turn every completed journey into a shared memory, travelers can generate and share exportable assets: a high-resolution 9:16 Instagram Story image card with route contours and stats tiles, or render an animated video replay using AVAssetWriter—bringing Strava-level athletic satisfaction to casual social road trips.
                  </p>

                  {/* 9:16 Story Card Feature Mockup */}
                  <div className="mt-6 rounded-[28px] bg-gradient-to-b from-[#0a0a0c] via-[#052d26]/40 to-[#08564d]/30 shadow-md p-6 sm:p-8 flex flex-col items-center justify-center gap-3">
                    <div className="max-w-[240px] sm:max-w-[280px] w-full rounded-[20px] overflow-hidden">
                      <img
                        src="/omawe-share.png"
                        alt="Omawe 9:16 Story Card Export"
                        className="w-full h-auto object-contain block"
                      />
                    </div>
                    <span className="text-xs font-medium text-black-400 mt-2">
                      Exportable 9:16 Instagram Story Card &bull; Trip Stats &amp; Route Contours
                    </span>
                  </div>
                </div>

                {/* 10. Visual Showcase: All 10 Uploaded Screenshots */}
                <div className="mt-14 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                      <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                        Interface &amp; Experience Gallery
                      </h2>
                      <p className="text-[14.5px] text-[#6e6e73] dark:text-[#86868b] mt-1">
                        Explore all 10 screens illustrating Omawe&apos;s invitation flow, live radar, convergence bar, delay reporting, and post-trip stats.
                      </p>
                    </div>
                    <span className="text-xs text-[#86868b] shrink-0 hidden sm:inline">
                      Swipe or use arrows &rarr;
                    </span>
                  </div>

                  <div className="rounded-[28px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] p-5 sm:p-7">
                    <ProjectGallery items={omaweScreenshots} color="emerald" layout="portrait" />
                  </div>
                </div>

                {/* 11. Outro Action Pills */}
                <div className="mt-14 space-y-4">
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Omawe proves that glanceable ambient computing can conquer real-world coordination anxiety without demanding continuous user attention. By aligning Apple&apos;s ActivityKit design language with high-throughput Go micro-architecture, Omawe keeps groups together so they can focus on enjoying the road ahead.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LiquidGlassButton className="px-4 py-2 text-xs">
                        <span>View on App Store</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </LiquidGlassButton>
                    </a>
                    <a
                      href="https://omaweapp.my.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LiquidGlassButton className="px-4 py-2 text-xs">
                        <Globe className="w-3.5 h-3.5" />
                        <span>Visit Website</span>
                      </LiquidGlassButton>
                    </a>
                  </div>
                </div>

                {/* Bottom Centered Logo Monogram */}
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
            ) : selectedProject.title.toLowerCase() === "nomi" ? (
              /* ==================== NOMI FULL EDITORIAL CASE STUDY ==================== */
              <div className="max-w-[760px] mx-auto px-6 pt-20 pb-28">
                {/* 1. Title Row + TestFlight Status Pill */}
                <div>
                  {/* HStack: App Icon + Title on left, TestFlight Pill on right */}
                  <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] sm:rounded-[20px] overflow-hidden border border-black/10 dark:border-white/15 shadow-md bg-white dark:bg-[#1a1a1c] shrink-0">
                        <Image
                          src={currentTheme === "dark" ? "/AppIcon/nomi-dark.png" : "/AppIcon/nomi-light.png"}
                          alt="Nomi App Icon"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h1 className="text-4xl sm:text-[50px] font-bold tracking-[-0.035em] text-[#1d1d1f] dark:text-white leading-[1.08]">
                        Nomi
                      </h1>
                    </div>

                    <LiquidGlassPill className="px-3.5 py-1.5 text-xs font-medium shrink-0">
                      <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                      <span>TestFlight</span>
                    </LiquidGlassPill>
                  </div>

                  {/* Subtitle underneath full-width */}
                  <p className="text-[14.5px] sm:text-[16px] text-[#6e6e73] dark:text-[#86868b] mt-3 sm:mt-3.5 leading-relaxed">
                    Interactive Body Safety &amp; Child Sex Education — Empowering children aged 6–9 with bodily autonomy, boundaries, and safe-touch literacy through gamified storytelling
                  </p>
                </div>

                {/* 2. Hero Showcase Banner */}
                <div className="mt-10 rounded-[28px] overflow-hidden bg-gradient-to-br from-violet-500/[0.08] via-purple-500/[0.04] to-pink-500/[0.08] border border-black/[0.06] dark:border-white/[0.08] p-4 sm:p-8 flex items-center justify-center">
                  <div className="relative w-full max-w-[680px]">
                    <img
                      src="/nomi_6.png"
                      alt="Nomi Level 1 Storybook - The Swimsuit Rule"
                      className="w-full h-auto object-contain rounded-[20px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                    />
                  </div>
                </div>

                {/* 3. Intro Lead Paragraph & Action Pills */}
                <div className="mt-10">
                  <p className="text-[14.5px] sm:text-[15px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    I led the iOS and interaction engineering for{" "}
                    <span className="font-medium text-[#1d1d1f] dark:text-white">
                      Nomi
                    </span>{" "}
                    at the Apple Developer Academy @ BINUS — Bali. Nomi addresses one of the most critical yet deeply stigmatized challenges in Indonesian and Southeast Asian parenting: introducing child body safety, personal boundaries, and safe-touch literacy without fear, awkwardness, or cultural taboo. Built around proven pedagogical frameworks such as the Swimsuit Rule, Nomi pairs interactive illustrated storybooks, tactile drag-and-drop boundary sorting, voice-guided scenario quizzes, and a PIN-protected Parent Dashboard to empower children with confidence while opening trusted communication channels at home.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LiquidGlassButton className="px-4 py-2 text-xs">
                        <span>View on TestFlight</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </LiquidGlassButton>
                    </a>
                  </div>
                </div>

                {/* 4. Metadata Grid */}
                <div className="my-10 py-7 border-y border-black/[0.08] dark:border-white/[0.1] space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
                    <div>
                      <span className="text-[#86868b] block mb-1">Product</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                        iPadOS &amp; iOS App
                      </span>
                    </div>
                    <div>
                      <span className="text-[#86868b] block mb-1">My role</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                        iOS Engineer
                      </span>
                    </div>
                    <div>
                      <span className="text-[#86868b] block mb-1">Timeline</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                        May 2026 – Jun 2026
                      </span>
                    </div>
                    <div>
                      <span className="text-[#86868b] block mb-1">Skills</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px] leading-relaxed block">
                        SwiftUI, SwiftData, AVFoundation, Lottie, FlowLayout, Interactive Audio Synthesis
                      </span>
                    </div>
                  </div>

                  <div className="text-xs">
                    <span className="text-[#86868b] block mb-1">
                      Architecture &amp; Context
                    </span>
                    <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                      Apple Developer Academy @ BINUS — Bali &bull; Swimsuit Rule Curriculum + 5-Level Gamified Roadmap + Dual-Persona UX (Child Interactive Mode + PIN-Protected Parent Zone) + Zero-Tracking SwiftData Architecture
                    </span>
                  </div>
                </div>

                {/* 5. Problem Section */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    The Dangerous Silence: Why Child Body Safety Is Left Untaught
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    In Indonesia and across Southeast Asia, conversations regarding human anatomy, bodily autonomy, and sex education remain heavily shrouded in cultural discomfort and taboo. Many families avoid the topic altogether until adolescence, believing that discussing private parts will prematurely sexualize young children or introduce awkward family dynamics.
                  </p>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    When instructional materials do exist, they typically swing between two counterproductive extremes: overly clinical medical terminology that alienates 6-year-old readers, or fear-driven warnings that cause paralyzing anxiety rather than healthy self-advocacy. Crucially, this informational silence is precisely what predators exploit: without concrete, age-appropriate vocabulary to identify boundary violations, children often mistake coercion for obedience and internalize abusive touch as their own fault.
                  </p>
                </div>

                {/* 6. Research & Pedagogical Framework */}
                <div className="mt-12 space-y-5">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    Pedagogical Foundation: Concrete Boundaries &amp; Shame-Free Literacy
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    To craft an effective educational tool for early childhood, we synthesized clinical research from pediatric safeguarding organizations and developmental psychology into four core pillars:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-1.5">
                        <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                          1. The Swimsuit Rule
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6]">
                        A concrete visual heuristic universally understood by children: any part of the body covered by swimwear belongs exclusively to the child and cannot be touched, seen, or photographed by anyone else without legitimate health reasons.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-1.5">
                        <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                          2. Concrete Operational Learning (Ages 6–9)
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6]">
                        Children at this stage cannot digest abstract legal definitions of consent. They require tactile interactions, visual classification puzzles, and relatable storybook animal companions—Nomi the hedgehog and Pip the turtle—to anchor complex social concepts.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Heart className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                          3. The Absolution Principle (&ldquo;Never Your Fault&rdquo;)
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6]">
                        Predators weaponize secrecy and false guilt. Nomi systematically teaches children that if someone touches their private parts or asks them to keep an uncomfortable secret, the blame rests entirely on the boundary-breaker—never the child.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                          4. The Trusted Adult Safety Circle
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6]">
                        Safety education is ineffective without clear recourse. The curriculum coaches children to identify 3 to 5 real-world adults (parents, trusted teachers, school counselors) whom they can approach immediately whenever feeling uneasy.
                      </p>
                    </div>
                  </div>

                  {/* Pull Quote Card */}
                  <div className="mt-8 p-6 rounded-[24px] bg-gradient-to-br from-purple-500/[0.08] to-pink-500/[0.03] border border-purple-500/20">
                    <p className="text-[15px] sm:text-[16px] italic leading-[1.7] text-[#1d1d1f] dark:text-[#e5e5e7]">
                      &ldquo;Children do not need to be terrified into safety. When equipped with age-appropriate language, clear boundaries, and unconditional trust, safety becomes an empowering habit rather than a source of fear.&rdquo;
                    </p>
                  </div>
                </div>

                {/* 7. The Solution: A 5-Level Gamified Journey */}
                <div className="mt-14 space-y-5">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    The 5-Level Adventure: From Storytelling to Trust Contract
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Rather than a passive e-book, Nomi engages young learners through an interactive 5-level winding progression map where each chapter addresses a progressive layer of bodily autonomy:
                  </p>

                  <div className="space-y-3.5 pt-1">
                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                          Level 1 &bull; Storybook
                        </span>
                        <span className="text-xs text-[#86868b]">My Body &amp; Swimsuit Rule</span>
                      </div>
                      <h3 className="text-[15.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        Landscape Interactive Storybook
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6] mt-1">
                        Young readers meet Nomi the hedgehog and Pip the turtle in an illustrated landscape storybook. Supported by localized voice acting and tap-to-listen narration, the chapter introduces the foundational concept: <em>&ldquo;The parts your swimsuit covers belong only to you.&rdquo;</em>
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                          Level 2 &bull; Interactive Anatomy
                        </span>
                        <span className="text-xs text-[#86868b]">Body Map</span>
                      </div>
                      <h3 className="text-[15.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        Flip-Card Anatomy &amp; Boundary Discovery
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6] mt-1">
                        Children tap interactive body zones to reveal flip cards that explain private versus public parts in proper, respectful terminology. Normalizing anatomical names eliminates the secrecy and shame frequently exploited in grooming.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                          Level 3 &bull; Sorting Game
                        </span>
                        <span className="text-xs text-[#86868b]">Tactile Classification</span>
                      </div>
                      <h3 className="text-[15.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        Safe vs. Unsafe Touch Drag-and-Drop
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6] mt-1">
                        A tactile game where children drag illustrated gesture cards (e.g., friendly high-fives, doctor check-ups with parents present, or secret touches that feel uncomfortable) into appropriate buckets, building muscle memory around bodily comfort cues.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                          Level 4 &bull; Scenario Quiz
                        </span>
                        <span className="text-xs text-[#86868b]">Voice &amp; Action</span>
                      </div>
                      <h3 className="text-[15.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        Real-World Decision Scenarios: Saying &ldquo;NO!&rdquo;
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6] mt-1">
                        Children navigate illustrated dilemmas—such as an unfamiliar adult offering rides or asking for secret photos. The game guides players to select the three vital steps: shouting a firm, loud &ldquo;NO!&rdquo;, running toward safety, and telling a trusted adult.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                          Level 5 &bull; Safety Contract
                        </span>
                        <span className="text-xs text-[#86868b]">Bonding Ritual</span>
                      </div>
                      <h3 className="text-[15.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        Digital Pinky Promise &amp; Caregiver Pact
                      </h3>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6] mt-1">
                        The journey culminates in a digital pinky promise where child and parent place their fingers on the screen together. The animation seals a solemn pact: the child promises never to keep body secrets, and the caregiver promises to always listen and believe them without anger.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 8. Dual Persona Architecture: PIN-Protected Parent Dashboard */}
                <div className="mt-14 space-y-5">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    Dual-Persona Design: The PIN-Protected Parent Dashboard
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Educational apps aimed solely at children frequently fail because they leave parents in the dark. Nomi bridges this gap by introducing a dedicated Parent Zone locked behind a custom mathematical PIN pad, preventing accidental child intrusion while equipping caregivers with crucial tools:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                        <Lock className="w-4 h-4" />
                      </div>
                      <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        Child Safeguarding PIN
                      </h3>
                      <p className="text-[12.5px] leading-[1.65] text-[#6e6e73] dark:text-[#86868b] mt-2">
                        Guarantees the learning space belongs to the child while providing an adult-only sanctuary for sensitive progress data and educational strategy.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        Milestone &amp; Quiz Tracking
                      </h3>
                      <p className="text-[12.5px] leading-[1.65] text-[#6e6e73] dark:text-[#86868b] mt-2">
                        Inspect completed levels, quiz accuracy, and topics explored per child profile, identifying areas where children need reassurance.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        Conversation Starter Guides
                      </h3>
                      <p className="text-[12.5px] leading-[1.65] text-[#6e6e73] dark:text-[#86868b] mt-2">
                        Curated parent scripts and guided talking points that help moms and dads facilitate healthy, shame-free conversations at home without awkwardness.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 9. Technical Architecture */}
                <div className="mt-14 space-y-5">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    Technical Engineering: Privacy-by-Design &amp; Accessibility
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Developing software for young children demands the highest standards of data ethics, privacy compliance, and tactile ergonomics. As lead developer, I engineered three primary architectural foundations:
                  </p>

                  <div className="space-y-4 pt-1">
                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-2">
                        <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <h3 className="text-[15px] font-semibold text-[#1d1d1f] dark:text-white">
                          100% Offline SwiftData Architecture (Zero-PII Compliance)
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.7] text-[#515154] dark:text-[#a1a1a6]">
                        Child safety begins with data sovereignty. Nomi incorporates zero third-party telemetry, zero external advertising SDKs, and zero cloud accounts. Using Apple&apos;s modern <code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-purple-600 dark:text-purple-300">SwiftData</code> framework, child profiles (<code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-purple-600 dark:text-purple-300">ChildProfile</code>), unlocked adventure levels, and pinky promise tokens are stored strictly within the device&apos;s encrypted local container, exceeding strict COPPA and App Store Kids guidelines.
                      </p>
                    </div>

                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-2">
                        <Smartphone className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <h3 className="text-[15px] font-semibold text-[#1d1d1f] dark:text-white">
                          Dynamic Multi-Orientation View Management
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.7] text-[#515154] dark:text-[#a1a1a6]">
                        While the adventure hub and parent zones utilize vertical navigation suited for one-handed handheld usage, the Level 1 storybook requires an expansive 16:9 landscape canvas for rich panoramic illustrations. We engineered an orientation-aware view lifecycle coordinator that programmatically locks or allows landscape mode across specific navigation stacks without visual stuttering or UI hierarchy collapse.
                      </p>
                    </div>

                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-2">
                        <Volume2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <h3 className="text-[15px] font-semibold text-[#1d1d1f] dark:text-white">
                          AVFoundation Audio Synthesis for Early Readers
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.7] text-[#515154] dark:text-[#a1a1a6]">
                        Targeting children aged 6–9 means supporting early readers who may struggle with dense text. I built a dedicated <code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-purple-600 dark:text-purple-300">AudioManager</code> managing multi-channel audio: ducking soothing background music during voice-acting playback, triggering reassuring sound effects on correct sorting actions, and ensuring volume safety across iPad and iPhone speakers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 10. Screenshot Gallery Showcase */}
                <div className="mt-14 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                        In-App Visual Showcase
                      </h2>
                      <p className="text-[14.5px] text-[#6e6e73] dark:text-[#86868b] mt-1">
                        Explore the 9 key interactive screens powering Nomi&apos;s educational experience
                      </p>
                    </div>
                    <span className="text-xs text-[#86868b] shrink-0 hidden sm:inline">
                      Swipe or use arrows &rarr;
                    </span>
                  </div>

                  <div className="rounded-[28px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] p-5 sm:p-7">
                    <ProjectGallery items={nomiScreenshots} color="purple" layout="mixed-nomi" />
                  </div>
                </div>

                {/* 11. Outro Action Pills */}
                <div className="mt-14 space-y-4">
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Nomi proves that sensitive topics do not have to be intimidating or taboo. By combining world-class developmental frameworks, joyful storytelling, and privacy-preserving native iOS engineering, Nomi gives young children the lifelong confidence to protect their bodies and ensures parents have the tools to protect their children.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LiquidGlassButton className="px-4 py-2 text-xs">
                        <span>View on TestFlight</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </LiquidGlassButton>
                    </a>
                  </div>
                </div>

                {/* Bottom Centered Logo Monogram */}
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
            ) : selectedProject.title.toLowerCase() === "bloobook" ? (
              /* ==================== BLOOBOOK FULL EDITORIAL CASE STUDY ==================== */
              <div className="max-w-[760px] mx-auto px-6 pt-20 pb-28">
                {/* 1. Title Row + TestFlight Status Pill */}
                <div>
                  {/* HStack: App Icon + Title on left, TestFlight Pill on right */}
                  <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] sm:rounded-[20px] overflow-hidden border border-black/10 dark:border-white/15 shadow-md bg-white dark:bg-[#1a1a1c] shrink-0">
                        <Image
                          src="/AppIcon/bloobook.png"
                          alt="BlooBook App Icon"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h1 className="text-4xl sm:text-[50px] font-bold tracking-[-0.035em] text-[#1d1d1f] dark:text-white leading-[1.08]">
                        BlooBook
                      </h1>
                    </div>

                    <LiquidGlassPill className="px-3.5 py-1.5 text-xs font-medium shrink-0">
                      <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                      <span>TestFlight</span>
                    </LiquidGlassPill>
                  </div>

                  {/* Subtitle underneath full-width */}
                  <p className="text-[14.5px] sm:text-[16px] text-[#6e6e73] dark:text-[#86868b] mt-3 sm:mt-3.5 leading-relaxed">
                    Digital Polaroid &amp; Stamp Scrapbook — Transforming scattered smartphone snapshots into tactile vintage polaroids, perforated stamps, and shareable collaged memory books
                  </p>
                </div>

                {/* 2. Hero Showcase Banner */}
                <div className="mt-10 rounded-[28px] overflow-hidden bg-gradient-to-br from-sky-500/[0.08] via-indigo-500/[0.04] to-amber-500/[0.08] border border-black/[0.06] dark:border-white/[0.08] p-6 sm:p-10 flex items-center justify-center">
                  <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
                    <img
                      src="/bloobook_6.png"
                      alt="BlooBook Free-Form Scrapbook Canvas Workspace"
                      className="w-full h-auto object-contain rounded-[28px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                    />
                  </div>
                </div>

                {/* 3. Intro Lead Paragraph & Action Pills */}
                <div className="mt-10">
                  <p className="text-[14.5px] sm:text-[15px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Built at the{" "}
                    <span className="font-medium text-[#1d1d1f] dark:text-white">
                      Apple Developer Academy @ BINUS — Bali
                    </span>{" "}
                    in April 2026, <span className="font-medium text-[#1d1d1f] dark:text-white">BlooBook</span> is a native iOS tactile scrapbooking application designed to revive the lost art of analog memory preservation. While modern smartphone camera rolls act as digital graveyards of thousands of forgotten photos, BlooBook reimagines everyday moments as physical artifacts: framing snapshots within vintage polaroids and perforated postage stamps, arranging them freely across textured paper canvases with fluid multi-touch gestures, and rendering high-resolution printable collages via Apple&apos;s ImageRenderer.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LiquidGlassButton className="px-4 py-2 text-xs">
                        <span>View on TestFlight</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </LiquidGlassButton>
                    </a>
                  </div>
                </div>

                {/* 4. Metadata Grid */}
                <div className="my-10 py-7 border-y border-black/[0.08] dark:border-white/[0.1] space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
                    <div>
                      <span className="text-[#86868b] block mb-1">Product</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                        iOS App
                      </span>
                    </div>
                    <div>
                      <span className="text-[#86868b] block mb-1">My role</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                        iOS Engineer
                      </span>
                    </div>
                    <div>
                      <span className="text-[#86868b] block mb-1">Timeline</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                        Apr 2026 – Apr 2026
                      </span>
                    </div>
                    <div>
                      <span className="text-[#86868b] block mb-1">Skills</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px] leading-relaxed block">
                        SwiftUI, SwiftData, AVFoundation, CoreGraphics, ImageRenderer, Gesture Physics
                      </span>
                    </div>
                  </div>

                  <div className="text-xs">
                    <span className="text-[#86868b] block mb-1">
                      Architecture &amp; Context
                    </span>
                    <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                      Apple Developer Academy Bali &bull; Simultaneous 3-Way Gesture Engine (Pan + Pinch + Rotate) + Sub-Pixel Cutout Framing Geometry + Magnetic Trash Snapping with Haptic Feedback + ImageRenderer High-Res Export + Local-First SwiftData Persistence
                    </span>
                  </div>
                </div>

                {/* 5. Problem Section */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    The Camera Roll Paradox: Endless Photos, Zero Emotional Resonance
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Smartphones have made capturing photos virtually frictionless. We snap thousands of coffee cups, team milestones, sunsets, and candid memories. Yet, our camera rolls have become chaotic, uncurated archives where genuine moments are buried beneath receipts, screenshots, and hundreds of near-identical bursts.
                  </p>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Physical scrapbooks, instant polaroid films, and philatelic stamp albums once provided a deeply human, deliberate ritual: printing photos, trimming edges, decorating with stickers, and penning heartfelt notes in margins. But physical crafts are expensive, cumbersome to carry, and impossible to duplicate or share instantly with friends. Meanwhile, existing mobile photo apps enforce rigid, algorithmic grid feeds or sterile template slots that drain the playful intimacy out of personal storytelling.
                  </p>
                </div>

                {/* 6. Philosophy & Tactile Design */}
                <div className="mt-12 space-y-5">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    Design Philosophy: Tactile Nostalgia in the Digital Era
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    BlooBook bridges the sensory delight of analog memory books with the fluid ergonomics of modern iOS software:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="w-8 h-8 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-3">
                        <Scissors className="w-4 h-4" />
                      </div>
                      <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        Artifacts Over Pixels
                      </h3>
                      <p className="text-[12.5px] leading-[1.65] text-[#6e6e73] dark:text-[#86868b] mt-2">
                        Treating photos not as flat screen pixels, but as physical paper artifacts with realistic drop-shadows, serrated stamp edges, and dimensional paper texture.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="w-8 h-8 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-3">
                        <Palette className="w-4 h-4" />
                      </div>
                      <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        Free-Form Expression
                      </h3>
                      <p className="text-[12.5px] leading-[1.65] text-[#6e6e73] dark:text-[#86868b] mt-2">
                        No rigid slot templates. Users place, scale, rotate, and overlap photos, stickers, and custom typographic thoughts anywhere across the canvas.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="w-8 h-8 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-3">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        Curated Journal Binders
                      </h3>
                      <p className="text-[12.5px] leading-[1.65] text-[#6e6e73] dark:text-[#86868b] mt-2">
                        Replacing endless scrolling with intentional themed albums—allowing users to bind specific trips, team milestones, and seasons into dedicated keepsake books.
                      </p>
                    </div>
                  </div>

                  {/* Pull Quote Card */}
                  <div className="mt-8 p-6 rounded-[24px] bg-gradient-to-br from-sky-500/[0.08] to-indigo-500/[0.03] border border-sky-500/20">
                    <p className="text-[15px] sm:text-[16px] italic leading-[1.7] text-[#1d1d1f] dark:text-[#e5e5e7]">
                      &ldquo;Memories are meant to be felt, arranged, and cherished—not buried under an infinite scroll of camera roll duplicates.&rdquo;
                    </p>
                  </div>
                </div>

                {/* 7. Key Product Features */}
                <div className="mt-14 space-y-5">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    The Creative Studio: From Real-Time Lens to Multi-Touch Canvas
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    BlooBook reimagines the end-to-end photography workflow into an intuitive, tactile crafting process:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Camera className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                        <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                          Real-Time Stamp Viewfinder
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6]">
                        A custom AVFoundation camera stream with a live perforated stamp overlay, letting users frame real-world moments directly through the serrated cutout before tapping the shutter.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Layers className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                        <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                          6 Authentic Frame Geometries
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6]">
                        Choose from 3 perforated stamp formats (portrait, landscape, square) and 3 vintage polaroid frames (classic square, wide cinematic, and pocket mini) calculated with sub-pixel margin math.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                        <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                          Sticker Packs &amp; Typography Notes
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6]">
                        Decorate scrapbooks with handcrafted stickers (including playful team memes, good-vibes stamps, and pets), alongside custom typographic stickers to chronicle dates, locations, and reflections.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-1.5">
                        <ArrowUpRight className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                        <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                          ImageRenderer High-Res Export
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6]">
                        Flatten layered vector graphics, textured papers, and raster images into uncompressed high-resolution art prints ready for AirDrop, Instagram Stories, or physical photo printing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 8. Technical Engineering & Architecture */}
                <div className="mt-14 space-y-5">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    Engineering Deep Dive: Simultaneous Gestures &amp; Tactile Physics
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Building a digital canvas that feels as natural as arranging real photos on a physical desk requires meticulous interaction math and state management:
                  </p>

                  <div className="space-y-4 pt-1">
                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-2">
                        <Smartphone className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                        <h3 className="text-[15px] font-semibold text-[#1d1d1f] dark:text-white">
                          Simultaneous 3-Way Gesture Pipeline &amp; Scale Damping
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.7] text-[#515154] dark:text-[#a1a1a6]">
                        In SwiftUI, combining <code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sky-600 dark:text-sky-300">DragGesture()</code>, <code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sky-600 dark:text-sky-300">MagnificationGesture()</code>, and <code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sky-600 dark:text-sky-300">RotationGesture()</code> simultaneously frequently suffers from coordinate drift when objects are scaled. I engineered a translation damping formula: <code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sky-600 dark:text-sky-300">damping = 1 / sqrt(max(photo.scale, 0.5))</code>, ensuring smooth, predictable 1:1 finger tracking regardless of whether a stamp is scaled down or zoomed to 300%.
                      </p>
                    </div>

                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                        <h3 className="text-[15px] font-semibold text-[#1d1d1f] dark:text-white">
                          Magnetic Trash Snapping with Haptic Physics
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.7] text-[#515154] dark:text-[#a1a1a6]">
                        To make deleting canvas items tactile yet protective against accidental loss, dragging over the trash icon triggers an expanded hit-test rect (<code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sky-600 dark:text-sky-300">trashFrame.insetBy(dx: -20, dy: -150)</code>). Entering the zone fires a medium haptic pulse (<code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sky-600 dark:text-sky-300">UIImpactFeedbackGenerator</code>), shrinks the item to 50% scale, and applies linear interpolation (<code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sky-600 dark:text-sky-300">lerp = 0.2</code>) pulling the element magnetically toward the bin center.
                      </p>
                    </div>

                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-2">
                        <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                        <h3 className="text-[15px] font-semibold text-[#1d1d1f] dark:text-white">
                          Local-First SwiftData Architecture &amp; Alpha Compression
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.7] text-[#515154] dark:text-[#a1a1a6]">
                        Managing multiple photo layers on mobile requires strict memory safeguards. We modeled a relational SwiftData hierarchy (<code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sky-600 dark:text-sky-300">Album &rarr; Photo &rarr; Memory</code>) with automatic cascade deletions. When saving, an alpha-aware compressor inspects CGImage channel headers—preserving lossless PNG transparency for perforated stamps while compressing solid camera frames to 70% quality JPEG, keeping local storage lightweight and fast.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 9. Screenshot Gallery Showcase */}
                <div className="mt-14 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                        In-App Visual Showcase
                      </h2>
                      <p className="text-[14.5px] text-[#6e6e73] dark:text-[#86868b] mt-1">
                        Explore the 6 key interfaces powering BlooBook&apos;s tactile scrapbooking experience
                      </p>
                    </div>
                    <span className="text-xs text-[#86868b] shrink-0 hidden sm:inline">
                      Swipe or use arrows &rarr;
                    </span>
                  </div>

                  <div className="rounded-[28px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] p-5 sm:p-7">
                    <ProjectGallery items={bloobookScreenshots} color="sky" layout="portrait" />
                  </div>
                </div>

                {/* 10. Outro Action Pills */}
                <div className="mt-14 space-y-4">
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    BlooBook demonstrates that software can celebrate the warmth, imperfection, and tactile satisfaction of analog hobbies. By pairing native Apple graphics technologies with thoughtful gesture physics, BlooBook turns digital memory collection back into a joyful, personal craft.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LiquidGlassButton className="px-4 py-2 text-xs">
                        <span>View on TestFlight</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </LiquidGlassButton>
                    </a>
                  </div>
                </div>

                {/* Bottom Centered Logo Monogram */}
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
            ) : selectedProject.title.toLowerCase() === "newblie" ? (
              /* ==================== NEWBLIE FULL EDITORIAL CASE STUDY ==================== */
              <div className="max-w-[760px] mx-auto px-6 pt-20 pb-28">
                {/* 1. Title Row + TestFlight Status Pill */}
                <div>
                  {/* HStack: App Icon + Title on left, TestFlight Pill on right */}
                  <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] sm:rounded-[20px] overflow-hidden border border-black/10 dark:border-white/15 shadow-md bg-white dark:bg-[#1a1a1c] shrink-0">
                        <Image
                          src={currentTheme === "dark" ? "/AppIcon/newblie-dark.png" : "/AppIcon/newblie-light.png"}
                          alt="Newblie App Icon"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h1 className="text-4xl sm:text-[50px] font-bold tracking-[-0.035em] text-[#1d1d1f] dark:text-white leading-[1.08]">
                        Newblie
                      </h1>
                    </div>

                    <LiquidGlassPill className="px-3.5 py-1.5 text-xs font-medium shrink-0">
                      <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                      <span>TestFlight</span>
                    </LiquidGlassPill>
                  </div>

                  {/* Subtitle underneath full-width */}
                  <p className="text-[14.5px] sm:text-[16px] text-[#6e6e73] dark:text-[#86868b] mt-3 sm:mt-3.5 leading-relaxed">
                    Conversational Balinese Phrasebook — An interactive language companion empowering newcomers and travelers to speak colloquial Balinese with confidence
                  </p>
                </div>

                {/* 2. Hero Showcase Banner */}
                <div className="mt-10 rounded-[28px] overflow-hidden bg-gradient-to-br from-amber-500/[0.08] via-orange-500/[0.04] to-rose-500/[0.08] border border-black/[0.06] dark:border-white/[0.08] p-6 sm:p-10 flex items-center justify-center">
                  <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
                    <img
                      src="/project5.png"
                      alt="Newblie 3D Flashcard Stack - Balinese Vocabulary"
                      className="w-full h-auto object-contain rounded-[28px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                    />
                  </div>
                </div>

                {/* 3. Intro Lead Paragraph & Action Pills */}
                <div className="mt-10">
                  <p className="text-[14.5px] sm:text-[15px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Built as my initial solo project at the{" "}
                    <span className="font-medium text-[#1d1d1f] dark:text-white">
                      Apple Developer Academy @ BINUS — Bali
                    </span>{" "}
                    in March 2026, <span className="font-medium text-[#1d1d1f] dark:text-white">Newblie</span> was born from my firsthand experience moving to Bali as a newcomer. While millions of travelers and students arrive on the island each year, native Balinese (<em>Basa Bali</em>) remains an intimidating linguistic puzzle with complex social registers. Newblie demystifies everyday Balinese conversation into tactile, bite-sized 3D flashcards, structured situational categories, and an expandable personal dictionary—making cultural connection natural and fun.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LiquidGlassButton className="px-4 py-2 text-xs">
                        <span>View on TestFlight</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </LiquidGlassButton>
                    </a>
                  </div>
                </div>

                {/* 4. Metadata Grid */}
                <div className="my-10 py-7 border-y border-black/[0.08] dark:border-white/[0.1] space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
                    <div>
                      <span className="text-[#86868b] block mb-1">Product</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                        iOS App
                      </span>
                    </div>
                    <div>
                      <span className="text-[#86868b] block mb-1">My role</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                        Product Designer &amp; iOS Engineer
                      </span>
                    </div>
                    <div>
                      <span className="text-[#86868b] block mb-1">Timeline</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                        Mar 2026 – Mar 2026
                      </span>
                    </div>
                    <div>
                      <span className="text-[#86868b] block mb-1">Skills</span>
                      <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px] leading-relaxed block">
                        SwiftUI, SwiftData, Gesture Physics, Custom 3D Stack Math, Glassmorphism
                      </span>
                    </div>
                  </div>

                  <div className="text-xs">
                    <span className="text-[#86868b] block mb-1">
                      Architecture &amp; Context
                    </span>
                    <span className="font-medium text-[#1d1d1f] dark:text-white text-[13px]">
                      Apple Developer Academy Bali &bull; Solo Engineering &bull; Dynamic 3-Card Stack Layering with Ejection Momentum &bull; Declarative SwiftData Seeding &bull; Zero-Network 100% Offline Resilience
                    </span>
                  </div>
                </div>

                {/* 5. Problem Section */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    The Cultural Disconnect: Lost in the Island of the Gods
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Bali is globally renowned for its spiritual warmth, temples, and vibrant community life. Yet millions of newcomers, remote workers, and exchange students inevitably find themselves stranded inside an English or Indonesian linguistic bubble, missing out on deep, reciprocal connections with local Balinese residents.
                  </p>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Commercial language platforms like Duolingo prioritize major national languages, completely bypassing regional indigenous tongues like <em>Basa Bali</em>. When resources do exist, they are either academic linguistics papers detailing archaic high-Balinese court etiquette or stiff phrasebooks filled with ceremonial formulas that locals rarely speak in daily coffee shops (*warungs*). Newcomers need immediate, casual conversational vocabulary—knowing how to greet an elder (*Om Swastyastu*), say thank you with warmth (*Matur suksma*), or invite friends out for coffee (*Ngopi bareng*)—without drowning in grammatical intimidation.
                  </p>
                </div>

                {/* 6. Philosophy & Approach */}
                <div className="mt-12 space-y-5">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    Design Philosophy: Casual, Cultural, Contextual
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Newblie approaches language learning not as a chore of rote memorization, but as an open passport to genuine island hospitality:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                        <Languages className="w-4 h-4" />
                      </div>
                      <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        Tactile Micro-Learning
                      </h3>
                      <p className="text-[12.5px] leading-[1.65] text-[#6e6e73] dark:text-[#86868b] mt-2">
                        Replacing dense textbooks with bite-sized, 30-second card sessions that can be swiped through while waiting for coffee or commuting.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        Situational Daily Clusters
                      </h3>
                      <p className="text-[12.5px] leading-[1.65] text-[#6e6e73] dark:text-[#86868b] mt-2">
                        Phrases categorized by real-world contexts: respectful greetings, polite bargaining, directions, and casual youth slang.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                        Living User Dictionary
                      </h3>
                      <p className="text-[12.5px] leading-[1.65] text-[#6e6e73] dark:text-[#86868b] mt-2">
                        Language evolves on the street. Users can easily photograph local signs or add new colloquialisms heard from neighbors directly into their personal lexicon.
                      </p>
                    </div>
                  </div>

                  {/* Pull Quote Card */}
                  <div className="mt-8 p-6 rounded-[24px] bg-gradient-to-br from-amber-500/[0.08] to-orange-500/[0.03] border border-amber-500/20">
                    <p className="text-[15px] sm:text-[16px] italic leading-[1.7] text-[#1d1d1f] dark:text-[#e5e5e7]">
                      &ldquo;Speaking even just three words of native Balinese with a warm smile instantly turns you from a bystander into a welcomed friend.&rdquo;
                    </p>
                  </div>
                </div>

                {/* 7. Key Features */}
                <div className="mt-14 space-y-5">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    Core Experience: From 3D Card Stacks to Pocket Dictionaries
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Newblie combines playful micro-interactions with structured cultural utility across four interconnected modules:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Layers className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                          Gesture-Driven 3D Card Stack
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6]">
                        An interactive flashcard stack simulating physical card depth. Cards display vibrant cultural artwork, Balinese phrases, English contextual definitions, and category badges with smooth spring physics.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-1.5">
                        <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                          8 Practical Situational Clusters
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6]">
                        Phrases grouped into essential everyday themes: Greetings (*Om Swastyastu*), Polite (*Matur suksma*), Conversation (*Kenken kabare?*), Questions (*Napi, Dija, Kuda*), Daily Life (*Melali, Ngopi*), and Street Slang.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Camera className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                          Personal Lexicon Builder
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6]">
                        A native sheet interface allowing learners to record new words encountered on temple signs or local menus, attach custom photos from their camera roll, and tag appropriate categories.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-[20px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Smartphone className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <h3 className="text-[14.5px] font-semibold text-[#1d1d1f] dark:text-white">
                          Floating Glass Dock Navigation
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.65] text-[#515154] dark:text-[#a1a1a6]">
                        A compact, liquid-glass capsule tab bar anchored at the bottom of the screen, providing one-thumb switching between the active flashcard practice deck and the dictionary directory.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 8. Technical Engineering & Architecture */}
                <div className="mt-14 space-y-5">
                  <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                    Engineering Deep Dive: 3D Stack Geometry &amp; SwiftData Persistence
                  </h2>
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    As a solo project, Newblie served as an intensive testbed for mastering Apple&apos;s latest SwiftUI gesture models and modern SwiftData persistence:
                  </p>

                  <div className="space-y-4 pt-1">
                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-2">
                        <Layers className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <h3 className="text-[15px] font-semibold text-[#1d1d1f] dark:text-white">
                          Dynamic 3-Card Stack Geometry &amp; Rotation Momentum
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.7] text-[#515154] dark:text-[#a1a1a6]">
                        In <code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-amber-600 dark:text-amber-300">VocabularyView</code>, rendering an endless flashcard deck smoothly on older devices requires windowed rendering. I restricted live view instantiations to the top 3 cards (<code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-amber-600 dark:text-amber-300">cardStack.prefix(3)</code>), mathematically scaling each subsequent card by <code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-amber-600 dark:text-amber-300">1 - CGFloat(index) * 0.05</code> and offsetting it vertically by <code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-amber-600 dark:text-amber-300">CGFloat(index) * -36</code>. Drag gestures calculate dynamic angular rotation (<code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-amber-600 dark:text-amber-300">dragOffset.width / 20</code>), triggering a smooth ejection at a 120pt threshold and recirculating the card to the back of the deck.
                      </p>
                    </div>

                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-2">
                        <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <h3 className="text-[15px] font-semibold text-[#1d1d1f] dark:text-white">
                          Declarative SwiftData Seeding &amp; 100% Offline Readiness
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.7] text-[#515154] dark:text-[#a1a1a6]">
                        Travelers and field volunteers frequently experience spotty cellular connectivity in rural Bali. I engineered <code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-amber-600 dark:text-amber-300">VocabularyData.seedVocabularyIfNeeded</code> using Apple&apos;s <code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-amber-600 dark:text-amber-300">FetchDescriptor&lt;Vocabulary&gt;()</code>. On first launch, the app verifies local database state and seeds curated vocabulary bundles into on-device encrypted storage in under 50 milliseconds, guaranteeing instant, reliable offline access.
                      </p>
                    </div>

                    <div className="p-5 rounded-[22px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08]">
                      <div className="flex items-center gap-2 mb-2">
                        <Smartphone className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                        <h3 className="text-[15px] font-semibold text-[#1d1d1f] dark:text-white">
                          Reactive Scroll Geometry Coordination
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-[1.7] text-[#515154] dark:text-[#a1a1a6]">
                        In <code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-amber-600 dark:text-amber-300">DictionaryView</code>, I utilized SwiftUI&apos;s modern <code className="text-xs bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-amber-600 dark:text-amber-300">.onScrollGeometryChange</code> API. By tracking real-time content scroll coordinates, the large header typography smoothly collapses and transitions opacity without hitching, while category headers remain pinned for swift alphabetical skimming.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 9. Screenshot Gallery Showcase */}
                <div className="mt-14 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                      <h2 className="text-2xl sm:text-[28px] font-bold tracking-[-0.025em] text-[#1d1d1f] dark:text-white">
                        In-App Visual Showcase
                      </h2>
                      <p className="text-[14.5px] text-[#6e6e73] dark:text-[#86868b] mt-1">
                        Explore the primary interface powering Newblie&apos;s conversational learning experience
                      </p>
                    </div>
                    <span className="text-xs text-[#86868b] shrink-0 hidden sm:inline">
                      Swipe or use arrows &rarr;
                    </span>
                  </div>

                  <div className="rounded-[28px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] p-5 sm:p-7">
                    <ProjectGallery items={newblieScreenshots} color="amber" layout="portrait" />
                  </div>
                </div>

                {/* 10. Outro Action Pills */}
                <div className="mt-14 space-y-4">
                  <p className="text-[14.5px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    Newblie represents where my Apple Developer Academy journey started: taking a personal cultural friction point, exploring native Apple frameworks, and engineering an empathetic, tactile software solution that brings people closer together.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LiquidGlassButton className="px-4 py-2 text-xs">
                        <span>View on TestFlight</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </LiquidGlassButton>
                    </a>
                  </div>
                </div>

                {/* Bottom Centered Logo Monogram */}
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
            ) : (
              /* ==================== CLEAN EDITORIAL BOTTOM SHEET FOR OTHER APPS ==================== */
              <div className="max-w-[760px] mx-auto px-6 pt-20 pb-28">
                <div>
                  {/* HStack: Title on left, Status Pill on right */}
                  <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
                    <h1 className="text-4xl sm:text-[48px] font-bold tracking-[-0.035em] text-[#1d1d1f] dark:text-white leading-[1.08]">
                      {selectedProject.title}
                    </h1>

                    <LiquidGlassPill className="px-3.5 py-1.5 text-xs font-medium shrink-0">
                      <span
                        className={`h-2 w-2 rounded-full ${getProjectStatus(selectedProject).dotClass
                          }`}
                      />
                      <span>{getProjectStatus(selectedProject).label}</span>
                    </LiquidGlassPill>
                  </div>

                  {/* Subtitle underneath full-width */}
                  <p className="text-[14.5px] sm:text-[16px] text-[#6e6e73] dark:text-[#86868b] mt-3 sm:mt-3.5 leading-relaxed">
                    {shortTaglines[selectedProject.title] ||
                      selectedProject.tag}
                  </p>
                </div>

                {/* Screenshot Gallery Showcase */}
                <div className="mt-10 rounded-[28px] bg-[#f5f5f7] dark:bg-[#161618] border border-black/[0.06] dark:border-white/[0.08] p-6 sm:p-8">
                  <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none]">
                    {(selectedProject.screenshots || [selectedProject.img]).map(
                      (src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt={`${selectedProject.title} screenshot ${idx + 1}`}
                          className="h-[380px] sm:h-[440px] w-auto object-contain rounded-[22px] snap-center shrink-0 shadow-md"
                        />
                      )
                    )}
                  </div>
                </div>

                <div className="mt-10 space-y-6">
                  <p className="text-[15px] leading-[1.75] text-[#515154] dark:text-[#a1a1a6]">
                    {selectedProject.des}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {selectedProject.link && !selectedProject.link.includes("github.com") && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LiquidGlassButton>
                          <span>
                            {getProjectStatus(selectedProject).ctaLabel}
                          </span>
                          <ArrowUpRight className="w-4 h-4" />
                        </LiquidGlassButton>
                      </a>
                    )}
                    {"website" in selectedProject &&
                      (selectedProject as { website?: string }).website && (
                        <a
                          href={
                            (selectedProject as { website?: string }).website!
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LiquidGlassButton>
                            <Globe className="w-4 h-4" />
                            <span>Visit Website</span>
                          </LiquidGlassButton>
                        </a>
                      )}
                  </div>
                </div>

                {/* Bottom Centered Logo Monogram */}
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
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-Page Wave Transition Ripple Overlay */}
      <AnimatePresence>
        {pageSpread?.active && (
          <motion.div
            initial={{
              clipPath: `circle(0px at ${pageSpread.x}px ${pageSpread.y}px)`,
              opacity: 1,
            }}
            animate={{
              clipPath: `circle(${pageSpread.radius}px at ${pageSpread.x}px ${pageSpread.y}px)`,
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              clipPath: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.25, delay: 0.45 },
            }}
            className={`fixed inset-0 z-0 pointer-events-none ${pageSpread.targetTheme === "dark"
              ? "bg-black"
              : "bg-[#f2f2f5]"
              }`}
          />
        )}
      </AnimatePresence>

      {/* ========================================================================
          FULL-SCREEN EXPERIENCE CASE STUDY & STORYTELLING MODAL
         ======================================================================== */}
      <ExperienceModal
        experience={selectedExperience}
        allExperiences={experiences}
        onClose={() => setSelectedExperience(null)}
        onNavigate={navigateExperience}
        onSelectExperience={(exp) => setSelectedExperience(exp)}
        onSelectProject={(proj) => {
          setSelectedExperience(null);
          openModal(proj);
        }}
        currentTheme={resolvedTheme || theme}
        toggleTheme={(e) => toggleThemeWithTransition(e, "generic")}
      />

      {/* Sliding Contact Drawer */}
      <ContactDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </section>
  );
};

export default Hero;
