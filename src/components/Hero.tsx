import { motion } from "motion/react";
import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { FaAws, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDotnet, SiReact } from "react-icons/si";
import avatar from "../assets/avatar.webp";
import wave from "../assets/icons/waving-hand.png";
import { profile, projects } from "../data/profile";

const chips = [
  { label: "C# / .NET", Icon: SiDotnet, color: "#7c4dff", pos: "left-[-6%] top-[18%]", delay: 0 },
  { label: "React", Icon: SiReact, color: "#38bdf8", pos: "right-[-8%] top-[8%]", delay: 0.6 },
  { label: "AWS", Icon: FaAws, color: "#ff9900", pos: "right-[-4%] bottom-[22%]", delay: 1.2 },
  { label: "AI", Icon: Sparkles, color: "#a78bfa", pos: "left-[-2%] bottom-[8%]", delay: 1.8 },
];

const now = projects.find((p) => p.period.includes("Now"));

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pt-32 pb-16 sm:px-8 md:grid-cols-[1.15fr_1fr] md:pt-40 md:pb-24">
        <div>
          {profile.openToWork && (
            <motion.p
              {...fade(0)}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Open to new opportunities
            </motion.p>
          )}

          <motion.h1 {...fade(0.08)} className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="whitespace-nowrap">
              <span className="text-gradient">{profile.shortName}</span>
              <img src={wave} alt="" className="ml-2 inline-block size-10 -translate-y-1 sm:size-12" />
            </span>
          </motion.h1>

          <motion.p {...fade(0.16)} className="mt-5 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            A <span className="font-semibold text-fg">{profile.role.toLowerCase()}</span> from Ho Chi Minh City.{" "}
            {profile.tagline}
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="bg-brand group inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 font-semibold transition-colors hover:border-accent/50"
            >
              <Mail className="size-4" /> Get in touch
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 rounded-xl px-3 py-3 font-semibold text-muted hover:text-fg"
              >
                <Download className="size-4" /> Resume
              </a>
            )}
          </motion.div>

          <motion.div {...fade(0.32)} className="mt-8 flex items-center gap-5 text-muted">
            <a href={profile.github} aria-label="GitHub" className="transition-colors hover:text-fg">
              <FaGithub className="size-6" />
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn" className="transition-colors hover:text-fg">
              <FaLinkedin className="size-6" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-fg">
              <Mail className="size-6" />
            </a>
            {now && (
              <span className="ml-1 hidden border-l border-line pl-5 text-sm sm:inline">
                Now building <span className="font-medium text-fg">{now.name}</span>
              </span>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-[min(78vw,380px)]"
        >
          <div className="relative aspect-square">
            <div className="bg-brand absolute inset-0 rounded-full" />
            <div className="absolute inset-3 rounded-full border border-white/25" />
            {/* Taller than the circle with only the bottom rounded, so the head pops out of the top. */}
            <div className="absolute inset-x-0 bottom-0 h-[122%] overflow-hidden rounded-b-full">
              <img
                src={avatar}
                alt={`Portrait of ${profile.name}`}
                className="absolute bottom-0 left-1/2 h-[94%] w-auto max-w-none -translate-x-1/2"
                fetchPriority="high"
              />
            </div>
          </div>

          {chips.map(({ label, Icon, color, pos, delay }) => (
            <motion.span
              key={label}
              className={`absolute ${pos} flex items-center gap-2 rounded-xl border border-line bg-surface/90 px-3 py-2 text-sm font-semibold shadow-xl shadow-black/10 backdrop-blur`}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
            >
              <Icon className="size-4" style={{ color }} aria-hidden="true" />
              {label}
            </motion.span>
          ))}

          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs whitespace-nowrap text-muted shadow-lg shadow-black/10">
            <MapPin className="size-3.5 text-accent" /> {profile.location}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
