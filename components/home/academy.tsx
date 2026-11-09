import Link from "next/link"
import { ArrowRight, ArrowUpRight, Building2, Code2, GraduationCap, Users } from "lucide-react"
import { Reveal, Stagger, StaggerItem } from "@/components/site/motion"
import { CTA } from "@/components/site/section"
import { broline } from "@/lib/content"

const icons = { automation: Building2, teams: Users, development: Code2 } as const

export function Academy() {
  return (
    <section id="broline" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="card-surface noise relative overflow-hidden rounded-[2rem] border-signal/30 p-8 sm:p-12 lg:p-16">
            <div className="blueprint-grid-fine pointer-events-none absolute inset-0 opacity-50 fade-bottom" aria-hidden />
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-signal/15 blur-[120px]" aria-hidden />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
              <div>
                <p className="eyebrow mb-5 inline-flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" /> Broline · Brother Online
                </p>
                <h2 className="text-balance text-3xl font-medium leading-[1.05] tracking-tight text-paper sm:text-4xl lg:text-5xl">
                  We also teach what we build.
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-mute sm:text-lg">
                  Broline is our school. Companies learn to automate their operations, teams get trained on the tools they use, and new builders learn development — with the engineers behind Opencoders.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <CTA href={broline.coursesUrl} external icon="up">
                    Join our courses on broline.in
                  </CTA>
                  <CTA href="/broline" variant="ghost">
                    Explore Broline
                  </CTA>
                </div>
              </div>

              <Stagger className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1" stagger={0.08}>
                {broline.tracks.map((t) => {
                  const Icon = icons[t.slug]
                  return (
                    <StaggerItem key={t.slug}>
                      <Link
                        href={`/broline#${t.slug}`}
                        className="group flex items-start gap-4 rounded-2xl border border-line bg-ink/50 p-5 transition-colors hover:border-signal/50 hover:bg-ink/80"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-signal/15 text-signal">
                          <Icon className="h-4.5 w-4.5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-mute-2">{t.kicker}</span>
                          <span className="mt-1 block text-base font-medium text-paper">{t.title}</span>
                          <span className="mt-1 block text-xs text-mute">{t.duration}</span>
                        </span>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-mute transition-transform group-hover:translate-x-1 group-hover:text-signal" />
                      </Link>
                    </StaggerItem>
                  )
                })}
              </Stagger>
            </div>

            <a
              href={broline.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8 inline-flex items-center gap-1 font-mono text-xs text-mute-2 transition-colors hover:text-paper"
            >
              Our LMS lives at {broline.domain} <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
