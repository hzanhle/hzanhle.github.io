import { BrainCircuit, MonitorSmartphone, Server } from "lucide-react";
import { about, focusAreas, type FocusArea } from "../data/profile";
import { Reveal, Section } from "./Section";

const focusIcons: Record<FocusArea["icon"], typeof Server> = {
  frontend: MonitorSmartphone,
  backend: Server,
  ai: BrainCircuit,
};

export function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="A bit about me">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>

        <div className="grid gap-4">
          {focusAreas.map((f, i) => {
            const Icon = focusIcons[f.icon];
            return (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="card group flex gap-4 p-5 transition-colors hover:border-accent/40">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-accent">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{f.text}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {f.tags.map((t) => (
                        <span key={t} className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
