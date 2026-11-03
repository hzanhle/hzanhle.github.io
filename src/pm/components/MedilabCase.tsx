import { ArrowUpRight, Check, PenLine } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Reveal, Section } from "../../components/Section";
import { delivered, mainFlows, medilab, medilabStories, signingRules } from "../data";
import { StoryTabs } from "./StoryTabs";
import { SubHeading } from "./ui";

function Scope() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal className="min-w-0">
          <div className="card h-full p-6">
            <p className="text-sm font-semibold tracking-wide text-muted uppercase">The product</p>
            <p className="mt-3 text-sm leading-relaxed">{medilab.context}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">Stakeholders: {medilab.stakeholders}.</p>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="min-w-0">
          <div className="card h-full p-6">
            <p className="text-sm font-semibold tracking-wide text-muted uppercase">My part</p>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed">
              {medilab.myPart.map((m) => (
                <li key={m} className="flex gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
            <a
              href={medilab.repo}
              className="mt-6 inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-sm font-semibold transition-colors hover:border-accent/50"
            >
              <FaGithub className="size-4" /> Code & specs <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function Flows() {
  return (
    <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {mainFlows.map((f, i) => (
        <Reveal key={f.id} delay={(i % 3) * 0.06}>
          <li className="card h-full p-5">
            <span className="font-mono text-xs text-accent">{f.id}</span>
            <h4 className="mt-1 font-bold tracking-tight">{f.name}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

function Signing() {
  return (
    <Reveal>
      <div className="card p-6 sm:p-8">
        <ul className="grid grid-cols-1 gap-3 text-sm leading-relaxed md:grid-cols-2">
          {signingRules.map((r) => (
            <li key={r} className="flex gap-2.5">
              <PenLine className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 border-t border-line pt-4 text-sm text-muted">
          I helped write this document and built three of these rules: locked signatures (#195), heads of department approving
          their own results (#336), and higher-level and backup signers (#430).
        </p>
      </div>
    </Reveal>
  );
}

function Delivered() {
  return (
    <Reveal>
      <ul className="flex flex-wrap gap-2">
        {delivered.map((d) => (
          <li
            key={d.issue}
            className="flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-sm font-medium"
          >
            <span className="font-mono text-xs text-accent">{d.issue}</span>
            {d.name}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function MedilabCase() {
  return (
    <Section
      id="medilab"
      eyebrow="05 · Case study"
      title={medilab.name}
      intro={`${medilab.role} · ${medilab.team} · ${medilab.period}. My capstone: the team writes detailed specs first, then builds from them.`}
    >
      <div className="space-y-20">
        <div>
          <SubHeading index="5.1" title="Context & my part" />
          <Scope />
        </div>
        <div>
          <SubHeading
            index="5.2"
            title="The main business flows"
            intro="Six main flows, from the customer's order to the signed report. Ten supporting flows cover invoicing, cancellations, change requests and more."
          />
          <Flows />
        </div>
        <div>
          <SubHeading
            index="5.3"
            title="Rules that protect the business: the signing chain"
            intro="Every result, report and quotation is approved by signing. These rules decide who can sign what, and what can never change afterwards."
          />
          <Signing />
        </div>
        <div>
          <SubHeading
            index="5.4"
            title="User stories from the specs"
            intro="Taken as written from the team's specs: user stories per role, a table of business rules, then testable acceptance criteria."
          />
          <StoryTabs items={medilabStories} label="Medilab user stories" />
        </div>
        <div>
          <SubHeading index="5.5" title="Features I've built so far" />
          <Delivered />
        </div>
      </div>
    </Section>
  );
}
