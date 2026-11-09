"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Check, RefreshCw } from "lucide-react"
import { products } from "@/lib/content"
import { Section, SectionHeading } from "@/components/site/section"

const accents = ["from-signal/25", "from-sky-500/20", "from-emerald-500/20", "from-fuchsia-500/20"]

export function Suite() {
  return (
    <Section id="suite" className="bg-ink-2/30">
      <SectionHeading
        eyebrow="Business suite"
        title={
          <>
            One connected system for leads, people, money <span className="text-mute">and</span> stock.
          </>
        }
        description="CRM, HRMS, Accounting and Omnichannel Commerce that share one database — so an offline sale updates stock and books instantly, and a signed deal becomes an invoice in one click."
        action={{ href: "/products", label: "Explore the suite" }}
      />

      <div className="relative">
        {products.map((p, i) => (
          <StackCard key={p.slug} p={p} i={i} total={products.length} />
        ))}
      </div>

      <SyncStrip />
    </Section>
  )
}

function StackCard({ p, i, total }: { p: (typeof products)[number]; i: number; total: number }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 18%", "end 18%"] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - 1 - i) * 0.04])
  const brightness = useTransform(scrollYProgress, [0, 1], [1, i === total - 1 ? 1 : 0.6])
  const filter = useTransform(brightness, (b) => `brightness(${b})`)
  const Icon = p.icon

  return (
    <div ref={ref} className="sticky mb-6" style={{ top: `calc(5.5rem + ${i * 1.25}rem)` }}>
      <motion.article
        style={reduce ? undefined : { scale, filter }}
        className="noise relative origin-top overflow-hidden rounded-[1.75rem] border border-line-2 bg-[#141416] p-7 shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.9)] sm:p-10"
      >
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accents[i % accents.length]} via-transparent to-transparent`} aria-hidden />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line-2 bg-ink-3 text-paper">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-signal">{p.tag}</span>
              <span className="ml-auto font-mono text-xs text-mute-2">
                {String(i + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-3xl font-medium leading-tight tracking-tight text-paper sm:text-4xl">{p.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-mute sm:text-lg">{p.description}</p>
            <Link href={`/products#${p.slug}`} className="group mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-paper-2 hover:text-signal">
              Product details <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <ul className="grid content-start gap-3 sm:grid-cols-2">
            {p.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-2xl border border-line bg-ink/40 p-4 text-sm text-paper-2">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </div>
  )
}

function SyncStrip() {
  const nodes = ["POS / Store", "Online Store", "Inventory", "Accounting", "CRM"]
  return (
    <div className="mt-16 overflow-hidden rounded-[1.75rem] border border-line bg-ink p-6 sm:mt-24 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <RefreshCw className="h-4 w-4 animate-spin text-signal [animation-duration:6s]" />
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">Offline + online stock, always in sync</p>
      </div>
      <div className="relative flex flex-wrap items-center justify-between gap-y-6 sm:flex-nowrap">
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px bg-line sm:block" aria-hidden>
          <motion.span
            className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-signal shadow-[0_0_12px_2px_rgba(255,90,31,0.7)]"
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
          />
        </div>
        {nodes.map((n) => (
          <div key={n} className="relative z-10 rounded-full border border-line-2 bg-ink-2 px-4 py-2 text-xs font-medium text-paper sm:px-5 sm:text-sm">
            {n}
          </div>
        ))}
      </div>
    </div>
  )
}
