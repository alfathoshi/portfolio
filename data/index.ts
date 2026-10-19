export const navItems = [
  { name: "Overview", link: "#overview" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I don’t just build features, but I think about how they actually feel to the user.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "h-full w-full",
    titleClassName: "justify-end dark:text-black",
    img: "/portrait2.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Mobile enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building my portfolio using Next.js",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 8,
    tag: "Moments Journal App",
    title: "fraqments",
    des: "fraqments transforms how you capture and revisit memories through an interactive 3D spatial constellation. Curate memories into themed moment folders, interact with dynamic widgets, and track live sessions seamlessly via Dynamic Island & Live Activities.",
    img: "/fragments_1.png",
    screenshots: [
      "/fragments_1.png",
      "/fragments_2.png",
      "/fragments_3.png",
      "/fragments_4.png",
      "/fragments_5.png"
    ],
    iconLists: ["/swift.svg", "/swiftui.png", "/swiftdata.webp", "/supabase.png"],
    link: "https://apps.apple.com/za/app/fragments-capture-the-moment/id6812455792",
    github: "https://github.com/alfathoshi/fragments",
    privacyPolicy: "/privacy/fraqments",
  },
  {
    id: 7,
    tag: "Scenario-Based Puzzle Game",
    title: "Kinario",
    des: "Kinario is a scenario-based puzzle game that helps first-time volunteers, educators, and caregivers learn how to respond empathetically to children's emotions. Grounded in 'The Whole-Brain Child' principles, players guide two kids—Rhodey and Jojo—across interactive School, Playground, and Swimming Pool chapters, complete with a rescue mini-game, illustrated Guidebook, and Apple Game Center integration.",
    img: "/kinario/kinario-poster-promotional-9-16.png",
    screenshots: [
      "/kinario/kinario_mainmenu.PNG",
      "/kinario/kinario_levelselect.PNG",
      "/kinario/kinario_uncompletedlevel.PNG",
      "/kinario/kinario_completedlevel.PNG",
      "/kinario/kinario_result.PNG",
      "/kinario/kinario_helpjojohint.PNG",
      "/kinario/kinario_helpjojominigame.PNG",
      "/kinario/kinario_guidebook.PNG",
      "/kinario/kinario_reference.PNG",
      "/kinario/kinario_aboutus.PNG",
    ],
    iconLists: ["/swift.svg", "/swiftui.png"],
    link: "https://apps.apple.com/pe/app/kinario/id6800217669?l=en-GB&platform=vision",
  },
  {
    id: 6,
    tag: "Group Trip Tracking App",
    title: "Omawe",
    des: "Omawe eliminates the stress of coordinating group road trips and meetups. By pairing glanceable Lock Screen Live Activities with a high-performance Go & PostGIS backend, Omawe gives travelers sub-2-second awareness of who's arrived, who's en route, and who's delayed—cutting 'where are you?' messaging down to zero while protecting privacy through time-boxed sharing.",
    img: "/omawe_8.png",
    screenshots: [
      "/omawe_1.png",
      "/omawe_2.png",
      "/omawe_3.png",
      "/omawe_4.png",
      "/omawe_5.png",
      "/omawe_6.png",
      "/omawe_7.png",
      "/omawe_8.png",
      "/omawe_9.png",
      "/omawe_10.png"
    ],
    iconLists: ["/swift.svg", "/swiftui.png", "/swiftdata.webp"],
    link: "https://apps.apple.com/id/app/omawe-group-trip-tracker/id6788641544",
    website: "https://omaweapp.my.id/",
  },
  {
    id: 5,
    tag: "Children's Sex Education App",
    title: "Nomi",
    des: "Nomi transforms child sex education and bodily autonomy into an engaging, shame-free adventure for kids aged 6–9. Built at the Apple Developer Academy Bali, Nomi pairs interactive storybooks, tactile boundary sorting, and a PIN-protected Parent Dashboard to empower children with safe-touch literacy and open trusted communication channels with caregivers.",
    img: "/nomi_6.png",
    screenshots: [
      "/nomi_1.png",
      "/nomi_2.png",
      "/nomi_3.png",
      "/nomi_4.png",
      "/nomi_5.png",
      "/nomi_6.png",
      "/nomi_7.png",
      "/nomi_8.png",
      "/nomi_9.png"
    ],
    iconLists: ["/swift.svg", "/swiftui.png", "/swiftdata.webp"],
    link: "https://testflight.apple.com/join/CfVMyB8z",
  },
  {
    id: 4,
    tag: "Scrapbook App",
    title: "BlooBook",
    des: "BlooBook revives the tactile nostalgia of analog scrapbooking for the digital age. Built at the Apple Developer Academy Bali, it transforms everyday smartphone snapshots into vintage polaroids and perforated postage stamps. With a fluid, multi-touch canvas workspace, interactive physics, custom stickers, and ImageRenderer export, BlooBook turns scattered photo rolls into intentional, shareable memory albums.",
    img: "/bloobook_6.png",
    screenshots: [
      "/bloobook_1.png",
      "/bloobook_2.png",
      "/bloobook_3.png",
      "/bloobook_4.png",
      "/bloobook_5.png",
      "/bloobook_6.png"
    ],
    iconLists: ["/swift.svg", "/swiftui.png", "/swiftdata.webp"],
    link: "https://testflight.apple.com/join/RPawJCsC",
  },
  {
    id: 3,
    tag: "Balinese Language Dictionary App",
    title: "Newblie",
    des: "Newblie is an interactive Balinese language dictionary application designed to help newcomers, students, and travelers connect with local culture in Bali. Built with SwiftUI and SwiftData at the Apple Developer Academy Bali, Newblie features gesture-driven 3D flashcards, categorized conversational phrasebooks, and a personal dictionary for immersive on-the-go learning.",
    img: "/project5.png",
    screenshots: ["/project5.png"],
    iconLists: ["/swift.svg", "/swiftui.png", "/swiftdata.webp"],
    link: "https://testflight.apple.com/join/DHNasJn6",
    github: "https://github.com/alfathoshi/Newblie",
  },
  {
    id: 2,
    tag: "Mental Health App",
    title: "Teman Bicara",
    des: "Teman Bicara is a mobile application that provides a platform for users to connect with each other and share their thoughts and ideas.",
    img: "/project1.png",
    screenshots: ["/project1.png"],
    iconLists: ["/flutter.svg", "/firebase.svg", "/gemini.svg", "/laravel.svg", "/midtrans.png", "/nginx.svg", "/azure.svg", "/mysql.svg"],
    link: "https://github.com/TemanBicara/temanbicara-mobile",
  },
  {
    id: 1,
    tag: "Immunization App",
    title: "BeHealthy",
    des: "BeHealthy is a mobile application that provides a platform for users to track their immunization records and get reminders for upcoming vaccinations.",
    img: "/project3.png",
    screenshots: ["/project3.png"],
    iconLists: ["/flutter.svg", "/firebase.svg"],
    link: "https://github.com/alfathoshi/team13_motionhack",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian",
    name: "Michael Johnson",
    designation: "Director of AlphaStream Technologies",
    src: "/asprak1.jpg"
  },
  {
    quote:
      "Collaborating with Adrian",
    name: "Michael Johnson",
    designation: "Director of AlphaStream Technologies",
    src: "/asprak2.jpg"
  },
  {
    quote:
      "Collaborating with Adrian",
    name: "Michael Johnson",
    designation: "Director of AlphaStream Technologies",
    src: "/abdimas1.jpg"
  },
  {
    quote:
      "Collaborating with Adrian",
    name: "Michael Johnson",
    designation: "Director of AlphaStream Technologies",
    src: "/abdimas2.jpg"
  },

];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export * from "./experiences";

