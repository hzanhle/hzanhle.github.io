import { ArrowUp } from "lucide-react";
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS and GitHub Pages.
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
          Back to top <ArrowUp className="size-4" />
        </a>
      </div>
    </footer>
  );
}
