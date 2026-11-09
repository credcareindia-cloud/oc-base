import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Feature } from "@/lib/content"
import { Reveal, TiltCard } from "@/components/site/motion"
import { CTA } from "@/components/site/section"

/* Alternating detail rows used on sub-pages */
export function FeatureDetailList({ items, ctaLabel = "Discuss this" }: { items: Feature[]; ctaLabel?: string }) {
  return (
    <div className="space-y-24 sm:space-y-32">
      {items.map((f, i) => {
        const Icon = f.icon
        const flip = i % 2 === 1
        return (
          <article
            key={f.slug}
            id={f.slug}
            className={cn("grid scroll-mt-32 items-center gap-10 lg:grid-cols-2 lg:gap-16", flip && "lg:[&>*:first-child]:order-2")}
          >
            <Reveal>
              <div className="group">
                <TiltCard max={5} className="rounded-[1.75rem]">
                  <div className="card-surface noise relative aspect-[5/4] overflow-hidden rounded-[1.75rem]">
                    <div className="blueprint-grid-fine absolute inset-0 opacity-70" aria-hidden />
                    <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_30%,rgba(255,90,31,0.22),transparent)]" aria-hidden />
                    <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-line bg-ink/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-signal backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal" /> {f.tag}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-signal/30 blur-2xl" aria-hidden />
                        <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-line-2 bg-ink-3/90 shadow-2xl sm:h-28 sm:w-28">
                          <Icon className="h-11 w-11 text-paper sm:h-12 sm:w-12" strokeWidth={1.4} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-x-6 bottom-6 grid grid-cols-3 gap-2">
                      {f.bullets.slice(0, 3).map((b, bi) => (
                        <div key={b} className="rounded-xl border border-line bg-ink/70 p-3 backdrop-blur" style={{ transitionDelay: `${bi * 60}ms` }}>
                          <div className="mb-2 h-1 w-8 rounded-full bg-signal/70" />
                          <p className="truncate text-[11px] text-paper-2">{b}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="eyebrow mb-4">
                  {String(i + 1).padStart(2, "0")} — {f.tag}
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-3xl font-medium leading-[1.08] tracking-tight text-paper sm:text-4xl lg:text-5xl">{f.title}</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">{f.description}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-paper-2">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-9">
                  <CTA href={`/contact?service=${encodeURIComponent(f.title)}`} variant="ghost">
                    {ctaLabel}
                  </CTA>
                </div>
              </Reveal>
            </div>
          </article>
        )
      })}
    </div>
  )
}
