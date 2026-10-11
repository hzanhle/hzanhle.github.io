import type { Project } from "../data/profile";

// Small hand-drawn scenes that stand in for screenshots of private repos.
function MapScene() {
  const pins = [
    { x: 92, y: 70, r: 9, c: "#2f6db5", label: "Heavy" },
    { x: 178, y: 104, r: 7, c: "#5b9be0" },
    { x: 236, y: 58, r: 6, c: "#8ec3f0" },
    { x: 140, y: 134, r: 6, c: "#8ec3f0" },
    { x: 262, y: 128, r: 8, c: "#2f6db5" },
  ];
  return (
    <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <rect width="320" height="180" fill="#f1f6fb" />
      <path d="M-10 120 C 60 100, 110 150, 180 128 S 290 90, 330 110" fill="none" stroke="#d3e5f6" strokeWidth="14" />
      {[30, 75, 160, 215, 280].map((x) => (
        <line key={x} x1={x} y1="0" x2={x - 20} y2="180" stroke="#ffffff" strokeWidth="5" />
      ))}
      {[40, 95, 150].map((y) => (
        <line key={y} x1="0" y1={y} x2="320" y2={y + 12} stroke="#ffffff" strokeWidth="5" />
      ))}
      {pins.map((p) => (
        <g key={`${p.x}-${p.y}`}>
          <circle cx={p.x} cy={p.y} r={p.r * 2.2} fill={p.c} opacity="0.18" />
          <circle cx={p.x} cy={p.y} r={p.r} fill={p.c} stroke="#fff" strokeWidth="2" />
        </g>
      ))}
      <g transform="translate(14 12)">
        <rect width="118" height="26" rx="8" fill="#fff" />
        <circle cx="14" cy="13" r="5" fill="#2f6db5" />
        <text x="26" y="17" fontSize="10" fontWeight="600" fill="#1d3a5c" fontFamily="Plus Jakarta Sans Variable, sans-serif">
          Heavy rain · Q.1
        </text>
      </g>
    </svg>
  );
}

function PoseScene() {
  const j = {
    head: [150, 46],
    neck: [152, 64],
    hip: [160, 108],
    kneeL: [140, 132],
    footL: [134, 160],
    kneeR: [196, 96],
    footR: [236, 76],
    handL: [124, 88],
    handR: [186, 70],
  } as const;
  const bones: [keyof typeof j, keyof typeof j][] = [
    ["neck", "hip"],
    ["hip", "kneeL"],
    ["kneeL", "footL"],
    ["hip", "kneeR"],
    ["kneeR", "footR"],
    ["neck", "handL"],
    ["neck", "handR"],
  ];
  return (
    <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <rect width="320" height="180" fill="#1c1a2e" />
      <rect x="0" y="150" width="320" height="30" fill="#25223b" />
      <rect x="108" y="26" width="146" height="142" rx="6" fill="none" stroke="#f472b6" strokeDasharray="5 4" strokeWidth="1.5" />
      {bones.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={j[a][0]} y1={j[a][1]} x2={j[b][0]} y2={j[b][1]} stroke="#67e8f9" strokeWidth="3" strokeLinecap="round" />
      ))}
      <circle cx={j.head[0]} cy={j.head[1]} r="11" fill="none" stroke="#67e8f9" strokeWidth="3" />
      {Object.entries(j).map(([k, [x, y]]) => k !== "head" && <circle key={k} cx={x} cy={y} r="3.5" fill="#bae6fd" />)}
      <g transform="translate(196 132)">
        <rect width="108" height="30" rx="8" fill="#ffffff" />
        <text x="10" y="13" fontSize="8" fill="#6b7280" fontFamily="Plus Jakarta Sans Variable, sans-serif">
          Kick score
        </text>
        <text x="10" y="25" fontSize="11" fontWeight="700" fill="#2f6db5" fontFamily="Plus Jakarta Sans Variable, sans-serif">
          87 / 100
        </text>
        <rect x="58" y="16" width="40" height="5" rx="2.5" fill="#dbeafe" />
        <rect x="58" y="16" width="34" height="5" rx="2.5" fill="#2f6db5" />
      </g>
    </svg>
  );
}

