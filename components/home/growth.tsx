"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { services } from "@/lib/content"
import { Section, SectionHeading } from "@/components/site/section"
import { Reveal, Stagger, StaggerItem, TiltCard } from "@/components/site/motion"

const funnel = ["Ads", "Leads", "CRM", "Agents", "Retarget", "Revenue"]

export function Growth() {
  return (
    <Section id="growth">
      <SectionHeading
        eyebrow="Growth services"
        title={
          <>
            Traffic is cheap. <span className="text-mute">Conversion</span> is the product.
          </>
        }
        description="Automated paid media, influencer campaigns across the UAE and India, and real sales agents who follow up within minutes — connected to the same CRM so you see cost per closed deal, not cost per click."
        action={{ href: "/services", label: "See growth services" }}
      />

      <Stagger className="grid gap-5 md:grid-cols-3" stagger={0.1}>
        {services.map((s, i) => {
          const Icon = s.icon
          return (
            <StaggerItem key={s.slug} className="group h-full">
              <TiltCard className="h-full rounded-[1.75rem]">
                <Link href={`/services#${s.slug}`} className="card-surface card-hover noise relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-7 sm:p-8">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line-2 bg-ink-3 text-paper transition-colors duration-500 group-hover:border-signal group-hover:text-signal">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-mute">{s.tag}</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-medium leading-tight tracking-tight text-paper">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute sm:text-base">{s.short}</p>
                  <ul className="mt-6 space-y-2 border-t border-line pt-5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-paper-2">
                        <span className="h-1 w-1 rounded-full bg-signal" /> {b}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-1 pt-8 text-sm font-medium text-paper-2 group-hover:text-signal">
                    {String(i + 1).padStart(2, "0")} — Details{" "}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </TiltCard>
            </StaggerItem>
          )
        })}
      </Stagger>

      {/* Funnel */}
      <Reveal className="mt-14">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-ink-2/60 p-6 sm:p-8">
          <div className="blueprint-grid-fine absolute inset-0 opacity-60" aria-hidden />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-sm">
              <p className="eyebrow mb-3">The connected funnel</p>
              <p className="text-sm leading-relaxed text-mute">
                Every ad click lands in the CRM, every lead gets a human follow-up, every quiet lead gets retargeted. One dashboard, one number that matters.
              </p>
            </div>
            <ol className="flex flex-wrap items-center gap-2 sm:gap-3">
              {funnel.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <span
                    className={
                      i === funnel.length - 1
                        ? "rounded-full bg-signal px-4 py-2 text-sm font-medium text-white"
                        : "rounded-full border border-line-2 bg-ink px-4 py-2 text-sm text-paper-2"
                    }
                  >
                    {f}
                  </span>
                  {i < funnel.length - 1 && <ArrowRight className="h-4 w-4 text-mute-2" />}
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
