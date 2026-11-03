// All content for the product portfolio page (/pm/). Edit this file to update it.

export const pmProfile = {
  openTo: "Open to Product Management Trainee roles",
  lead: "An aspiring product manager who has built the features first.",
  tagline:
    "I turn user problems and business goals into clear requirements, ship them with engineers and QA, then check the numbers to see whether they worked.",
  // Put the CV at public/pm/resume.pdf, then set this to "/pm/resume.pdf" to show the Resume buttons.
  resumeUrl: "",
};

export const about = [
  "As a frontend developer, I kept running into the same problem: features weren't failing in the code. They were failing in the gap between what the business meant and what the ticket said. A missing edge case became a bug, and an undefined status became a two-day back-and-forth.",
  "So I started working on that gap. On AutoWash I wrote the loyalty and voucher rules before the team wrote any code. On Medilab, my capstone, I co-write the feature specs our 5-person team builds from, then deliver features from them. Understanding the problem, and checking afterwards whether a feature moved the numbers, is the part of the work I enjoy most.",
];

// The four parts of the Product Management Trainee role, each with what I've already done.
export type Pillar = { title: string; icon: "problem" | "data" | "build" | "team"; evidence: string[] };

export const pillars: Pillar[] = [
  {
    title: "Understand problems & find solutions",
    icon: "problem",
    evidence: [
      "Wrote AutoWash's product rules: roles, loyalty tiers, points, rewards and the booking lifecycle",
      "Co-write Medilab's inventory and laboratory specs from the lab's business flows",
    ],
  },
  {
    title: "Analyze data & measure results",
    icon: "data",
    evidence: [
      "Built AutoWash's admin KPIs: bookings, completed washes, active customers, promotion usage",
      "Use SQL and Excel to answer questions, and define success metrics before building",
    ],
  },
  {
    title: "Support product development",
    icon: "build",
    evidence: [
      "Write user stories with testable acceptance criteria; Medilab's backlog has 186 of them",
      "Delivered 11 Medilab features end to end and wrote AutoWash's pre-release test report",
    ],
  },
  {
    title: "Collaborate across teams",
    icon: "team",
    evidence: [
      "AWS First Cloud Journey: a 5-person team working with AWS mentors, in English",
      "Medilab: issues, pull requests and reviews with 4 teammates, the supervisor and a mentor",
    ],
  },
];

export const toolkit: { title: string; items: string[] }[] = [
  {
    title: "Product",
    items: ["Problem framing", "PRDs & product rules", "User Stories & AC", "Prioritization", "UAT & launch testing", "Feedback loops"],
  },
  {
    title: "Data",
    items: ["KPI definition", "SQL (PostgreSQL, SQL Server)", "Excel", "Dashboard reporting", "Funnel & repeat metrics", "Campaign evaluation"],
  },
  {
    title: "CRM & Payments",
    items: ["Loyalty tiers", "Points & expiry", "Vouchers & promotions", "Redemption rules", "PayOS / VNPay flows", "Payment reconciliation"],
  },
  {
    title: "Delivery & Tech",
    items: ["Scrum & sprint planning", "Business flows (BPMN)", "REST API specs", "React / Next.js", "NestJS / .NET", "Odoo (Python)"],
  },
];

export type Tool = "jira" | "confluence" | "figma" | "sheets" | "postman" | "notion" | "github" | "claude";

export const tools: { key: Tool; label: string }[] = [
  { key: "jira", label: "Jira" },
  { key: "confluence", label: "Confluence" },
  { key: "figma", label: "Figma" },
  { key: "sheets", label: "Excel / Sheets" },
  { key: "postman", label: "Postman" },
  { key: "notion", label: "Notion" },
  { key: "github", label: "GitHub" },
  { key: "claude", label: "AI assistants" },
];

/* ---------- User stories (shared shape for both case studies) ---------- */

export type Step = { kw: "Given" | "And" | "When" | "Then"; text: string };

export type Story = {
  id: string;
  title: string;
  asA: string;
  iWant: string;
  soThat: string;
  tags: string[];
  // Given-When-Then scenarios, or plain testable statements as some teams write them.
  criteria: { title: string; steps: Step[] }[] | string[];
};

/* ---------- AutoWash loyalty case study ---------- */

