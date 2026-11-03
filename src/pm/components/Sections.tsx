import { ArrowUpRight, BarChart3, Bot, Hammer, Search, UserRound, Users } from "lucide-react";
import type { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { SiClaude, SiConfluence, SiFigma, SiGooglesheets, SiJira, SiNotion, SiPostman } from "react-icons/si";
import cloud from "../../assets/icons/cloud.png";
import cap from "../../assets/icons/graduation-cap.png";
import scooter from "../../assets/icons/motor-scooter.png";
import { Reveal, Section } from "../../components/Section";
import { about, aiIntro, aiSteps, autowash, pillars, promptTemplate, timeline, toolkit, tools, type Pillar, type Tool } from "../data";
import { CodeBlock } from "./ui";

const pillarIcons: Record<Pillar["icon"], typeof Search> = {
  problem: Search,
  data: BarChart3,
  build: Hammer,
  team: Users,
};

export function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="From building features to shaping them">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.15fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-3 text-sm font-semibold tracking-wide text-muted uppercase">What I've practised so far</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {pillars.map((p, i) => {
              const Icon = pillarIcons[p.icon];
              return (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="card h-full p-5 transition-colors hover:border-accent/40">
                    <span className="grid size-10 place-items-center rounded-xl bg-brand-soft text-accent">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-3 font-semibold">{p.title}</h3>
                    <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted">
                      {p.evidence.map((e) => (
                        <li key={e} className="flex gap-2">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

const toolIcons: Record<Tool, { Icon: IconType; color: string }> = {
  jira: { Icon: SiJira, color: "#2684ff" },
  confluence: { Icon: SiConfluence, color: "#2684ff" },
  figma: { Icon: SiFigma, color: "#f24e1e" },
  sheets: { Icon: SiGooglesheets, color: "#34a853" },
  postman: { Icon: SiPostman, color: "#ff6c37" },
  notion: { Icon: SiNotion, color: "currentColor" },
  github: { Icon: FaGithub, color: "currentColor" },
  claude: { Icon: SiClaude, color: "#d97757" },
};

export function Toolkit() {
  return (
    <Section
      id="toolkit"
      eyebrow="02 · Toolkit"
      title="How I work"
      intro="What I use day to day, on the product side and the engineering side."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {toolkit.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.06}>
            <div className="card h-full p-6">
              <h3 className="text-sm font-semibold tracking-wide text-muted uppercase">{g.title}</h3>
              <ul className="mt-4 space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-medium">
                    <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
          {tools.map(({ key, label }) => {
            const { Icon, color } = toolIcons[key];
            return (
              <li
                key={key}
                className="flex items-center gap-2.5 rounded-lg border border-line bg-surface px-3 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                <Icon className="size-4.5 shrink-0" style={{ color }} aria-hidden="true" />
                {label}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}

export function AiWorkflow() {
  return (
    <Section id="ai" eyebrow="06 · AI in my workflow" title="AI drafts, I decide" intro={aiIntro}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_1fr]">
        <ol className="space-y-3">
          {aiSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.05}>
              <li className="card flex gap-4 p-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand font-mono text-sm font-bold text-on-brand">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold">{s.step}</h3>
                  <p className="mt-1 flex gap-2 text-sm leading-relaxed text-muted">
                    <Bot className="mt-0.5 size-4 shrink-0 text-accent" aria-label="AI" /> {s.ai}
                  </p>
                  <p className="mt-1 flex gap-2 text-sm leading-relaxed text-muted">
                    <UserRound className="mt-0.5 size-4 shrink-0 text-emerald-500" aria-label="Human check" /> {s.human}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1} className="min-w-0">
          <div className="lg:sticky lg:top-24">
            <p className="mb-3 text-sm font-semibold tracking-wide text-muted uppercase">Example prompt</p>
            <CodeBlock code={promptTemplate} wrap />
            <a
              href={autowash.rulesDoc}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
            >
              See the AutoWash product rules the team and AI worked from <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

const kindIcon = { work: cloud, project: scooter, education: cap };

export function Experience() {
  return (
    <Section id="experience" eyebrow="07 · Experience" title="Where I've been practising">
      <ol className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-7 before:w-px before:bg-line">
        {timeline.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.08}>
            <li className="relative flex gap-5">
              <span className="card relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl">
                <img src={kindIcon[t.kind]} alt="" className="size-9" />
              </span>
              <div className="card flex-1 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold tracking-tight">{t.title}</h3>
                  <span className="font-mono text-xs text-muted">{t.period}</span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-accent">{t.org}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {t.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/60" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {"link" in t && t.link && (
                  <a
                    href={t.link.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                  >
                    {t.link.label} <ArrowUpRight className="size-4" />
                  </a>
                )}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