function BookingScene() {
  const steps = ["Station", "Model", "Schedule"];
  return (
    <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <rect width="320" height="180" fill="#f8fafc" />
      {steps.map((s, i) => (
        <g key={s} transform={`translate(${16 + i * 100} 14)`}>
          <rect width="88" height="24" rx="12" fill={i < 2 ? "#10b981" : "#e2e8f0"} />
          <text x="44" y="16" textAnchor="middle" fontSize="10" fontWeight="600" fill={i < 2 ? "#fff" : "#475569"} fontFamily="Plus Jakarta Sans Variable, sans-serif">
            {i + 1}. {s}
          </text>
        </g>
      ))}
      {Array.from({ length: 21 }, (_, i) => {
        const x = 16 + (i % 7) * 26;
        const y = 50 + Math.floor(i / 7) * 26;
        const picked = i >= 9 && i <= 11;
        return <rect key={i} x={x} y={y} width="22" height="22" rx="5" fill={picked ? "#0ea5e9" : "#e2e8f0"} />;
      })}
      <g transform="translate(206 50)">
        <rect width="100" height="74" rx="10" fill="#ffffff" stroke="#e2e8f0" />
        <text x="10" y="18" fontSize="9" fill="#64748b" fontFamily="Plus Jakarta Sans Variable, sans-serif">
          E-scooter · 3 days
        </text>
        <text x="10" y="38" fontSize="14" fontWeight="700" fill="#0f172a" fontFamily="Plus Jakarta Sans Variable, sans-serif">
          450.000đ
        </text>
        <rect x="10" y="50" width="80" height="16" rx="6" fill="#10b981" />
        <text x="50" y="61" textAnchor="middle" fontSize="8" fontWeight="600" fill="#fff" fontFamily="Plus Jakarta Sans Variable, sans-serif">
          Pay with VNPay
        </text>
      </g>
      <rect x="16" y="134" width="190" height="8" rx="4" fill="#e2e8f0" />
      <rect x="16" y="150" width="130" height="8" rx="4" fill="#e2e8f0" />
    </svg>
  );
}

function ReportScene() {
  const rows = [
    { tag: "Plastic", c: "#0ea5e9", bg: "#e0f2fe" },
    { tag: "Organic", c: "#16a34a", bg: "#dcfce7" },
    { tag: "Metal", c: "#a16207", bg: "#fef9c3" },
  ];
  return (
    <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <rect width="320" height="180" fill="#f7fdf9" />
      {rows.map((r, i) => (
        <g key={r.tag} transform={`translate(14 ${14 + i * 52})`}>
          <rect width="200" height="44" rx="10" fill="#fff" stroke="#e5efe9" />
          <rect x="8" y="8" width="28" height="28" rx="6" fill={r.bg} />
          <rect x="44" y="11" width="88" height="7" rx="3.5" fill="#d1d5db" />
          <rect x="44" y="25" width="60" height="7" rx="3.5" fill="#e5e7eb" />
          <rect x="146" y="13" width="46" height="18" rx="9" fill={r.bg} />
          <text x="169" y="25" textAnchor="middle" fontSize="8.5" fontWeight="600" fill={r.c} fontFamily="Plus Jakarta Sans Variable, sans-serif">
            {r.tag}
          </text>
        </g>
      ))}
      <g transform="translate(224 40)">
        <rect width="84" height="96" rx="12" fill="#0f766e" />
        <text x="42" y="26" textAnchor="middle" fontSize="9" fill="#ccfbf1" fontFamily="Plus Jakarta Sans Variable, sans-serif">
          AI suggests
        </text>
        <text x="42" y="50" textAnchor="middle" fontSize="15" fontWeight="700" fill="#ffffff" fontFamily="Plus Jakarta Sans Variable, sans-serif">
          Plastic
        </text>
        <text x="42" y="68" textAnchor="middle" fontSize="10" fill="#99f6e4" fontFamily="JetBrains Mono Variable, monospace">
          94% sure
        </text>
      </g>
    </svg>
  );
}

const scenes = { map: MapScene, pose: PoseScene, booking: BookingScene, report: ReportScene };

export function ProjectCover({ project, large = false }: { project: Project; large?: boolean }) {
  const { cover, name } = project;
  const Scene = cover.scene === "image" ? null : scenes[cover.scene];

  return (
    <div
      className={`relative overflow-hidden ${large ? "aspect-[16/11] lg:aspect-auto lg:h-full" : "aspect-[16/10]"}`}
      style={{ backgroundColor: cover.tint }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgb(16 38 61 / .09) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute inset-x-[9%] top-[13%] bottom-0 overflow-hidden rounded-t-xl bg-white shadow-[0_10px_40px_-12px_rgb(16_38_61/0.25)] ring-1 ring-black/5 transition-transform duration-500 group-hover:-translate-y-1.5">
        <div className="flex h-6 items-center gap-1.5 border-b border-black/5 bg-[#f4f4f8] px-3">
          <span className="size-2 rounded-full bg-[#ff5f57]" />
          <span className="size-2 rounded-full bg-[#febc2e]" />
          <span className="size-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="h-[calc(100%-1.5rem)]">
          {Scene ? (
            <Scene />
          ) : (
            <img src={cover.image} alt={`${name} screenshot`} loading="lazy" className="h-full w-full object-cover object-top" />
          )}
        </div>
      </div>
      <img
        src={cover.icon}
        alt=""
        loading="lazy"
        className="absolute right-[4%] bottom-[6%] size-16 drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 sm:size-20"
      />
    </div>
  );
}
