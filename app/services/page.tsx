import type { Metadata } from "next"
import { PageHero } from "@/components/site/page-hero"
import { FeatureDetailList } from "@/components/site/feature-detail"
import { Section, SectionHeading, CTA } from "@/components/site/section"
import { CtaBand } from "@/components/site/cta-band"
import { JsonLd } from "@/components/site/json-ld"
import { Reveal, Stagger, StaggerItem, Counter } from "@/components/site/motion"
import { FaqSection } from "@/components/home/faq-section"
import { Testimonials } from "@/components/home/testimonials"
import { services } from "@/lib/content"
import { absoluteUrl, site } from "@/lib/site"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Growth Services — Meta & Google Ads Automation, Influencer Marketing (UAE & India), Sales Agents",
  description:
    "Performance growth for businesses in the UAE and India: automated Meta & Google Ads optimised against CRM revenue, influencer marketing with vetted creators, and trained sales agents for lead conversion and retargeting.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Growth Services — Ads Automation, Influencer Marketing & Sales Agents | Opencoders",
    description: "Ads that optimise to revenue, creators across UAE & India, and human follow-up within minutes.",
    url: absoluteUrl("/services"),
    images: ["/og-image.png"],
  },
}

const outcomes = [
  { value: 5, suffix: " min", label: "Speed-to-lead target" },
  { value: 42, suffix: "+", label: "Campaigns run" },
  { value: 2, suffix: "", label: "Markets: UAE & India" },
  { value: 4.8, decimals: 1, suffix: "/5", label: "Client rating" },
]

const plans = [
  { name: "Launch", price: "₹8,999", period: "/mo + ad spend", note: "Single channel, one market", features: ["Meta or Google Ads", "Landing page & tracking setup", "Monthly reporting", "WhatsApp support"], cta: "Start Launch" },
  { name: "Growth", price: "₹15,999", period: "/mo + ad spend", note: "Multi-channel with follow-up", features: ["Meta + Google Ads", "CRM-connected optimisation", "Sales agent follow-up (shared)", "Weekly reporting & creative testing"], cta: "Start Growth", featured: true },
  { name: "Scale", price: "Custom", period: "", note: "Full funnel, UAE + India", features: ["Ads + influencer campaigns", "Dedicated sales agents", "Retargeting automations", "Dedicated growth manager"], cta: "Talk to us" },
]

const serviceFaqs = [
  { q: "How is this different from a normal ads agency?", a: "We optimise against revenue in your CRM, not platform clicks or leads. Ads, follow-up and retargeting are run by one team on one dashboard, so budget flows to the audiences that actually close." },
  { q: "Which markets do you run influencer campaigns in?", a: "The UAE (Dubai, Abu Dhabi, Sharjah) and India (national plus regional languages including Malayalam, Hindi, Tamil and Kannada). We source, vet, brief and manage creators end-to-end." },
  { q: "What do the sales agents actually do?", a: "They call and WhatsApp every new lead within minutes, qualify against your criteria, book appointments or site visits, and keep nurturing until the lead converts or clearly disqualifies. Every touch is logged in the CRM." },
  { q: "Is there a minimum contract?", a: "Plans are monthly. We recommend a 90-day runway for paid media to learn and compound, but there is no long lock-in." },
]

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...services.map((s) => ({
        "@type": "Service",
        name: s.title,
        serviceType: s.tag,
        description: s.description,
        provider: { "@id": `${site.url}/#organization` },
        areaServed: [{ "@type": "Country", name: "United Arab Emirates" }, { "@type": "Country", name: "India" }],
        url: absoluteUrl(`/services#${s.slug}`),
      })),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Growth Services", item: absoluteUrl("/services") },
        ],
      },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        eyebrow="Growth services — UAE & India"
        title="Ads that optimise to revenue. Humans who close."
        highlight={["revenue."]}
        description="Automated Meta & Google Ads, influencer campaigns with vetted creators, and trained sales agents who follow up within minutes — all reporting into one CRM."
        crumbs={[{ label: "Home", href: "/" }, { label: "Growth Services" }]}
        actions={[
          { href: "/contact?service=Meta%20%2F%20Google%20Ads%20automation", label: "Get a free growth audit" },
          { href: "#pricing", label: "See plans", variant: "ghost" },
        ]}
      />

      <section className="border-y border-line bg-ink-2/40">
        <div className="container-x grid grid-cols-2 divide-x divide-line lg:grid-cols-4">
          {outcomes.map((o, i) => (
            <Reveal key={o.label} delay={i * 0.05} className={`px-4 py-8 sm:px-8 ${i % 2 === 0 ? "pl-0" : ""} ${i >= 2 ? "border-t border-line lg:border-t-0" : ""}`}>
              <p className="font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
                <Counter value={o.value} decimals={"decimals" in o ? (o.decimals as number) : 0} suffix={o.suffix} />
              </p>
              <p className="mt-2 text-xs text-mute sm:text-sm">{o.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Section id="what">
        <SectionHeading eyebrow="What we run" title="Three services, one funnel." description="Use them separately or let us run the whole thing — the economics get better when ads, follow-up and retargeting share data." />
        <FeatureDetailList items={services} ctaLabel="Get a proposal" />
      </Section>

      <Section id="pricing" className="bg-ink-2/30">
        <SectionHeading eyebrow="Plans" title="Transparent retainers. You own the ad accounts." align="center" />
        <Stagger className="grid gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <div className={`card-surface noise relative flex h-full flex-col rounded-[1.75rem] p-7 sm:p-8 ${p.featured ? "border-signal/50 signal-glow" : ""}`}>
                {p.featured && <span className="absolute right-6 top-6 rounded-full bg-signal px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white">Popular</span>}
                <p className="eyebrow">{p.name}</p>
                <p className="mt-4 font-display text-4xl font-medium tracking-tight text-paper">
                  {p.price}
                  <span className="text-base font-normal text-mute"> {p.period}</span>
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
                  <CTA href={`/contact?service=${encodeURIComponent("Growth — " + p.name)}`} variant={p.featured ? "primary" : "ghost"} className="w-full">
                    {p.cta}
                  </CTA>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-6 text-center text-xs text-mute-2">Prices in INR, exclusive of taxes and media spend. AED pricing available for UAE clients.</p>
      </Section>

      <Testimonials />
      <FaqSection items={serviceFaqs} />
      <CtaBand title="Find out what your leads are really costing you." subtitle="A free audit of your ad accounts and follow-up process — with the three changes we'd make first." primary={{ href: "/contact?service=Meta%20%2F%20Google%20Ads%20automation", label: "Request the free audit" }} />
    </>
  )
}
