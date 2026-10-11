import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
import { Reveal, Section } from "./Section";

// Regenerated every 12 hours by the workflow in the hzanhle/hzanhle profile repo.
const snake = `https://raw.githubusercontent.com/${profile.handle}/${profile.handle}/output`;

export function Activity() {
  return (
    <Section
      id="activity"
      eyebrow="05 · Activity"
      title="Still shipping"
      intro="My contribution graph over the last year, private repos included. The snake eats it every 12 hours."
    >
      <Reveal>
        <div className="card overflow-hidden p-5 sm:p-8">
          <img
            src={`${snake}/github-snake.svg`}
            alt="Contribution graph with an animated snake"
            loading="lazy"
            className="w-full dark:hidden"
          />
          <img
            src={`${snake}/github-snake-dark.svg`}
            alt="Contribution graph with an animated snake"
            loading="lazy"
            className="hidden w-full dark:block"
          />
          <div className="mt-5 flex justify-end">
            <a
              href={profile.github}
              className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
            >
              See my GitHub <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
