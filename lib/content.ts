import type { LucideIcon } from "lucide-react"
import {
  Boxes,
  Bot,
  Building2,
  Cpu,
  Radar,
  Workflow,
  Users,
  Wallet,
  ShoppingBag,
  Contact,
  Megaphone,
  Sparkles,
  PhoneCall,
  Target,
  ShieldCheck,
  Gauge,
  Layers,
} from "lucide-react"

export type Feature = {
  slug: string
  icon: LucideIcon
  title: string
  short: string
  description: string
  bullets: string[]
  tag?: string
}

/* ─────────────── AEC software (core focus) ─────────────── */
export const aecSolutions: Feature[] = [
  {
    slug: "bim-software",
    icon: Building2,
    tag: "BIM",
    title: "BIM Software & Plugins",
    short: "Custom tools for Revit, Navisworks, Tekla & IFC workflows.",
    description:
      "We build the tools your BIM team wishes shipped in the box — Revit & Navisworks add-ins, Dynamo/Python automations, IFC pipelines, model checkers and data extractors tuned to your standards.",
    bullets: ["Revit / Navisworks add-ins", "Dynamo & pyRevit automation", "IFC & COBie data pipelines", "Model QA/QC & clash reporting"],
  },
  {
    slug: "automation",
    icon: Workflow,
    tag: "Automation",
    title: "Design & Construction Automation",
    short: "Remove the repetitive 40% of the week from your engineers.",
    description:
      "From drawing generation and sheet setup to quantity take-offs, submittals and RFIs — we automate the workflows that eat engineering hours, integrated with the tools you already run.",
    bullets: ["Auto drawing & sheet generation", "Quantity take-off engines", "Document & submittal pipelines", "Procore / ACC / BIM 360 integrations"],
  },
  {
    slug: "digital-twins",
    icon: Boxes,
    tag: "Digital Twin",
    title: "3D Visualization & Digital Twins",
    short: "Browser-based 3D with live data from site and sensors.",
    description:
      "Web-native 3D viewers and digital twin platforms built on IFC.js / Three.js — stream federated models, overlay IoT and progress data, and give stakeholders a single source of truth.",
    bullets: ["Web 3D viewers (IFC / glTF)", "Progress & 4D tracking", "Asset & facility twins", "Stakeholder dashboards"],
  },
  {
    slug: "iot",
    icon: Radar,
    tag: "IoT",
    title: "Site IoT Integration",
    short: "Sensors, gateways and dashboards that talk to your model.",
    description:
      "Connect environmental sensors, equipment telemetry, access and safety systems into one platform mapped to your BIM — alerts, history and analytics included.",
    bullets: ["Sensor & gateway integration", "Equipment telemetry", "Safety & compliance alerts", "Model-linked analytics"],
  },
  {
    slug: "ai",
    icon: Bot,
    tag: "AI",
    title: "AI Agents & Predictive Models",
    short: "Agents that read specs, estimate, schedule and forecast.",
    description:
      "Domain-trained AI for AEC: spec and drawing understanding, cost & schedule prediction, risk flags, and copilots that live inside your project tools.",
    bullets: ["Spec & drawing understanding", "Cost / delay prediction", "Project copilots & chat", "Document intelligence"],
  },
  {
    slug: "platforms",
    icon: Cpu,
    tag: "Platforms",
    title: "Custom AEC Platforms",
    short: "Portals, ERPs and field apps built for how construction works.",
    description:
      "Project portals, contractor ERPs, field inspection apps, procurement systems — mobile-first, offline-ready and integrated with your finance and BIM stack.",
    bullets: ["Project & client portals", "Field inspection apps", "Procurement & vendor systems", "Contractor ERP modules"],
  },
]

