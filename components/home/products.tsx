"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, ArrowUpRight, Bell, Box, FileBox, Layers3, TrendingUp } from "lucide-react"
import { ownProducts, type OwnProduct } from "@/lib/content"
import { Section, SectionHeading } from "@/components/site/section"
import { Stagger, StaggerItem, TiltCard } from "@/components/site/motion"
import { FloorPlan, IsoBuilding, LandMap } from "@/components/home/product-visuals"
import { cn } from "@/lib/utils"

const EASE = [0.2, 0.8, 0.2, 1] as const

export function Products() {
  return (
    <Section id="our-products">
      <SectionHeading
        eyebrow="Our products"
        title={
          <>
            Software we ship under <span className="text-mute">our own name.</span>
          </>
        }
        description="We don't just build for clients. These are the tools we're putting into the hands of AEC teams — designed, built and run by Opencoders."
      />
      <Stagger className="grid gap-5 lg:grid-cols-3" stagger={0.1}>
        {ownProducts.map((p) => (
          <StaggerItem key={p.slug} className="group h-full">
            <TiltCard max={4} className="h-full rounded-[1.75rem]">
              <article className="card-surface card-hover noise relative flex h-full flex-col overflow-hidden rounded-[1.75rem]">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-ink">
                  <div className="blueprint-grid-fine absolute inset-0 opacity-70" aria-hidden />
                  <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-signal/10 blur-3xl transition-all duration-700 group-hover:bg-signal/25" aria-hidden />
                  <Visual slug={p.slug} />
                  <span
                    className={cn(
                      "absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] backdrop-blur",
                      p.status === "Live" ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300" : "border-line bg-ink/70 text-mute"
                    )}
                  >
                    <span className={cn("h-1.5 w-1.5 rounded-full", p.status === "Live" ? "bg-emerald-400" : "bg-mute-2")} />
                    {p.status}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="eyebrow">{p.kicker}</p>
                  <h3 className="mt-3 text-2xl font-medium tracking-tight text-paper">{p.name}</h3>
                  <p className="mt-1.5 text-base font-medium text-paper-2">{p.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-mute">{p.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.features.map((f) => (
                      <li key={f} className="rounded-full bg-white/[0.04] px-3 py-1 text-[11px] text-paper-2">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${p.name} at ${p.domain}`}
                      className="flex items-center justify-between gap-2 border-t border-line pt-5 text-sm font-medium text-paper-2 transition-colors hover:text-signal"
                    >
                      <span className="font-mono text-xs text-mute">{p.domain}</span>
                      <span className="inline-flex items-center gap-1">
                        Visit <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            </TiltCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}

/* ───────────────────────── Visuals ───────────────────────── */

function Visual({ slug }: { slug: OwnProduct["slug"] }) {
  if (slug === "opendesk") return <OpenDeskVisual />
  if (slug === "openland") return <OpenLandVisual />
  return <RoostlingVisual />
}

/* OpenDesk — a real floor plan draws itself, then the building rises from it */
function OpenDeskVisual() {
  const reduce = useReducedMotion()
  return (
    <div className="absolute inset-0">
      {/* drawing sheet */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="absolute bottom-[12%] left-[5%] top-[12%] w-[56%] rounded-lg border border-line bg-ink-2/80 p-2 shadow-2xl backdrop-blur-sm"
      >
        <div className="mb-1 flex items-center justify-between px-1 font-mono text-[8px] uppercase tracking-[0.16em] text-mute-2">
          <span>A-101 · Level 01</span>
          <span>1:100</span>
        </div>
        <FloorPlan className="h-[calc(100%-14px)] w-full" delay={0.2} />
      </motion.div>

      {/* arrow */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.8, duration: 0.5, ease: EASE }}
        className="absolute left-[58%] top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-signal/40 bg-ink text-signal shadow-[0_0_24px_rgba(255,90,31,0.35)]"
      >
        <ArrowRight className="h-3.5 w-3.5" />
      </motion.div>

      {/* building */}
      <IsoBuilding className="absolute bottom-[4%] right-[3%] top-[6%] h-[90%] w-[38%]" delay={1.4} />

      <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-line bg-ink/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-paper-2 backdrop-blur">
        <Layers3 className="h-3 w-3 text-signal" /> Revit sync
      </div>
    </div>
  )
}

/* OpenLand — a city map with the selected plot, price trend and rule chips */
function OpenLandVisual() {
  const reduce = useReducedMotion()
  return (
    <div className="absolute inset-0">
      <LandMap className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink via-ink/70 to-transparent" aria-hidden />

      {/* price card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0, duration: 0.6, ease: EASE }}
        className="absolute bottom-4 left-4 w-[46%] rounded-xl border border-line bg-ink/80 p-3 backdrop-blur"
      >
        <div className="flex items-center justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-mute">Price / cent</p>
          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-300">
            <TrendingUp className="h-3 w-3" /> +18%
          </span>
        </div>
        <svg viewBox="0 0 120 32" className="mt-1.5 h-7 w-full" fill="none">
          <motion.path
            d="M0 26 C 15 24, 25 20, 38 21 S 60 14, 72 12 S 95 10, 120 4"
            stroke="#ff5a1f"
            strokeWidth="1.8"
            strokeLinecap="round"
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 1.2, ease: EASE }}
          />
        </svg>
      </motion.div>

      {/* rule chips */}
      <div className="absolute bottom-4 right-4 flex w-[40%] flex-col items-end gap-1.5">
        {["FAR 2.5", "Setback 3 m", "Zone: Residential"].map((c, i) => (
          <motion.span
            key={c}
            initial={reduce ? false : { opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3 + i * 0.12, duration: 0.5 }}
            className="rounded-md border border-line bg-ink/80 px-2 py-1 text-[10px] text-paper-2 backdrop-blur"
          >
            {c}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

/* Roostling — taskbar companion with a popped card */
function RoostlingVisual() {
  const reduce = useReducedMotion()
  return (
    <div className="absolute inset-0">
      {/* popped card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 14, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
        className="absolute left-5 right-5 top-14 rounded-xl border border-line bg-ink-2/95 p-3 shadow-2xl"
      >
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-signal/15 text-signal">
            <FileBox className="h-3.5 w-3.5" />
          </span>
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mute">New in shared folder</p>
            <p className="truncate text-[12px] text-paper">PRJ-ABC-VL01-ZZ-ME-M3-0001.ifc</p>
            <p className="mt-0.5 text-[10px] text-emerald-300">ISO 19650 name ✓</p>
          </div>
        </div>
        <div className="mt-3 flex gap-1.5">
          {["Open", "Summary", "Convert → RVT/IFC"].map((b, i) => (
            <span key={b} className={cn("rounded-md px-2 py-1 text-[10px]", i === 0 ? "bg-signal text-white" : "border border-line text-paper-2")}>
              {b}
            </span>
          ))}
        </div>
      </motion.div>

      {/* reminder */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
        className="absolute bottom-[3.75rem] right-5 flex items-center gap-2 rounded-lg border border-line bg-ink/80 px-2.5 py-1.5 backdrop-blur"
      >
        <Bell className="h-3 w-3 text-signal" />
        <p className="text-[10px] text-paper-2">
          Duct clash · L3 grid C4 — <span className="text-mute">due today</span>
        </p>
      </motion.div>

      {/* taskbar */}
      <div className="absolute inset-x-0 bottom-0 flex h-11 items-center justify-between border-t border-line bg-ink-3/90 px-3 backdrop-blur">
        <div className="flex items-center gap-1.5">
          {["IFC", "RVT", "DWG", "BCF"].map((t) => (
            <span key={t} className="rounded border border-line px-1.5 py-0.5 font-mono text-[9px] text-mute">
              {t}
            </span>
          ))}
        </div>
        <motion.div
          animate={reduce ? undefined : { y: [0, -3, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-7 w-7 items-center justify-center rounded-md bg-signal text-white shadow-[0_0_18px_rgba(255,90,31,0.5)]"
        >
          <Box className="h-3.5 w-3.5" />
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border border-ink bg-emerald-400" />
        </motion.div>
      </div>
    </div>
  )
}
