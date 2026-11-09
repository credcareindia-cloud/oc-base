import * as React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Reveal, WordReveal } from "@/components/site/motion"
import { CTA } from "@/components/site/section"

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  crumbs,
  actions,
  children,
}: {
  eyebrow: string
  title: string
  highlight?: string[]
  description: string
  crumbs: { label: string; href?: string }[]
  actions?: { href: string; label: string; variant?: "primary" | "secondary" | "ghost"; external?: boolean }[]
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="blueprint-grid absolute inset-0 fade-bottom opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-signal/20 blur-[140px]"
        aria-hidden
      />
      <div className="container-x relative">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-mute-2">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="hover:text-paper">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-signal">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
              </li>
            ))}
          </ol>
        </nav>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <Reveal>
              <p className="eyebrow mb-5">{eyebrow}</p>
            </Reveal>
            <h1 className="text-4xl font-medium leading-[1.02] tracking-tight text-paper sm:text-6xl lg:text-7xl">
              <WordReveal text={title} highlight={highlight} delay={0.1} />
            </h1>
          </div>
          <Reveal delay={0.3}>
            <p className="max-w-md text-base leading-relaxed text-mute sm:text-lg">{description}</p>
            {actions && actions.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {actions.map((a) => (
                  <CTA key={a.label} href={a.href} variant={a.variant ?? "primary"} external={a.external} icon={a.external ? "up" : "arrow"}>
                    {a.label}
                  </CTA>
                ))}
              </div>
            )}
          </Reveal>
        </div>
        {children}
      </div>
    </section>
  )
}