export const workExperience = [
  {
    id: 1,
    title: "Apple Developer Academy @ Binus University",
    role: "Learner",
    location: "Kuta, Bali",
    period: "March 2026 – Present",
    desc: "Completed 6+ project-based challenges, shipping 4 iOS applications to the App Store using Swift, SwiftUI, ActivityKit, and Go/PostgreSQL backend.",
    className: "md:col-span-2",
    thumbnail: "/ada_bali.jpg",
  },
  {
    id: 2,
    title: "Telkomsel",
    role: "Hacker Enthusiast - Omnichannel Experience Design",
    location: "South Jakarta, Jakarta",
    period: "July 2025 – August 2025",
    desc: "Collaborated in a Hustler-Hipster-Hacker squad to enhance 4 GraPARI Online features, synthesized 319 survey responses and 15 interviews, achieving a 77.5 SUS score.",
    className: "md:col-span-2",
    thumbnail: "/telkomsel.jpg",
  },
  {
    id: 3,
    title: "Mobile Innovation Laboratory",
    role: "Mobile Programming Member",
    location: "Telkom University, Bandung",
    period: "December 2023 – August 2024",
    desc: "Developed cross-platform Flutter applications to support academic research projects and deliver functional outputs",
    className: "md:col-span-2",
    thumbnail: "/motion2.jpeg",
  },
  {
    id: 4,
    title: "Google Developer Group on Campus",
    role: "Mobile Development Mentor and Curriculum",
    location: "Telkom University, Bandung",
    period: "December 2023 – September 2025",
    desc: "Evolved from bootcamp member and Hackfest 2024 Strategist to lead Mentor, structuring mobile learning paths and mentoring junior participants.",
    className: "md:col-span-2",
    thumbnail: "/gdgoc2.jpg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/github.svg",
    link: "https://github.com/alfathoshi",
  },
  {
    id: 2,
    img: "/linkedin.svg",
    link: "https://www.linkedin.com/in/alfathoshi/",
  },
  {
    id: 3,
    img: "/instagram.svg",
    link: "https://www.instagram.com/_alfathoshi/",
  },
];

export const items = [
  {
    title: "Nominated as The Best Hacker",
    image:
      "/motion1.jpg",
    className: "absolute top-10 left-[20%] rotate-[-5deg]",
  },
  {
    title: "Motion Lab 8.0",
    image:
      "/motion2.jpeg",
    className: "absolute top-40 left-[25%] rotate-[-7deg]",
  },
  {
    title: "MC at Networking Night",
    image:
      "/motion3.jpg",
    className: "absolute top-5 left-[40%] rotate-[8deg]",
  },
  {
    title: "Public Relations and Design",
    image:
      "/motion4.jpg",
    className: "absolute top-32 left-[55%] rotate-[10deg]",
  },
  {
    title: "It's a Wrap Study Group!",
    image:
      "/motion5.png",
    className: "absolute top-20 right-[35%] rotate-[2deg]",
  },
  {
    title: "Mentor at Study Group",
    image:
      "/motion6.png",
    className: "absolute top-24 left-[45%] rotate-[-7deg]",
  },
  {
    title: "Speaker for Mobile Course Response",
    image:
      "/motion7.jpg",
    className: "absolute top-8 left-[30%] rotate-[4deg]",
  },
];