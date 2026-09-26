// Central place for every outbound link and piece of site copy.
// Update contact details here and they propagate everywhere.

const WHATSAPP_NUMBER = "233535945001";

const wa = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const links = {
  bookingWhatsApp: wa("Hi Richardson, I'd like to discuss working with you."),
  opportunityWhatsApp: wa("Hi Richardson, I have an opportunity I'd like to share with you."),
  plainWhatsApp: `https://wa.me/${WHATSAPP_NUMBER}`,
  almanacChannel: "https://whatsapp.com/channel/0029Vb5SFJVJ3jv5mEbVHo1M",
  email: "bignakamoto3@gmail.com",
  linkedin: "https://www.linkedin.com/in/richardson-dughan-14a3b9244",
  youtube: "https://www.youtube.com/@Dughanmotivates",
  tiktok: "https://www.tiktok.com/@bigdughan",
};

export const proofStats = [
  { num: "2+ yrs", label: "Building and operating Brisk Capital, a student lending business" },
  { num: "50+", label: "Recurring customers served through Brisk Capital" },
  { num: "3", label: "Live systems in production — lending, booking, and course delivery" },
  { num: "KNUST", label: "Computer Science, plus AIESEC and Innovation Hub experience" },
];

export const capabilities = [
  { index: "01", title: "Think", text: "Strategy, problem solving and business thinking — reading a messy situation and finding the structure underneath it." },
  { index: "02", title: "Build", text: "Technology, digital products and practical systems — turning a plan into something that actually runs." },
  { index: "03", title: "Communicate", text: "Speaking, writing and storytelling — making complicated things clearer, more useful, and easier to execute." },
];

export const projects = [
  {
    mark: "BC",
    tag: "Lending · Fintech",
    name: "Brisk Capital",
    desc: "A short-term lending operation giving small loans to students around KNUST and Oforikrom — built to learn how real borrowers actually behave, not how a textbook says they should.",
    facts: [
      { label: "The problem", text: "students need small, fast credit that formal lenders won't underwrite." },
      { label: "The result", text: "50+ recurring customers over 2+ years of continuous operation." },
    ],
    ctaText: "View case study →",
    ctaHref: "#brisk",
    ctaExternal: false,
  },
  {
    mark: "DC",
    tag: "Booking Platform · Local Business",
    name: "Dug's Cut",
    desc: "A booking platform for a single-salon, multi-chair barbering business — built to remove the friction between a client wanting a cut and a chair actually being free.",
    facts: [
      { label: "The problem", text: "walk-ins and phone bookings collide, chairs sit idle or overbooked." },
      { label: "The approach", text: "a lightweight scheduling system built around how the salon actually runs, not a generic template." },
    ],
    ctaText: "Start a project →",
    ctaHref: links.bookingWhatsApp,
    ctaExternal: true,
  },
  {
    mark: "SE",
    tag: "Education · Digital Product",
    name: "The State Engine",
    desc: "A 10-day masterclass — Mini-Course 01 of System Vault — teaching a practical framework for managing internal state under pressure, delivered as a PDF course with its own sales page.",
    facts: [
      { label: "The problem", text: "most \u201cmindset\u201d content is motivation without mechanism." },
      { label: "The approach", text: "ten structured days, one clear promise, built to be finished, not just started." },
    ],
    ctaText: "Talk through a problem →",
    ctaHref: links.bookingWhatsApp,
    ctaExternal: true,
  },
];

export const briskSteps = [
  { num: "01", title: "Problem", body: "Students near KNUST and Oforikrom regularly need small amounts of fast cash — GH\u20B550 to GH\u20B5400 — that banks and formal lenders have no interest in underwriting." },
  { num: "02", title: "Insight", body: "Trust and proximity matter more than paperwork at this loan size. Repayment behaviour is legible if you're close enough to the borrower to actually track it." },
  { num: "03", title: "Intervention", body: "Built and ran a lending operation by hand, then layered a proper register, dashboard, and borrower-profile system on top to see the patterns in the data." },
  { num: "04", title: "Result", body: "50+ recurring customers over 2+ years — a lending book that survives on repeat trust, not one-off transactions." },
  { num: "05", title: "Lesson", body: "Credit risk is a behaviour problem before it's a numbers problem. The spreadsheet only gets useful once you already understand the person in the row." },
];