/* ─────────────── Business suite (products) ─────────────── */
export const products: Feature[] = [
  {
    slug: "crm",
    icon: Contact,
    tag: "CRM",
    title: "Opencoders CRM",
    short: "Pipeline, quotes and follow-ups built for project businesses.",
    description:
      "A CRM that understands long sales cycles, site visits, BOQs and multi-stakeholder deals. Track leads from ad click to signed contract with WhatsApp, email and call logging in one timeline.",
    bullets: ["Visual pipelines & stages", "Quotes, BOQs & proposals", "WhatsApp + email in one inbox", "Automation & reminders"],
  },
  {
    slug: "hrms",
    icon: Users,
    tag: "HRMS",
    title: "HRMS & Payroll",
    short: "Attendance, payroll and compliance for office and site crews.",
    description:
      "Geo-fenced attendance, shift & site rosters, leave, payroll with statutory compliance for India & UAE, documents and onboarding — one system for office staff and field workforce.",
    bullets: ["Geo attendance & shifts", "Payroll (IN / UAE compliant)", "Leave, documents, onboarding", "Employee self-service app"],
  },
  {
    slug: "accounting",
    icon: Wallet,
    tag: "Accounting",
    title: "Accounting & Finance",
    short: "GST / VAT-ready books with project-wise profitability.",
    description:
      "Invoicing, expenses, receivables, multi-currency and tax-ready reports — with project and cost-centre accounting so you know exactly which job is making money.",
    bullets: ["GST & VAT invoicing", "Project / cost-centre P&L", "Bank reconciliation", "Audit-ready reports"],
  },
  {
    slug: "commerce",
    icon: ShoppingBag,
    tag: "Omnichannel",
    title: "Omnichannel Commerce",
    short: "Online store + POS with one live stock count, synced to accounts.",
    description:
      "Sell in-store and online from a single inventory. Every offline sale, online order and return updates stock and accounting in real time — no more oversold SKUs or month-end reconciliation.",
    bullets: ["Storefront + POS in one", "Real-time unified inventory", "Auto-posting to accounting", "Returns, GRNs & stock audits"],
  },
]

/* ─────────────── Growth services ─────────────── */
export const services: Feature[] = [
  {
    slug: "ads-automation",
    icon: Megaphone,
    tag: "Paid Media",
    title: "Automated Meta & Google Ads",
    short: "Campaigns that optimise themselves against real revenue.",
    description:
      "We connect Meta and Google Ads to your CRM so budgets shift toward the audiences that actually convert — not just click. Creative testing, server-side tracking and weekly reporting included.",
    bullets: ["Meta & Google Ads management", "Server-side conversion tracking", "Creative testing engine", "CRM-connected optimisation"],
  },
  {
    slug: "influencer",
    icon: Sparkles,
    tag: "UAE & India",
    title: "Influencer Marketing",
    short: "Vetted creators across the UAE and India, managed end to end.",
    description:
      "Creator sourcing, contracts, briefs, content approvals and performance tracking — from Dubai lifestyle creators to regional Indian niches. Paid only for deliverables that ship.",
    bullets: ["Creator discovery & vetting", "Campaign briefs & approvals", "UGC for paid ads", "Performance & ROI reporting"],
  },
  {
    slug: "sales-agents",
    icon: PhoneCall,
    tag: "Conversion",
    title: "Sales Agents & Retargeting",
    short: "Trained agents who qualify, follow up and close your leads.",
    description:
      "Leads are worthless without follow-up. Our agents call, WhatsApp and nurture every lead within minutes, while automated retargeting re-engages the ones who go quiet.",
    bullets: ["Speed-to-lead under 5 minutes", "WhatsApp & call follow-ups", "Qualification & appointment setting", "Automated retargeting flows"],
  },
]

/* ─────────────── Process ─────────────── */
export const process = [
  { step: "01", icon: Target, title: "Discover", text: "A working session to map your workflow, pain points and the numbers that matter. You leave with a scoped plan — not a sales deck." },
  { step: "02", icon: Layers, title: "Design", text: "Clickable prototypes and data models before code. Your team validates every screen with real scenarios from site and office." },
  { step: "03", icon: Gauge, title: "Build", text: "Two-week sprints, demo every Friday. Integrations, security and performance are built in from day one, not bolted on." },
  { step: "04", icon: ShieldCheck, title: "Launch & Scale", text: "Training, rollout and a support SLA. We stay as your in-house team, shipping improvements as your business grows." },
]

/* ─────────────── Stats ─────────────── */
export const stats = [
  { value: 42, suffix: "+", label: "Projects shipped" },
  { value: 4.8, decimals: 1, suffix: "/5", label: "Client rating" },
  { value: 2, suffix: "", label: "Countries — India & UAE" },
  { value: 40, suffix: "%", label: "Avg. hours saved via automation" },
]

/* ─────────────── Clients ─────────────── */
export const clients = [
  { name: "EllisDon", logo: "/clients/ellisdon.webp" },
  { name: "Mulk", logo: "/clients/mulk.webp" },
  { name: "Uniqube", logo: "/clients/uniqube.webp" },
  { name: "Fineline", logo: "/clients/fineline.webp" },
  { name: "Sabs Online", logo: "/clients/sabs.webp" },
  { name: "Motoclub", logo: "/clients/motoclub.webp" },
  { name: "Bismi", logo: "/clients/bismi.webp" },
  { name: "Homely", logo: "/clients/homely.webp" },
  { name: "Candy", logo: "/clients/candy.webp" },
]