export const autowash = {
  name: "AutoWash: loyalty, points & vouchers",
  role: "Product & Fullstack Developer",
  team: "Team of 3 · top contributor (38 of 99 commits)",
  period: "May – Jul 2026",
  demo: "https://car-washed-management.vercel.app",
  repo: "https://github.com/hzanhle/Car_washed_management",
  rulesDoc: "https://github.com/hzanhle/Car_washed_management/blob/main/client/docs/agent/product-rules.md",
  context:
    "AutoWash is a car wash booking web app with a loyalty program. Customers book washes in advance, earn points and climb tiers; admins run vouchers and promotions; staff check cars in and out.",
  goals: [
    "Reward repeat visits with points and tier perks",
    "Let admins run vouchers and promotions without a developer",
    "Never let a voucher or the same points be redeemed twice",
  ],
  owned: [
    "Wrote the product rules doc the team built from: roles, tiers, points, rewards and the booking lifecycle",
    "Built the admin voucher and promotion screens",
    "Implemented points and voucher reservation in the booking service",
    "Delivered the customer and admin dashboards from the API",
    "Added PayOS payment reconciliation and wrote the pre-release test report",
  ],
};

export const tiers = [
  { tier: "Member", window: "7 days ahead", note: "Starting tier for every new customer" },
  { tier: "Silver", window: "10 days ahead", note: "Higher booking priority" },
  { tier: "Gold", window: "12 days ahead", note: "Higher priority, better perks when configured" },
  { tier: "Platinum", window: "14 days ahead", note: "Top priority and the best promotions" },
];

export const voucherRules = [
  { field: "Discount type", rule: "Fixed amount or percent" },
  { field: "Minimum order value", rule: "Applies only above a set booking value" },
  { field: "Maximum discount", rule: "Caps how much a percent voucher can take off" },
  { field: "Usage limit", rule: "Total redemptions allowed, checked when the booking is created" },
  { field: "Validity window", rule: "Start and end date" },
  { field: "Minimum tier", rule: "Optional: only customers at or above this tier can use it" },
];

export const pointsFlow = [
  {
    step: "Reserve",
    when: "Customer books with points or a voucher",
    what: "Points are held and the voucher's usage is counted in the same database transaction as the booking.",
  },
  {
    step: "Earn",
    when: "Wash completed",
    what: "New points are added from the booking, each batch valid for 12 months.",
  },
  {
    step: "Release",
    when: "Booking cancelled or no-show",
    what: "Held points and the voucher go back to the customer.",
  },
  {
    step: "Expire",
    when: "12 months after earning",
    what: "Unused points expire, which gives a natural reason to come back.",
  },
];

// Written from the rules AutoWash shipped (usage limits, insufficient points, locked voucher fields).
export const loyaltyStories: Story[] = [
  {
    id: "US-L1",
    title: "Apply a voucher",
    asA: "Customer",
    iWant: "to apply a voucher when I book a wash",
    soThat: "I pay less for this visit",
    tags: ["Must have", "Vouchers"],
    criteria: [
      {
        title: "Valid voucher",
        steps: [
          { kw: "Given", text: "a voucher inside its validity window" },
          { kw: "And", text: "my booking total is at least its minimum order value and my tier meets its minimum tier" },
          { kw: "When", text: "I apply it" },
          { kw: "Then", text: "the discount is shown in the booking summary, with percent discounts capped at the maximum" },
          { kw: "And", text: "one use of the voucher is reserved when I confirm the booking" },
        ],
      },
      {
        title: "Usage limit reached",
        steps: [
          { kw: "Given", text: "the voucher has reached its usage limit" },
          { kw: "When", text: "I confirm the booking" },
          { kw: "Then", text: "the booking is not created and I'm told the voucher has been fully redeemed" },
        ],
      },
      {
        title: "Below minimum order",
        steps: [
          { kw: "Given", text: "my booking total is below the voucher's minimum order value" },
          { kw: "When", text: "I try to apply it" },
          { kw: "Then", text: "it is not applied and I see how much more I need to spend" },
        ],
      },
    ],
  },
  {
    id: "US-L2",
    title: "Pay with points",
    asA: "Gold member",
    iWant: "to use my points on a booking",
    soThat: "my loyalty turns into real savings",
    tags: ["Must have", "Points"],
    criteria: [
      {
        title: "Enough points",
        steps: [
          { kw: "Given", text: "my available points cover the amount I choose to use" },
          { kw: "When", text: "I confirm the booking" },
          { kw: "Then", text: "the points are reserved and my available balance drops right away" },
        ],
      },
      {
        title: "Not enough points",
        steps: [
          { kw: "Given", text: "I choose more points than I have available" },
          { kw: "When", text: "I confirm the booking" },
          { kw: "Then", text: "the booking is blocked with an insufficient-points message" },
        ],
      },
      {
        title: "Cancel gives points back",
        steps: [
          { kw: "Given", text: "a booking with reserved points or a voucher" },
          { kw: "When", text: "it is cancelled or marked as a no-show" },
          { kw: "Then", text: "the points and the voucher use are released back to me" },
        ],
      },
    ],
  },
  {
    id: "US-L3",
    title: "Create a voucher",
    asA: "Admin",
    iWant: "to create a voucher with spending limits",
    soThat: "I can run a campaign without overspending",
    tags: ["Must have", "Campaign tools"],
    criteria: [
      {
        title: "Create",
        steps: [
          { kw: "Given", text: "I enter a code, discount type and value, minimum order, maximum discount, usage limit, dates and an optional minimum tier" },
          { kw: "When", text: "I save" },
          { kw: "Then", text: "the voucher appears in the list with usage 0 of its limit" },
        ],
      },
      {
        title: "Locked fields",
        steps: [
          { kw: "Given", text: "a voucher already exists" },
          { kw: "When", text: "I edit it" },
          { kw: "Then", text: "the code and discount type can't be changed, so past redemptions stay consistent" },
        ],
      },
      {
        title: "Track usage",
        steps: [
          { kw: "Given", text: "customers are redeeming the voucher" },
          { kw: "When", text: "I open the voucher list" },
          { kw: "Then", text: "I see its current usage against the limit" },
        ],
      },
    ],
  },
];

