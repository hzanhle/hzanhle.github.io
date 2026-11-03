import { ChevronRight, FlaskConical, Info, Rocket } from "lucide-react";
import { Reveal, Section } from "../../components/Section";
import { exercise, firstMove, funnel, hypotheses } from "../data";
import { SubHeading, TableWrap, td, th } from "./ui";

function Problem() {
  return (
    <Reveal>
      <div className="card p-6 sm:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-sm font-semibold tracking-wide text-muted uppercase">The problem</p>
            <p className="mt-3 text-lg leading-relaxed">{exercise.scenario}</p>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-muted uppercase">Why it matters</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              {exercise.why.map((w) => (
                <li key={w} className="flex gap-2.5">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 flex gap-2 border-t border-line pt-4 text-sm text-muted">
          <Info className="mt-0.5 size-4 shrink-0 text-accent" />
          {exercise.disclaimer}
        </p>
      </div>
    </Reveal>
  );
}

function Funnel() {
  return (
    <ol className="grid grid-cols-1 gap-2 lg:grid-cols-5">
      {funnel.map((f, i) => (
        <Reveal key={f.stage} delay={i * 0.06} className="relative">
          <li className="card h-full p-4">
            <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
            <h4 className="mt-1 font-bold tracking-tight">{f.stage}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.question}</p>
          </li>
          {i < funnel.length - 1 && (
            <ChevronRight className="absolute top-1/2 -right-2.5 z-10 hidden size-5 -translate-y-1/2 text-accent lg:block" />
          )}
        </Reveal>
      ))}
    </ol>
  );
}

function Hypotheses() {
  return (
    <Reveal>
      <TableWrap>
        <thead>
          <tr>
            <th className={th}>Hypothesis</th>
            <th className={th}>How I'd check it first</th>
            <th className={th}>Experiment</th>
            <th className={th}>Success metric</th>
            <th className={th}>Guardrail</th>
          </tr>
        </thead>
        <tbody>
          {hypotheses.map((h) => (
            <tr key={h.id}>
              <td className={td}>
                <span className="font-mono text-xs text-accent">{h.id}</span>
                <p className="mt-1 font-semibold">{h.belief}</p>
              </td>
              <td className={`${td} text-muted`}>{h.check}</td>
              <td className={td}>{h.test}</td>
              <td className={td}>{h.metric}</td>
              <td className={`${td} text-muted`}>{h.guardrail}</td>
            </tr>
          ))}
        </tbody>
      </TableWrap>
    </Reveal>
  );
}

export function ProductExercise() {
  return (
    <Section
      id="exercise"
      eyebrow="04 · Product thinking"
      title="A CRM problem I'd start with"
      intro="How I'd work through a voucher problem before anyone writes code: frame it, find where users drop off, then test the cheapest idea first."
    >
      <div className="space-y-20">
        <div>
          <SubHeading index="4.1" title="Frame the problem" />
          <Problem />
        </div>
        <div>
          <SubHeading
            index="4.2"
            title="Find where users drop off"
            intro="The first data I'd pull: each step of the voucher funnel, split by segment and voucher type."
          />
          <Funnel />
        </div>
        <div>
          <SubHeading
            index="4.3"
            title="Hypotheses, experiments and metrics"
            intro="Each idea gets a quick data check before it gets an experiment, and every experiment has a guardrail."
          />
          <Hypotheses />
        </div>
        <Reveal>
          <div className="flex gap-4 rounded-2xl border border-line bg-brand-soft p-6">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand text-on-brand">
              <Rocket className="size-5" />
            </span>
            <div>
              <p className="flex items-center gap-2 font-semibold">
                <FlaskConical className="size-4 text-accent" /> What I'd ship first
              </p>
              <p className="mt-2 text-sm leading-relaxed">{firstMove}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
