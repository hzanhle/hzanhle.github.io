import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "../../components/Section";
import type { Step, Story } from "../data";

const kwColor: Record<Step["kw"], string> = {
  Given: "text-sky-600 dark:text-sky-300",
  When: "text-amber-600 dark:text-amber-300",
  Then: "text-emerald-600 dark:text-emerald-300",
  And: "text-muted",
};

function Criteria({ criteria }: { criteria: Story["criteria"] }) {
  if (typeof criteria[0] === "string") {
    return (
      <ul className="mt-6 grid grid-cols-1 gap-2.5 text-sm leading-relaxed">
        {(criteria as string[]).map((c) => (
          <li key={c} className="flex gap-2.5 rounded-xl border border-line bg-surface-2/40 px-4 py-3">
            <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" />
            <span>{c}</span>
          </li>
        ))}
      </ul>
    );
  }
  const scenarios = criteria as Exclude<Story["criteria"], string[]>;
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
      {scenarios.map((c, i) => (
        <div key={c.title} className="rounded-xl border border-line bg-surface-2/40 p-4">
          <p className="text-sm font-semibold">
            <span className="font-mono text-accent">AC{i + 1}</span> · {c.title}
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed">
            {c.steps.map((step, j) => (
              <li key={j}>
                <span className={`font-mono text-xs font-bold uppercase ${kwColor[step.kw]}`}>{step.kw}</span>{" "}
                {step.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function StoryTabs({ items, label }: { items: Story[]; label: string }) {
  const [active, setActive] = useState(0);
  const s = items[active];

  return (
    <Reveal>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label={label}>
        {items.map((st, i) => (
          <button
            key={st.id}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`rounded-lg border px-3.5 py-2 text-sm font-semibold transition-colors ${
              i === active
                ? "border-transparent bg-brand text-on-brand"
                : "border-line bg-surface text-muted hover:text-fg"
            }`}
          >
            <span className="font-mono">{st.id}</span> · {st.title}
          </button>
        ))}
      </div>

      <div className="card mt-4 p-6 sm:p-8" role="tabpanel">
        <blockquote className="border-l-2 border-accent pl-4 text-lg leading-relaxed">
          <span className="font-semibold">As a</span> {s.asA}, <span className="font-semibold">I want</span> {s.iWant},{" "}
          <span className="font-semibold">so that</span> {s.soThat}.
        </blockquote>
        <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
          {s.tags.map((t) => (
            <span key={t} className="rounded-md bg-surface-2 px-2 py-1">
              {t}
            </span>
          ))}
        </div>
        <Criteria criteria={s.criteria} />
      </div>
    </Reveal>
  );
}
