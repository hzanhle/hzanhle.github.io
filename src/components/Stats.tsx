import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { stats } from "../data/profile";
import { Reveal } from "./Section";

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  // Years should not count up from zero; start them close to the target.
  const from = to > 1900 ? to - 6 : 0;
  const [value, setValue] = useState(reduced ? to : from);

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(from, to, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduced, from, to]);

  return <span ref={ref}>{value}</span>;
}

export function Stats() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <Reveal className="card grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
        {stats.map((s) => (
          <div key={s.label} className="px-6 py-7 text-center">
            <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              <span className="text-gradient">
                <CountUp to={s.value} />
                {s.suffix}
              </span>
            </p>
            <p className="mt-1.5 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