export const trackedKpis = ["Today's bookings", "Active washes", "Completed washes", "Active customers", "Promotion usage"];

export const campaignMetrics = [
  { metric: "Redemption rate", how: "Customers who used the voucher ÷ customers who could use it" },
  { metric: "Incremental bookings", how: "Bookings from redeemers vs. a holdout group that didn't get the voucher" },
  { metric: "30-day repeat rate", how: "Share of redeemers who book again within 30 days" },
  { metric: "Cost per incremental booking", how: "Total discount given ÷ incremental bookings" },
  { metric: "Guardrail", how: "Average order value and margin must not drop below the pre-campaign level" },
];

export const voucherSql = `-- Voucher performance: how much of the limit was used,
-- and how many redeemers came back within 30 days (PostgreSQL, simplified schema)
WITH redeemed AS (
  SELECT b.user_id, b.voucher_id, MIN(b.appointment_date) AS first_use
  FROM bookings b
  WHERE b.voucher_id IS NOT NULL AND b.status = 'COMPLETED'
  GROUP BY b.user_id, b.voucher_id
)
SELECT v.code,
       ROUND(100.0 * v.current_usage / NULLIF(v.usage_limit, 0), 1) AS pct_limit_used,
       COUNT(DISTINCT r.user_id)                                    AS redeemers,
       ROUND(100.0 * COUNT(DISTINCT b2.user_id)
             / NULLIF(COUNT(DISTINCT r.user_id), 0), 1)             AS repeat_30d_pct
FROM vouchers v
LEFT JOIN redeemed r ON r.voucher_id = v.id
LEFT JOIN bookings b2
       ON b2.user_id = r.user_id
      AND b2.status = 'COMPLETED'
      AND b2.appointment_date >  r.first_use
      AND b2.appointment_date <= r.first_use + INTERVAL '30 days'
GROUP BY v.id, v.code, v.current_usage, v.usage_limit
ORDER BY repeat_30d_pct DESC NULLS LAST;`;

export const loyaltyNext = [
  "AutoWash has no real customers yet, so these metrics are how I would measure it, not results I can show.",
  "The reward redemption API was out of scope, so we shipped the reward catalog on a mock until the backend existed.",
  "Next I'd run each voucher with a small holdout group, so we know which bookings it actually added.",
];

/* ---------- Product exercise ---------- */

export const exercise = {
  scenario:
    "Users claim vouchers in a payment app, but many of those vouchers expire unused. The team wants more of them used, without just giving away bigger discounts.",
  disclaimer: "A practice exercise with a made-up scenario. It uses no ZaloPay data and makes no claims about how ZaloPay works.",
  why: [
    "Unused vouchers are campaign budget that bought no behaviour change",
    "A user who claims and never redeems may be less likely to engage with the next campaign",
  ],
};

