"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { team } from "@/lib/content"
import { SectionHeading } from "@/components/site/section"
import { cn } from "@/lib/utils"

const EASE = [0.2, 0.8, 0.2, 1] as const

export function Team({ compact = true }: { compact?: boolean }) {
  const rail = React.useRef<HTMLDivElement>(null)
  const [progress, setProgress] = React.useState(0)
  const [atStart, setAtStart] = React.useState(true)
  const [atEnd, setAtEnd] = React.useState(false)
  const [active, setActive] = React.useState(0)
  const reduce = useReducedMotion()

  const update = React.useCallback(() => {
    const el = rail.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    const p = max > 0 ? el.scrollLeft / max : 0
    setProgress(p)
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft >= max - 2)
    const first = el.firstElementChild as HTMLElement | null
    if (first) {
      const step = first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0")
      setActive(Math.round(el.scrollLeft / step))
    }
  }, [])

  React.useEffect(() => {
    update()
    const el = rail.current
    if (!el) return
    el.addEventListener("scroll", update, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => {
      el.removeEventListener("scroll", update)
      ro.disconnect()
    }
  }, [update])

  const scrollBy = (dir: 1 | -1) => {
    const el = rail.current
    if (!el) return
    const first = el.firstElementChild as HTMLElement | null
    const step = first ? first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "24") : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" })
  }

  const scrollTo = (i: number) => {
    const el = rail.current
    if (!el) return
    const first = el.firstElementChild as HTMLElement | null
    const step = first ? first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "24") : el.clientWidth * 0.8
    el.scrollTo({ left: i * step, behavior: reduce ? "auto" : "smooth" })
  }

  const btn =
    "flex h-11 w-11 items-center justify-center rounded-full border border-line-2 bg-ink-2 text-paper transition-all duration-300 hover:border-signal hover:bg-signal hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-line-2 disabled:hover:bg-ink-2 disabled:hover:text-paper"

  return (
    <section id="team" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute right-[-10%] top-0 h-[480px] w-[480px] rounded-full bg-signal/10 blur-[140px]" aria-hidden />

      <div className="container-x">
        <SectionHeading
          eyebrow="The people"
          title={
            <>
              Young, hands-on and <span className="text-mute">obsessed</span> with the build.
            </>
          }
          description="Engineers, marketers and operators under one roof — you talk to the people doing the work, not an account layer."
          action={compact ? { href: "/about", label: "Meet the full team" } : undefined}
        />
      </div>

      {/* Rail */}
      <div
        ref={rail}
        data-lenis-prevent
        className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-2 sm:gap-6 sm:px-8 lg:px-[max(3rem,calc((100vw-1320px)/2+3rem))]"
        style={{ scrollPaddingLeft: "max(1.25rem, calc((100vw - 1320px) / 2 + 3rem))" }}
        role="region"
        aria-roledescription="carousel"
        aria-label="Opencoders team"
      >
        {team.map((m, i) => (
          <motion.figure
            key={m.name}
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ delay: Math.min(i, 4) * 0.06, duration: 0.8, ease: EASE }}
            className="group relative aspect-[3/4] w-[72vw] shrink-0 snap-start overflow-hidden rounded-[1.75rem] border border-line bg-ink-2 xs:w-[300px] sm:w-[320px]"
          >
            <Image
              src={m.image}
              alt={`${m.name}, ${m.role} at Opencoders`}
              fill
              sizes="(max-width: 480px) 72vw, 320px"
              draggable={false}
              className="object-cover grayscale-[0.85] transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
            />
            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-br from-signal/0 to-signal/0 transition-all duration-700 group-hover:from-signal/15" aria-hidden />

            {/* Index */}
            <span className="absolute left-5 top-5 font-mono text-[11px] tracking-[0.2em] text-paper-2/80">{String(i + 1).padStart(2, "0")}</span>
            <span className="absolute right-5 top-5 h-8 w-8 rounded-full border border-paper/20 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:border-signal" aria-hidden>
              <span className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-signal" />
            </span>

            <figcaption className="absolute inset-x-0 bottom-0 p-6">
              <div className="mb-3 h-px w-8 bg-signal transition-all duration-500 group-hover:w-16" aria-hidden />
              <p className="text-2xl font-medium tracking-tight text-paper">{m.name}</p>
              <p className="mt-1 text-sm text-mute transition-colors duration-500 group-hover:text-paper-2">{m.role}</p>
            </figcaption>
          </motion.figure>
        ))}

        {/* Join card */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
          className="shrink-0 snap-start"
        >
          <Link
            href="/contact?service=Partnership"
            className="group relative flex aspect-[3/4] w-[72vw] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-dashed border-line-2 bg-ink-2/40 p-6 transition-colors duration-500 hover:border-signal hover:bg-ink-2 xs:w-[300px] sm:w-[320px]"
          >
            <div className="blueprint-grid-fine absolute inset-0 opacity-60" aria-hidden />
            <span className="relative font-mono text-[11px] tracking-[0.2em] text-mute">{String(team.length + 1).padStart(2, "0")} — YOU?</span>
            <div className="relative">
              <p className="text-2xl font-medium leading-tight tracking-tight text-paper">We hire builders who like dust on their boots.</p>
              <p className="mt-2 text-sm text-mute">Engineers, BIM specialists, growth people. Say hello.</p>
              <span className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper text-ink transition-all duration-500 group-hover:rotate-45 group-hover:bg-signal group-hover:text-white">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>
          </Link>
        </motion.div>
        <div className="w-5 shrink-0 sm:w-8 lg:w-[max(3rem,calc((100vw-1320px)/2+3rem))]" aria-hidden />
      </div>

      {/* Controls */}
      <div className="container-x mt-8 flex items-center justify-between gap-6">
        <div className="flex flex-1 items-center gap-4">
          <div className="relative h-px flex-1 max-w-[280px] bg-line">
            <motion.div className="absolute inset-y-0 left-0 bg-signal" animate={{ width: `${Math.max(8, progress * 100)}%` }} transition={{ duration: 0.25 }} />
          </div>
          <div className="hidden items-center gap-1.5 sm:flex" role="tablist" aria-label="Team slides">
            {[...team, { name: "Join" }].map((m, i) => (
              <button
                key={m.name}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-label={`Go to ${m.name}`}
                onClick={() => scrollTo(i)}
                className={cn("h-1.5 rounded-full transition-all duration-300", active === i ? "w-6 bg-signal" : "w-1.5 bg-line-2 hover:bg-mute")}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => scrollBy(-1)} disabled={atStart} aria-label="Previous team member" className={btn}>
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => scrollBy(1)} disabled={atEnd} aria-label="Next team member" className={btn}>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
