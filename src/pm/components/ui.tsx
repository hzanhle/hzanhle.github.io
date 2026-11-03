import type { ReactNode } from "react";

// Prose-like snippets (prompts) pass `wrap`; code keeps its line breaks and scrolls sideways.
export function CodeBlock({ code, label, wrap = false }: { code: string; label?: string; wrap?: boolean }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface-2">
      {label && <p className="border-b border-line px-4 py-2 font-mono text-xs text-muted">{label}</p>}
      <pre className={`overflow-x-auto p-4 font-mono text-[0.8rem] leading-relaxed ${wrap ? "whitespace-pre-wrap" : ""}`}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Tables scroll sideways on small screens instead of squashing the columns.
// Narrow tables that sit in a half-width column pass `compact` so they wrap instead of scrolling.
export function TableWrap({ children, compact = false }: { children: ReactNode; compact?: boolean }) {
  return (
    <div className="card overflow-x-auto">
      <table className={`w-full border-collapse text-left text-sm ${compact ? "min-w-[20rem]" : "min-w-[40rem]"}`}>
        {children}
      </table>
    </div>
  );
}

export const th = "border-b border-line bg-surface-2/60 px-4 py-3 text-xs font-semibold tracking-wide text-muted uppercase";
export const td = "border-b border-line px-4 py-3 align-top [tr:last-child_&]:border-b-0";

export function SubHeading({ index, title, intro }: { index: string; title: string; intro?: string }) {
  return (
    <div className="mb-6">
      <p className="font-mono text-xs text-accent">{index}</p>
      <h3 className="mt-1 text-2xl font-bold tracking-tight">{title}</h3>
      {intro && <p className="mt-2 max-w-2xl leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}