/* ─────────────── Team ─────────────── */
export const team = [
  { name: "Shah", role: "CEO & Founder", image: "/team/shah.webp" },
  { name: "Murshid", role: "Head of Operations", image: "/team/murshid.webp" },
  { name: "Shamal", role: "DevOps Engineer", image: "/team/shamal.webp" },
  { name: "Shuhaub", role: "Marketing & Ads Specialist", image: "/team/suhaib.webp" },
  { name: "Bisher", role: "Software Developer", image: "/team/bisher.webp" },
  { name: "Shifan", role: "Media & Ads Specialist", image: "/team/shifan.webp" },
  { name: "Najaf", role: "Software Developer", image: "/team/najaf.webp" },
]

/* ─────────────── Testimonials ─────────────── */
export const testimonials = [
  {
    name: "Ashik",
    company: "Motoclub",
    rating: 5,
    text: "What sets Opencoders apart is not only the results, but the involvement of the entire team. Short lines, no start-up costs, and they just do what they promise.",
  },
  {
    name: "Salvey",
    company: "Business owner",
    rating: 5,
    text: "I like their approach to marketing — it feels like they really understand my business.",
  },
  {
    name: "Althaf",
    company: "Director",
    rating: 5,
    text: "They thought carefully and patiently about setting up the campaign. I received new leads almost every day.",
  },
  {
    name: "Ashok",
    company: "Founder",
    rating: 5,
    text: "We had barely started when the first lead came in. When things slowed, the whole team took action with valuable ideas. Opencoders is our regular, pleasant discussion partner.",
  },
  {
    name: "Nas",
    company: "Client",
    rating: 5,
    text: "They just do what they promise.",
  },
]

/* ─────────────── Our own products ─────────────── */
export type OwnProduct = {
  slug: "opendesk" | "openland" | "roostling"
  name: string
  domain: string
  url: string
  kicker: string
  tagline: string
  description: string
  features: string[]
  status: "Live" | "Early access"
}

export const ownProducts: OwnProduct[] = [
  {
    slug: "opendesk",
    name: "OpenDesk",
    domain: "opendesk.studio",
    url: "https://opendesk.studio",
    kicker: "Vibe modeling",
    tagline: "From drawing to design, automatically.",
    description:
      "A vibe-modeling studio for architects and engineers. Sketch, describe or import a drawing and OpenDesk turns intent into parametric geometry — then pushes it straight into Revit.",
    features: ["Drawing → design automation", "Natural-language modeling", "Live Revit connector", "Parametric, editable output"],
    status: "Early access",
  },
  {
    slug: "openland",
    name: "OpenLand",
    domain: "openland.in",
    url: "https://openland.in",
    kicker: "Land intelligence",
    tagline: "Know the land before you draw a line.",
    description:
      "A data-first platform for land intelligence in India. Price trends, government construction rules, zoning, FAR and setbacks — for any parcel, before you commit to a site or a design.",
    features: ["Price trends by locality", "Govt. construction rules & bylaws", "Zoning, FAR & setback data", "Parcel-level reports"],
    status: "Early access",
  },
  {
    slug: "roostling",
    name: "Roostling for BIM",
    domain: "roostling.com/bim",
    url: "https://www.roostling.com/bim",
    kicker: "BIM assistant",
    tagline: "Someone on your taskbar who reads IFC, Revit and DWG.",
    description:
      "A desktop assistant for BIM professionals. Drop a model on it to view, summarise or convert; it watches the shared folder, turns BCF issues into reminders and keeps your team and versions in order.",
    features: ["IFC / RVT / DWG viewer", "RVT → IFC & format converter", "Task & team management", "Version control & ISO 19650 checks"],
    status: "Live",
  },
]

/* ─────────────── FAQ ─────────────── */
export const faqs = [
  {
    q: "Do you only work with AEC companies?",
    a: "AEC — architecture, engineering and construction — is our core focus and where our deepest domain expertise lies. Our business suite (CRM, HRMS, Accounting, Commerce) and growth services are used by companies in retail, F&B, services and manufacturing too.",
  },
  {
    q: "Can you integrate with Revit, Navisworks, Procore or Autodesk Construction Cloud?",
    a: "Yes. We build add-ins and integrations for the Autodesk ecosystem (Revit, Navisworks, ACC/BIM 360, Forge/APS), plus IFC-based pipelines for vendor-neutral workflows, and connectors for Procore, Primavera and MS Project.",
  },
  {
    q: "How does the omnichannel inventory sync work?",
    a: "Your POS, online store and warehouse share one inventory ledger. Every sale, return or GRN — online or offline — posts instantly to stock and to accounting, so counts and books are always in sync.",
  },
  {
    q: "Where are you based and where do you operate?",
    a: "We are headquartered in Kochi, India and run campaigns and projects across India and the UAE, with influencer and sales networks in both markets.",
  },
  {
    q: "What does engagement look like?",
    a: "Most projects start with a short discovery sprint, then move into two-week build sprints with a demo every Friday. For products and growth services we offer monthly plans with no long lock-in.",
  },
  {
    q: "How quickly can we start?",
    a: "Discovery calls are usually scheduled within 48 hours. Business suite products can go live in days; custom AEC software typically ships a first usable version in 4–8 weeks.",
  },
]

