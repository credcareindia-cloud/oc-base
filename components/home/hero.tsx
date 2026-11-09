"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Building2, CheckCircle2, Cpu, Star, Workflow } from "lucide-react"
import { WordReveal } from "@/components/site/motion"
import { CTA } from "@/components/site/section"
import { site } from "@/lib/site"

const EASE = [0.2, 0.8, 0.2, 1] as const

export function Hero() {
  const ref = React.useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 160])
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const visualRotate = useTransform(scrollYProgress, [0, 1], [0, -4])
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.6])

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-28 sm:pt-36">
      {/* Backdrop */}
      <motion.div style={reduce ? undefined : { y: gridY }} className="blueprint-grid absolute inset-[-20%] -z-20 opacity-80 fade-bottom" aria-hidden />
      <motion.div
        style={reduce ? undefined : { scale: glowScale }}
        className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[70vh] w-[90vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,90,31,0.22),transparent)] blur-3xl"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-ink to-transparent" aria-hidden />

      <div className="container-x relative flex flex-1 flex-col">
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Copy */}
          <motion.div style={reduce ? undefined : { opacity: fade }} className="max-w-2xl">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] py-1.5 pl-1.5 pr-4 text-xs text-paper-2 backdrop-blur"
            >
              <span className="rounded-full bg-signal px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white">AEC</span>
              Software · Automation · Growth — India & UAE
            </motion.div>

            <h1 className="text-[2.75rem] font-medium leading-[0.98] tracking-[-0.03em] text-paper sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              <WordReveal text="Putting the vibe in AEC." highlight={["vibe"]} delay={0.1} />
            </h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-mute sm:text-xl"
            >
              We build software for architecture, engineering and construction teams — BIM tools, automation, digital
              twins and AI — plus the CRM, HRMS, accounting and growth engine that run the business behind the build.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.65, ease: EASE }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <CTA href="/contact" size="lg">
                Book a discovery call
              </CTA>
              <CTA href="/aec" variant="ghost" size="lg">
                Explore AEC software
              </CTA>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-mute"
            >
              <span className="inline-flex items-center gap-2">
                <span className="flex" aria-label={`${site.rating.value} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </span>
                <span className="text-paper-2">{site.rating.value}</span> from {site.rating.count} reviews
              </span>
              <span className="hidden h-4 w-px bg-line-2 sm:block" />
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Free discovery sprint
              </span>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            style={reduce ? undefined : { y: visualY, rotate: visualRotate }}
            className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
            aria-hidden
          >
            <HeroVisual />
          </motion.div>
        </div>

        <motion.div
          style={reduce ? undefined : { opacity: fade }}
          className="flex items-center justify-between py-8 font-mono text-[11px] uppercase tracking-[0.2em] text-mute-2"
        >
          <span className="inline-flex items-center gap-2">
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" /> Scroll
          </span>
          <Link href="#clients" className="hidden hover:text-paper sm:inline">
            Trusted by 40+ teams
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

/* Floating product composition — pure CSS/motion, no images */
function HeroVisual() {
  const reduce = useReducedMotion()
  const float = (delay: number, dist = 14) =>
    reduce
      ? {}
      : {
          animate: { y: [0, -dist, 0] },
          transition: { duration: 7 + delay, repeat: Infinity, ease: "easeInOut" as const, delay },
        }

  return (
    <div className="relative aspect-[4/3] w-full [perspective:1400px]">
      {/* Base card: model status */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40, rotateX: 12 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
        className="glass noise absolute left-0 top-[14%] w-[64%] rounded-3xl p-5 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div {...float(0.2)}>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal/15 text-signal">
                <Building2 className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-medium text-paper">Tower B — Federated model</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-mute-2">Revit · IFC · Navisworks</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 font-mono text-[10px] text-emerald-300">LIVE</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { k: "Clashes", v: "12", d: "-38%" },
              { k: "Sheets", v: "148", d: "auto" },
              { k: "QTO", v: "99.2%", d: "match" },
            ].map((m) => (
              <div key={m.k} className="rounded-xl border border-line bg-ink/60 p-3">
                <p className="font-mono text-[10px] uppercase tracking-wider text-mute-2">{m.k}</p>
                <p className="mt-1 text-lg font-medium text-paper">{m.v}</p>
                <p className="text-[10px] text-signal">{m.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 h-24 rounded-xl border border-line bg-ink/60 p-3">
            <div className="flex h-full items-end gap-1.5">
              {[35, 55, 40, 70, 62, 85, 58, 92, 75, 98, 80, 100].map((h, i) => (
                <motion.span
                  key={i}
                  initial={reduce ? false : { scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 + i * 0.05, ease: EASE }}
                  className="flex-1 origin-bottom rounded-sm bg-gradient-to-t from-signal/40 to-signal"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Automation card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: 40, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: EASE }}
        className="glass absolute right-0 top-0 w-[40%] rounded-2xl p-4 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]"
      >
        <motion.div {...float(0.9, 10)}>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-paper">
              <Workflow className="h-3.5 w-3.5" />
            </span>
            <p className="text-xs font-medium text-paper">Automation run</p>
          </div>
          {["Generate sheets", "Export IFC", "Sync to ACC", "Notify PM"].map((s, i) => (
            <div key={s} className="flex items-center justify-between py-1.5 text-[11px]">
              <span className="text-paper-2">{s}</span>
              <motion.span
                initial={reduce ? false : { scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + i * 0.25, type: "spring", stiffness: 300, damping: 18 }}
                className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300"
              >
                <CheckCircle2 className="h-3 w-3" />
              </motion.span>
            </div>
          ))}
          <p className="mt-2 font-mono text-[10px] text-mute-2">
            Saved <span className="text-signal">6h 40m</span> today
          </p>
        </motion.div>
      </motion.div>

      {/* Leads / CRM card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: EASE }}
        className="glass absolute bottom-0 right-[4%] w-[50%] rounded-2xl p-4 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]"
      >
        <motion.div {...float(1.6, 12)}>
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-paper">
                <Cpu className="h-3.5 w-3.5" />
              </span>
              <p className="text-xs font-medium text-paper">Pipeline this week</p>
            </div>
            <span className="font-mono text-[10px] text-emerald-300">+24%</span>
          </div>
          <div className="space-y-2">
            {[
              { n: "Al Marwan Contracting", s: "Qualified", w: 82 },
              { n: "Skyline Interiors", s: "Proposal", w: 64 },
              { n: "Fineline Studio", s: "Won", w: 100 },
            ].map((l, i) => (
              <div key={l.n}>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-paper-2">{l.n}</span>
                  <span className="text-mute-2">{l.s}</span>
                </div>
                <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.span
                    initial={reduce ? false : { width: 0 }}
                    animate={{ width: `${l.w}%` }}
                    transition={{ duration: 1.2, delay: 1.3 + i * 0.15, ease: EASE }}
                    className="block h-full rounded-full bg-gradient-to-r from-signal-deep to-signal"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Orbit ring */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line/60" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-line/60" />
    </div>
  )
}
