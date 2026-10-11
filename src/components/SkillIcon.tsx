import type { IconType } from "react-icons";
import {
  SiDocker,
  SiDotnet,
  SiFastapi,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJavascript,
  SiLua,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { TbBrandCSharp, TbBrandReactNative, TbSql } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import type { SkillKey } from "../data/profile";

const icons: Record<SkillKey, { Icon: IconType; color: string }> = {
  csharp: { Icon: TbBrandCSharp, color: "#9b4f96" },
  typescript: { Icon: SiTypescript, color: "#3178c6" },
  javascript: { Icon: SiJavascript, color: "#e8c400" },
  java: { Icon: FaJava, color: "#e76f00" },
  python: { Icon: SiPython, color: "#3776ab" },
  sql: { Icon: TbSql, color: "#0ea5e9" },
  react: { Icon: SiReact, color: "#38bdf8" },
  nextjs: { Icon: SiNextdotjs, color: "currentColor" },
  reactnative: { Icon: TbBrandReactNative, color: "#38bdf8" },
  tailwind: { Icon: SiTailwindcss, color: "#06b6d4" },
  vite: { Icon: SiVite, color: "#8b5cf6" },
  flutter: { Icon: SiFlutter, color: "#02569b" },
  dotnet: { Icon: SiDotnet, color: "#7c4dff" },
  nestjs: { Icon: SiNestjs, color: "#e0234e" },
  nodejs: { Icon: SiNodedotjs, color: "#5fa04e" },
  spring: { Icon: SiSpringboot, color: "#6db33f" },
  fastapi: { Icon: SiFastapi, color: "#059669" },
  sqlserver: { Icon: DiMsqlServer, color: "#cc2927" },
  postgres: { Icon: SiPostgresql, color: "#4169e1" },
  redis: { Icon: SiRedis, color: "#dc382d" },
  prisma: { Icon: SiPrisma, color: "currentColor" },
  supabase: { Icon: SiSupabase, color: "#3ecf8e" },
  firebase: { Icon: SiFirebase, color: "#f59e0b" },
  aws: { Icon: FaAws, color: "#ff9900" },
  docker: { Icon: SiDocker, color: "#2496ed" },
  git: { Icon: SiGit, color: "#f05032" },
  github: { Icon: SiGithub, color: "currentColor" },
  githubactions: { Icon: SiGithubactions, color: "#2088ff" },
  vercel: { Icon: SiVercel, color: "currentColor" },
  tensorflow: { Icon: SiTensorflow, color: "#ff6f00" },
  lua: { Icon: SiLua, color: "#4f6fd8" },
};

export function SkillIcon({ name, className }: { name: SkillKey; className?: string }) {
  const { Icon, color } = icons[name];
  return <Icon className={className} style={{ color }} aria-hidden="true" />;
}
