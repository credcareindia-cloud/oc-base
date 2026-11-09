import type { Metadata } from "next"
import { ArrowUpRight, Building2, Check, Code2, GraduationCap, MonitorPlay, Presentation, UserRound, Users } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { Section, SectionHeading, CTA } from "@/components/site/section"
import { CtaBand } from "@/components/site/cta-band"
import { JsonLd } from "@/components/site/json-ld"
import { Reveal, Stagger, StaggerItem, TiltCard } from "@/components/site/motion"
import { FaqSection } from "@/components/home/faq-section"
import { LmsVisual } from "@/components/broline/lms-visual"
import { broline } from "@/lib/content"
import { absoluteUrl, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Broline (Brother Online) — Automation Training, Employee Upskilling & Development Courses",
  description:
    "Broline is the Opencoders school. We teach companies to automate their operations, train employees on the tools they use, and run development courses — live cohorts, corporate workshops and self-paced learning on the Broline LMS at broline.in.",
  alternates: { canonical: "/broline" },
  keywords: ["Broline", "Brother Online", "automation training", "corporate training India", "corporate training UAE", "employee upskilling", "web development course", "BIM programming course", "Revit API course", "Opencoders school"],
  openGraph: {
    title: "Broline — the Opencoders school for automation, teams and code",
    description: "Learn to automate your business, train your team, or learn development with the engineers who build Opencoders products.",
    url: absoluteUrl("/broline"),
    images: ["/og-image.png"],
  },
}

const trackIcons = {
  automation: Building2,
  teams: Users,
  development: Code2,
} as const

const formatIcons = [MonitorPlay, GraduationCap, Presentation, UserRound]

