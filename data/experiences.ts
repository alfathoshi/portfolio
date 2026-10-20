export interface ExperienceMetric {
  value: string;
  label: string;
  sublabel?: string;
}

export interface ExperienceStorySection {
  title: string;
  lead?: string;
  paragraphs: string[];
  keyPoints?: {
    title: string;
    description: string;
  }[];
}

export interface ExperienceGalleryItem {
  src: string;
  title: string;
  caption: string;
}

export interface ExperienceColorTheme {
  primaryName: string; // "grey" | "red" | "maroon" | "blue"
  text: string;
  bg: string;
  bgSubtle: string;
  border: string;
  gradient: string;
  selection: string;
  hoverText: string;
  dotClass: string;
}

export const getExperienceTheme = (id: string): ExperienceColorTheme => {
  switch (id) {
    case "telkomsel":
      return {
        primaryName: "red",
        text: "text-[#ed0226] dark:text-[#ff3b30]",
        bg: "bg-[#ed0226] dark:bg-[#ff3b30]",
        bgSubtle: "bg-[#ed0226]/10 dark:bg-[#ff3b30]/20",
        border: "border-[#ed0226]/25 dark:border-[#ff3b30]/30",
        gradient: "from-[#ed0226]/[0.08] to-transparent dark:from-[#ff3b30]/[0.1]",
        selection: "selection:bg-[#ed0226]/20 selection:text-[#ed0226]",
        hoverText: "group-hover:text-[#ed0226] dark:group-hover:text-[#ff3b30]",
        dotClass: "bg-[#ed0226]",
      };
    case "motion-lab":
      return {
        primaryName: "maroon",
        text: "text-[#991b1b] dark:text-[#f87171]",
        bg: "bg-[#991b1b] dark:bg-[#f87171]",
        bgSubtle: "bg-[#991b1b]/10 dark:bg-[#f87171]/20",
        border: "border-[#991b1b]/25 dark:border-[#f87171]/30",
        gradient: "from-[#991b1b]/[0.08] to-transparent dark:from-[#f87171]/[0.1]",
        selection: "selection:bg-[#991b1b]/20 selection:text-[#991b1b]",
        hoverText: "group-hover:text-[#991b1b] dark:group-hover:text-[#f87171]",
        dotClass: "bg-[#991b1b]",
      };
    case "gdgoc":
      return {
        primaryName: "blue",
        text: "text-[#1a73e8] dark:text-[#60a5fa]",
        bg: "bg-[#1a73e8] dark:bg-[#60a5fa]",
        bgSubtle: "bg-[#1a73e8]/10 dark:bg-[#60a5fa]/20",
        border: "border-[#1a73e8]/25 dark:border-[#60a5fa]/30",
        gradient: "from-[#1a73e8]/[0.08] to-transparent dark:from-[#60a5fa]/[0.1]",
        selection: "selection:bg-[#1a73e8]/20 selection:text-[#1a73e8]",
        hoverText: "group-hover:text-[#1a73e8] dark:group-hover:text-[#60a5fa]",
        dotClass: "bg-[#1a73e8]",
      };
    case "ada-bali":
    default:
      return {
        primaryName: "grey",
        text: "text-[#6e6e73] dark:text-[#98989d]",
        bg: "bg-[#6e6e73] dark:bg-[#98989d]",
        bgSubtle: "bg-[#6e6e73]/10 dark:bg-[#98989d]/20",
        border: "border-[#6e6e73]/25 dark:border-[#98989d]/30",
        gradient: "from-[#6e6e73]/[0.08] to-transparent dark:from-[#98989d]/[0.1]",
        selection: "selection:bg-[#6e6e73]/20 selection:text-[#1d1d1f] dark:selection:text-white",
        hoverText: "group-hover:text-[#6e6e73] dark:group-hover:text-[#98989d]",
        dotClass: "bg-[#86868b]",
      };
  }
};

