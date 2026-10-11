import { ArrowUpRight, GitCommitHorizontal, Lock, Users } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects, type Project } from "../data/profile";
import { ProjectCover } from "./ProjectCover";
import { Reveal, Section } from "./Section";

function Links({ project }: { project: Project }) {
  const { demo, repo } = project.links;
  if (!demo && !repo) {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm text-muted">
        <Lock className="size-3.5" /> Private repo
      </span>
    );
  }
  return (
    <div className="flex flex-wrap gap-2">
      {demo && (
        <a
          href={demo}
          className="bg-brand inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold text-white"
        >
          Live demo <ArrowUpRight className="size-4" />
        </a>
      )}
      {repo && (
        <a
          href={repo}
          className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-sm font-semibold transition-colors hover:border-accent/50"
        >
          <FaGithub className="size-4" /> Code
        </a>
      )}
    </div>
  );
}

function Meta({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
      <span className="font-mono">{project.period}</span>
      <span className="inline-flex items-center gap-1">
        <Users className="size-3.5" /> {project.team}
      </span>
      <span className="inline-flex items-center gap-1">
        <GitCommitHorizontal className="size-3.5" /> {project.commits}
      </span>
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <span key={t} className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted">
          {t}
        </span>
      ))}
    </div>
  );
}

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Section
      id="projects"
      eyebrow="03 · Projects"
      title="Things I've built"
      intro="Five team projects where I wrote a big share of the code. Most repos are private, so the covers are drawn to show what each app does."
    >
      <Reveal>
        <article className="card group grid overflow-hidden lg:grid-cols-[1.15fr_1fr]">
          <ProjectCover project={featured} large />
          <div className="flex flex-col gap-5 p-7 sm:p-9">
            <div>
              <span className="rounded-full bg-accent/12 px-2.5 py-1 text-xs font-semibold text-accent">Featured</span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight">{featured.name}</h3>
              <p className="mt-2 leading-relaxed text-muted">{featured.summary}</p>
            </div>
            <ul className="space-y-2.5 text-sm leading-relaxed">
              {featured.highlights.map((h) => (
                <li key={h} className="flex gap-2.5">
                  <span className="bg-brand mt-2 size-1.5 shrink-0 rounded-full" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <Tags tags={featured.tags} />
            <div className="mt-auto flex flex-col gap-4 border-t border-line pt-5">
              <Meta project={featured} />
              <Links project={featured} />
            </div>
          </div>
        </article>
      </Reveal>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08}>
            <article className="card group flex h-full flex-col overflow-hidden transition-colors hover:border-accent/40">
              <ProjectCover project={p} />
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{p.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.summary}</p>
                </div>
                <ul className="space-y-2 text-sm leading-relaxed">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5">
                      <span className="bg-brand mt-2 size-1.5 shrink-0 rounded-full" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <Tags tags={p.tags} />
                <div className="mt-auto flex flex-col gap-3 border-t border-line pt-4">
                  <Meta project={p} />
                  <Links project={p} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
