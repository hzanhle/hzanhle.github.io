import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/profile";
import { Reveal } from "./Section";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <div className="bg-brand relative overflow-hidden rounded-3xl p-px">
          <div className="relative rounded-[calc(1.5rem-1px)] bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="glow pointer-events-none absolute inset-0 opacity-70" />
            <div className="relative">
              <p className="font-mono text-sm text-accent">06 · Contact</p>
              <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-5xl">
                Let's build something <span className="text-gradient">together</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
                I'm looking for fresher and junior roles in fullstack or backend development. If you're hiring or just
                want to talk shop, my inbox is open.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="bg-brand inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:-translate-y-0.5"
                >
                  <Mail className="size-4" /> Email me
                </a>
                <a
                  href={profile.linkedin}
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 font-semibold transition-colors hover:border-accent/50"
                >
                  <FaLinkedin className="size-4 text-[#0a66c2]" /> LinkedIn
                </a>
                <a
                  href={profile.github}
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 font-semibold transition-colors hover:border-accent/50"
                >
                  <FaGithub className="size-4" /> GitHub
                </a>
              </div>

              <button
                onClick={copy}
                className="mt-6 inline-flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-sm text-muted transition-colors hover:text-fg"
              >
                {copied ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />}
                {copied ? "Copied" : profile.email}
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
