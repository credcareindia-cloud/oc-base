import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/site/page-hero"
import { Section, SectionHeading } from "@/components/site/section"
import { CtaBand } from "@/components/site/cta-band"
import { JsonLd } from "@/components/site/json-ld"
import { Parallax, Reveal, ScrollText, Stagger, StaggerItem } from "@/components/site/motion"
import { Team } from "@/components/home/team"
import { Clients } from "@/components/home/clients"
import { Stats } from "@/components/home/stats"
import { absoluteUrl, site } from "@/lib/site"
import { team } from "@/lib/content"

export const metadata: Metadata = {
  title: "About Opencoders — The team putting the vibe in AEC",
  description:
    "Opencoders is a Kochi-based software company building for the architecture, engineering and construction industry, with a connected business suite and growth services across India and the UAE. Meet the team.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Opencoders",
    description: "Engineers, marketers and operators under one roof — building software and growth for AEC and beyond.",
    url: absoluteUrl("/about"),
    images: ["/og-image.png"],
  },
}

const values = [
  { title: "Site reality first", text: "We design from how work actually happens — on site, in the studio, at the till — not from a feature list." },
  { title: "Ship every Friday", text: "Working software beats slide decks. You see progress weekly and can change course without drama." },
  { title: "One team, no handoffs", text: "Engineers, marketers and operators sit together. The person who builds it is the person you talk to." },
  { title: "Numbers over noise", text: "Hours saved, leads closed, stock accuracy — every project has a metric and we report on it." },
]

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        name: "About Opencoders",
        url: absoluteUrl("/about"),
        about: { "@id": `${site.url}/#organization` },
      },
      ...team.map((m) => ({
        "@type": "Person",
        name: m.name,
        jobTitle: m.role,
        worksFor: { "@id": `${site.url}/#organization` },
        image: absoluteUrl(m.image),
      })),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "About", item: absoluteUrl("/about") },
        ],
      },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        eyebrow="About"
        title="A software company with dust on its boots."
        highlight={["dust"]}
        description="Founded in Kochi, working across India and the UAE. We build for the industries that build everything else — and the businesses behind them."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Photo + story */}
      <section className="container-x grid gap-10 pb-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-32">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line">
            <Parallax speed={0.15} className="absolute inset-[-10%]">
              <Image src="/photos/conference.webp" alt="Opencoders team working together at the Kochi office" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
            </Parallax>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" aria-hidden />
            <div className="absolute bottom-5 left-5 rounded-full border border-line bg-ink/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper-2 backdrop-blur">
              Kochi HQ · Est. {site.founded}
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow mb-5">Our story</p>
          </Reveal>
          <ScrollText
            className="font-display text-2xl font-medium leading-[1.25] tracking-tight sm:text-3xl lg:text-[2.4rem]"
            accentWords={["AEC"]}
            text="We started by automating the boring parts of a contractor's week. Then the studios asked for Revit tools, the retailers asked for stock that stays honest across stores and websites, and the brands asked for leads that actually pick up the phone. Today we build all of it — with the AEC industry as our home ground."
          />
        </div>
      </section>

      <Stats />

      <Section id="values">
        <SectionHeading eyebrow="How we think" title="Four things we won't compromise on." />
        <Stagger className="grid gap-5 sm:grid-cols-2" stagger={0.08}>
          {values.map((v, i) => (
            <StaggerItem key={v.title} className="card-surface card-hover noise rounded-[1.75rem] p-7 sm:p-8">
              <p className="font-mono text-xs text-mute-2">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-2xl font-medium tracking-tight text-paper">{v.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-mute">{v.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Team compact={false} />
      <Clients />
      <CtaBand title="Work with people who pick up the phone." subtitle="Tell us what you're building. We'll tell you honestly whether we're the right team for it." />
    </>
  )
}