// The funnel I'd pull first, to find where users drop off.
export const funnel = [
  { stage: "Eligible", question: "Who was targeted, and was the target right?" },
  { stage: "Saw it", question: "Did the voucher reach them, and where?" },
  { stage: "Claimed", question: "Which vouchers get claimed most, by which segments?" },
  { stage: "Used", question: "How long from claim to use? Who never uses it?" },
  { stage: "Came back", question: "Did redeemers pay again within 30 days without a voucher?" },
];

export const hypotheses = [
  {
    id: "H1",
    belief: "Users forget about vouchers they claimed",
    check: "Share of unused vouchers that expire with no app session in their last 3 days",
    test: "Reminder 48 hours before expiry, A/B against no reminder",
    metric: "Redemption rate of claimed vouchers",
    guardrail: "Notification opt-out rate",
  },
  {
    id: "H2",
    belief: "The minimum order is above what users usually spend",
    check: "Compare each voucher's minimum order with the user's typical payment amount",
    test: "Lower the minimum for one segment, keep the same discount cap",
    metric: "Redemption rate and incremental payments",
    guardrail: "Discount cost per incremental payment",
  },
  {
    id: "H3",
    belief: "Users don't see the voucher at the moment they pay",
    check: "Redemptions that come from the checkout screen vs. the voucher wallet",
    test: "Suggest the best eligible voucher on the checkout screen",
    metric: "Share of eligible payments that use a voucher",
    guardrail: "Checkout completion time",
  },
];

export const firstMove =
  "I'd start with H1. It's the cheapest to build, it can't make the checkout worse, and a simple A/B test gives a clear answer within one campaign. If reminders barely move redemption, that points to H2 or H3, and the funnel shows which.";

/* ---------- Medilab case study ---------- */

export const medilab = {
  name: "Medilab: laboratory management system",
  role: "Fullstack Developer & Spec Co-author",
  team: "Capstone · Team of 5",
  period: "Sep 2026 – Present",
  repo: "https://github.com/SoltuneMontepre/medilab",
  stakeholders: "Project supervisor and industry mentor (acting as Product Owner)",
  context:
    "Medilab runs a testing laboratory end to end: customer orders and quotations, sample reception, testing and scheduling, result approval, signed reports, and the stock the lab uses along the way.",
  stats: [
    { value: "186", label: "User stories in the backlog" },
    { value: "15", label: "Role-based feature specs" },
    { value: "4", label: "Modules" },
    { value: "11", label: "Features I delivered" },
  ],
  myPart: [
    "Co-write the inventory and laboratory feature specs: user stories per role, business-rule tables and acceptance criteria",
    "Deliver features end to end from those specs, with tests and updated docs",
    "Turn questions from the mentor into decisions recorded in the business docs",
  ],
};

export const mainFlows = [
  { id: "WF-01", name: "Order to confirmed test request", text: "A customer order and quotation become a confirmed request the lab can plan." },
  { id: "WF-02", name: "Sample reception and handover", text: "Samples are received, labelled and handed over to each testing department on record." },
  { id: "WF-03", name: "Testing assignment and scheduling", text: "Heads of department assign tests and balance people, machines and due dates." },
  { id: "WF-04", name: "Result entry and approval", text: "Testers enter results; heads of department approve or reject them with a reason." },
  { id: "WF-05", name: "Outsourced testing", text: "Tests that can't finish in time in-house go to a subcontractor and are tracked back." },
  { id: "WF-06", name: "Report signing, release and delivery", text: "The Lab Head signs the final report, which is locked and delivered to the customer." },
];

export const signingRules = [
  "Approving is signing: one concept, one click, and the signer takes responsibility",
  "A signed document is locked and can't be changed, even by its owner",
  "A signature never changes once given, not even by an administrator",
  "Heads of department may approve results they entered; other testers can't approve their own",
  "One person signs at most one level of a document version",
  "A higher-level role can sign a lower level in their own name; a time-limited backup covers an absent top signer, recorded in the audit trail",
];

