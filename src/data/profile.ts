// All site content lives here. Edit this file to update the portfolio.

import rainIcon from "../assets/icons/cloud-with-rain.png";
import martialIcon from "../assets/icons/martial-arts-uniform.png";
import scooterIcon from "../assets/icons/motor-scooter.png";
import recycleIcon from "../assets/icons/recycling-symbol.png";
import carIcon from "../assets/icons/automobile.png";
import autowashShot from "../assets/projects/autowash.webp";

export const profile = {
  name: "Lê Nguyễn Hoàng Anh",
  shortName: "Hoàng Anh",
  handle: "hzanhle",
  role: "Fullstack Developer",
  tagline: "I build web apps with .NET and React, and lately I've been wiring AI into them.",
  location: "Ho Chi Minh City, Vietnam",
  email: "leon2004work@gmail.com",
  github: "https://github.com/hzanhle",
  linkedin: "https://www.linkedin.com/in/hzanhle",
  // Put your CV at public/resume.pdf, then set this to "/resume.pdf" to show the Resume buttons.
  resumeUrl: "",
  openToWork: true,
};

export const about = [
  "I'm a fullstack developer based in Ho Chi Minh City, finishing my Software Engineering degree at FPT University (class of 2026). Most of my work lives in C# / .NET and TypeScript: React and Next.js on the frontend, ASP.NET Core, NestJS or Spring Boot on the backend.",
  "In four of my five main team projects, I ended up as the top contributor by commits. Lately I've been focused on putting AI into real products: vision models that read traffic-camera images, and pose-estimation pipelines running behind a job queue.",
  "I'm also building my cloud skills on AWS through the First Cloud Journey program. When I'm not doing that, I make Roblox games in Lua.",
];

export const stats = [
  { value: 5, suffix: "", label: "Main team projects" },
  { value: 398, suffix: "", label: "Commits across them" },
  { value: 4, suffix: "/5", label: "Projects as top contributor" },
  { value: 2026, suffix: "", label: "Graduating from FPT University" },
];

export type FocusArea = { title: string; icon: "frontend" | "backend" | "ai"; text: string; tags: string[] };

export const focusAreas: FocusArea[] = [
  {
    title: "Frontend",
    icon: "frontend",
    text: "Responsive, role-based web apps with clean state management and fast data fetching.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "backend",
    text: "REST APIs, auth, payments, job queues and real-time updates that hold up in production.",
    tags: ["ASP.NET Core", "NestJS", "Spring Boot", "SignalR"],
  },
  {
    title: "AI & Cloud",
    icon: "ai",
    text: "Vision models and pose estimation inside real products, deployed on serverless AWS.",
    tags: ["Computer Vision", "TensorFlow", "AWS", "Docker"],
  },
];

export type SkillKey =
  | "csharp" | "typescript" | "javascript" | "java" | "python" | "sql"
  | "react" | "nextjs" | "reactnative" | "tailwind" | "vite" | "flutter"
  | "dotnet" | "nestjs" | "nodejs" | "spring" | "fastapi"
  | "sqlserver" | "postgres" | "redis" | "prisma" | "supabase" | "firebase"
  | "aws" | "docker" | "git" | "github" | "githubactions" | "vercel"
  | "tensorflow" | "lua";

