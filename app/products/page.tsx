import type { Metadata } from "next"
import { PageHero } from "@/components/site/page-hero"
import { FeatureDetailList } from "@/components/site/feature-detail"
import { Section, SectionHeading, CTA } from "@/components/site/section"
import { CtaBand } from "@/components/site/cta-band"
import { JsonLd } from "@/components/site/json-ld"
import { Reveal, Stagger, StaggerItem } from "@/components/site/motion"
import { FaqSection } from "@/components/home/faq-section"
import { products } from "@/lib/content"
import { absoluteUrl, site } from "@/lib/site"
import { Check, Database, Link2, Smartphone, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Business Suite — CRM, HRMS, Accounting & Omnichannel Commerce",
  description:
    "Opencoders Business Suite: CRM, HRMS & payroll, GST/VAT-ready accounting and omnichannel commerce with real-time offline + online inventory sync. One database for leads, people, money and stock. India & UAE.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Business Suite — CRM, HRMS, Accounting & Commerce | Opencoders",
    description: "Connected CRM, HRMS, Accounting and Omnichannel Commerce with live stock sync across online and offline sales.",
    url: absoluteUrl("/products"),
    images: ["/og-image.png"],
  },
}

const pillars = [
  { icon: Database, title: "One database", text: "Every module shares customers, products, staff and ledgers. No CSV exports between systems." },
  { icon: Link2, title: "Connected by default", text: "A won deal creates the invoice. A POS sale posts to accounts. A new hire gets payroll and access." },
  { icon: Smartphone, title: "Mobile & offline-ready", text: "Field sales, store POS and attendance keep working without signal and sync when back online." },
  { icon: ShieldCheck, title: "Compliance built in", text: "GST (India) and VAT (UAE) invoicing, statutory payroll, audit logs and role-based access." },
]

const plans = [
  { name: "Starter", price: "₹999", period: "/mo per module", note: "For small teams getting organised", features: ["1 module (CRM, HRMS, Accounting or Commerce)", "Up to 5 users", "Mobile app", "Email support"], cta: "Start with one module" },
  { name: "Suite", price: "Custom", period: "", note: "For companies running the full stack", features: ["All four modules, connected", "Unlimited users & locations", "Custom workflows & reports", "Dedicated onboarding & SLA"], cta: "Talk to us", featured: true },
  { name: "Enterprise", price: "Custom", period: "", note: "For groups, franchises & multi-entity", features: ["Multi-company consolidation", "Custom integrations (ERP, banks, marketplaces)", "On-prem / private cloud option", "Priority engineering support"], cta: "Request a proposal" },
]

const productFaqs = [
  { q: "Can I start with just one module?", a: "Yes. Many clients start with CRM or Accounting and add HRMS or Commerce later — everything is already connected under the hood, so there is no migration when you expand." },
  { q: "How does the online + offline stock sync actually work?", a: "POS, storefront and warehouse write to one inventory ledger in real time. Offline POS sales are queued locally and reconciled the moment connectivity returns, so you never oversell." },
  { q: "Does it work for the UAE and India?", a: "Yes — VAT invoicing and WPS-ready payroll for the UAE; GST invoicing, e-invoicing readiness and statutory payroll for India. Multi-currency is standard." },
  { q: "Can you migrate our data from Tally, Zoho or spreadsheets?", a: "We handle migration as part of onboarding — masters, opening balances, historical transactions and contacts — with a parallel-run period before switch-over." },
]

export default function ProductsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...products.map((p) => ({
        "@type": "SoftwareApplication",
        name: p.title,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        description: p.description,
        url: absoluteUrl(`/products#${p.slug}`),
        publisher: { "@id": `${site.url}/#organization` },
        offers: { "@type": "Offer", price: "999", priceCurrency: "INR", description: "Starting price per module per month" },
      })),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Business Suite", item: absoluteUrl("/products") },
        ],
      },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        eyebrow="Business suite"
        title="Run the whole company from one connected system."
        highlight={["connected"]}
        description="CRM, HRMS, Accounting and Omnichannel Commerce — sharing one database so leads, people, money and stock are always in sync. Online and offline."
        crumbs={[{ label: "Home", href: "/" }, { label: "Business Suite" }]}
        actions={[
          { href: "/contact?service=CRM", label: "Get a demo" },
          { href: "#pricing", label: "See pricing", variant: "ghost" },
        ]}
      />

      <section className="border-y border-line bg-ink-2/40 py-10">
        <div className="container-x">
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
            {pillars.map((p) => {
              const Icon = p.icon
              return (
                <StaggerItem key={p.title} className="rounded-2xl border border-line bg-ink/60 p-5">
                  <Icon className="mb-3 h-5 w-5 text-signal" strokeWidth={1.5} />
                  <p className="text-base font-medium text-paper">{p.title}</p>
                  <p className="mt-1.5 text-sm text-mute">{p.text}</p>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      <Section id="modules">
        <SectionHeading eyebrow="Modules" title="Four modules. One source of truth." description="Use one, or all four. Each is a complete product on its own — together they remove the reconciliation work entirely." />
        <FeatureDetailList items={products} ctaLabel="Book a demo" />
      </Section>

      <Section id="pricing" className="bg-ink-2/30">
        <SectionHeading eyebrow="Pricing" title="Simple to start. Scales with you." description="No per-feature upsells. Pay per module, add users as you grow." align="center" />
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className={`card-surface noise relative flex h-full flex-col rounded-[1.75rem] p-7 sm:p-8 ${p.featured ? "border-signal/50 signal-glow" : ""}`}>
                {p.featured && <span className="absolute right-6 top-6 rounded-full bg-signal px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white">Most chosen</span>}
                <p className="eyebrow">{p.name}</p>
                <p className="mt-4 font-display text-4xl font-medium tracking-tight text-paper">
                  {p.price}
                  <span className="text-base font-normal text-mute">{p.period}</span>
                </p>
                <p className="mt-2 text-sm text-mute">{p.note}</p>
                <ul className="mt-7 flex-1 space-y-3 border-t border-line pt-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-paper-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" strokeWidth={2.5} /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <CTA href={`/contact?service=${encodeURIComponent("Business suite — " + p.name)}`} variant={p.featured ? "primary" : "ghost"} className="w-full">
                    {p.cta}
                  </CTA>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-mute-2">Prices in INR, exclusive of taxes. UAE pricing in AED available on request.</p>
      </Section>

      <FaqSection items={productFaqs} />
      <CtaBand title="See your business in one dashboard." subtitle="A 30-minute demo with your own products, staff and sales flow — not a canned walkthrough." primary={{ href: "/contact?service=CRM", label: "Book a live demo" }} />
    </>
  )
}