// Taken from the team's specs, in the team's format: stories per role, then testable statements.
export const medilabStories: Story[] = [
  {
    id: "US-HD08",
    title: "Approve results",
    asA: "head of department",
    iWant: "to approve or reject the results of my department with a reason",
    soThat: "only checked results reach the report",
    tags: ["Laboratory", "Signing chain"],
    criteria: [
      "Rejecting a result sends its sample test back to testing, opens a new testing task and tells the tester the reason.",
      "Once every result of a sample is approved, the sample is completed.",
      "A head can explicitly approve a result they entered; it still needs the Lab Head's report signature before issue.",
      "A result sent with a sanity warning shows the warning to the head who approves it.",
      "Cancelling a sample test without a reason is refused; a cancelled test does not appear on the report.",
    ],
  },
  {
    id: "US-SK04",
    title: "Purchase orders",
    asA: "storekeeper",
    iWant: "to create a purchase order for a supplier and send it for approval",
    soThat: "stock is bought only once it is approved",
    tags: ["Inventory"],
    criteria: [
      "A purchase order cannot be sent before its approval chain has signed it.",
      "Receiving part of an order sets it to partially received; receiving the rest sets it to received.",
      "Receiving 5 bottles of a lot creates 5 sealed containers with their own codes, such as Lot123-01 to Lot123-05.",
      "A lot of an item with an expiry date cannot be received without the expiry date printed on its container.",
      "A signed purchase order cannot be changed, and a sent one cannot be cancelled once goods were received for it.",
    ],
  },
];

export const delivered = [
  { issue: "#50", name: "Stores and cost centres" },
  { issue: "#51", name: "Stock items, locations and suppliers" },
  { issue: "#52", name: "Recipes" },
  { issue: "#53", name: "Purchase orders and receipts" },
  { issue: "#59", name: "Audit trail" },
  { issue: "#195", name: "A signature never changes once given" },
  { issue: "#197", name: "Direct outsourcing in an emergency" },
  { issue: "#336", name: "Heads of department approve results they entered" },
  { issue: "#430", name: "Higher-level and backup signers" },
  { issue: "#438", name: "Internal users only through people" },
  { issue: "#184", name: "Medilab Mobile app setup" },
];

/* ---------- AI workflow ---------- */

export const aiIntro =
  "I write the spec once, as structured docs that teammates and AI coding assistants both work from. AI drafts; I check every draft against the business rules before it goes anywhere.";

export const aiSteps = [
  { step: "Write the rules first", ai: "Reads the product rules and API contract as its context", human: "I write and own those docs; on AutoWash they live in the repo" },
  { step: "Draft stories & AC", ai: "Drafts user stories and acceptance criteria, including negative and edge cases", human: "Check every criterion is testable and matches the rules" },
  { step: "Find the gaps", ai: "Flags contradictions, missing error states and undefined terms", human: "Decide which gaps are real and ask the Product Owner" },
  { step: "Test cases", ai: "Turns acceptance criteria into happy-path, negative and boundary tests", human: "Review before they go to QA" },
];

export const promptTemplate = `You are helping a product team. Using the product rules and role list below, write user stories in "As a / I want / so that" format with acceptance criteria.

For each story include: 1 happy path, at least 2 negative or edge cases, and any permission rule. Flag any ambiguity as an open question instead of assuming.

[Product rules] ...
[Roles] ...
[Feature] ...`;

/* ---------- Experience ---------- */

export const timeline = [
  {
    period: "Sep 2025 – Dec 2025",
    title: "Cloud Intern · First Cloud Journey",
    org: "Amazon Web Services Vietnam",
    kind: "work" as const,
    points: [
      "Turned a team brainstorm into a written proposal for an IoT smart-home alert product: problem, success metrics, timeline and a cost model. AWS mentors approved it after a 5-minute pitch.",
      "Mapped requirements to 10 AWS services and drew the end-to-end data-flow diagram the team used as its single source of truth.",
      "Built the React dashboard on Amplify, then ran end-to-end testing across sensor, cloud, API and UI before the final demo.",
    ],
    link: { label: "Internship worklog", href: "https://github.com/hzanhle/FCJ-Intershipreport" },
  },
  {
    period: "Sep 2025 – Jan 2026",
    title: "EV Station-Based Rental Platform",
    org: "SWP391 team project · FPT University",
    kind: "project" as const,
    points: [
      "Built the booking-to-payment flow (station → model → schedule → deposit) with PayOS and VNPay, covering paid, unpaid and expired orders.",
      "Built the admin dashboard pages with charts, plus staff screens for vehicle management and transfers between stations.",
    ],
    link: { label: "Repository", href: "https://github.com/hzanhle/SWP391-GROUP2" },
  },
  {
    period: "Class of 2026",
    title: "Bachelor's in Software Engineering",
    org: "FPT University, Ho Chi Minh City",
    kind: "education" as const,
    points: [
      "Capstone project in progress. Relevant coursework: Software Requirements, Software Project Management, Database Systems, Human-Computer Interaction.",
    ],
  },
];
