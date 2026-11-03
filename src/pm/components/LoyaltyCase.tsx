import { ArrowDown, ArrowRight, ArrowUpRight, BarChart3, Check, Target } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Reveal, Section } from "../../components/Section";
import {
  autowash,
  campaignMetrics,
  loyaltyNext,
  loyaltyStories,
  pointsFlow,
  tiers,
  trackedKpis,
  voucherRules,
  voucherSql,
} from "../data";
import { StoryTabs } from "./StoryTabs";
import { CodeBlock, SubHeading, TableWrap, td, th } from "./ui";

function Context() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Reveal className="min-w-0">
        <div className="card h-full p-6">
          <p className="text-sm font-semibold tracking-wide text-muted uppercase">The product</p>
          <p className="mt-3 text-sm leading-relaxed">{autowash.context}</p>
          <p className="mt-6 text-sm font-semibold tracking-wide text-muted uppercase">What the loyalty layer had to do</p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed">
            {autowash.goals.map((g) => (
              <li key={g} className="flex gap-2.5">
                <Target className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
      <Reveal delay={0.08} className="min-w-0">
        <div className="card h-full p-6">
          <p className="text-sm font-semibold tracking-wide text-muted uppercase">What I owned</p>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed">
            {autowash.owned.map((o) => (
              <li key={o} className="flex gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={autowash.repo}
              className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-sm font-semibold transition-colors hover:border-accent/50"
            >
              <FaGithub className="size-4" /> Code <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function Rules() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Reveal className="min-w-0">
        <p className="mb-3 text-sm font-semibold tracking-wide text-muted uppercase">Loyalty tiers</p>
        <TableWrap compact>
          <thead>
            <tr>
              <th className={th}>Tier</th>
              <th className={th}>Booking window</th>
              <th className={th}>Perks</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((t) => (
              <tr key={t.tier}>
                <td className={`${td} font-semibold`}>{t.tier}</td>
                <td className={`${td} font-mono text-xs`}>{t.window}</td>
                <td className={`${td} text-muted`}>{t.note}</td>
              </tr>
            ))}
          </tbody>
        </TableWrap>
        <p className="mt-3 text-sm text-muted">
          Points are earned on every completed wash and expire after 12 months. Rewards can be a discount, a free wash or
          an add-on service.
        </p>
      </Reveal>
      <Reveal delay={0.08} className="min-w-0">
        <p className="mb-3 text-sm font-semibold tracking-wide text-muted uppercase">Voucher rules admins control</p>
        <TableWrap compact>
          <thead>
            <tr>
              <th className={th}>Field</th>
              <th className={th}>Rule</th>
            </tr>
          </thead>
          <tbody>
            {voucherRules.map((v) => (
              <tr key={v.field}>
                <td className={`${td} font-semibold whitespace-nowrap`}>{v.field}</td>
                <td className={`${td} text-muted`}>{v.rule}</td>
              </tr>
            ))}
          </tbody>
        </TableWrap>
      </Reveal>
    </div>
  );
}

function Lifecycle() {
  return (
    <ol className="grid grid-cols-1 gap-3 lg:grid-cols-4">
      {pointsFlow.map((p, i) => (
        <Reveal key={p.step} delay={i * 0.08} className="relative">
          <li className="card flex h-full flex-col p-5">
            <span className="font-mono text-xs text-muted">Step {i + 1}</span>
            <h4 className="mt-1 text-lg font-bold tracking-tight">{p.step}</h4>
            <p className="mt-1 text-xs font-medium text-accent">{p.when}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.what}</p>
          </li>
          {i < pointsFlow.length - 1 && (
            <span className="absolute top-1/2 -right-3 z-10 hidden size-6 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface text-accent lg:grid">
              <ArrowRight className="size-3.5" />
            </span>
          )}
          {i < pointsFlow.length - 1 && (
            <span className="mx-auto mt-2 -mb-1 grid size-6 place-items-center text-accent lg:hidden">
              <ArrowDown className="size-4" />
            </span>
          )}
        </Reveal>
      ))}
    </ol>
  );
}

function Measuring() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.3fr]">
        <Reveal className="min-w-0">
          <div className="card h-full p-6">
            <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-muted uppercase">
              <BarChart3 className="size-4 text-accent" /> What the admin dashboard tracks
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {trackedKpis.map((k) => (
                <li key={k} className="rounded-lg border border-line bg-surface-2/40 px-3 py-2.5 text-sm font-medium">
                  {k}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Customers see their own side: available points, tier, and the vouchers, promotions and rewards they can use
              right now.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="min-w-0">
          <p className="mb-3 text-sm font-semibold tracking-wide text-muted uppercase">How I'd judge a voucher campaign</p>
          <TableWrap compact>
            <thead>
              <tr>
                <th className={th}>Metric</th>
                <th className={th}>How it's calculated</th>
              </tr>
            </thead>
            <tbody>
              {campaignMetrics.map((m) => (
                <tr key={m.metric}>
                  <td className={`${td} font-semibold whitespace-nowrap`}>{m.metric}</td>
                  <td className={`${td} text-muted`}>{m.how}</td>
                </tr>
              ))}
            </tbody>
          </TableWrap>
        </Reveal>
      </div>

      <Reveal>
        <CodeBlock label="SQL · voucher usage and 30-day repeat rate" code={voucherSql} />
      </Reveal>

      <Reveal>
        <div className="rounded-2xl border border-line bg-brand-soft p-6">
          <p className="text-sm font-semibold tracking-wide text-muted uppercase">What I learned and would do next</p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed">
            {loyaltyNext.map((n) => (
              <li key={n} className="flex gap-2.5">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}

export function LoyaltyCase() {
  return (
    <Section
      id="loyalty"
      eyebrow="03 · Featured case study"
      title={autowash.name}
      intro={`${autowash.role} · ${autowash.team} · ${autowash.period}. A car wash booking app with a loyalty program: tiers, points and vouchers.`}
    >
      <div className="space-y-20">
        <div>
          <SubHeading index="3.1" title="Context & my role" />
          <Context />
        </div>
        <div>
          <SubHeading
            index="3.2"
            title="Loyalty & voucher rules"
            intro="The rules we agreed on before building. They shaped both the admin screens and the backend checks."
          />
          <Rules />
        </div>
        <div>
          <SubHeading
            index="3.3"
            title="Points & voucher lifecycle"
            intro="How points and voucher uses move with the booking, so nothing is spent twice and nothing is lost on a cancellation."
          />
          <Lifecycle />
        </div>
        <div>
          <SubHeading
            index="3.4"
            title="User stories & acceptance criteria"
            intro="Written from the rules we shipped, including the cases that block a booking."
          />
          <StoryTabs items={loyaltyStories} label="AutoWash user stories" />
        </div>
        <div>
          <SubHeading
            index="3.5"
            title="Measuring it"
            intro="What we tracked, and how I would judge whether a voucher campaign is worth its cost."
          />
          <Measuring />
        </div>
      </div>
    </Section>
  );
}