export const skillGroups: { title: string; items: { key: SkillKey; label: string }[] }[] = [
  {
    title: "Languages",
    items: [
      { key: "csharp", label: "C#" },
      { key: "typescript", label: "TypeScript" },
      { key: "javascript", label: "JavaScript" },
      { key: "java", label: "Java" },
      { key: "python", label: "Python" },
      { key: "sql", label: "SQL" },
    ],
  },
  {
    title: "Frontend & Mobile",
    items: [
      { key: "react", label: "React" },
      { key: "nextjs", label: "Next.js" },
      { key: "reactnative", label: "React Native" },
      { key: "tailwind", label: "Tailwind CSS" },
      { key: "vite", label: "Vite" },
      { key: "flutter", label: "Flutter" },
    ],
  },
  {
    title: "Backend",
    items: [
      { key: "dotnet", label: "ASP.NET Core" },
      { key: "nestjs", label: "NestJS" },
      { key: "nodejs", label: "Node.js" },
      { key: "spring", label: "Spring Boot" },
      { key: "fastapi", label: "FastAPI" },
    ],
  },
  {
    title: "Data",
    items: [
      { key: "sqlserver", label: "SQL Server" },
      { key: "postgres", label: "PostgreSQL" },
      { key: "redis", label: "Redis" },
      { key: "prisma", label: "Prisma" },
      { key: "supabase", label: "Supabase" },
      { key: "firebase", label: "Firebase" },
    ],
  },
  {
    title: "Cloud, DevOps & AI",
    items: [
      { key: "aws", label: "AWS" },
      { key: "docker", label: "Docker" },
      { key: "githubactions", label: "GitHub Actions" },
      { key: "vercel", label: "Vercel" },
      { key: "git", label: "Git" },
      { key: "tensorflow", label: "TensorFlow" },
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  summary: string;
  highlights: string[];
  tags: string[];
  team: string;
  commits: string;
  period: string;
  links: { demo?: string; repo?: string };
  cover: { icon: string; from: string; to: string; scene: "map" | "pose" | "booking" | "report" | "image"; image?: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "hcmrainvision",
    name: "HCMRainVision",
    summary:
      "Real-time rain and traffic monitoring for Ho Chi Minh City, built from public traffic cameras and a vision model.",
    highlights: [
      "Crawls traffic-camera images on a schedule and classifies rain level and traffic state with a Qwen vision model.",
      "ASP.NET Core backend with PostGIS spatial queries, background workers and live map updates over SignalR.",
      "Expo / React Native app with maps and push alerts when heavy rain hits a subscribed area.",
    ],
    tags: ["ASP.NET Core", "PostGIS", "SignalR", "React Native", "Docker"],
    team: "Team of 2",
    commits: "Top contributor · 46 of 60 commits",
    period: "May – Jul 2026",
    links: {},
    cover: { icon: rainIcon, from: "#6366f1", to: "#06b6d4", scene: "map" },
    featured: true,
  },
  {
    slug: "martial-arts-tracker",
    name: "Martial Arts Tracker",
    summary: "AI-assisted training platform for martial arts fighters, coaches and doctors.",
    highlights: [
      "Training videos go through a BullMQ / Redis queue to a Python worker that runs YOLO-Pose to score kicks.",
      "Role-based Next.js app for schedules, lesson plans, AI review and medical clearance.",
    ],
    tags: ["Next.js", "NestJS", "Python", "Redis", "Prisma"],
    team: "Team of 4",
    commits: "Top contributor · 137 commits",
    period: "Sep 2026 – Now",
    links: {},
    cover: { icon: martialIcon, from: "#f43f5e", to: "#7c3aed", scene: "pose" },
  },
  {
    slug: "ev-rental",
    name: "EV Station-Based Rental",
    summary: "Full-stack platform for renting electric vehicles across stations, with online payments.",
    highlights: [
      "OTP sign-up, JWT auth and ID / driver's license verification.",
      "Multi-step booking with live availability, VNPay and PayOS payments, and digital contracts.",
    ],
    tags: [".NET 8", "React 19", "SQL Server", "VNPay"],
    team: "Team of 4",
    commits: "113 commits",
    period: "Sep 2025 – Jan 2026",
    links: { repo: "https://github.com/hzanhle/SWP391-GROUP2" },
    cover: { icon: scooterIcon, from: "#10b981", to: "#0ea5e9", scene: "booking" },
  },
  {
    slug: "waste-collection",
    name: "Waste Collection System",
    summary: "Role-based platform for urban waste reporting and collection, with AI waste classification.",
    highlights: [
      "Built the AI module: a TensorFlow image classifier served through FastAPI.",
      "Spring Boot API with role-based access for citizens, operators, collectors and admins.",
    ],
    tags: ["Spring Boot", "React", "TensorFlow", "FastAPI"],
    team: "Team of 4",
    commits: "Top contributor · 64 of 95 commits",
    period: "Jan – Apr 2026",
    links: {},
    cover: { icon: recycleIcon, from: "#65a30d", to: "#0d9488", scene: "report" },
  },
  {
    slug: "autowash",
    name: "AutoWash",
    summary: "Car wash management web app with phone-number sign-in and a NestJS backend.",
    highlights: [
      "Next.js 16 App Router frontend with TanStack Query, Zustand and shadcn/ui.",
      "Firebase phone authentication backed by a NestJS REST API with Prisma.",
    ],
    tags: ["Next.js", "NestJS", "TanStack Query", "Firebase"],
    team: "Team of 3",
    commits: "Top contributor · 38 of 99 commits",
    period: "May – Jul 2026",
    links: {
      demo: "https://car-washed-management.vercel.app",
      repo: "https://github.com/hzanhle/Car_washed_management",
    },
    cover: { icon: carIcon, from: "#f97316", to: "#db2777", scene: "image", image: autowashShot },
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  kind: "work" | "education";
  points: string[];
};

export const timeline: TimelineItem[] = [
  {
    period: "Sep 2025 – Dec 2025",
    title: "Cloud Intern · First Cloud Journey",
    org: "Amazon Web Services Vietnam",
    kind: "work",
    points: [
      "Built an IoT security monitoring and alert system for smart homes with a 5-person team.",
      "Worked on a serverless backend with AWS IoT Core, Lambda, API Gateway, DynamoDB, S3 and SES.",
      "Helped ship the dashboard on Amplify with Cognito auth, and ran end-to-end testing before the demo.",
    ],
  },
  {
    period: "Class of 2026",
    title: "Bachelor's in Software Engineering",
    org: "FPT University, Ho Chi Minh City",
    kind: "education",
    points: [
      "Team projects in .NET, Java Spring Boot, React and React Native, including two SWP391 team projects.",
    ],
  },
];
