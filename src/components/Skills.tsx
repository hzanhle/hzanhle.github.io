import { skillGroups } from "../data/profile";
import { Reveal, Section } from "./Section";
import { SkillIcon } from "./SkillIcon";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 · Skills"
      title="What I work with"
      intro="The tools I reach for most, grouped by where they sit in the stack."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.06} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}>
            <div className="card h-full p-6">
              <h3 className="text-sm font-semibold tracking-wide text-muted uppercase">{g.title}</h3>
              <ul className={`mt-4 grid grid-cols-2 gap-2 ${i < 3 ? "" : "xl:grid-cols-3"}`}>
                {g.items.map((s) => (
                  <li
                    key={s.key}
                    className="flex items-center gap-2.5 rounded-lg border border-line bg-surface-2/60 px-3 py-2 text-sm leading-tight font-medium transition-transform hover:-translate-y-0.5"
                  >
                    <SkillIcon name={s.key} className="size-4.5 shrink-0" />
                    <span>{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
