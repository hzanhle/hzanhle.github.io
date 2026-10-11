import { timeline } from "../data/profile";
import cloud from "../assets/icons/cloud.png";
import cap from "../assets/icons/graduation-cap.png";
import { Reveal, Section } from "./Section";

const kindIcon = { work: cloud, education: cap };

export function Experience() {
  return (
    <Section id="experience" eyebrow="04 · Experience" title="Where I've been learning">
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
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
