"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { aecSolutions } from "@/lib/content"
import { SectionHeading } from "@/components/site/section"
import { Reveal } from "@/components/site/motion"
import { cn } from "@/lib/utils"

/**
 * Pinned horizontal scroll on desktop; vertical stack on mobile.
 */
export function AecShowcase() {
  const outer = React.useRef<HTMLDivElement>(null)
  const track = React.useRef<HTMLDivElement>(null)
  const [dist, setDist] = React.useState(0)
  const reduce = useReducedMotion()

  React.useEffect(() => {
    const measure = () => {
      if (!track.current) return
      const d = track.current.scrollWidth - window.innerWidth
      setDist(Math.max(0, d))
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (track.current) ro.observe(track.current)
    window.addEventListener("resize", measure)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [])

  const { scrollYProgress } = useScroll({ target: outer, offset: ["start start", "end end"] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist])
  const progressW = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="aec" className="relative scroll-mt-24">
      <div className="container-x pt-20 sm:pt-28 lg:pt-36">
        <SectionHeading
          eyebrow="AEC software — our core"
          title={
            <>
              Built for how architecture, engineering <span className="text-mute">&</span> construction actually work.
            </>
          }
          description="From BIM plugins to digital twins, every tool we ship is shaped by site reality — not a generic SaaS template."
          action={{ href: "/aec", label: "See all AEC solutions" }}
        />
      </div>

      {/* Desktop pinned horizontal */}
      <div ref={outer} className="relative hidden lg:block" style={{ height: `calc(100vh + ${dist}px)` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <motion.div ref={track} style={{ ...(reduce ? {} : { x }), paddingLeft: "max(1.25rem, calc((100vw - 1320px) / 2 + 3rem))" }} className="flex w-max gap-6 pr-24">
            {aecSolutions.map((s, i) => (
              <ShowcaseCard key={s.slug} s={s} i={i} className="w-[460px]" />
            ))}
            <EndCard />
          </motion.div>
          <div className="container-x mt-10">
            <div className="h-px w-full bg-line">
              <motion.div style={{ width: progressW }} className="h-px bg-signal" />
            </div>
            <div className="mt-3 flex justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-mute-2">
              <span>01 — BIM</span>
              <span>Scroll to explore</span>
              <span>06 — Platforms</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / tablet stack */}
      <div className="container-x grid gap-5 pb-20 sm:grid-cols-2 lg:hidden">
        {aecSolutions.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 2) * 0.08}>
            <ShowcaseCard s={s} i={i} className="w-full" />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function ShowcaseCard({ s, i, className }: { s: (typeof aecSolutions)[number]; i: number; className?: string }) {
  const Icon = s.icon
  return (
    <Link
      href={`/aec#${s.slug}`}
      className={cn(
        "group card-surface card-hover noise relative flex min-h-[440px] shrink-0 flex-col justify-between overflow-hidden rounded-[1.75rem] p-7 sm:min-h-[480px] sm:p-8",
        className
      )}
    >
      <div className="blueprint-grid-fine absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" aria-hidden />
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-signal/0 blur-3xl transition-all duration-700 group-hover:bg-signal/20" aria-hidden />
      <div className="relative flex items-start justify-between">
        <span className="font-mono text-xs text-mute-2">{String(i + 1).padStart(2, "0")}</span>
        <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-signal">{s.tag}</span>
      </div>
      <div className="relative">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-line-2 bg-ink-3 text-paper transition-all duration-500 group-hover:scale-110 group-hover:border-signal group-hover:text-signal">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-medium leading-tight tracking-tight text-paper sm:text-[1.7rem]">{s.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-mute sm:text-base">{s.short}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {s.bullets.slice(0, 3).map((b) => (
            <li key={b} className="rounded-full bg-white/[0.04] px-3 py-1 text-[11px] text-paper-2">
              {b}
            </li>
          ))}
        </ul>
        <span className="mt-7 inline-flex items-center gap-1 text-sm font-medium text-paper-2 transition-colors group-hover:text-signal">
          Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  )
}

function EndCard() {
  return (
    <Link
      href="/contact"
      className="group relative flex min-h-[480px] w-[380px] shrink-0 flex-col justify-between overflow-hidden rounded-[1.75rem] bg-signal p-8 text-white transition-transform duration-500 hover:-translate-y-1"
    >
      <div className="blueprint-grid absolute inset-0 opacity-30" aria-hidden />
      <span className="relative font-mono text-xs uppercase tracking-[0.2em] text-white/80">Something else?</span>
      <div className="relative">
        <h3 className="text-3xl font-medium leading-tight tracking-tight">Tell us the problem. We'll scope the software.</h3>
        <span className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-signal transition-transform duration-500 group-hover:rotate-45">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </Link>
  )
}
