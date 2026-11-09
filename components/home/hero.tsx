"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ArrowRight, Box, CheckCircle2, Layers3, MapPin, PenTool, Star, TrendingUp } from "lucide-react"
import { WordReveal } from "@/components/site/motion"
import { CTA } from "@/components/site/section"
import { site } from "@/lib/site"
import { ownProducts } from "@/lib/content"
import { FloorPlan, IsoBuilding, LandMap } from "@/components/home/product-visuals"

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

/* Floating composition of our own products — pure CSS/motion, no images */
function HeroVisual() {
  const reduce = useReducedMotion()
  const float = (delay: number, dist = 14) =>
    reduce
      ? {}
      : {
          animate: { y: [0, -dist, 0] },
          transition: { duration: 7 + delay, repeat: Infinity, ease: "easeInOut" as const, delay },
        }
  const [opendesk, openland, roostling] = ownProducts

  return (
    <div className="relative grid w-full grid-cols-2 gap-3 sm:gap-4 lg:[transform:perspective(1800px)_rotateY(-9deg)_rotateX(3deg)] lg:[transform-style:preserve-3d]">
      {/* OpenDesk — main card */}
      <motion.a
        href={opendesk.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${opendesk.name} — ${opendesk.tagline}`}
        initial={reduce ? false : { opacity: 0, y: 40, rotateX: 12 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
        className="glass noise group relative col-span-2 block rounded-3xl p-5 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)] transition-colors hover:border-signal/50"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div {...float(0.2, 6)}>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal/15 text-signal">
                <PenTool className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-medium text-paper">{opendesk.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-mute-2">{opendesk.domain}</p>
              </div>
            </div>
            <span className="whitespace-nowrap rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-signal">Vibe modeling</span>
          </div>

          <div className="grid grid-cols-[1.25fr_auto_1fr] items-center gap-2 rounded-xl border border-line bg-ink/60 p-3">
            {/* real plan */}
            <FloorPlan className="h-[112px] w-full" mode="mount" delay={0.9} />
            <motion.span
              initial={reduce ? false : { opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.4, duration: 0.5, ease: EASE }}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-signal/40 bg-ink-2 text-signal shadow-[0_0_18px_rgba(255,90,31,0.3)]"
            >
              <ArrowRight className="h-3.5 w-3.5" />
            </motion.span>
            {/* building */}
            <IsoBuilding className="h-[112px] w-full" mode="mount" delay={2.2} />
          </div>

          <div className="mt-3 flex items-center justify-between gap-3 text-[11px]">
            <span className="truncate text-paper-2">Drawing → design, automatically</span>
            <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-mute-2">
              <Layers3 className="h-3 w-3 text-signal" /> Revit
            </span>
          </div>
        </motion.div>
      </motion.a>

      {/* Roostling — top right */}
      <motion.a
        href={roostling.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${roostling.name} — ${roostling.tagline}`}
        initial={reduce ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: EASE }}
        className="glass relative flex flex-col rounded-2xl p-4 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] transition-colors hover:border-signal/50"
      >
        <motion.div {...float(0.9, 5)} className="flex h-full flex-col">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-paper">
                <Box className="h-3.5 w-3.5" />
              </span>
              <p className="text-xs font-medium text-paper">Roostling</p>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 font-mono text-[10px] text-emerald-300">LIVE</span>
          </div>
          <div className="rounded-lg border border-line bg-ink/60 p-2.5">
            <p className="font-mono text-[9px] uppercase tracking-wider text-mute-2">New in shared folder</p>
            <p className="mt-0.5 truncate text-[11px] text-paper">PRJ-ABC-VL01-ZZ-ME-M3-0001.ifc</p>
          </div>
          {["Open in viewer", "Convert RVT → IFC", "Add issues (BCF)"].map((s, i) => (
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
          <p className="mt-auto pt-2 font-mono text-[10px] text-mute-2">BIM assistant on your taskbar</p>
        </motion.div>
      </motion.a>

      {/* OpenLand — bottom right */}
      <motion.a
        href={openland.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${openland.name} — ${openland.tagline}`}
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: EASE }}
        className="glass relative flex flex-col rounded-2xl p-4 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] transition-colors hover:border-signal/50"
      >
        <motion.div {...float(1.6, 5)} className="flex h-full flex-col">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-paper">
                <MapPin className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-xs font-medium text-paper">OpenLand</p>
                <p className="font-mono text-[9px] uppercase tracking-wider text-mute-2">Land intelligence</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-300">
              <TrendingUp className="h-3 w-3" /> +18%
            </span>
          </div>
          <div className="relative h-[104px] overflow-hidden rounded-lg border border-line bg-ink/70">
            <LandMap className="absolute inset-0 h-full w-full" mode="mount" delay={1.2} />
            <div className="absolute bottom-1.5 right-1.5 flex flex-col items-end gap-1">
              {["FAR 2.5", "Setback 3 m", "Zone: Res."].map((c, i) => (
                <motion.span
                  key={c}
                  initial={reduce ? false : { opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.4 + i * 0.12, duration: 0.45 }}
                  className="rounded border border-line bg-ink/85 px-1.5 py-0.5 text-[9px] text-paper-2 backdrop-blur"
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-white/5">
            <motion.span
              initial={reduce ? false : { width: 0 }}
              animate={{ width: "72%" }}
              transition={{ duration: 1.2, delay: 1.5, ease: EASE }}
              className="block h-full rounded-full bg-gradient-to-r from-signal-deep to-signal"
            />
          </div>
          <p className="mt-auto pt-2 text-[10px] text-mute-2">Price trend · govt rules · zoning for any parcel</p>
        </motion.div>
      </motion.a>

      {/* glow */}
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-signal/[0.07] blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute inset-x-6 -bottom-10 -z-10 h-24 rounded-full bg-black/60 blur-2xl" aria-hidden />
    </div>
  )
}