export default function BrolinePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${site.url}/broline#school`,
        name: broline.name,
        alternateName: broline.fullName,
        url: broline.url,
        description: broline.description,
        parentOrganization: { "@id": `${site.url}/#organization` },
        areaServed: [{ "@type": "Country", name: "India" }, { "@type": "Country", name: "United Arab Emirates" }],
        sameAs: [broline.url],
      },
      ...broline.tracks.map((t) => ({
        "@type": "Course",
        name: t.title,
        description: t.description,
        provider: { "@id": `${site.url}/broline#school` },
        url: absoluteUrl(`/broline#${t.slug}`),
        audience: { "@type": "Audience", audienceType: t.audience },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["online", "onsite"],
          courseWorkload: t.duration,
        },
      })),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Broline", item: absoluteUrl("/broline") },
        ],
      },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        eyebrow="Broline · Brother Online — the Opencoders school"
        title="Learn to automate. Train your team. Build software."
        highlight={["automate.", "software."]}
        description={broline.tagline + " We teach companies to automate, train employees on the tools they use, and run development courses — live, on-site, and on the Broline LMS."}
        crumbs={[{ label: "Home", href: "/" }, { label: "Broline" }]}
        actions={[
          { href: broline.coursesUrl, label: "Join our courses on broline.in", external: true },
          { href: "/contact?service=Training%20%26%20courses%20(Broline)", label: "Train my team", variant: "ghost" },
        ]}
      >
        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow mb-4">Why a school?</p>
            <p className="text-xl leading-relaxed text-paper-2 sm:text-2xl">
              Every product we ship works better when the people using it understand it. Broline is how we pass on what we learn building software for the AEC industry — to companies, to teams, and to the next engineers.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Taught by working Opencoders engineers", "Live cohorts + self-paced LMS", "On-site training in India & UAE", "Certificate on completion"].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-paper-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" strokeWidth={2.5} /> {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="pb-6">
            <LmsVisual />
          </div>
        </div>
      </PageHero>

      {/* Tracks */}
      <Section id="tracks" className="bg-ink-2/30">
        <SectionHeading
          eyebrow="Three tracks"
          title={
            <>
              Pick the one that fits <span className="text-mute">where you are.</span>
            </>
          }
          description="Companies learn to automate. Teams get trained on their tools. Individuals learn to build. Every track ends with something real shipped."
        />
        <Stagger className="grid gap-5 lg:grid-cols-3" stagger={0.1}>
          {broline.tracks.map((t, i) => {
            const Icon = trackIcons[t.slug]
            return (
              <StaggerItem key={t.slug} className="h-full">
                <TiltCard max={4} className="h-full rounded-[1.75rem]">
                  <article id={t.slug} className="card-surface card-hover noise relative flex h-full scroll-mt-28 flex-col rounded-[1.75rem] p-7 sm:p-8">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-signal/15 text-signal">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs text-mute-2">0{i + 1}</span>
                    </div>
                    <p className="eyebrow">{t.kicker}</p>
                    <h3 className="mt-3 text-2xl font-medium tracking-tight text-paper">{t.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-mute">{t.description}</p>
                    <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                      {t.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3 text-sm text-paper-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" strokeWidth={2.5} /> {o}
                        </li>
                      ))}
                    </ul>
                    <dl className="mt-6 grid grid-cols-2 gap-3 text-xs">
                      <div className="rounded-xl bg-white/[0.03] p-3">
                        <dt className="font-mono uppercase tracking-wider text-mute-2">Format</dt>
                        <dd className="mt-1 text-paper-2">{t.duration}</dd>
                      </div>
                      <div className="rounded-xl bg-white/[0.03] p-3">
                        <dt className="font-mono uppercase tracking-wider text-mute-2">For</dt>
                        <dd className="mt-1 text-paper-2">{t.audience}</dd>
                      </div>
                    </dl>
                    <div className="mt-auto pt-7">
                      {t.slug === "development" ? (
                        <CTA href={broline.coursesUrl} external icon="up" className="w-full">
                          Browse courses on broline.in
                        </CTA>
                      ) : (
                        <CTA href={`/contact?service=${encodeURIComponent(`Broline — ${t.title}`)}`} variant="ghost" className="w-full">
                          Request a programme
                        </CTA>
                      )}
                    </div>
                  </article>
                </TiltCard>
              </StaggerItem>
            )
          })}
        </Stagger>
      </Section>

      {/* How it works */}
      <Section id="how">
        <SectionHeading eyebrow="How it works" title="Learn by building. Finish with proof." />
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {broline.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="relative">
              <div className="card-surface noise h-full rounded-[1.5rem] p-6">
                <span className="font-display text-4xl font-medium text-signal/80">0{i + 1}</span>
                <h3 className="mt-6 text-lg font-medium text-paper">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Formats + LMS redirect */}
      <Section id="formats" className="bg-ink-2/30">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Formats" title="Live, self-paced, on-site — your call." className="mb-10" />
            <ul className="grid gap-4 sm:grid-cols-2">
              {broline.formats.map((f, i) => {
                const Icon = formatIcons[i % formatIcons.length]
                return (
                  <Reveal key={f.title} delay={i * 0.06}>
                    <li className="flex h-full gap-4 rounded-2xl border border-line bg-ink/40 p-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-signal">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <h3 className="text-base font-medium text-paper">{f.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-mute">{f.description}</p>
                      </div>
                    </li>
                  </Reveal>
                )
              })}
            </ul>
          </div>

          <Reveal delay={0.1}>
            <div className="card-surface noise relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border-signal/40 p-8 signal-glow sm:p-10">
              <div className="blueprint-grid-fine pointer-events-none absolute inset-0 opacity-50" aria-hidden />
              <div className="relative">
                <p className="eyebrow">The Broline LMS</p>
                <h3 className="mt-4 text-3xl font-medium tracking-tight text-paper sm:text-4xl">
                  Courses, labs and certificates live at <span className="text-signal">broline.in</span>
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-mute">
                  Browse the current catalogue, join a live cohort or start a self-paced course today. Company and team programmes are scoped through Opencoders.
                </p>
              </div>
              <div className="relative mt-10 flex flex-col gap-3 sm:flex-row">
                <CTA href={broline.coursesUrl} external icon="up" size="lg">
                  Join our courses
                </CTA>
                <CTA href="/contact?service=Training%20%26%20courses%20(Broline)" variant="ghost" size="lg">
                  Talk about team training
                </CTA>
              </div>
              <a
                href={broline.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-6 inline-flex items-center gap-1 font-mono text-xs text-mute transition-colors hover:text-paper"
              >
                {broline.domain} <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      <FaqSection items={[...broline.faqs]} />
      <CtaBand
        title="Bring Broline to your company."
        subtitle="Tell us which roles and tools you want trained — we'll send back a programme outline and a date within two working days."
        primary={{ href: "/contact?service=Training%20%26%20courses%20(Broline)", label: "Request a training programme" }}
      />
    </>
  )
}