export const serviceOptions = [
  "AEC software / BIM tools",
  "Automation & digital twins",
  "AI agents / predictive models",
  "CRM",
  "HRMS & payroll",
  "Accounting software",
  "Omnichannel commerce (online + offline)",
  "Meta / Google Ads automation",
  "Influencer marketing (UAE / India)",
  "Sales agents & retargeting",
  "Training & courses (Broline)",
  "Partnership",
  "Other",
]

/* ───────────────────────── Broline — Brother Online (our school) ───────────────────────── */

export const broline = {
  name: "Broline",
  fullName: "Brother Online",
  domain: "broline.in",
  url: "https://broline.in",
  coursesUrl: "https://broline.in",
  tagline: "The Opencoders school for automation, teams and code.",
  description:
    "Broline (Brother Online) is the learning arm of Opencoders. We teach companies how to automate their operations, train employees on the tools they actually use, and run development courses — live cohorts, corporate workshops and self-paced learning on the Broline LMS.",
  tracks: [
    {
      slug: "automation",
      kicker: "For companies",
      title: "Automate your business",
      description:
        "A hands-on programme for founders, ops heads and managers. Map your workflows, pick the right tools and ship real automations — CRM, HR, accounting, WhatsApp, documents and reporting — before the course ends.",
      outcomes: ["Map and prioritise what to automate", "No-code + code automation stack", "AI agents for routine work", "Live on your own business data"],
      duration: "4 weeks · live",
      audience: "Founders, ops & department heads",
    },
    {
      slug: "teams",
      kicker: "For teams",
      title: "Train your employees",
      description:
        "Role-based training that gets a team productive on the software they use every day — BIM & Revit workflows, your CRM/HRMS/accounting suite, or a new process. On-site in India & UAE or online, with assessments so you can see who learned what.",
      outcomes: ["Curriculum built around your roles", "On-site or online cohorts", "Assessments & completion tracking", "Onboarding playbooks you keep"],
      duration: "1–6 weeks · cohort",
      audience: "Teams of 5–200",
    },
    {
      slug: "development",
      kicker: "For builders",
      title: "Learn development",
      description:
        "From first line of code to shipping products. Web development with React & Next.js, Python & automation scripting, BIM programming (Revit API, Dynamo, IFC) and building AI-powered apps — taught by the engineers who build Opencoders products.",
      outcomes: ["Web, Python & BIM programming tracks", "Portfolio projects, not just exercises", "Mentorship from working engineers", "Internship & hiring pathway at Opencoders"],
      duration: "8–16 weeks · live + LMS",
      audience: "Students, career switchers, engineers",
    },
  ],
  formats: [
    { title: "Live cohorts", description: "Scheduled online batches with a lead instructor, weekly builds and feedback." },
    { title: "Self-paced on the LMS", description: "Recorded lessons, labs and quizzes on broline.in — learn on your own time." },
    { title: "Corporate workshops", description: "On-site or virtual intensives designed around one company's tools and processes." },
    { title: "1:1 mentorship", description: "Office hours and code reviews with Opencoders engineers." },
  ],
  steps: [
    { title: "Pick a track", description: "Automation, team training or development — or tell us what your team needs and we'll scope it." },
    { title: "Learn by building", description: "Every module ends with something real: an automation running, a model delivered, an app deployed." },
    { title: "Get assessed", description: "Quizzes, project reviews and completion tracking on the Broline LMS." },
    { title: "Certificate & next step", description: "A Broline certificate, plus implementation support for companies or a hiring pathway for developers." },
  ],
  faqs: [
    { q: "What is Broline?", a: "Broline — short for Brother Online — is the learning school run by Opencoders. It hosts our courses, corporate training programmes and the Broline LMS at broline.in." },
    { q: "Who are the courses for?", a: "Three groups: companies that want to automate how they work, teams that need training on specific software or processes, and individuals who want to learn development — web, Python, BIM programming and AI apps." },
    { q: "Are the courses online or in person?", a: "Both. Live online cohorts and self-paced learning run on the Broline LMS. Corporate training can be delivered on-site in India and the UAE or virtually." },
    { q: "Do I get a certificate?", a: "Yes. Every completed track issues a Broline certificate. Corporate programmes also include assessment reports for each participant." },
    { q: "How do I enrol?", a: "Individual courses are open on broline.in. For company or team training, send us a request and we'll scope a programme around your roles and tools." },
  ],
} as const
