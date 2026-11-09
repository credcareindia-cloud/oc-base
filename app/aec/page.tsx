import type { Metadata } from "next"
import { PageHero } from "@/components/site/page-hero"
import { FeatureDetailList } from "@/components/site/feature-detail"
import { Section, SectionHeading } from "@/components/site/section"
import { CtaBand } from "@/components/site/cta-band"
import { JsonLd } from "@/components/site/json-ld"
import { Reveal, Marquee, Stagger, StaggerItem } from "@/components/site/motion"
import { FaqSection } from "@/components/home/faq-section"
import { aecSolutions } from "@/lib/content"
import { absoluteUrl, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "AEC Software Development — BIM Tools, Automation, Digital Twins & AI",
  description:
    "Custom software for architecture, engineering and construction: Revit & Navisworks plugins, Dynamo automation, IFC pipelines, web-based digital twins, site IoT and AI agents. Built by Opencoders for AEC teams in India & the UAE.",
  alternates: { canonical: "/aec" },
  openGraph: {
    title: "AEC Software Development | Opencoders",
    description: "BIM plugins, construction automation, digital twins, IoT and AI — software built for how AEC actually works.",
    url: absoluteUrl("/aec"),
    images: ["/og-image.png"],
  },
}

const stack = ["Revit API", "Navisworks", "Dynamo", "pyRevit", "Autodesk Platform Services", "IFC.js", "Three.js", "Tekla", "Procore", "ACC / BIM 360", "Primavera P6", "Python", "C#", ".NET", "Next.js", "PostgreSQL", "Azure", "AWS"]

const whoFor = [
  { title: "Architecture studios", text: "Standards-enforcing Revit tools, automated documentation, client-facing 3D." },
  { title: "Engineering consultants", text: "Analysis-to-model pipelines, QTO engines, QA/QC checkers and reporting." },
  { title: "Contractors & developers", text: "Progress tracking, procurement systems, field apps and project ERPs." },
  { title: "Facility owners", text: "Asset digital twins with live IoT, maintenance and compliance data." },
]

const aecFaqs = [
  { q: "Which BIM platforms do you develop for?", a: "Primarily Autodesk Revit and Navisworks (C#/.NET add-ins, Dynamo & pyRevit scripts), Autodesk Platform Services for cloud workflows, and vendor-neutral IFC pipelines. We also integrate with Tekla, Archicad (via IFC) and Procore / ACC." },
  { q: "Can you build a web viewer for our models?", a: "Yes — we build browser-based viewers on IFC.js / Three.js or Autodesk Viewer that stream federated models, with overlays for progress, issues, IoT data and documents." },
  { q: "How do you handle our data and IP?", a: "Everything is built under NDA, hosted in your cloud account if preferred, with role-based access and audit trails. You own the code and the data." },
  { q: "What is a typical timeline?", a: "Plugins and automations ship in 2–6 weeks. Platforms and digital twins typically deliver a first usable release in 6–10 weeks, then iterate in two-week sprints." },
]

export default function AecPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "AEC Software Development",
        serviceType: "Software development for Architecture, Engineering & Construction",
        provider: { "@id": `${site.url}/#organization` },
        areaServed: ["IN", "AE"],
        url: absoluteUrl("/aec"),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AEC solutions",
          itemListElement: aecSolutions.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.short } })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "AEC Software", item: absoluteUrl("/aec") },
        ],
      },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        eyebrow="AEC software — our core"
        title="Software that speaks BIM, site and spreadsheet."
        highlight={["BIM,"]}
        description="Revit plugins, automation, digital twins, IoT and AI — built by a team that understands model federation, RFIs and why the site never matches the drawing."
        crumbs={[{ label: "Home", href: "/" }, { label: "AEC Software" }]}
        actions={[
          { href: "/contact?service=AEC%20software%20%2F%20BIM%20tools", label: "Scope my project" },
          { href: "#solutions", label: "See solutions", variant: "ghost" },
        ]}
      />

      {/* Who it's for */}
      <section className="border-y border-line bg-ink-2/40 py-10">
        <div className="container-x">
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
            {whoFor.map((w) => (
              <StaggerItem key={w.title} className="rounded-2xl border border-line bg-ink/60 p-5">
                <p className="text-base font-medium text-paper">{w.title}</p>
                <p className="mt-1.5 text-sm text-mute">{w.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Section id="solutions">
        <SectionHeading eyebrow="Solutions" title="Six ways we remove friction from the build." description="Pick one, or combine them into a platform. Everything integrates with the tools you already run." />
        <FeatureDetailList items={aecSolutions} ctaLabel="Discuss this solution" />
      </Section>

      {/* Stack */}
      <section className="border-y border-line py-12 sm:py-16">
        <div className="container-x">
          <Reveal>
            <p className="mb-8 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-mute-2">Tools & technologies we build with</p>
          </Reveal>
        </div>
        <Marquee duration={44}>
          {stack.map((s) => (
            <span key={s} className="rounded-full border border-line px-5 py-2.5 font-mono text-sm text-paper-2">
              {s}
            </span>
          ))}
        </Marquee>
      </section>

      <FaqSection items={aecFaqs} />
      <CtaBand title="Show us your messiest workflow." subtitle="We'll map it, estimate the hours it burns, and propose the tool that removes it — free." primary={{ href: "/contact?service=AEC%20software%20%2F%20BIM%20tools", label: "Book an AEC discovery call" }} />
    </>
  )
}