export const briskMetrics = [
  { num: "50+", label: "Recurring customers" },
  { num: "2+ yrs", label: "Continuous operation" },
  { num: "GH\u20B550\u2013400", label: "Typical loan size per borrower" },
  { num: "KNUST", label: "Oforikrom catchment area" },
];

export const platforms = [
  { name: "YouTube", desc: "Long-form thinking under the Dughan Motivates banner — 10K+ combined views across TikTok and YouTube.", href: links.youtube, cta: "Watch on YouTube →" },
  { name: "TikTok", desc: "Short, direct hits of the same operating philosophy — built systems, real lessons, no filler.", href: links.tiktok, cta: "Follow on TikTok →" },
  { name: "LinkedIn", desc: "Where the business thinking and the writing meet — for consulting and speaking conversations.", href: links.linkedin, cta: "Connect on LinkedIn →" },
];

export const speakingEngagements = [
  { title: "Beyond The Hustle", venue: "KNUST" },
  { title: "The Art of Dialogue", venue: "UNIV Ghana Conference" },
];

export const almanacCategories = [
  { name: "Business & Strategy", desc: "Notes on operating a lending book, pricing risk, and making decisions with incomplete information." },
  { name: "Systems & Technology", desc: "How practical software gets built for real, unglamorous problems — booking chairs, tracking loans, shipping courses." },
  { name: "Communication & Growth", desc: "Confidence, behavioural frameworks, and the mechanics of saying a true thing clearly." },
];

export const experience = [
  {
    org: "Brisk Capital",
    role: "Founder / Operator",
    rows: [
      { label: "Context", text: "student lending around KNUST and Oforikrom." },
      { label: "Responsibility", text: "capital allocation, borrower relationships, collections, and the register that tracks all of it." },
      { label: "Evidence", text: "50+ recurring customers, 2+ years of continuous operation." },
    ],
  },
  {
    org: "KNUST Innovation Hub",
    role: "Centre for Business Development",
    rows: [
      { label: "Context", text: "business development work inside a university innovation ecosystem." },
      { label: "Lesson", text: "good ideas need structure and distribution as much as they need originality." },
    ],
  },
  {
    org: "AIESEC in KNUST",
    role: "International Relations / Exchange Operations",
    rows: [
      { label: "Context", text: "cross-border exchange programmes and international relations." },
      { label: "Lesson", text: "operating across cultures and organisations forces you to communicate plainly." },
    ],
  },
  {
    org: "Speaking",
    role: "KNUST · UNIV Ghana Conference",
    rows: [
      { label: "Context", text: "Beyond The Hustle at KNUST; The Art of Dialogue at the UNIV Ghana Conference." },
      { label: "Lesson", text: "a good talk is a system too — it just runs on an audience instead of a server." },
    ],
  },
];

export const bookingPaths = [
  { eyebrow: "Consulting", title: "Business, strategy & systems", desc: "A business, strategy, operations, or systems problem you need a second, structured pair of eyes on.", cta: "Book a consultation →", href: links.bookingWhatsApp },
  { eyebrow: "Speaking", title: "Talks & workshops", desc: "A conference, school, or organisation looking for a talk built on real, lived experience — not slides of theory.", cta: "Book Richardson →", href: links.bookingWhatsApp },
  { eyebrow: "Building", title: "Products & systems", desc: "A digital product, lightweight tool, or internal system that needs to go from idea to something people actually use.", cta: "Start a project →", href: links.bookingWhatsApp },
];