export interface ExperienceItem {
  id: string; // "ada-bali", "telkomsel", "motion-lab", "gdgoc"
  company: string;
  shortCompany: string;
  location: string;
  role: string;
  period: string;
  category: string;
  bannerImg: string;
  bannerPosition?: string;
  pillLabel: string;
  dotClass: string;
  tagline: string;
  leadSummary: string;
  skills: string[];
  metrics: ExperienceMetric[];
  officialBullets: string[];
  storySections: ExperienceStorySection[];
  gallery?: ExperienceGalleryItem[];
  relatedAppIds?: string[];
  reflection: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "ada-bali",
    company: "Apple Developer Academy @ Binus - Bali",
    shortCompany: "Apple Developer Academy",
    location: "Kuta, Bali",
    role: "Learner",
    period: "March 2026 – Present",
    category: "iOS Engineering & Apple Ecosystem Fellowship",
    bannerImg: "/ada_bali.webp",
    bannerPosition: "object-[center_34%]",
    pillLabel: "Learner",
    dotClass: "bg-[#86868b]",
    tagline:
      "Progressing from user research and ideation to production-oriented iOS development and App Store releases.",
    leadSummary:
      "At the Apple Developer Academy @ BINUS in Bali, I immerse myself in an intensive 10-month professional fellowship centered on Challenge-Based Learning (CBL), human-centered design, and native Apple platform engineering. From deep exploratory research to shipping multi-platform applications, I collaborate in multidisciplinary teams to craft software that balances technical precision with genuine human empathy.",
    skills: [
      "Swift & SwiftUI",
      "SwiftData & CoreData",
      "ActivityKit (Live Activities & Dynamic Island)",
      "WidgetKit",
      "AVFoundation",
      "CoreTransferable & Spatial Math",
      "Go & PostgreSQL (PostGIS)",
      "Supabase Realtime",
      "UI/UX Design & Human Interface Guidelines",
      "Project Management & Team Collaboration",
      "Challenge-Based Learning (CBL)",
      "Usability Testing & Iteration",
    ],
    metrics: [
      {
        value: "6+",
        label: "CBL Challenges",
        sublabel: "From research to delivery",
      },
      {
        value: "4",
        label: "Shipped App Store Apps",
        sublabel: "Active production releases",
      },
      {
        value: "100%",
        label: "User-Centered Iteration",
        sublabel: "Stakeholder critiques & usability testing",
      },
      {
        value: "3",
        label: "Multidisciplinary Learning",
        sublabel: "PM, Design, Tech",
      },
    ],
    officialBullets: [
      "Completed more than 6 project-based challenges progressing from user research and ideation to production-oriented iOS development and independent product delivery.",
      "Built and shipped 4 iOS applications to the App Store using Swift, SwiftUI, ActivityKit, and Apple frameworks, including a group trip-tracking application backed by Go and PostgreSQL.",
      "Applied user-centered design and iterative development through stakeholder interviews, prototyping, usability testing, design critiques, and feedback-driven product iteration across multiple domains.",
    ],
    storySections: [
      {
        title: "Challenge-Based Learning & Multi-Domain Exploration",
        lead: "A structured, progressive framework moving from exploratory inquiry to production-grade deployment.",
        paragraphs: [
          "The Academy follows Apple's Challenge-Based Learning (CBL) framework. Across Nano, Mini, and Macro challenges, I was challenged to dive deep into unfamiliar domains—child emotional health, memory preservation, group travel logistics, and regional language revitalization.",
          "Rather than jumping straight to code, every challenge began with rigorous qualitative discovery: interviewing domain specialists such as clinical child psychologists, regional educators, and frequent travelers. This research phase defined the psychological safety guardrails for Kinario and Nomi, and the sub-2-second glanceability requirement for Omawe.",
        ],
        keyPoints: [
          {
            title: "Empathy-Driven Problem Scoping",
            description:
              "Uncovering unmet user friction through structured field interviews, behavioral observation, and empathy mapping before writing a single line of Swift.",
          },
          {
            title: "Rapid Iterative Prototyping",
            description:
              "Building rapid low-fidelity paper and Figma interactive prototypes, facilitating peer critique sessions, and stress-testing concepts with target users.",
          },
        ],
      },
      {
        title: "Engineering Native iOS & Full-Stack Systems",
        lead: "Architecting reliable, high-performance applications that delight users across the Apple platform.",
        paragraphs: [
          "Over the course of the fellowship, I designed, architected, and shipped 4 native iOS applications to the App Store and TestFlight. I prioritized modern Apple frameworks—SwiftUI for declarative, fluid interfaces, SwiftData for offline-first local persistence, and ActivityKit for glanceable Lock Screen Live Activities and Dynamic Island experiences.",
          "For Omawe—our group trip-tracking application—I architected a high-performance backend using Go and PostgreSQL with PostGIS extension. This full-stack system processes real-time geofenced coordinates, calculates member proximity, and delivers sub-2-second updates to clients while strictly preserving battery health and traveler privacy through time-boxed sessions.",
        ],
        keyPoints: [
          {
            title: "Dynamic Island & Live Activities",
            description:
              "Engineered real-time state push channels via ActivityKit, enabling glanceable trip status and capture sessions without requiring app foregrounding.",
          },
          {
            title: "Scalable Go & PostGIS Backend",
            description:
              "Constructed spatial queries and lightweight REST/WebSocket APIs handling concurrent group pings with minimal server footprint and zero bloat.",
          },
        ],
      },
      {
        title: "Design Critiques & Feedback-Driven Polish",
        lead: "Iterating relentlessly based on usability test findings and Apple Human Interface Guidelines.",
        paragraphs: [
          "Building software at the Academy taught me that the first version of an interface is never the final one. We held weekly design critique rounds with Apple mentors, identifying friction points in typography scale, contrast ratios, and tactile haptic feedback.",
          "In fraqments, for example, user feedback revealed that browsing memories linearly felt repetitive. We pivoted to an interactive 3D spatial constellation where memories float organically, turning a routine camera roll into an emotionally resonant experience.",
        ],
        keyPoints: [
          {
            title: "Quantitative Usability Sessions",
            description:
              "Benchmarking task completion rates, error recovery, and user confidence scores to guide architectural refactors.",
          },
          {
            title: "Strict HIG Compliance",
            description:
              "Polishing typography hierarchy, dynamic type adoption, dark mode fidelity, and fluid physics transitions.",
          },
        ],
      },
    ],
    gallery: [

    ],
    relatedAppIds: ["fraqments", "kinario", "omawe", "nomi", "bloobook", "newblie"],
    reflection:
      "The Apple Developer Academy shifted my perspective from being someone who merely writes code to becoming a well-rounded product builder. Learning and working across design, technology, and project management taught me how to collaborate seamlessly in multidisciplinary teams, lead agile sprints, and deliver cohesive products from ideation to production.",
  },
  {
    id: "telkomsel",
    company: "Telkomsel",
    shortCompany: "Telkomsel",
    location: "South Jakarta, Jakarta",
    role: "Hacker Enthusiast - Omnichannel Experience Design",
    period: "July 2025 – August 2025",
    category: "Enterprise Product & Omnichannel Experience",
    bannerImg: "/telkomsel.webp",
    bannerPosition: "object-[center_28%]",
    pillLabel: "R&D Intern",
    dotClass: "bg-[#ed0226]",
    tagline:
      "Transforming GraPARI Online self-service journeys through data-driven UX research, BRDs, and API mappings.",
    leadSummary:
      "During my internship at Telkomsel—Indonesia's largest telecommunications operator—I served as a Hacker Enthusiast within the Omnichannel Experience Design division. Embedded in a cross-functional Hustler-Hipster-Hacker team, I bridged business goals, user psychology, and technical feasibility to revitalize 4 key GraPARI Online features across subscription management and bill checkout.",
    skills: [
      "Omnichannel Experience Design",
      "User Research & Quantitative Surveys",
      "Qualitative In-Depth Interviews",
      "Business Requirement Documents (BRDs)",
      "API Mapping & Technical Feasibility",
      "Interactive UX Prototyping",
      "System Usability Scale (SUS) Testing",
      "Functional Unit Testing (FUT)",
      "Hustler-Hipster-Hacker Squad Collaboration",
    ],
    metrics: [
      {
        value: "77.5",
        label: "SUS Usability Score",
        sublabel: "Grade 'A' validated usability rating",
      },
      {
        value: "319",
        label: "Survey Responses",
        sublabel: "Quantitative data across demographics",
      },
      {
        value: "15",
        label: "In-Depth Interviews",
        sublabel: "Qualitative behavioral discovery",
      },
      {
        value: "4",
        label: "Enhanced Features",
        sublabel: "Mobile/fixed subscriptions & bill pay",
      },
    ],
    officialBullets: [
      "Collaborated in a cross-functional Hustler-Hipster-Hacker team to enhance 4 GraPARI Online features covering mobile/fixed subscriptions and bill payments.",
      "Conducted 15 user interviews and 319 survey responses, translating insights into BRDs, UX prototypes, research decks, and API mappings.",
      "Validated the redesigned experience with 10 users, achieving a 77.5 SUS score, and supported Functional Unit Testing through requirement-based test scenarios.",
    ],
    storySections: [
      {
        title: "The Problem: Omnichannel Friction & Self-Service Drop-Off",
        lead: "Bridging the gap between physical walk-in GraPARI centers and digital self-service adoption.",
        paragraphs: [
          "GraPARI Online serves as Telkomsel's premier digital customer service portal, designed to handle fixed-broadband (IndiHome) and mobile cellular (Telkomsel Halo/Prepaid) subscriptions, plan upgrades, and payment checkouts.",
          "However, customers frequently encountered friction in complex bill breakdowns, unclear multi-step checkout processes, and opaque package configuration options. This resulted in cart abandonment and drove high customer foot traffic back into physical GraPARI branch offices for routine inquiries that should have been frictionless online.",
        ],
        keyPoints: [
          {
            title: "Information Overload",
            description:
              "Previous layouts cluttered technical telecom package terminology, confusing everyday subscribers attempting to switch plans.",
          },
          {
            title: "Checkout & Verification Roadblocks",
            description:
              "Fragmented bill payment steps led to transaction drop-offs and redundant customer support inquiries.",
          },
        ],
      },
      {
        title: "Large-Scale Research: 319 Surveys & 15 Deep Interviews",
        lead: "Turning quantitative telemetry and qualitative customer voices into structured product requirements.",
        paragraphs: [
          "To understand user behavior with precision, we deployed an expansive mixed-methods research initiative across multiple user segments in Indonesia. We gathered 319 survey responses to uncover statistical pain points, and conducted 15 in-depth, one-on-one user interviews to observe actual checkout flows and emotional roadblocks.",
          "As the technical 'Hacker' in our squad, I translated these human insights directly into actionable Business Requirement Documents (BRDs), executive research decks, high-fidelity UX prototypes, and comprehensive API endpoint mappings connecting frontend interface states with Telkomsel's core legacy and microservices architecture.",
        ],
        keyPoints: [
          {
            title: "Comprehensive BRD Authoring",
            description:
              "Documented end-to-end edge cases, error handling, session timeouts, and security policies for enterprise sign-off.",
          },
          {
            title: "Full API Mapping & Endpoint Specs",
            description:
              "Mapped every redesigned UI state to backend subscription query endpoints, validation schemas, and payment gateway callbacks.",
          },
        ],
      },
      {
        title: "Validation, 77.5 SUS Score & Functional Unit Testing",
        lead: "Validating redesigned flows with real customers and supporting enterprise QA readiness.",
        paragraphs: [
          "We tested the redesigned GraPARI Online experience with 10 representative users through rigorous task-based usability testing. The result was a 77.5 System Usability Scale (SUS) score—surpassing the 68 industry average and placing the experience firmly in the 'A' grade usability tier.",
          "Following validation, I formulated requirement-based test scenarios to support Functional Unit Testing (FUT). This ensured that enterprise engineering teams had clear acceptance criteria, test matrices, and expected status codes across all 4 enhanced feature modules.",
        ],
        keyPoints: [
          {
            title: "77.5 SUS Score Achievement",
            description:
              "Participants completed plan switching and bill payments with significantly reduced cognitive load and zero fatal errors.",
          },
          {
            title: "FUT Test Matrix Scenarios",
            description:
              "Authored concrete test scripts covering happy paths, network fallback states, and payment gateway timeout handshakes.",
          },
        ],
      },
    ],
    gallery: [
    ],
    reflection:
      "Working on GraPARI Online at Telkomsel taught me how enterprise-scale software operates. When dealing with millions of subscribers, engineering is not just about writing elegant code—it's about understanding complex business requirements, authoring bulletproof API mappings, and verifying every detail through structured user validation.",
  },
  {
    id: "motion-lab",
    company: "Mobile Innovation Laboratory",
    shortCompany: "Motion Lab",
    location: "Telkom University, Bandung",
    role: "Mobile Programming Member",
    period: "December 2023 – August 2024",
    category: "Academic Research & Applied Mobile Development",
    bannerImg: "/motion2.webp",
    bannerPosition: "object-[center_28%]",
    pillLabel: "Mobile Developer",
    dotClass: "bg-[#991b1b]",
    tagline:
      "Developing and maintaining cross-platform Flutter applications to deliver functional university research outputs.",
    leadSummary:
      "At the Mobile Innovation Laboratory (Motion Lab) at Telkom University, I served as a core Mobile Programming Member. Motion Lab is the premier mobile research hub on campus, bridging academic computer science exploration with real-world mobile product delivery. I engineered cross-platform mobile solutions using Flutter, collaborated closely with faculty researchers and UI/UX designers, and mentored study groups.",
    skills: [
      "Flutter & Dart",
      "Cross-Platform iOS & Android Optimization",
      "State Management (BLoC & Provider)",
      "RESTful API Integration",
      "UI/UX Implementation & Pixel Perfection",
      "Performance Profiling & Memory Debugging",
      "Technical Mentorship & Study Groups",
      "Git Workflow & CI/CD Pipelines",
    ],
    metrics: [
      {
        value: "Flutter",
        label: "Cross-Platform Delivery",
        sublabel: "Unified codebase across iOS & Android",
      },
      {
        value: "Research",
        label: "Academic to Product",
        sublabel: "Functional outputs for faculty projects",
      },
      {
        value: "Best Hacker",
        label: "Nominated in MotionHack",
        sublabel: "Recognized for rapid technical prototyping",
      },
    ],
    officialBullets: [
      "Developed and maintained cross-platform mobile applications using Flutter to support research projects and deliver functional research outputs.",
      "Collaborated with researchers and UI/UX designers to translate requirements into usable mobile interfaces while maintaining cross-platform performance.",
      "Contributed to feature implementation, debugging, and application refinement, ensuring consistency and reliability across supported platforms.",
    ],
    storySections: [
      {
        title: "Translating Academic Research into Usable Mobile Products",
        lead: "Transforming theoretical research models and academic papers into responsive mobile experiences.",
        paragraphs: [
          "Academic software projects often suffer from a gap between experimental backend algorithms and user-facing accessibility. In Motion Lab, my primary responsibility was bridging this gap by engineering production-grade Flutter client applications.",
          "I collaborated directly with senior faculty researchers, graduate fellows, and student UI/UX designers. We translated formal research specifications and complex algorithmic workflows into clean, responsive mobile interfaces that maintained consistent high performance across diverse smartphone specifications.",
        ],
        keyPoints: [
          {
            title: "Cross-Platform Architectural Consistency",
            description:
              "Engineered scalable Flutter codebases utilizing clean architecture principles, separating presentation, domain, and data layers.",
          },
          {
            title: "Responsive Multi-Device Layouts",
            description:
              "Handled varying screen densities, aspect ratios, and platform-specific navigation idioms across both iOS and Android.",
          },
        ],
      },
      {
        title: "Engineering Refinement, Debugging & Performance Profiling",
        lead: "Eliminating UI jank, optimizing API payload serialization, and resolving deep platform edge cases.",
        paragraphs: [
          "Delivering reliable research software requires rigorous engineering discipline. I implemented automated logging, profiled Flutter widget rebuild trees to prevent unnecessary redraws, and resolved tricky asynchronous race conditions when consuming real-time sensor and research telemetry data.",
          "Through active debugging and code reviews, our team ensured that client applications remained rock-solid during live demonstrations, stakeholder evaluations, and academic research data collection rounds.",
        ],
        keyPoints: [
          {
            title: "Performance & Frame Budgeting",
            description:
              "Optimized expensive list views and image caching.",
          },
          {
            title: "Robust Network & Error Handling",
            description:
              "Engineered retry mechanisms, graceful offline state fallbacks, and intuitive user-facing error dialogues.",
          },
        ],
      },
      {
        title: "Lab Community, Hackathons & Best Hacker Nomination",
        lead: "Active peer mentorship, technical workshops, and competitive hackathon participation.",
        paragraphs: [
          "Beyond coding research apps, Motion Lab fostered a culture of rapid innovation and peer learning. I actively served as a mentor in laboratory study groups, guiding junior members through Dart language fundamentals, widget lifecycle management, and Git best practices.",
          "In the annual internal MotionHack competition, our team engineered a high-impact mobile prototype under intense time pressure, earning me the honor of being nominated as 'The Best Hacker' in recognition of technical craftsmanship and execution speed.",
        ],
        keyPoints: [
          {
            title: "Nominated as The Best Hacker",
            description:
              "Recognized by laboratory senior leads for rapid prototyping excellence, architectural clarity, and problem-solving.",
          },
          {
            title: "Speaker & Study Group Mentor",
            description:
              "Led technical response sessions and study groups for university students taking core mobile programming courses.",
          },
        ],
      },
    ],
    gallery: [
      {
        src: "/motion1.webp",
        title: "Nominated as The Best Hacker",
        caption:
          "Recognition for technical execution and rapid prototyping at MotionHack.",
      },
      {
        src: "/motion2.webp",
        title: "Motion Lab 8.0 Family",
        caption:
          "Mobile Innovation Laboratory member cohort and collaborative workspace.",
      },
      {
        src: "/motion3.webp",
        title: "MC at Networking Night",
        caption:
          "Hosting the annual laboratory networking and technical showcase evening.",
      },
      {
        src: "/motion4.webp",
        title: "Public Relations and Design",
        caption:
          "Leading promotional design and technical communications for lab events.",
      },
      {
        src: "/motion5.webp",
        title: "It's a Wrap Study Group!",
        caption:
          "Concluding an intensive multi-week mobile programming study group series.",
      },
      {
        src: "/motion6.webp",
        title: "Mentor at Study Group",
        caption:
          "Providing hands-on code reviews and debugging support for junior lab peers.",
      },
      {
        src: "/motion7.webp",
        title: "Speaker for Mobile Course Response",
        caption:
          "Delivering a technical briefing on mobile development architectures to university students.",
      },
    ],
    reflection:
      "Motion Lab gave me my foundational engineering discipline. Developing software for real research outputs taught me that an app isn't finished when it works on my simulator—it's finished when it performs seamlessly under memory constraints and unpredictable network conditions across everyday devices.",
  },
  {
    id: "gdgoc",
    company: "Google Developer Group on Campus",
    shortCompany: "GDGoC Telkom University",
    location: "Telkom University, Bandung",
    role: "Mobile Development Mentor & Curriculum Lead",
    period: "December 2023 – September 2025",
    category: "Developer Community Leadership & Technical Education",
    bannerImg: "/gdgoc2.webp",
    bannerPosition: "object-[center_28%]",
    pillLabel: "Mentor & Curriculum",
    dotClass: "bg-[#1a73e8]",
    tagline:
      "Evolving from Flutter bootcamp learner and Hackfest strategist into lead mobile curriculum architect and mentor.",
    leadSummary:
      "My two-year journey with Google Developer Group on Campus (GDGoC) Telkom University represents an evolution from eager learner to technical community leader. Starting as a Mobile Development Member, I mastered cross-platform architectures and competed in Hackfest 2024 as System Analyst and Strategist. Subsequently promoted to Mobile Development Mentor and Curriculum Lead, I architected learning roadmaps and guided dozens of aspiring mobile developers.",
    skills: [
      "Curriculum Architecture & Educational Design",
      "Technical Mentorship & Code Reviews",
      "Flutter & Cross-Platform Architecture",
      "Hackfest 2024 System Analysis",
      "Digital Business Strategy & Concept Ideation",
      "Public Speaking & Workshop Delivery",
      "App Deployment & Play Store / App Store Prep",
      "Community Leadership & Event Organization",
    ],
    metrics: [
      {
        value: "2-Year",
        label: "Progressive Journey",
        sublabel: "Member (2023–24) to Lead (2024–25)",
      },
      {
        value: "Curriculum",
        label: "Structured Mobile Path",
        sublabel: "Modular learning syllabus & practical labs",
      },
      {
        value: "Hackfest '24",
        label: "System Analyst & Strategist",
        sublabel: "National-level prototype delivery",
      },
      {
        value: "Dozens",
        label: "Developers Mentored",
        sublabel: "Code review, debugging & deployment guidance",
      },
    ],
    officialBullets: [
      "Phase 1: Completed a Flutter bootcamp focused on cross-platform mobile development and scalable application architecture.",
      "Phase 1: Applied mobile development skills in Hackfest 2024 as a System Analyst and Digital Business Strategist, contributing to a mobile solution prototype.",
      "Phase 1: Collaborated with team members to translate business requirements and user needs into a functional mobile product concept.",
      "Phase 2: Mentored junior participants in mobile development and application deployment, providing technical guidance throughout their projects.",
      "Phase 2: Developed technical learning materials covering mobile development concepts, tools, and development practices.",
      "Phase 2: Structured the mobile development learning path and curriculum to guide participants through progressive technical topics and project-based learning.",
    ],
    storySections: [
      {
        title: "Phase 1: The Member Journey & Hackfest 2024 Strategy",
        lead: "December 2023 – October 2024: Mastering scalable mobile architecture and competing in national hackathons.",
        paragraphs: [
          "I joined GDGoC Telkom University as a Mobile Development Member, participating in an intensive Flutter bootcamp focused on clean code, modular folder structures, and scalable state management. This bootcamp provided deep hands-on foundations in cross-platform mobile engineering.",
          "During Hackfest 2024—a premier national technology competition—I expanded my contribution beyond code by taking on the dual role of System Analyst and Digital Business Strategist. I analyzed market dynamics, mapped user journeys, and collaborated closely with developers and UI/UX designers to translate complex business requirements into a functional mobile solution prototype.",
        ],
        keyPoints: [
          {
            title: "Scalable Architecture Bootcamp",
            description:
              "Practiced clean separation of business logic from UI widgets, dependency injection, and REST API consumption.",
          },
          {
            title: "Hackfest 2024 Systems & Strategy",
            description:
              "Created architectural flowcharts, defined functional specifications, and pitched the prototype to judges.",
          },
        ],
      },
      {
        title: "Phase 2: Leading Curriculum Design & Technical Mentorship",
        lead: "November 2024 – September 2025: Structuring progressive learning paths and empowering the next cohort.",
        paragraphs: [
          "Recognized for my technical commitment and collaborative leadership, I was selected to serve as Mobile Development Mentor and Curriculum Lead for the subsequent academic cycle. My mission was to design an end-to-end learning path that took participants from foundational Dart basics to deploying functional mobile applications.",
          "I authored comprehensive learning modules, slide decks, and hands-on repository templates. I introduced progressive topics: reactive state management, asynchronous programming, asynchronous API networking, local database persistence, and App Store / Google Play release checklists.",
        ],
        keyPoints: [
          {
            title: "Progressive Learning Path",
            description:
              "Structured a multi-stage curriculum combining live lecture breakdowns, hands-on lab exercises, and capstone project milestones.",
          },
          {
            title: "Authoring Technical Assets",
            description:
              "Built open-source starter codebases, interactive slide decks, and troubleshooting guides addressing common mobile build pitfalls.",
          },
        ],
      },
      {
        title: "Hands-On Mentorship & Deployment Guidance",
        lead: "One-on-one code reviews, live debugging workshops, and production deployment coaching.",
        paragraphs: [
          "True mentorship happens in the trenches. Throughout the cohort, I conducted one-on-one code reviews for junior participants, offering constructive advice on Git branching, widget decomposition, and performance optimization.",
          "I hosted dedicated debugging office hours and guided student teams through the often intimidating process of generating signing certificates, configuring Android build variants, and preparing production-ready release bundles.",
        ],
        keyPoints: [
          {
            title: "Rigorous Code Reviews",
            description:
              "Helped students transition from messy monolithic files to clean, modular, and maintainable project architectures.",
          },
          {
            title: "Deployment & Release Coaching",
            description:
              "De-mystified App Store and Play Store guidelines, signing keys, app permissions, and store asset preparation.",
          },
        ],
      },
    ],
    gallery: [
      {
        src: "/gdgoc2.webp",
        title: "GDGoC Core Team Cohort",
        caption:
          "Leading technical study groups and workshops with Google Developer Group on Campus Telkom University.",
      },
      {
        src: "/gdgoc1.webp",
        title: "Core Team of The Month",
        caption:
          "Recognized for outstanding contributions in technical mentorship and community leadership within Google Developer Group on Campus.",
      },
      {
        src: "/gdgoc3.webp",
        title: "Mentor and Curriculum Core Team",
        caption:
          "Facilitating structured learning journey for participants in the Google Developer Group on Campus",
      },
      {
        src: "/gdgoc5.webp",
        title: "Mentorship Office Hours",
        caption:
          "One-on-one technical consultation and architecture guidance for junior developers.",
      },
    ],
    reflection:
      "Teaching is the highest form of learning. Mentoring aspiring developers at GDGoC forced me to understand mobile engineering down to its core fundamentals—if you can't explain why a widget rebuilds or how an asynchronous stream operates to a junior developer, you don't truly understand it yourself.",
  },
];
